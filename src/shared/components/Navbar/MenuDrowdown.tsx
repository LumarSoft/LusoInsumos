"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import React from "react";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="lg:flex hidden">
      <NavigationMenuList>
        {/* Liquidacion */}

        <NavigationMenuItem>
          <Link href="/category/liquidacion" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              LIQUIDACION
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Celulares */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>CELULARES</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <Link href={"/category/celulares/celulares_nuevos/apple"}>
                <ListItem title="APPLE SELLADO">
                  Los mejores precios de celulares apple del mercado
                </ListItem>
              </Link>

              <Link href={"/category/celulares/celulares_usados/apple"}>
                <ListItem title="APPLE USADO">
                  Celulares apple en el mejor estado del mercado
                </ListItem>
              </Link>
              <Link href={"/category/calulares/celulares_nuevos/multimarcas"}>
                <ListItem title="MULTIMARCAS SELLADOS">
                  Encontra el celular de tu marca favorita
                </ListItem>
              </Link>
              <Link href={"/category/celulares/celulares_usados/multimarcas"}>
                <ListItem title="MULTIMARCAS USADOS">
                  Encontra el celular de tu marca favorita
                </ListItem>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Informatica de informatica tengo que sacar: Computadoras, de computadoras tiene que abrirse un submenu para seleccionar entre oficina y gamer*/}

        <NavigationMenuItem>
          <NavigationMenuTrigger>INFORMATICA</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full">
                    Computadoras
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/computadoras/oficina"}>
                      <ListItem title="Oficina">
                        Disponible para trabajar desde donde quieras
                      </ListItem>
                    </Link>
                    <Link href={"/category/computadoras/gaming"}>
                      <ListItem title="Gaming">
                        Las mejores computadoras gaming del mercado
                      </ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem>
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer">
                    Notebooks
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/notebooks/hogar"}>
                      <ListItem title="Oficina">
                        Disponible para trabajar desde donde quieras
                      </ListItem>
                    </Link>
                    <Link href={"/category/notebooks/gaming"}>
                      <ListItem title="Gaming">
                        Las mejores notebooks gaming del mercado
                      </ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem>
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer">
                    Hardware
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/hardware/procesador"}>
                      <ListItem title="Procesadores"></ListItem>
                    </Link>
                    <Link href={"/category/hardware/motherboard"}>
                      <ListItem title="Moterboard"></ListItem>
                    </Link>
                    <Link href={"/category/hardware/ram"}>
                      <ListItem title="Memorias RAM"></ListItem>
                    </Link>
                    <Link href={"/category/hardware/discmecanico"}>
                      <ListItem title="Discos rigidos"></ListItem>
                    </Link>
                    <Link href={"/category/hardware/discsolido"}>
                      <ListItem title="Discos solidos"></ListItem>
                    </Link>
                    <Link href={"/category/hardware/placavideo"}>
                      <ListItem title="Placas de video"></ListItem>
                    </Link>
                    <Link href={"/category/hardware/gabinete"}>
                      <ListItem title="Gabinete"></ListItem>
                    </Link>
                    <Link href={"/category/hardware/fuente"}>
                      <ListItem title="Fuentes"></ListItem>
                    </Link>
                    <Link href={"/category/soluciones_termicas"}>
                      <ListItem title="Soluciones termincas"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem>
                <Link
                  href={"/category/monitores"}
                  className="text-black font-semibold cursor-pointer"
                >
                  Monitores
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href={"/category/impresoras"}
                  className="text-black font-semibold cursor-pointer"
                >
                  Impresoras{" "}
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href={"/category/sillas"}
                  className="text-black font-semibold cursor-pointer"
                >
                  Sillas gamer
                </Link>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Electronica */}

        <NavigationMenuItem>
          <Link href="/category/electronica" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              ELECTRONICA
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Juegos digitales */}

        <NavigationMenuItem>
          <Link href="/category/juegos_digitales" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              JUEGOS DIGITALES
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* IMpresion 3D */}

        <NavigationMenuItem>
          <Link href="/category/impresion_3d" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              IMPRESION 3D
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Servicio tecnico */}

        <NavigationMenuItem>
          <Link href="/servicio_tecnico" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              SERVICIO TECNICO
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <span
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <span className="text-sm font-medium leading-none ">{title}</span>
        <span className="line-clamp-2 text-sm leading-snug text-muted-foreground ">
          {children}
        </span>
      </span>
    </li>
  );
});
ListItem.displayName = "ListItem";
