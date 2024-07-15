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
    <div className="rounded-lg border border-zinc-300 overflow-hidden flex flex-col hover:shadow-lg hover:border-zinc-100 transition-all duration-300">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-grow">
        <h3 className="text-center text-sm sm:text-base font-bold text-black mb-1 sm:mb-2 truncate">
          {product.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 flex-grow line-clamp-2">
          {product.description}
        </p>
        <hr className="my-1 sm:my-2" />
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-between mt-1 sm:mt-2 gap-1">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 w-full sm:w-auto text-center">
            <div className="grid gap-0.5">
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Stock
              </p>
              <p className="text-sm sm:text-base font-semibold text-black">
                {product.stock}
              </p>
            </div>
            {product.color && (
              <div className="grid gap-0.5">
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Color
                </p>
                <p className="text-sm sm:text-base font-semibold text-black">
                  {product.color}
                </p>
              </div>
            )}
          </div>
          <div className="grid gap-0.5 mt-2 sm:mt-0">
            <p className="text-xs sm:text-sm font-medium text-gray-600">
              Precio
            </p>
            <p className="text-sm sm:text-base font-semibold text-black">
              ${product.price}
            </p>
          </div>
        </div>
        <button
          className="mt-2 sm:mt-3 w-full bg-black rounded-md py-1 sm:py-1.5 text-white text-xs sm:text-sm font-semibold hover:bg-zinc-700 transition duration-300 ease-in-out"
          onClick={handleAddToCart}
        >
          Agregar a carrito
        </button>
      </div>
    </div>
  );
};
