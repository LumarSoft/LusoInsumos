"use client";
import React, { useEffect, useState } from "react";
import { CardProduct } from "../CardProducts/CardProducts";
import { IBrands } from "@/shared/type/IBrands";
import { FilterButtons } from "../FilterButtons/FilterButtons";
import { ProductType } from "@/shared/type/ProductTypes";

export const GridProducts = ({
  products,
  brands,
}: {
  products: ProductType[];
  brands: IBrands[];
}) => {
  const [sortOrder, setSortOrder] = useState("Novedades");
  const [selectedBrand, setSelectedBrand] = useState("Todos");
  const [arrayProducts, setArrayProducts] = useState(products);

  useEffect(() => {
    let array = [...products];

    if (sortOrder === "Menor") {
      array.sort((a, b) => {
        if (a.price && b.price) {
          return a.price - b.price;
        }
        return 0;
      });
    } else if (sortOrder === "Mayor") {
      array.sort((a, b) => {
        if (a.price && b.price) {
          return b.price - a.price;
        }
        return 0;
      });
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 p-2 sm:p-4">
        {arrayProducts.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
