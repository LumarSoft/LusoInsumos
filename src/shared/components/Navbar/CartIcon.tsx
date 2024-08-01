import { useEffect, useState } from "react";
import { cartStore } from "@/shared/stores/CartStore";
import Link from "next/link";

export const CartIcon = () => {
  const { getTotalItems, cart } = cartStore();
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const updateTotalItems = async () => {
      setTotalItems(await getTotalItems());
    };
    updateTotalItems();
  }, [cart, getTotalItems]);

  return (
    <Link href={"/cart"}>
      <span className="bg-red-600 rounded-2xl text-white text-sm font-semibold px-3 py-2 absolute translate-x-5 -translate-y-2 text-center lg:translate-x-9">
        {totalItems}
      </span>
      <img src="/carrito.png" className="w-16"/>
    </Link>
  );
};
