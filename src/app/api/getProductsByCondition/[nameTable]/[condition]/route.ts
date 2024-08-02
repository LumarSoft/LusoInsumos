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

    //En caso que params.nameTable sea celulares_usados o celulares_nuevos. Se debe tener en cuenta que tiene params.condition. Si params.conditions === "multimaras" traer todos los celulares menos los que brand === "apple"
    if (
      params.nameTable === "celulares_usados" ||
      params.nameTable === "celulares_nuevos"
    ) {
      query = `SELECT * FROM ${tableName} WHERE brand ${
        params.condition === "multimarcas" ? "!=" : "="
      } ?`;
    } else {
      query = `SELECT * FROM ${tableName} WHERE brand = ?`;
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
