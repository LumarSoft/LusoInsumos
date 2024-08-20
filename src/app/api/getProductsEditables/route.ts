import { pool } from "@/services/mysql/dbConfig";
import { categories } from "@/shared/constant/categories";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  try {
    const nameTables = categories;
    let editableProducts: any[] = [];

    for (const tableName of nameTables) {
      const query = `SELECT *,'${tableName}' as tableName FROM \`${tableName}\` WHERE editable = 1`;
      const [rows] = await pool.query(query);
      editableProducts = [
        ...editableProducts,
        ...(Array.isArray(rows) ? rows : []),
      ];
    }

    // Desactivar caché
    const response = NextResponse.json(editableProducts);
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
