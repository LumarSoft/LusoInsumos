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

    let query: string;

    //SI params.condition es igual "multimarcas" traer todos los productos menos los que en brand tengan "Apple"
    if (params.condition === "multimarcas") {
      query = `SELECT * FROM ${tableName} WHERE brand != 'apple'`;
    } else {
      query = `SELECT * FROM ${tableName} WHERE \`condition\` = ?`;
    }

    const [rows] = await pool.query(
      query,
      params.condition === "multimarcas" ? [] : [params.condition]
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
