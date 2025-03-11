"use client";

import { CartList } from "./components/CartList";
import WspButton from "./components/WspButton";
import { PaymentTypeSelector } from "../../../shared/components/PaymentTypeSelector/PaymentTypeSelector";

const CartModule = () => {
  return (
    <div className="pt-20 lg:pt-36 px-2 md:px-28 2xl:px-80 bg-white rounded-lg">
      <CartList />
      <PaymentTypeSelector />
      <WspButton />
    </div>
  );
};

export default CartModule;
