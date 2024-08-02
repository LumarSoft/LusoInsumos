import { uploadFile } from "@/services/firebase/storage/storage";
import { pool } from "./dbConfig";
import { ProductType } from "@/shared/types/IProduct";
import { getValidTableName } from "@/shared/utils/getValidTableName";

// Mapa de nombres de tablas permitidos y sus respectivos nombres en la base de datos

// Función para obtener el nombre de la tabla válido

export const getAllTable = async (
  nameTable: string
): Promise<ProductType[]> => {
  const tableName = getValidTableName(nameTable);

  if (!tableName) {
    throw new Error("Invalid table name");
  }

  const query = `SELECT * FROM \`${tableName}\``;

  const [rows] = await pool.query(query);
  return rows as ProductType[];
};

export const get10Products = async (
  nameTable: string
): Promise<ProductType[]> => {
  const tableName = getValidTableName(nameTable);

  if (!tableName) {
    throw new Error("Invalid table name");
  }

  const query = `SELECT * FROM \`${tableName}\` LIMIT 10`;

  const [rows] = await pool.query(query);
  return rows as ProductType[];
};

export const getTableWithFilters = async (
  nameTable: string,
  condition: string
): Promise<{ result: ProductType[]; brands: string[] }> => {
  const tableName = getValidTableName(nameTable);

  if (!tableName) {
    throw new Error("Invalid table name");
  }

  const query = `SELECT * FROM \`${tableName}\``;

  const [rows] = await pool.query(query);
  const products = rows as ProductType[];

  // Filtrar por condición, por ejemplo, por marca
  const result = products.filter((product) => product.brand === condition);

  // Crear un array con todas las marcas presentes en los resultados
  const brands = Array.from(
    new Set(products.map((product) => product.brand))
  ).filter((brand) => brand !== undefined);

  return { result, brands };
};

export const getProductsByCondition = async (
  collectionName: string,
  condition: string
): Promise<ProductType[]> => {
  const tableName = getValidTableName(collectionName);

  if (!tableName) {
    throw new Error("Invalid table name");
  }

  let query: string;
  if (condition === "multimarcas") {
    // Si es multimarcas, traer todos los productos menos los que tienen la marca 'apple'
    query = `SELECT * FROM \`${tableName}\` WHERE brand != 'apple'`;
  } else {
    // Filtrar por una marca específica
    query = `SELECT * FROM \`${tableName}\` WHERE brand = ?`;
  }

  const [rows] = await pool.query(query, [condition]);
  return rows as ProductType[];
};

interface ProductData {
  title: string;
  brand: string;
  description: string;
  price: string;
  image: File; // Cambiado a File para manejar archivos de imagen
}

export const addProducts = async (nameTable: string, data: ProductData) => {
  const tableName = getValidTableName(nameTable);
  if (!tableName) {
    throw new Error("Invalid table name");
  }

  try {
    // Subir la imagen a Firebase Storage y obtener la URL
    const imageUrl = await uploadFile(data.image);

    // Construir el query de inserción
    const query = `
      INSERT INTO \`${tableName}\` (title, brand, description, price, image, editable)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    // Ejecutar el query con los valores de los datos del producto
    await pool.query(query, [
      data.title,
      data.brand,
      data.description,
      parseFloat(data.price),
      imageUrl,
      1, // Asumiendo que 'editable' es 1 por defecto
    ]);

    return true; // Indicar que la inserción fue exitosa
  } catch (error) {
    console.error("Error al insertar producto:", error);
    return false; // Indicar que hubo un error
  }
};
