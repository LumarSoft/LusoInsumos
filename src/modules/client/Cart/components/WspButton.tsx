import { Button } from "@/components/ui/button";
import { cartStore } from "@/shared/stores/CartStore";
import { paymentTypeStore } from "@/shared/components/PaymentTypeSelector/PaymentTypeStore";
import { formatPrice } from "@/shared/utils/formatPrice";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WspButton = () => {
  const cart = cartStore((state) => state.cart);
  const { paymentType, deliveryMethod, deliveryAddress, deliverySchedule } =
    paymentTypeStore();
  const [showValidationError, setShowValidationError] = useState(false);

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

    // Add delivery method information
    message += "\n*Método de entrega:* " + deliveryMethod;

    // Add delivery details if courier delivery is selected
    if (deliveryMethod === "Envío con cadete") {
      message += "\n*Dirección de entrega:* " + deliveryAddress;
      message += "\n*Horarios disponibles:* " + deliverySchedule;
    }

    return message;
  };

  const whatsappUrl = `https://wa.me/543417410787?text=${encodeURIComponent(
    buildMessage()
  )}`;

  const sendOrder = () => {
    // Validate delivery information if courier delivery is selected
    if (
      deliveryMethod === "Envío con cadete" &&
      (!deliveryAddress || !deliverySchedule)
    ) {
      setShowValidationError(true);
      return;
    }

    setShowValidationError(false);
    window.open(whatsappUrl, "_blank");
  };

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {showValidationError && (
        <div className="text-red-500 mb-2 text-center">
          Por favor complete la dirección y horarios de entrega
        </div>
      )}
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
