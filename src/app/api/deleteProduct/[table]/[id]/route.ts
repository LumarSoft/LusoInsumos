import { pool } from "@/services/mysql/dbConfig";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, context: any) {
  try {
    const { table, id } = context.params;

    const query = `DELETE FROM \`${table}\` WHERE id = ?`;

    await pool.query(query, [id]);

    return NextResponse.json({
      message: "Product deleted",
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
