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
      children: null,
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
              label: "iPhone",
              children: null,
              href: "/category/celulares/celulares_nuevos/apple",
            },
            {
              value: "7",
              label: "Multimarcas",
              children: null,
              href: "/category/celulares/celulares_nuevos/multimarcas",
            },
          ],
        },
        {
          value: "5",
          label: "Usados",
          children: [
            {
              value: "8",
              label: "iPhone",
              children: null,
              href: "/category/celulares/celulares_usados/apple",
            },
            {
              value: "9",
              label: "Multimarcas",
              children: null,
              href: "/category/celulares/celulares_usados/multimarcas",
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
          value: "10",
          label: "Computadoras",
          children: [
            {
              value: "15",
              label: "Oficina",
              children: null,
              href: "/category/informatica/computadoras/hogar",
            },
            {
              value: "16",
              label: "Gamer/Diseño",
              children: null,
              href: "/category/informatica/computadoras/gaming",
            },
          ],
        },
        {
          value: "11",
          label: "Notebook",
          children: [
            {
              value: "17",
              label: "Oficina",
              children: null,
              href: "/category/informatica/notebooks/hogar",
            },
            {
              value: "18",
              label: "Gamer/Diseño",
              children: null,
              href: "/category/informatica/notebooks/gaming",
            },
          ],
        },
        {
          value: "12",
          label: "Hardware-Componente",
          children: [
            {
              value: "19",
              label: "Procesadores",
              children: null,
              href: "/category/informatica/hardware/procesador",
            },
            {
              value: "20",
              label: "Motherboards",
              children: null,
              href: "/category/informatica/hardware/motherboard",
            },
            {
              value: "21",
              label: "Memorias RAM",
              children: null,
              href: "/category/informatica/hardware/ram",
            },
            {
              value: "22",
              label: "Almacenamiento",
              children: null,
              href: "/category/informatica/hardware/discmecanico",
            },
            {
              value: "23",
              label: "Placas de video",
              children: null,
              href: "/category/informatica/hardware/placavideo",
            },
            {
              value: "24",
              label: "Gabinetes",
              children: null,
              href: "/category/informatica/hardware/gabinete",
            },
            {
              value: "25",
              label: "Fuentes",
              children: null,
              href: "/category/informatica/hardware/fuente",
            },
            {
              value: "26",
              label: "Sillas gamer",
              children: null,
              href: "/category/informatica/sillas",
            },
            {
              value: "27",
              label: "Soluciones termicas",
              children: null,
              href: "/category/informatica/soluciones-termicas",
            },
          ],
        },
        {
          value: "13",
          label: "Monitores",
          children: null,
          href: "/category/informatica/monitores",
        },
        {
          value: "14",
          label: "Impresoras",
          children: null,
          href: "/category/informatica/impresoras",
        },
      ],
    },
    {
      value: "28",
      label: "Electronica",
      children: null,
      href: "/category/electronica",
    },
    {
      value: "29",
      label: "Juegos digitales",
      children: null,
      href: "/category/juegos-digitales",
    },
    {
      value: "30",
      label: "Impresion 3D",
      children: null,
      href: "/category/impresion-3d",
    },
    {
      value: "31",
      label: "Servicio tecnico",
      children: null,
      href: "/servicio-tecnico",
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
