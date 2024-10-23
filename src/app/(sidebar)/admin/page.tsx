"use client";
import AdminModule from "@/modules/Admin/home";
import { fetchData } from "@/services/request";
import { IProductManual } from "@/shared/types/IProductManual";
import { useEffect, useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchs = async () => {
      const products = await fetchData("getProductsEditables");
      setProducts(products);
    };

    fetchs();
  }, []);

  return <AdminModule products={products as IProductManual[]} />;
}
