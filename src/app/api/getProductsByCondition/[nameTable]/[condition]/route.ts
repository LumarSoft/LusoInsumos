import { enableCors, pool } from "@/services/mysql/dbConfig";
import { getValidTableName } from "@/shared/utils/getValidTableName";
import { NextResponse } from "next/server";

export async function GET(req: any, context: any) {
  const { params } = context;

  console.log(params);

  try {
    const tableName = getValidTableName(params.nameTable);
    if (!tableName) {
      return {
        status: 400,
        body: {
          message: "Invalid table name",
        },
      };
    }

    let query: string;

    if (params.condition === "multimarcas") {
      query = `SELECT * FROM \`${tableName}\` WHERE brand != 'multimarcas'`;
    } else {
      query = `SELECT * FROM \`${tableName}\` WHERE brand = '${params.condition}'`;
    }

    const [rows] = await pool.query(query);

    let response = NextResponse.json(rows);

    return enableCors(response);
  } catch (error) {}
}
