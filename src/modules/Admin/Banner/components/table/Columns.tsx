"use client";

import { IBanners } from "@/shared/types/IBanner";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteBannerDialog } from "../DeleteBannerDialog";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<IBanners>[] = [
  {
    accessorKey: "url",
    header: "Image",
    cell: ({ row }) => {
      return (
        <img src={row.original.url} className="h-12" alt={row.original.alt} />
      );
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "alt",
    header: "Alt",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <DeleteBannerDialog url={row.original.url} />;
    },
  },
];
