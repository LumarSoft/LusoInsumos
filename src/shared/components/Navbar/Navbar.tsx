"use client";
// Dropdown
import Link from "next/link";
import { useRouterHelper } from "@/shared/hooks/useRouterHelper";
import { useEffect, useState } from "react";
import { CartIcon } from "./CartIcon";

import { NavigationMenuComponent } from "./MenuDrowdown";
import { DrawnerComponent } from "./DrawnerComponent";
import { SearchProduct } from "../Search/SearchProduct";

export const Navbar = () => {
  const homeRoute = useRouterHelper().getOneRoute("/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed lg:h-36 flex lg:flex-col lg:items-center px-4 pt-4 md:px-28 2xl:px-80 justify-between top-0 left-0 right-0 z-50 transition-shadow duration-500 bg-white ${
        scrolled ? "shadow-xl" : ""
      }`}
    >
      <Link href={homeRoute?.path || "/"}>
        <img src="/logo.png" className="h-16 2xl:h-20" />
      </Link>

      <NavigationMenuComponent />

      <div className="flex items-center text-3xl gap-6 lg:fixed bottom-10 right-10 lg:text-5xl">
        <CartIcon />
        <DrawnerComponent />
      </div>
    </div>
  );
};
