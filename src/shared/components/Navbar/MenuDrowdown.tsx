import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const MenuDrowdown = () => {
  return (
    <Menubar className="hidden lg:flex">
      {/*  Primero */}
      <MenubarMenu>
        <MenubarTrigger>
          <Link href={"/category/liquidacion"}>LIQUIDACIÓN</Link>
        </MenubarTrigger>
      </MenubarMenu>

      {/* Segundo */}
      <MenubarMenu>
        <MenubarTrigger>
          CELULARES <ChevronRight className="ml-auto h-4 w-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Sellados</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href={"/category/celulares/celulares_nuevos/apple"}>
                  Apple IPhones
                </Link>
              </MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Multimarcas</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>
                    <Link href={"/category/celulares/celulares_nuevos/samsung"}>
                      Samsung
                    </Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link href={"/category/celulares/celulares_nuevos/xiaomi"}>
                      Xiaomi
                    </Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link
                      href={"/category/celulares/celulares_nuevos/motorola"}
                    >
                      Motorola
                    </Link>
                  </MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Usados</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href={"/category/celulares/celulares_usados/apple"}>
                  Apple Iphones
                </Link>
              </MenubarItem>

              <MenubarSub>
                <MenubarSubTrigger>Multimarcas</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Samsung</MenubarItem>
                  <MenubarItem>Xiaomi</MenubarItem>
                  <MenubarItem>Motorola</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      {/* Tercero */}
      <MenubarMenu>
        <MenubarTrigger>
          INFORMATICA <ChevronRight className="ml-auto h-4 w-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Computadoras</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href={"/category/computadoras/hogar"}>
                  Oficina
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/computadoras/gaming"}>
                  Gamer/diseño
                </Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Notebooks</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href={"/category/notebooks/hogar"}>
                  Oficina
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/notebooks/gaming"}>
                  Gamer/diseño
                </Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Hardware-Componentes</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href={"/category/hardware/procesador"}>
                  Procesadores
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/hardware/motherboard"}>
                  Motherboard
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/hardware/ram"}>
                  Memorias RAM
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/hardware/discmecanico"}>
                  Almacenamiento
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/hardware/placavideo"}>
                  Placas de video
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/hardware/gabinete"}>
                  Gabinetes
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/hardware/fuente"}>
                  Fuentes
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/sillas"}>Sillas gamer</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/soluciones-termicas"}>
                  Soluciones termicas
                </Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>
            <Link href={"/category/monitores"}>Monitores</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href={"/category/impresoras"}>Impresoras</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      {/* Cuarto */}
      <MenubarMenu>
        <MenubarTrigger>
          <Link href={"/category/electronica"}>ELECTRONICA</Link>
        </MenubarTrigger>
      </MenubarMenu>

      {/* Quinto */}
      <MenubarMenu>
        <MenubarTrigger>
          <Link href={"/category/juegos_digitales"}>JUEGOS DIGITALES</Link>
        </MenubarTrigger>
      </MenubarMenu>

      {/* Sexto */}
      <MenubarMenu>
        <MenubarTrigger>
          <Link href={"/category/impresion_3d"}>IMPRESION 3D</Link>
        </MenubarTrigger>
      </MenubarMenu>

      {/* Septimo */}
      <MenubarMenu>
        <MenubarTrigger>
          <Link href={"/servicio_tecnico"}>SERVICIO TECNICO</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenuDrowdown;
