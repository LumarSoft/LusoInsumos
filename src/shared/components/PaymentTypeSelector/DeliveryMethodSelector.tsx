import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { paymentTypeStore } from "@/shared/components/PaymentTypeSelector/PaymentTypeStore";
import { cartStore } from "@/shared/stores/CartStore";
import { useState, useEffect } from "react";

export const DeliveryMethodSelector = () => {
  const {
    deliveryMethod,
    setDeliveryMethod,
    deliveryAddress,
    setDeliveryAddress,
    deliverySchedule,
    setDeliverySchedule,
  } = paymentTypeStore();
  const cart = cartStore((state) => state.cart);

  // Local state to track if fields have been touched
  const [addressTouched, setAddressTouched] = useState(false);
  const [scheduleTouched, setScheduleTouched] = useState(false);

  // Reset address and schedule when switching to local pickup
  useEffect(() => {
    if (deliveryMethod === "Retiro en local") {
      setDeliveryAddress("");
      setDeliverySchedule("");
      setAddressTouched(false);
      setScheduleTouched(false);
    }
  }, [deliveryMethod, setDeliveryAddress, setDeliverySchedule]);

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Método de entrega</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup
            value={deliveryMethod}
            onValueChange={setDeliveryMethod}
            className="flex flex-wrap gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Retiro en local" id="retiro" />
              <Label htmlFor="retiro" className="cursor-pointer">
                Retiro en local
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Envío con cadete" id="envio" />
              <Label htmlFor="envio" className="cursor-pointer">
                Envío con cadete
              </Label>
            </div>
          </RadioGroup>

          {deliveryMethod === "Envío con cadete" && (
            <div className="space-y-4 mt-4 p-4 border rounded-md bg-gray-50">
              <div className="space-y-2">
                <Label htmlFor="address">Dirección de entrega</Label>
                <Input
                  id="address"
                  placeholder="Ingrese su dirección completa"
                  value={deliveryAddress}
                  onChange={(e) => {
                    setDeliveryAddress(e.target.value);
                    setAddressTouched(true);
                  }}
                  className={
                    addressTouched && !deliveryAddress ? "border-red-500" : ""
                  }
                />
                {addressTouched && !deliveryAddress && (
                  <p className="text-red-500 text-sm">
                    La dirección es requerida
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="schedule">Horarios disponibles</Label>
                <Input
                  id="schedule"
                  placeholder="Ej: Lunes a Viernes de 9 a 18hs"
                  value={deliverySchedule}
                  onChange={(e) => {
                    setDeliverySchedule(e.target.value);
                    setScheduleTouched(true);
                  }}
                  className={
                    scheduleTouched && !deliverySchedule ? "border-red-500" : ""
                  }
                />
                {scheduleTouched && !deliverySchedule && (
                  <p className="text-red-500 text-sm">
                    El horario es requerido
                  </p>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
