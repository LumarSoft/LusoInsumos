// Necesito una funcion que recibiendo un parametro, valide si esta en la constante Categories

import { categories } from "../constant/categories";

export const getValidTableName = (nameTable: string): string | undefined => {
  if (categories.includes(nameTable)) {
    return nameTable;
  }
  return undefined;
};
