import React from "react";
import { IProduct } from "@/shared/types/IProduct";
import { cartStore } from "@/shared/stores/CartStore";
import { toast } from "react-toastify";
import { formatPrice } from "@/shared/utils/formatPrice";

export const CardProduct = ({ product }: { product: IProduct }) => {
  const addToCart = cartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      title: product.title || "",
      price: product.price || "0",
      image: product.image || "",
      cant: 1,
      currency: product.currency || "ARS",
    });
    toast.success("Producto agregado al carrito", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="border border-zinc-200 rounded-md flex flex-col h-full py-2 px-1 sm:px-2">
      <div className="aspect-w-1 aspect-h-1 mb-2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-center text-xs sm:text-sm font-bold text-black mb-1 line-clamp-2 min-h-[2.5em]">
          {product.title}
        </h3>
        {product.color && (
          <div className="text-center mb-1">
            <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-1.5 py-0.5 text-xs font-semibold bg-background text-black">
              {product.color}
            </div>
          </div>
        )}
        {/* <p className="text-gray-600 font-semibold text-xs text-center mb-1 line-clamp-2 min-h-[2em]">
          {product.description}
        </p> */}

        <div className="mt-auto">
          <hr className="my-1" />
          <div className="flex items-center justify-around mb-1">
            <div className="text-xs sm:text-base font-bold">
              {product.currency} {product.price === "0.0" ? "" : "$"}{" "}
              {formatPrice(product.price ?? "")}
            </div>
          </div>

          <button
            className="w-full bg-black rounded-md py-1 text-white text-xs sm:text-sm font-semibold hover:bg-zinc-700 transition duration-300 ease-in-out"
            onClick={handleAddToCart}
          >
            Agregar
          </button>

          <div className="mt-1 text-xs text-muted-foreground text-center">
            Stock: <b>{product.stock}</b>
          </div>
        </div>
      </div>
    </div>
  );
};
