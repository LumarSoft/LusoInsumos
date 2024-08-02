"use client";
import React, { useEffect, useState } from "react";
import { CardProduct } from "../CardProducts/CardProducts";
import { FilterButtons } from "../FilterButtons/FilterButtons";
import { IProduct } from "@/shared/types/IProduct";
import { FramerComponent } from "../Framer/FramerComponent";

export const GridProducts = ({
  products,
  brands,
  category,
}: {
  products: IProduct[];
  brands: string[];
  category: string;
}) => {
  const [sortOrder, setSortOrder] = useState("Novedades");
  const [selectedBrand, setSelectedBrand] = useState("Todos");
  const [arrayProducts, setArrayProducts] = useState(products);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
        viewport: { once: true, offset: 0.4 },
      },
    },
  };

  useEffect(() => {
    let array = [...products];

    if (sortOrder === "Menor") {
      array.sort((a, b) => {
        if (a.price && b.price) {
          return Number(a.price) - Number(b.price);
        }
        return 0;
      });
    } else if (sortOrder === "Mayor") {
      array.sort((a, b) => {
        if (a.price && b.price) {
          return Number(b.price) - Number(a.price);
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
      {/* Aca estaria la opcion de poner como titulo lo que estas buscando en cuestion con {category} */}

      <FilterButtons
        category={category}
        brands={brands}
        setSortOrder={setSortOrder}
        setSelectedBrand={setSelectedBrand}
      />
      <FramerComponent
        style="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 p-2 sm:p-4"
        animationVariants={container}
        animationInitial="hidden"
        animationWhileInView="show"
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        {arrayProducts.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </FramerComponent>
    </div>
  );
};
