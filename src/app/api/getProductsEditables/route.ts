import { pool } from "@/services/mysql/dbConfig";
import { categories } from "@/shared/constant/categories";
import { NextResponse } from "next/server";

export async function GET() {
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

    return NextResponse.json(editableProducts);
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
