import { pool } from "@/services/mysql/dbConfig";
import { getValidTableName } from "@/shared/utils/getValidTableName";
import { NextResponse } from "next/server";

export async function GET(req: any, context: any) {
  const { params } = context;

  try {
    const tableName = getValidTableName(params.table);
    if (!tableName) {
      return NextResponse.json(
        { message: "Invalid table name" },
        { status: 400 }
      );
    }

    const query = `SELECT * FROM \`${tableName}\``;

    const [rows] = await pool.query(query);

    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching data", error: error.message },
      { status: 500 }
    );
  }
}
