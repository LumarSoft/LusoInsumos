import { cartStore } from "@/shared/stores/CartStore";
import { formatPrice } from "@/shared/utils/formatPrice";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, ShoppingCart } from "lucide-react";
import { Trash } from "lucide-react"; 

export const CartList = () => {
  const cart = cartStore((state) => state.cart);
  const removeItem = cartStore((state) => state.removeItem);
  const clearToCart = cartStore((state) => state.clearToCart);
  const increaseQuantity = cartStore((state) => state.increaseQuantity);
  const decreaseQuantity = cartStore((state) => state.decreaseQuantity);
  const totalItems = cart.reduce((acc, item) => acc + item.cant, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10">
        <Card className="p-6 flex flex-col items-center text-center">
          <AlertTriangle className="w-12 h-12 text-gray-500 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Tu carrito está vacío
          </h2>
          <p className="text-gray-500">Agrega productos para verlos aquí.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Tu Carrito
          </h1>
        </div>
        <span className="text-sm text-gray-500">
          {totalItems} {totalItems === 1 ? "producto" : "productos"}
        </span>
      </div>
      <div className="space-y-4">
        {cart.map((item) => (
          <Card key={item.title} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex-1 flex gap-4 items-start">
                  {item.image && (
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      Cantidad: {item.cant}
                    </p>
                    <p className="text-sm font-medium text-gray-800">
                      Subtotal: {item.currency} $
                      {formatPrice((Number(item.price) * item.cant).toFixed(2))}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="flex items-center border rounded-lg bg-gray-50">
                    <Button
                      onClick={() => decreaseQuantity(item.title)}
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-600 hover:text-gray-900"
                    >
                      <span className="text-lg">-</span>
                    </Button>
                    <span className="w-12 text-center font-medium">
                      {item.cant}
                    </span>
                    <Button
                      onClick={() => increaseQuantity(item.title)}
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-600 hover:text-gray-900"
                    >
                      <span className="text-lg">+</span>
                    </Button>
                  </div>
                  <Button
                    onClick={() => removeItem(item.title)}
                    variant="destructive"
                    size="icon"
                    className="h-8 w-8"
                  >
                    <span className="text-lg">×</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <Button
          onClick={clearToCart}
          variant="destructive"
          className="w-full py-4 text-lg font-medium"
        >
          Vaciar Carrito
        </Button>
      </div>
    </div>
  );
};

export default CartList;
