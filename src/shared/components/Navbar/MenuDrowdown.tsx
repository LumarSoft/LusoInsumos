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

export const MenuDrowdown = () => {
  return (
    <Menubar>
      {/*  Primero */}
      <MenubarMenu>
        <MenubarTrigger>Liquidacion</MenubarTrigger>
      </MenubarMenu>

      {/* Segundo */}
      <MenubarMenu>
        <MenubarTrigger>
          Celulares <ChevronRight className="ml-auto h-4 w-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Sellados</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Apple IPhones</MenubarItem>
              <MenubarItem>Multimarcas</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Usados</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Multimarca</MenubarItem>
              <MenubarItem>Apple Iphones</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      {/* Tercero */}
      <MenubarMenu>
        <MenubarTrigger>
          Informatica <ChevronRight className="ml-auto h-4 w-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Computadoras</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Oficina</MenubarItem>
              <MenubarItem>Gamer/disenio</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Notebooks</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Oficina</MenubarItem>
              <MenubarItem>Gamer/disenio</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Hardware-Componentes</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Procesadores</MenubarItem>
              <MenubarItem>Motherboard</MenubarItem>
              <MenubarItem>Memorias RAM</MenubarItem>
              <MenubarItem>Almacenamiento</MenubarItem>
              <MenubarItem>Placas de video</MenubarItem>
              <MenubarItem>Gabinetes</MenubarItem>
              <MenubarItem>Fuentes</MenubarItem>
              <MenubarItem>Sillas gamer</MenubarItem>
              <MenubarItem>Soluciones termicas</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>Monitores</MenubarItem>
          <MenubarItem>Impresoras</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      {/* Cuarto */}
      <MenubarMenu>
        <MenubarTrigger>Electronica</MenubarTrigger>
      </MenubarMenu>

      {/* Quinto */}
      <MenubarMenu>
        <MenubarTrigger>Juegos digitales</MenubarTrigger>
      </MenubarMenu>

      {/* Sexto */}
      <MenubarMenu>
        <MenubarTrigger>Impresion 3D</MenubarTrigger>
      </MenubarMenu>

      {/* Septimo */}
      <MenubarMenu>
        <MenubarTrigger>Servicio tecnico</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenuDrowdown;
