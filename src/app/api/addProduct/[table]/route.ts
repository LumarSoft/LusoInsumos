import { pool } from "@/services/mysql/dbConfig";
import { NextResponse } from "next/server";

export async function POST(req: Request, context: any) {
  try {
    const formData = await req.formData();
    const body = Object.fromEntries(formData.entries());

    const tableName = context.params.table;


    // Preparar los datos para la inserción
    const { id, title, brand, description, price, currency, stock, image } =
      body;

    // Crear la consulta de inserción
    const query = `INSERT INTO \`${tableName}\` (id, title, brand, description, price, currency,stock, image,editable) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)`;

    // Ejecutar la consulta
    await pool.query(query, [
      id,
      title,
      brand,
      description,
      price,
      currency,
      stock,
      image,
      true,
    ]);

    return NextResponse.json({
      message: "Product added",
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
