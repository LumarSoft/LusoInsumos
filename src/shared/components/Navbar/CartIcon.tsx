import { useEffect, useState } from "react";
import { cartStore } from "@/shared/stores/CartStore";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

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
      <span className="bg-red-600 rounded-2xl text-white text-sm font-semibold h-5 w-5 absolute translate-x-5 -translate-y-2 text-center lg:translate-x-9">
        {totalItems}
      </span>
      <FaShoppingCart className="text-cyan-600 cursor-pointer" />
    </Link>
  );
};
