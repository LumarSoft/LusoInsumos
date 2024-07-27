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
                <Link href={"/category/celulares/celulares-nuevos/apple"}>
                  Apple IPhones
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/celulares/celulares-nuevos/multimarcas"}>
                  Multimarcas
                </Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Usados</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href={"/category/celulares/celulares-usados/apple"}>
                  Apple Iphones
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/celulares/celulares-usados/multimarcas"}>
                  Multimarca
                </Link>
              </MenubarItem>
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
                <Link href={"/category/informatica/computadoras/hogar"}>
                  Oficina
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/informatica/computadoras/gaming"}>
                  Gamer/diseño
                </Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Notebooks</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href={"/category/informatica/notebooks/hogar"}>
                  Oficina
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/category/informatica/notebooks/gaming"}>
                  Gamer/diseño
                </Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Hardware-Componentes</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link
                  href={
                    "/category/informatica/hardware/procesador"
                  }
                >
                  Procesadores
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link
                  href={
                    "/category/informatica/hardware/motherboard"
                  }
                >
                  Motherboard
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link
                  href={
                    "/category/informatica/hardware/ram"
                  }
                >
                  Memorias RAM
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link
                  href={
                    "/category/informatica/hardware/discmecanico"
                  }
                >
                  Almacenamiento
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link
                  href={
                    "/category/informatica/hardware/placavideo"
                  }
                >
                  Placas de video
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link
                  href={"/category/informatica/hardware/gabinete"}
                >
                  Gabinetes
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link
                  href={"/category/informatica/hardware/fuente"}
                >
                  Fuentes
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link
                  href={
                    "/category/informatica/sillas"
                  }
                >
                  Sillas gamer
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link
                  href={
                    "/category/informatica/soluciones-termicas"
                  }
                >
                  Soluciones termicas
                </Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>
            <Link href={"/category/informatica/monitores"}>Monitores</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href={"/category/informatica/impresoras"}>Impresoras</Link>
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
          <Link href={"/category/juegos-digitales"}>JUEGOS DIGITALES</Link>
        </MenubarTrigger>
      </MenubarMenu>

      {/* Sexto */}
      <MenubarMenu>
        <MenubarTrigger>
          <Link href={"/category/impresion-3d"}>IMPRESION 3D</Link>
        </MenubarTrigger>
      </MenubarMenu>

      {/* Septimo */}
      <MenubarMenu>
        <MenubarTrigger>
          <Link href={"/servicio-tecnico"}>SERVICIO TECNICO</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenuDrowdown;
