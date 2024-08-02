"use client";
import { DataTable } from "./components/table/DataTable";
import { columns } from "./components/table/Columns";
import { useEffect, useState } from "react";
import { fetchData } from "@/services/request";

const AdminModule = () => {
  const [productsEditables, setProductsEditables] = useState([]);

  useEffect(() => {
    const fetchs = async () => {
      try {
        const products = await fetchData("getProductsEditables");
        setProductsEditables(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchs();
  }, []);

  return (
    <main className="py-10 px-20">
      <h4 className="text-4xl font-semibold text-center">
        Productos editables
      </h4>
      <p className="text-center">
        Es posible que debas recargar la pagina para ver los cambios
      </p>
      <DataTable columns={columns} data={productsEditables || []} />
    </main>
  );
};

export default AdminModule;
