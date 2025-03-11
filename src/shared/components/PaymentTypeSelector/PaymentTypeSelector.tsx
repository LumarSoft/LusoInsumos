import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cartStore } from "@/shared/stores/CartStore";
import { paymentTypeStore } from "./PaymentTypeStore";

export const PaymentTypeSelector = () => {
  const { paymentType, setPaymentType } = paymentTypeStore();
  const cart = cartStore((state) => state.cart);

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Método de pago</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={paymentType}
            onValueChange={setPaymentType}
            className="flex flex-wrap gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Efectivo" id="efectivo" />
              <Label htmlFor="efectivo" className="cursor-pointer">
                Efectivo
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Transferencia" id="transferencia" />
              <Label htmlFor="transferencia" className="cursor-pointer">
                Transferencia
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Tarjeta débito" id="debito" />
              <Label htmlFor="debito" className="cursor-pointer">
                Tarjeta débito
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Tarjeta crédito" id="credito" />
              <Label htmlFor="credito" className="cursor-pointer">
                Tarjeta crédito
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
};
