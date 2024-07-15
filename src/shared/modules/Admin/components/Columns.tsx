"use client";

import { ColumnDef } from "@tanstack/react-table";

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string;
}


export const columns: ColumnDef<Product>[] = [
 
    {
        header: "Nombre",
        accessorKey: "name",
    },
    {
        header: "Precio",
        accessorKey: "price",
    },
    {
        header: "Stock",
        accessorKey: "stock",
    },
    {
        header: "Descripción",
        accessorKey: "description",
    },
    {
        header: "Imagen",
        accessorKey: "image",
    },
];
