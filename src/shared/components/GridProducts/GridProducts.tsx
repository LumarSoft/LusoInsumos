"use client";
import React, { useEffect, useState } from "react";
import BrandsFilter from "../BrandFilter/BrandFilter";
import { IProduct } from "@/shared/type/IProduct";
import { SortOrder } from "@/shared/type/SortOrder";
import { CardProduct } from "../CardProducts/CardProducts";
export const GridProducts = ({ products }: { products: IProduct[] }) => {
  const [sortOrder, setSortOrder] = useState("none");
  const [selectedBrand, setSelectedBrand] = useState("Todos");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSortOrderChange = (order: SortOrder) => {
    setSortOrder(order);
    setDropdownOpen(false);
  };
  const [arrayProducts, setArrayProducts] = useState(products);
  useEffect(() => {
    if (sortOrder === "none") {
      setArrayProducts(products);
    } else {
      const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      setArrayProducts(sortedProducts);
    }
  }, [sortOrder, products]);
  return (
    <div className="mt-4 w-full h-full">
      <div className="mb-4 flex items-center space-x-4 justify-end max-md:justify-center">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            <img src="./sortLogo.png" alt="" className="w-5 mr-2" />
            {sortOrder === "none"
              ? "Más relevante"
              : sortOrder === "asc"
              ? "Menor a Mayor"
              : "Mayor a Menor"}
          </button>
          {dropdownOpen && (
            <div className="absolute max-sm:left-3 right-0 mt-2 max-sm:w-32 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu">
                <button
                  onClick={() => handleSortOrderChange("none")}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Más relevante
                </button>
                <button
                  onClick={() => handleSortOrderChange("asc")}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Menor a Mayor
                </button>
                <button
                  onClick={() => handleSortOrderChange("desc")}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Mayor a Menor
                </button>
              </div>
            </div>
          )}
        </div>
        <BrandsFilter setSelectedBrand={setSelectedBrand} />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-md:place-items-center">
        {arrayProducts.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
