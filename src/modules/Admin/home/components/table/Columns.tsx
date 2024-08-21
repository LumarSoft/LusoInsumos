"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DeleteProductDialog } from "../DeleteDialog";
import { IProductManual } from "@/shared/types/IProductManual";
import { UpdateDialog } from "../UpdateDialog";

export const columns: ColumnDef<IProductManual>[] = [
  {
    header: "Titulo",
    accessorKey: "title",
  },
  {
    header: "Precio",
    accessorKey: "price",
    cell: (row) => {
      return (
        <>
          {row.row.original.currency} {row.row.original.price}
        </>
      );
    },
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
    header: "categoria",
    accessorKey: "tableName",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <UpdateDialog product={row.original} />
          <DeleteProductDialog product={row.original} />
        </div>
      );
    },
  },
];
