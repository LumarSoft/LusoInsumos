import { Button } from "@/components/ui/button";
import { paymentTypeStore } from "@/shared/components/PaymentTypeSelector/PaymentTypeStore";
import { cartStore } from "@/shared/stores/CartStore";
import { formatPrice } from "@/shared/utils/formatPrice";
import { MessageCircle } from "lucide-react";

const WspButton = () => {
  const cart = cartStore((state) => state.cart);
  const { paymentType } = paymentTypeStore();

  const buildMessage = () => {
    let message = " *Hola LusoInsumos!, quiero realizar una compra* \n\n";
    message += " _Detalle de la compra:_\n";

    cart.forEach((item, index) => {
      const subtotal = Number(item.price) * item.cant;
      message += `\n${index + 1}. *${item.title}*\n`;
      message += `   Cantidad: ${item.cant}\n`;
      message += `   Subtotal: $${formatPrice(String(subtotal))}\n ${
        item.currency
      }`;
    });

    // Add payment type information
    message += "\n\n*Método de pago seleccionado:* " + paymentType;

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
    <div className="flex justify-center ">
      <Button
        onClick={sendOrder}
        className="mb-4 w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 min-w-[200px]"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-base">Enviar Pedido por WhatsApp</span>
      </Button>
    </div>
  );
};

export default WspButton;
