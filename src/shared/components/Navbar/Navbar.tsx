"use client";
// Dropdown
import Link from "next/link";
import { useRouterHelper } from "@/shared/hooks/useRouterHelper";
import { useEffect, useState } from "react";
import { CartIcon } from "./CartIcon";

import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import MenuDrowdown from "./MenuDrowdown";
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

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div
      className={`h-16 w-full flex justify-between px-4 md:px-28 2xl:px-80 2xl:h-28 items-center py-4 fixed text-3xl top-0 left-0 z-50 bg-white transition-shadow duration-500 ${
        scrolled ? "shadow-xl" : ""
      }`}
    >
      <Link href={homeRoute?.path || "/"}>
        <img src="/logo.png" className="w-auto h-14 md:h-16 2xl:h-24 block" />
      </Link>

      <MenuDrowdown />

      <div className="flex gap-4">
        <CartIcon />
        <DrawnerComponent />
      </div>
    </div>
  );
};
