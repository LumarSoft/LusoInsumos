import { pool } from "@/services/mysql/dbConfig";
import { getValidTableName } from "@/shared/utils/getValidTableName";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
  const { params } = context;

  try {
    const tableName = getValidTableName(params.nameTable);
    if (!tableName) {
      return NextResponse.json(
        { message: "Invalid table name" },
        { status: 400 }
      );
    }

    let query = "";
    const condition = params.condition;

    if (tableName === 'celulares_usados' || tableName === 'celulares_nuevos') {
      if (condition === 'multimarcas') {
        query = `SELECT * FROM ${tableName} WHERE brand != 'apple'`;
      } else if (condition === 'apple') {
        query = `SELECT * FROM ${tableName} WHERE brand = 'apple'`;
      } else {
        return NextResponse.json(
          { message: "Invalid condition" },
          { status: 400 }
        );
      }
    } else {
      query = `SELECT * FROM ${tableName} WHERE brand = ?`;
    }

    const [rows] = await pool.query(query, [condition]);

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
