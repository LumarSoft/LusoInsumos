// Query para traerme todos los celulares

import { pool } from "./dbConfig";

export const getAllTable = async (nameTable: string) => {
  const query = `SELECT * FROM ?`;

  const [rows] = await pool.query(query, [nameTable]);

  return rows;
};

export const getTableWhitFilters = async (
  nameTable: string,
  condition: string
) => {
  const query = `SELECT * FROM ?`;

  const [rows] = await pool.query(query, [nameTable]);

  // Filtrarlos por ej por iphones
  const result = (rows as Array<any>).filter((row) => row.brand === condition);

  // En caso que el filtro sea por multimarcas, crear un array con todas las marcas que hayan

  const brands = Array.from(
    new Set((rows as Array<any>).map((row) => row.brand))
  );

  return { result, brands };
};
