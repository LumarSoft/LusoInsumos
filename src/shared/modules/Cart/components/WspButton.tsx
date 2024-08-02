import { cartStore } from "@/shared/stores/CartStore";
import { formatPrice } from "@/shared/utils/formatPrice";

const WspButton = () => {
  const cart = cartStore((state) => state.cart);

  const buildMessage = () => {
    let message = " *Hola LusoInsumos!, quiero realizar una compra* \n\n";
    message += " _Detalle de la compra:_\n";

    cart.forEach((item, index) => {
      const subtotal = Number(item.price) * item.cant;
      message += `\n${index + 1}. *${item.title}*\n`;
      message += `   Cantidad: ${item.cant}\n`;
      message += `   Subtotal: $${formatPrice(String(subtotal))}\n ${item.currency}`;
    });

    return message;
  };

  const whatsappUrl = `https://wa.me/543417410787?text=${encodeURIComponent(
    buildMessage()
  )}`;

  const sendOrder = () => {
    window.open(whatsappUrl, "_blank");
  };

  if (cart.length === 0) {
    return null;
  }

  return (
    <button
      className="w-full bg-green-500 text-white font-bold px-6 py-2 rounded hover:bg-green-600 transition duration-200 mt-2"
      onClick={sendOrder}
    >
      Enviar Pedido por Whatsapp
    </button>
  );
};

export default WspButton;
