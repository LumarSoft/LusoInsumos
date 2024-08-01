import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const DrawnerComponent = () => {
  const renderAccordionItems = (items: any[], paddingLeft = "pl-4") => {
    return items.map((item) => (
      <AccordionItem key={item.value} value={item.value}>
        <AccordionTrigger
          hasContent={!!item.children}
          paddingLeft={paddingLeft}
        >
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
        </AccordionTrigger>
        {item.children && (
          <AccordionContent>
            <Accordion type="single" collapsible>
              {renderAccordionItems(item.children, getNextPadding(paddingLeft))}
            </Accordion>
          </AccordionContent>
        )}
      </AccordionItem>
    ));
  };

  const getNextPadding = (currentPadding: string) => {
    switch (currentPadding) {
      case "pl-4":
        return "pl-6";
      case "pl-6":
        return "pl-8";
      default:
        return "pl-4";
    }
  };

  const accordionData = [
    {
      value: "item-1",
      label: "Liquidacion",
      href: "/category/liquidacion",
    },
    {
      value: "item-2",
      label: "Celulares",
      children: [
        {
          value: "4",
          label: "Sellados",
          children: [
            {
              value: "6",
              label: "Apple IPhones",
              href: "/category/celulares/celulares_nuevos/apple",
            },
            {
              value: "7",
              label: "Multimarcas",
              children: [
                {
                  value: "8",
                  label: "Samsung",
                  href: "/category/celulares/celulares_nuevos/samsung",
                },
                {
                  value: "9",
                  label: "Xiaomi",
                  href: "/category/celulares/celulares_nuevos/xiaomi",
                },
                {
                  value: "10",
                  label: "Motorola",
                  href: "/category/celulares/celulares_nuevos/motorola",
                },
              ],
            },
          ],
        },
        {
          value: "5",
          label: "Usados",
          children: [
            {
              value: "11",
              label: "Apple Iphones",
              href: "/category/celulares/celulares_usados/apple",
            },
            {
              value: "12",
              label: "Multimarcas",
              children: [
                {
                  value: "13",
                  label: "Samsung",
                  href: "/category/celulares/celulares_usados/samsung",
                },
                {
                  value: "14",
                  label: "Xiaomi",
                  href: "/category/celulares/celulares_usados/xiaomi",
                },
                {
                  value: "15",
                  label: "Motorola",
                  href: "/category/celulares/celulares_usados/motorola",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "item-3",
      label: "Informatica",
      children: [
        {
          value: "16",
          label: "Computadoras",
          children: [
            {
              value: "17",
              label: "Oficina",
              href: "/category/computadoras/oficina",
            },
            {
              value: "18",
              label: "Gamer/Diseño",
              href: "/category/computadoras/gaming",
            },
          ],
        },
        {
          value: "19",
          label: "Notebooks",
          children: [
            {
              value: "20",
              label: "Oficina",
              href: "/category/notebooks/hogar",
            },
            {
              value: "21",
              label: "Gamer/Diseño",
              href: "/category/notebooks/gaming",
            },
          ],
        },
        {
          value: "22",
          label: "Hardware-Componentes",
          children: [
            {
              value: "23",
              label: "Procesadores",
              href: "/category/hardware/procesador",
            },
            {
              value: "24",
              label: "Motherboard",
              href: "/category/hardware/motherboard",
            },
            {
              value: "25",
              label: "Memorias RAM",
              href: "/category/hardware/ram",
            },
            {
              value: "26",
              label: "Almacenamiento",
              href: "/category/hardware/discmecanico",
            },
            {
              value: "27",
              label: "Placas de video",
              href: "/category/hardware/placavideo",
            },
            {
              value: "28",
              label: "Gabinetes",
              href: "/category/hardware/gabinete",
            },
            {
              value: "29",
              label: "Fuentes",
              href: "/category/hardware/fuente",
            },
            {
              value: "30",
              label: "Sillas gamer",
              href: "/category/sillas",
            },
            {
              value: "31",
              label: "Soluciones termicas",
              href: "/category/soluciones-termicas",
            },
          ],
        },
        {
          value: "32",
          label: "Monitores",
          href: "/category/monitores",
        },
        {
          value: "33",
          label: "Impresoras",
          href: "/category/impresoras",
        },
      ],
    },
    {
      value: "34",
      label: "Electronica",
      href: "/category/electronica",
    },
    {
      value: "35",
      label: "Juegos digitales",
      href: "/category/juegos_digitales",
    },
    {
      value: "36",
      label: "Impresion 3D",
      href: "/category/impresion_3d",
    },
    {
      value: "37",
      label: "Servicio tecnico",
      href: "/servicio_tecnico",
    },
  ];

  return (
    <Drawer direction="right">
      <DrawerTrigger className="block lg:hidden">
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Categorias</DrawerTitle>
        </DrawerHeader>
        <Accordion type="single" collapsible className="w-full">
          {renderAccordionItems(accordionData)}
        </Accordion>
      </DrawerContent>
    </Drawer>
  );
};
