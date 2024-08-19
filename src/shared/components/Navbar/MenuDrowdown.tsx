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
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center ">
                    Computadoras
                    <ChevronDown
                      className="relative top-[1px] h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
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
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer flex items-center">
                    Notebooks
                    <ChevronDown
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
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
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer flex items-center">
                    Hardware{" "}
                    <ChevronDown
                      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
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
          <NavigationMenuTrigger>ELECTRONICA</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center ">
                    Perifericos
                    <ChevronDown
                      className="relative top-[1px] h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/perifericos/mouse"}>
                      <ListItem title="Mouse con cable"></ListItem>
                    </Link>
                    <Link href={"/category/perifericos/mouse_inalambrico"}>
                      <ListItem title="Mouse inalambrico"></ListItem>
                    </Link>
                    <Link href={"/category/perifericos/mouse_pad"}>
                      <ListItem title="Mouse pads"></ListItem>
                    </Link>
                    <Link href={"/category/perifericos/teclado"}>
                      <ListItem title="Teclado con cable"></ListItem>
                    </Link>
                    <Link href={"/category/perifericos/teclado_inalambrico"}>
                      <ListItem title="Teclado inalambrico"></ListItem>
                    </Link>
                    <Link href={"/category/perifericos/parlantes"}>
                      <ListItem title="Parlantes"></ListItem>
                    </Link>
                    <Link href={"/category/perifericos/joystick"}>
                      <ListItem title="Joysticks"></ListItem>
                    </Link>
                    <Link href={"/category/perifericos/webcam"}>
                      <ListItem title="Webcam"></ListItem>
                    </Link>
                    <Link href={"/category/perifericos/auriculares"}>
                      <ListItem title="Auriculares"></ListItem>
                    </Link>
                    <Link href={"/category/perifericos/kit_cables"}>
                      <ListItem title="Mouse + teclado cableados"></ListItem>
                    </Link>
                    <Link href={"/category/perifericos/kit_inalambrico"}>
                      <ListItem title="Mouse + teclado inalambricos"></ListItem>
                    </Link>
                    <Link href={"/category/perifericos/multiplicadores_USB"}>
                      <ListItem title="Multiplicadores USB"></ListItem>
                    </Link>
                    <Link href={"/category/perifericos/placas_sonido"}>
                      <ListItem title="Placas de sonido USB"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center ">
                    Internet
                    <ChevronDown
                      className="relative top-[1px] h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/internet/router"}>
                      <ListItem title="Routers"></ListItem>
                    </Link>
                    <Link href={"/category/internet/extensores"}>
                      <ListItem title="Extensor"></ListItem>
                    </Link>
                    <Link href={"/category/internet/mesh"}>
                      <ListItem title="Mesh"></ListItem>
                    </Link>
                    <Link href={"/category/internet/placa_red"}>
                      <ListItem title="Placas de red"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center ">
                    Energia y cables
                    <ChevronDown
                      className="relative top-[1px] h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/energia_cables/cargador_notebook"}>
                      <ListItem title="Cargadores Notebooks"></ListItem>
                    </Link>
                    <Link href={"/category/energia_cables/cargador_auto"}>
                      <ListItem title="Cargadores autos"></ListItem>
                    </Link>
                    <Link href={"/category/energia_cables/cargador_220v"}>
                      <ListItem title="Cargadores 220V"></ListItem>
                    </Link>
                    <Link href={"/category/energia_cables/pila"}>
                      <ListItem title="Pilas"></ListItem>
                    </Link>
                    <Link href={"/category/energia_cables/cable"}>
                      <ListItem title="Cables"></ListItem>
                    </Link>
                    <Link href={"/category/energia_cables/energia"}>
                      <ListItem title="Enería"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center ">
                    Leds
                    <ChevronDown
                      className="relative top-[1px] h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/leds/espejos_led"}>
                      <ListItem title="Espejos leds"></ListItem>
                    </Link>
                    <Link href={"/category/leds/aros_led"}>
                      <ListItem title="Aros led"></ListItem>
                    </Link>
                    <Link href={"/category/leds/luces_tiras"}>
                      <ListItem title="Luces tiras"></ListItem>
                    </Link>
                    <Link href={"/category/leds/lamparas"}>
                      <ListItem title="Lampras inteligentes"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center ">
                    Almacenamiento
                    <ChevronDown
                      className="relative top-[1px] h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/almacenamiento/micro_sd"}>
                      <ListItem title="Memorias Micro SD"></ListItem>
                    </Link>
                    <Link href={"/category/almacenamiento/pendrives"}>
                      <ListItem title="Pendrives"></ListItem>
                    </Link>
                    <Link href={"/category/almacenamiento/carry_disk"}>
                      <ListItem title="Carry disk/Caddy"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center ">
                    Bluetooth
                    <ChevronDown
                      className="relative top-[1px] h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/bluetooth/adaptadores_bluetooth"}>
                      <ListItem title="Adaptadores"></ListItem>
                    </Link>
                    <Link href={"/category/bluetooth/auriculares_bluetooth"}>
                      <ListItem title="Auriculares"></ListItem>
                    </Link>
                    <Link href={"/category/bluetooth/parlantes_bluetooth"}>
                      <ListItem title="Parlantes"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              <ListItem>
                <Link
                  href={"/category/smartwatchs"}
                  className="text-black font-semibold cursor-pointer"
                >
                  Smartwatchs
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href={"/category/seguridad"}
                  className="text-black font-semibold cursor-pointer"
                >
                  Seguridad
                </Link>
              </ListItem>

              <ListItem className="w-full">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="text-black font-semibold cursor-pointer w-full flex items-center ">
                    Varios
                    <ChevronDown
                      className="relative top-[1px] h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col">
                    <Link href={"/category/varios/soporte_tv"}>
                      <ListItem title="Soporte TV"></ListItem>
                    </Link>
                    <Link href={"/category/varios/control_remoto"}>
                      <ListItem title="Control remotos"></ListItem>
                    </Link>
                    <Link href={"/category/varios/conversores_smart"}>
                      <ListItem title="Conversores Smart"></ListItem>
                    </Link>
                    <Link href={"/category/varios/balanzas"}>
                      <ListItem title="Balanzas"></ListItem>
                    </Link>
                    <Link href={"/category/varios/carteles"}>
                      <ListItem title="Carteles"></ListItem>
                    </Link>
                    <Link href={"/category/varios/mascaras"}>
                      <ListItem title="Máscaras"></ListItem>
                    </Link>
                    <Link href={"/category/varios/pizarras"}>
                      <ListItem title="Pizarras"></ListItem>
                    </Link>
                    <Link href={"/category/varios/adaptadores"}>
                      <ListItem title="Adaptadores"></ListItem>
                    </Link>
                    <Link href={"/category/varios/soportes_notebooks"}>
                      <ListItem title="Soportes notebooks"></ListItem>
                    </Link>
                    <Link href={"/category/varios/videoconsolas"}>
                      <ListItem title="Videoconsolas"></ListItem>
                    </Link>
                    <Link href={"/category/varios/varios"}>
                      <ListItem title="Varios"></ListItem>
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>

              
            </ul>
          </NavigationMenuContent>
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
