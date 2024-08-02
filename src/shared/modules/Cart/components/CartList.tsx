import { cartStore } from "@/shared/stores/CartStore";
import { formatPrice } from "@/shared/utils/formatPrice";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export const CartList = () => {
  const cart = cartStore((state) => state.cart);
  const removeItem = cartStore((state) => state.removeItem);
  const clearToCart = cartStore((state) => state.clearToCart);
  const increaseQuantity = cartStore((state) => state.increaseQuantity);
  const decreaseQuantity = cartStore((state) => state.decreaseQuantity);

  if (cart.length === 0) {
    return (
      <p className="text-center text-gray-700">
        No hay productos en el carrito
      </p>
    );
  }

  return (
    <>
      <h1 className="text-center 2xl:text-start lg:text-3xl font-semibold mb-8 text-gray-800 text-2xl">
        Tu Carrito
      </h1>

      {cart.map((item) => (
        <div
          key={item.title}
          className="flex justify-between items-center border-b border-gray-200 2xl:py-4"
        >
          <div className="flex items-center">
            {item.image && (
              <div className="mr-4">
                <img
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
              </div>
            )}
            <div>
              <h2 className="text-base 2xl:text-xl font-semibold text-gray-700">
                {item.title}
              </h2>
              <p className="text-black font-semibold text-sm 2xl:text-base">
                Cantidad: {item.cant}
              </p>
              <p className="text-black font-semibold text-sm 2xl:text-base">
                Subtotal: {item.currency} $
                {formatPrice((Number(item.price) * item.cant).toFixed(2))}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="border border-zinc-200 rounded flex flex-col-reverse md:flex-row items-center justify-center">
              <button
                onClick={() => decreaseQuantity(item.title)}
                className="text-gray-700 px-3 py-2 rounded hover:bg-gray-300 transition duration-200"
              >
                <FaMinus />
              </button>
              <span className="px-4 py-1 text-lg font-semibold">
                {item.cant}
              </span>
              <button
                onClick={() => increaseQuantity(item.title)}
                className="text-gray-700 px-3 py-2 rounded hover:bg-gray-300 transition duration-200"
              >
                <FaPlus />
              </button>
            </div>

            <button
              onClick={() => removeItem(item.title)}
              className="bg-red-500 text-white px-4 py-2 rounded ml-4 hover:bg-red-800 transition duration-200"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={clearToCart}
        className="w-full bg-red-500 text-white px-6 font-bold py-2 rounded hover:bg-red-600 transition duration-200"
      >
        Vaciar Carrito
      </button>
    </>
  );
};
