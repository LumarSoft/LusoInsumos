import React from "react";
import { ProductType } from "@/shared/type/ProductTypes";
import { cartStore } from "@/shared/stores/CartStore";
import { toast } from "react-toastify";
import { FramerComponent } from "../Framer/FramerComponent";

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

  const itemAnimado = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <FramerComponent
      style="rounded-lg border border-zinc-300 overflow-hidden flex flex-col hover:shadow-lg hover:border-zinc-100 transition-all duration-300 w-full max-w-lg"
      animationInitial={{ opacity: 0 }}
      animationVariants={itemAnimado}
    >
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
        {product.color && (
          <div className="text-center">
            <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-background text-black">
              {product.color}
            </div>
          </div>
        )}
        <p className="text-gray-600 font-semibold text-xs sm:text-base text-center mb-2 mt-3 flex-grow line-clamp-2">
          {product.description}
        </p>

        <hr className="my-1 sm:my-2" />
        <div className="flex items-center justify-around">
          <div className="text-lg font-bold">${product.price}</div>
        </div>

        <button
          className="mt-2 sm:mt-3 w-full bg-black rounded-md py-2 sm:py-2 text-white text-xs sm:text-sm font-semibold hover:bg-zinc-700 transition duration-300 ease-in-out"
          onClick={handleAddToCart}
        >
          Agregar a carrito
        </button>

        <div className="mt-2 text-sm text-muted-foreground text-center">
          En Stock: <b>{product.stock}</b>
        </div>
      </div>
    </FramerComponent>
  );
};
