'use client'
import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { CardProduct } from "../CardProducts/CardProducts";

interface IProduct {
  title: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  color: string;
}

export const GridProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "celulares-apple"));
        const productsData: IProduct[] = [];

        querySnapshot.forEach((doc) => {
          const product = doc.data() as IProduct;
          productsData.push(product);
        });

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mt-4 w-full h-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
  );
};
