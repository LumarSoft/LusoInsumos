"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import {
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
  FirestoreDataConverter,
} from "firebase/firestore";
import { CardProduct } from "../CardProducts/CardProducts";

interface IProduct {
  title: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  color: string;
}

type SortOrder = "asc" | "desc" | "none";

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
    } as IProduct;
  },
};

export const GridProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>("none");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot: QuerySnapshot<IProduct> = await getDocs(
          collection(db, "celulares").withConverter(productConverter)
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
  }, [sortOrder]);

  const handleChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const order = event.target.value as SortOrder;
    setSortOrder(order);
  };

  return (
    <div className="mt-4 w-full h-full">
      <div className="mb-4 flex items-center">
        <label className="mr-2">Ordenar por precio:</label>
        <select
          value={sortOrder}
          onChange={handleChangeSort}
          className="p-2 border rounded-md cursor-pointer"
        >
          <option value="none" className="bg-gray-100 hover:bg-gray-2003">
            Novedades
          </option>
          <option
            value="asc"
            className="px-2 py-2 bg-gray-100 hover:bg-gray-200"
          >
            Menor a Mayor
          </option>
          <option value="desc" className="bg-gray-100 hover:bg-gray-200">
            Mayor a Menor
          </option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <CardProduct
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            stock={product.stock}
            color={product.color}
          />
        ))}
      </div>
    </div>
  );
};
