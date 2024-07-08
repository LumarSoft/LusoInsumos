"use client";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/shared/type/IProduct";
import { CardProduct } from "../CardProducts/CardProducts";
import { IBrands } from "@/shared/type/IBrands";
import { FilterButtons } from "../FilterButtons/FilterButtons";

export const GridProducts = ({
  products,
  brands,
}: {
  products: IProduct[];
  brands: IBrands[];
}) => {
  const [sortOrder, setSortOrder] = useState("Novedades");
  const [selectedBrand, setSelectedBrand] = useState("Todos");
  const [arrayProducts, setArrayProducts] = useState(products);

  useEffect(() => {
    let array = [...products];

    if (sortOrder === "Menor") {
      array.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "Mayor") {
      array.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "Novedades") {
      array = [...products];
    }

    if (selectedBrand !== "Todos") {
      array = array.filter((product) => product.brand === selectedBrand);
    }

    setArrayProducts(array);
  }, [sortOrder, selectedBrand, products]);

  return (
    <div className="mt-4 w-full h-full">
      <FilterButtons
        brands={brands}
        setSortOrder={setSortOrder}
        setSelectedBrand={setSelectedBrand}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-md:place-items-center">
        {arrayProducts.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
