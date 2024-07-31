import { enableCors, pool } from "@/services/mysql/dbConfig";
import { getValidTableName } from "@/shared/utils/getValidTableName";
import { NextResponse } from "next/server";

export async function POST(req: Request, context: any) {
  try {
    // Asegúrate de que `req` tenga el tipo adecuado para acceder a `formData()`
    const formData = await req.formData();
    const body = Object.fromEntries(formData.entries());
    const { params } = context;

    const tableName = getValidTableName(params.table);
    if (!tableName) {
      return NextResponse.json(
        {
          message: "Invalid table name",
        },
        { status: 400 }
      );
    }

    // const query = `INSERT INTO \`${tableName}\` SET ?`;
    // await pool.query(query, body);

    return NextResponse.json({
      message: "Product added",
    });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
