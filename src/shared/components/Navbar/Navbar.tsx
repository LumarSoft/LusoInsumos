"use client";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

// Dropdown
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouterHelper } from "@/shared/hooks/useRouterHelper";
import { useEffect, useState } from "react";

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
      className={`h-16 w-full flex justify-between px-4 md:px-28 2xl:px-80 2xl:h-28 items-center py-4 fixed text-3xl top-0 left-0 z-50 bg-white transition-shadow duration-500 ${
        scrolled ? "shadow-xl" : ""
      }`}
    >
      {/* Dropdown aparece nada mas en caso de responsive */}
      <DropdownComponent />

      <Link href={homeRoute?.path || "/"}>
        <img src="/logo.png" className="w-auto h-14 md:h-16 2xl:h-24 block" />
      </Link>
      <Link href={"/category/celulares-usados"}>Celulares usados</Link>
      <Link href={"/category/hardware"}>Hardware</Link>
      <Link href={"/category/monitores"}>Monitores</Link>
      <Link href={"/category/equiposarmados"}>Equipos</Link>

      {/* aca irian las categorias */}

      <div className="flex gap-2 md:gap-4 items-center text-red">
        <Link href="/login">
          <FaUser className="text-red-800 hidden lg:block" />
        </Link>
        <a>
          <FaShoppingCart className="text-cyan-600" />
        </a>
      </div>
    </div>
  );
};

const DropdownComponent = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="block lg:hidden">
        <GiHamburgerMenu />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Categoria 1</DropdownMenuItem>
        <DropdownMenuItem>Categoria 2</DropdownMenuItem>
        <DropdownMenuItem>Categoria 3</DropdownMenuItem>
        <DropdownMenuItem>Categoria 4</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
