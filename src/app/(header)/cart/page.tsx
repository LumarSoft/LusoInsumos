"use client";
import { cartStore } from "@/shared/stores/CartStore";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export default function CartPage() {
  const cart = cartStore((state) => state.cart);
  const removeItem = cartStore((state) => state.removeItem);
  const clearToCart = cartStore((state) => state.clearToCart);
  const increaseQuantity = cartStore((state) => state.increaseQuantity);
  const decreaseQuantity = cartStore((state) => state.decreaseQuantity);

  const buildMessage = () => {
    let message = " *Hola LusoInsumos!, quiero realizar una compra* \n\n";
    message += " _Detalle de la compra:_\n";

    let total = 0;
    cart.forEach((item, index) => {
      const subtotal = item.price * item.cant;
      total += subtotal;
      message += `\n${index + 1}. *${item.title}*\n`;
      message += `   Cantidad: ${item.cant}\n`;
      message += `   Subtotal: $${subtotal.toFixed(2)}\n`;
    });

    return message;
  };

  const whatsappUrl = `https://wa.me/543412776893?text=${encodeURIComponent(
    buildMessage()
  )}`;

  const sendOrder = () => {
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">Tu Carrito</h1>
      {cart.map((item) => (
        <div
          key={item.title}
          className="flex justify-between items-center border-b border-gray-200 py-4"
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
              <h2 className="text-xl font-semibold text-gray-700">
                {item.title}
              </h2>
              <p className="text-black font-semibold">Cantidad: {item.cant}</p>
              <p className="text-black font-semibold">
                Subtotal: ${(item.price * item.cant).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="border border-zinc-200 rounded ">
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
      <div className="mt-8 flex flex-col gap-2 items-center">
        <button
          className="w-full bg-green-500 text-white font-bold px-6 py-2 rounded hover:bg-green-600 transition duration-200"
          onClick={sendOrder}
        >
          Enviar Pedido por Whatsapp
        </button>

        <button
          onClick={clearToCart}
          className="w-full bg-red-500 text-white px-6 font-bold py-2 rounded hover:bg-red-600 transition duration-200"
        >
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
}
