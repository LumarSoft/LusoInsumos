"use client";

import { ColumnDef } from "@tanstack/react-table";

interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    description: string;
    image: string;
    editable: Number
}


export const columns: ColumnDef<Product>[] = [

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
            return <img src={row.row.original.image} className="w-32" alt="product" />;
        }
    },
    {
        header: "editable",
        accessorKey: "editable",
        cell: (row) => {
            return row.row.original.editable ? "Si" : "No";
        }
    }
];
