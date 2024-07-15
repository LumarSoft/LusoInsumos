import React from "react";
import { ProductType } from "@/shared/type/ProductTypes";
import { cartStore } from "@/shared/stores/CartStore";
import { toast } from "react-toastify";

export const CardProduct = ({ product }: { product: ProductType }) => {
  const addToCart = cartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      title: product.title || "",
      price: product.price || 0,
      image: product.image || "",
      cant: 1,
    });
    toast.success("Producto agregado al carrito", {
      position: "top-center",
      autoClose: 2000,
    });
  };
  return (
    <div className="rounded-lg border border-zinc-300 py-3 overflow-hidden w-full max-w-md flex flex-col hover:shadow-lg hover:border-zinc-100">
      <div>
        <img
          src={product.image}
          alt="Product Image"
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-center text-lg font-bold text-black">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm font-semibold text-center mt-2 flex-grow">
          {product.description}
        </p>
        <hr className="mt-2" />
        <div className="flex items-center justify-between mt-4">
          <div className="grid gap-1">
            <p className="text-sm font-medium text-gray-600">Precio</p>
            <p className="text-lg font-semibold text-black">${product.price}</p>
          </div>
          <div className="grid gap-1">
            <p className="text-sm font-medium text-gray-600">Stock</p>
            <p className="text-lg font-semibold text-black">{product.stock}</p>
          </div>
          <div className="grid gap-1">
            <p className="text-sm font-medium text-gray-600">Color</p>
            <p className="text-lg font-semibold text-black">{product.color}</p>
          </div>
        </div>
        <button
          className="mt-4 w-full bg-black rounded-md py-1.5 text-white font-semibold hover:bg-zinc-700 transition duration-300 ease-in-out"
          onClick={handleAddToCart}
        >
          Agregar a carrito
        </button>
      </div>
    </div>
  );
};
