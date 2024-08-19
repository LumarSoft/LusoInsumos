import { pool } from "@/services/mysql/dbConfig";
import { NextResponse } from "next/server";

export async function GET(req: any, context: any) {
  const { params } = context;

  try {
    const query = `SELECT DISTINCT NOMBRE FROM SUB_CATEGORIAS WHERE NOMBRE_CATEGORIA_MAIN = '${params.nametable}'`;

    const [rows] = await pool.query(query);

    return NextResponse.json(rows);
  } catch (error: any) {
    console.log(error);
  }
}
