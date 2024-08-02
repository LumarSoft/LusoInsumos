"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DeleteProductDialog } from "../DeleteDialog";
import { IProductManual } from "@/shared/types/IProductManual";


export const columns: ColumnDef<IProductManual>[] = [
  {
    header: "Titulo",
    accessorKey: "title",
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
    cell: (row) => {
      return (
        <img src={row.row.original.image} className="w-32" alt="product" />
      );
    },
  },
  {
    header: "editable",
    accessorKey: "editable",
    cell: (row) => {
      return row.row.original.editable ? "Si" : "No";
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <DeleteProductDialog product={row.original} />;
    },
  },
];
