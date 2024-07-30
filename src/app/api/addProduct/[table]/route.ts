import { enableCors, pool } from "@/services/mysql/dbConfig";
import { getValidTableName } from "@/shared/utils/getValidTableName";
import { NextResponse } from "next/server";

export async function POST(req: any, context: any) {
  const { body } = req.FormData();
  const { params } = context;

  console.log("Body de la petición:", body);
  console.log(params.table);

  try {
    const tableName = getValidTableName(params.table);
    if (!tableName) {
      return {
        status: 400,
        body: {
          message: "Invalid table name",
        },
      };
    }

    // const query = `INSERT INTO \`${tableName}\` SET ?`;

    // await pool.query(query, body);

    // let response = NextResponse.json({
    //   message: "Product added",
    // });

    // return enableCors(response);
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
  }
}
