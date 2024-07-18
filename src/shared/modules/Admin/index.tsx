"use client";
import { getAllProductsEditables } from "@/firebase/firestore/firestore";
import { useEffect } from "react";
import { DataTable } from "./components/DataTable";
import { columns } from "./components/Columns";

const AdminModule = () => {
  useEffect(() => {
    const fetchData = async () => {
      const productsEditables = await getAllProductsEditables();
      console.log(productsEditables);
    };
    fetchData();
  }, []);

  return (
    <main className="py-10 px-20">
      <h4 className="text-4xl font-semibold text-center">
        Productos editables
      </h4>
      <DataTable columns={columns} data={[]}/>
    </main>
  );
};

export default AdminModule;
