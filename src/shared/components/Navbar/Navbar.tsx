"use client";
// Dropdown
import Link from "next/link";
import { useRouterHelper } from "@/shared/hooks/useRouterHelper";
import { useEffect, useState } from "react";
import { CartIcon } from "./CartIcon";

import { NavigationMenuComponent } from "./MenuDrowdown";
import { DrawnerComponent } from "./DrawnerComponent";

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
    <nav
      className={`w-full h-20 flex justify-between px-4 lg:flex-col items-center fixed z-50 lg:h-36 transition-shadow duration-500 bg-white ${
        scrolled ? " shadow-xl" : ""
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
    </nav>
  );
};
