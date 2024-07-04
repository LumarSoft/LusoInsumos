"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import {
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
  FirestoreDataConverter,
  query,
  where,
  CollectionReference,
  Query,
} from "firebase/firestore";
import { CardProduct } from "../CardProducts/CardProducts";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import { IProduct } from "@/shared/type/IProduct";
import { SortOrder } from "@/shared/type/SortOrder";

const productConverter: FirestoreDataConverter<IProduct> = {
  toFirestore: (product: IProduct) => ({ ...product }),
  fromFirestore: (snapshot: DocumentData) => {
    const data = snapshot.data();
    return {
      title: data.title,
      description: data.description,
      image: data.image,
      price: data.price,
      stock: data.stock,
      color: data.color,
      brand: data.brand,
      category: data.category,
    } as IProduct;
  },
};

export const GridProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>("none");
  const [selectedBrand, setSelectedBrand] = useState<string>("Todos");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productsQuery: CollectionReference<IProduct> | Query<IProduct> =
          collection(db, "celulares").withConverter(productConverter);

        if (selectedBrand !== "Todos") {
          productsQuery = query(
            productsQuery,
            where("brand", "==", selectedBrand)
          );
        }

        const querySnapshot: QuerySnapshot<IProduct> = await getDocs(
          productsQuery
        );

        const productsData: IProduct[] = [];

        querySnapshot.forEach((doc) => {
          const product = doc.data();
          productsData.push(product);
        });

        if (sortOrder !== "none") {
          productsData.sort((a, b) =>
            sortOrder === "asc" ? a.price - b.price : b.price - a.price
          );
        }

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [sortOrder, selectedBrand]);

  const handleSortOrderChange = (order: SortOrder) => {
    setSortOrder(order);
    setDropdownOpen(false);
  };

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
              <div
                className="py-1"
                role="menu"
              >
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
        <CategoryFilter
          selectedBrand={selectedBrand}
          onSelectBrand={setSelectedBrand}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-md:place-items-center">
        {products.map((product, index) => (
          <CardProduct
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            stock={product.stock}
            color={product.color}
            brand={product.brand}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};
