"use client";

import { CartList } from "./components/CartList";
import WspButton from "./components/WspButton";

const CartModule = () => {
  return (
    <div className="pt-20 lg:pt-36 px-2 md:px-28 2xl:px-80 2xl:mt-10 bg-white rounded-lg">
      <CartList />
      <WspButton />
    </div>
  );
};

export default CartModule;
