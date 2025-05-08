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
import { ChevronDown } from "lucide-react";

export function NavigationMenuComponent() {
  return (
    <NavigationMenu className="lg:flex hidden">
      <NavigationMenuList>
        {/* APPLE */}
        <NavigationMenuItem>
          <Link href="/category/apple" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              APPLE
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* CELULARES */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>CELULARES</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <Link href={"/category/celulares/celulares_nuevos/iphone"}>
                <ListItem title="APPLE SELLADO">
                  Los mejores precios de celulares apple del mercado
                </ListItem>
              </Link>

              <Link href={"/category/celulares/celulares_usados/iphone"}>
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

        {/* INFORMÁTICA */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>INFORMÁTICA</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem>
                <Link
                  href={"/category/computadoras"}
                  className="text-black font-semibold cursor-pointer"
                >
                  Computadoras
                </Link>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center">
                    Hardware
                    <ChevronDown
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/hardware/combos-actualizacion"}>
                      <ListItem title="Combos Actualización"></ListItem>
                    </Link>
                    <Link href={"/category/hardware/procesadores"}>
                      <ListItem title="MicrosProcesadores"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/hardware/motherboards"}>
                      <ListItem title="Motherboards"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/hardware/memorias-ram"}>
                      <ListItem title="Memorias RAM"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/hardware/discos-rigidos"}>
                      <ListItem title="Discos HDD"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/hardware/discos-solidos"}>
                      <ListItem title="Discos SSD"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/hardware/placas_video"}>
                      <ListItem title="Placas de video"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/hardware/gabinetes"}>
                      <ListItem title="Gabinetes"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/hardware/fuentes-de-alimentacion"}>
                      <ListItem title="Fuentes de Alimentación"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/hardware/cooling-y-mod"}>
                      <ListItem title="COOLING y MOD"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem>
                <Link
                  href={"/category/impresoras"}
                  className="text-black font-semibold cursor-pointer"
                >
                  Impresoras, tóners y tintas
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href={"/category/notebooks"}
                  className="text-black font-semibold cursor-pointer"
                >
                  Notebooks
                </Link>
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
                  href={"/category/sillas"}
                  className="text-black font-semibold cursor-pointer"
                >
                  Sillas
                </Link>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center">
                    Periféricos
                    <ChevronDown
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/informatica/perifericos/auriculares"}>
                      <ListItem title="Auriculares"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/perifericos/kit-teclado-mouse"}>
                      <ListItem title="Kit teclado + mouse"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/perifericos/mouse"}>
                      <ListItem title="Mouse"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/perifericos/microfonos"}>
                      <ListItem title="Microfonos"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/perifericos/mouse-pad"}>
                      <ListItem title="MousePad"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/perifericos/parlantes"}>
                      <ListItem title="Parlantes"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/perifericos/teclados"}>
                      <ListItem title="Teclados"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/perifericos/tabletas-digitalizadoras"}>
                      <ListItem title="Digitalizadoras"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/perifericos/joystick"}>
                      <ListItem title="Joysticks"></ListItem>
                    </Link>
                    <Link href={"/category/informatica/perifericos/webcam"}>
                      <ListItem title="Webcam"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* ELECTRÓNICA */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>ELECTRÓNICA</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem>
                <Link
                  href={"/category/cargadores_y_baterias"}
                  className="text-black font-semibold cursor-pointer"
                >
                  Cargadores y Baterías
                </Link>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center">
                    Internet
                    <ChevronDown
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/internet/router"}>
                      <ListItem title="Routers"></ListItem>
                    </Link>
                    <Link href={"/category/internet/extensores"}>
                      <ListItem title="Extensores"></ListItem>
                    </Link>
                    <Link href={"/category/internet/mesh"}>
                      <ListItem title="Mesh"></ListItem>
                    </Link>
                    <Link href={"/category/internet/placas_red"}>
                      <ListItem title="Placas de red"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center">
                    Energía y cables
                    <ChevronDown
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/electronica/energia_cables/cargadores_autos"}>
                      <ListItem title="Cargadores autos"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/energia_cables/cargadores_c_v8"}>
                      <ListItem title="Cargadores C y V8"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/energia_cables/pilas"}>
                      <ListItem title="Pilas"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/energia_cables/cables"}>
                      <ListItem title="Cables"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/energia_cables/energia"}>
                      <ListItem title="Energia"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center">
                    Leds
                    <ChevronDown
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/electronica/leds/espejos_leds"}>
                      <ListItem title="Espejos Leds"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/leds/aros_leds"}>
                      <ListItem title="Aros Leds"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/leds/luces_tiras"}>
                      <ListItem title="Luces tiras"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/leds/lamparas_inteligentes"}>
                      <ListItem title="Lamparas inteligentes"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center">
                    Almacenamiento
                    <ChevronDown
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/electronica/almacenamiento/micro_sd"}>
                      <ListItem title="Memorias Micro SD"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/almacenamiento/pendrives"}>
                      <ListItem title="Pendrives"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/almacenamiento/carry_disk"}>
                      <ListItem title="Carry disk/Caddy"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center">
                    Bluetooth
                    <ChevronDown
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/electronica/bluetooth/adaptadores"}>
                      <ListItem title="Adaptadores"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/bluetooth/auriculares"}>
                      <ListItem title="Auriculares"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/bluetooth/parlantes"}>
                      <ListItem title="Parlantes"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem>
                <Link
                  href={"/category/electronica/smartwatchs"}
                  className="text-black font-semibold cursor-pointer"
                >
                  Smartwatchs
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href={"/category/electronica/conversores_smart"}
                  className="text-black font-semibold cursor-pointer"
                >
                  Conversores Smart
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href={"/category/electronica/camaras_seguridad"}
                  className="text-black font-semibold cursor-pointer"
                >
                  Cámaras seguridad
                </Link>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center">
                    Varios
                    <ChevronDown
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/electronica/varios/soporte_tv"}>
                      <ListItem title="Soporte TV"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/varios/controles_remotos"}>
                      <ListItem title="Controles remotos"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/varios/balanzas"}>
                      <ListItem title="Balanzas"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/varios/carteles"}>
                      <ListItem title="Carteles"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/varios/pizarras"}>
                      <ListItem title="Pizarras"></ListItem>
                    </Link>
                    <Link href={"/category/electronica/varios/varios"}>
                      <ListItem title="Varios"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* VIDEOJUEGOS */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>VIDEOJUEGOS</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <Link href={"/category/videojuegos/consolas"}>
                <ListItem title="Consolas"></ListItem>
              </Link>
              
              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center">
                    Juegos digitales
                    <ChevronDown
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/videojuegos/juegos-digitales/ps4"}>
                      <ListItem title="Juegos PS4"></ListItem>
                    </Link>
                    <Link href={"/category/videojuegos/juegos-digitales/ps5"}>
                      <ListItem title="Juegos PS5"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* PERFUMES */}
        <NavigationMenuItem>
          <Link href="/category/perfumes" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              PERFUMES
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* SERVICIO TÉCNICO */}
        <NavigationMenuItem>
          <Link href="/servicio_tecnico" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              SERVICIO TÉCNICO
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
          "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground",
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
