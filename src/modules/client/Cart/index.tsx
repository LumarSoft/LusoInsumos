"use client";

import { PaymentTypeSelector } from "@/shared/components/PaymentTypeSelector/PaymentTypeSelector";
import { CartList } from "./components/CartList";
import WspButton from "./components/WspButton";
import { DeliveryMethodSelector } from "@/shared/components/PaymentTypeSelector/DeliveryMethodSelector";

const CartModule = () => {
  return (
    <div className="pt-20 lg:pt-36 px-2 md:px-28 2xl:px-80 2xl:mt-10 bg-white rounded-lg">
      <CartList />
      <PaymentTypeSelector />
      <DeliveryMethodSelector />
      <WspButton />
    </div>
  );
};

export default CartModule;
