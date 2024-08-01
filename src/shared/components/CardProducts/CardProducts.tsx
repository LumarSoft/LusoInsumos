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

  const formatPrice = (price: number) => {
    // Convertir el número a una cadena sin decimales
    const priceStr = Math.floor(price).toString();
  
    // Usar una expresión regular para colocar los puntos cada tres dígitos
    return priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };


  return (
    <div className="border border-zinc-200 rounded-md flex flex-col h-[500px] py-2">
      <div className="aspect-w-4 aspect-h-3 h-52">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-center text-base font-bold text-black mb-2 line-clamp-2 h-12">
          {product.title}
        </h3>
        {product.color && (
          <div className="text-center mb-2">
            <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-background text-black">
              {product.color}
            </div>
          </div>
        )}
        <p className="text-gray-600 font-semibold text-sm text-center mb-2 flex-grow line-clamp-3 min-h-[3em]">
          {product.description}
        </p>

        <hr className="my-2" />
        <div className="flex items-center justify-around mb-2">
          <div className="text-lg font-bold">
            {product.currency && product.currency} ${" "}
            {formatPrice(product.price || 0)}
          </div>
        </div>

        <button
          className="w-full bg-black rounded-md py-2 text-white text-sm font-semibold hover:bg-zinc-700 transition duration-300 ease-in-out"
          onClick={handleAddToCart}
        >
          Agregar a carrito
        </button>

        <div className="mt-2 text-sm text-muted-foreground text-center">
          En Stock: <b>{product.stock}</b>
        </div>
      </div>
    </div>
  );
};
