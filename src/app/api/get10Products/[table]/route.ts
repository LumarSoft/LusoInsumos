import {  pool } from "@/services/mysql/dbConfig";
import { getValidTableName } from "@/shared/utils/getValidTableName";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
  const { params } = context;

  try {
    const tableName = getValidTableName(params.table);
    if (!tableName) {
      return NextResponse.json(
        { message: "Invalid table name" },
        { status: 400 }
      );
    }

    const query = `SELECT * FROM \`${tableName}\` LIMIT 10`;

    const [rows] = await pool.query(query);

    // No necesitas `enableCors` aquí si ya estás manejando CORS en otro lugar
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
