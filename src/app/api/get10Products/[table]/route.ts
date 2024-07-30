import { enableCors, pool } from "@/services/mysql/dbConfig";
import { getValidTableName } from "@/shared/utils/getValidTableName";
import { NextResponse } from "next/server";

export async function GET(req: any, context: any) {
  const { params } = context;

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

    const query = `SELECT * FROM \`${tableName}\` LIMIT 10`;

    const [rows] = await pool.query(query);

    let response = NextResponse.json(rows);

    return enableCors(response);
  } catch (error) {}
}
