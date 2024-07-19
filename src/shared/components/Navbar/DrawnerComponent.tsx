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

export const DrawnerComponent = () => {
  const renderAccordionItems = (items: any[], paddingLeft = "pl-4") => {
    return items.map((item) => (
      <AccordionItem key={item.value} value={item.value}>
        <AccordionTrigger
          hasContent={!!item.children}
          paddingLeft={paddingLeft}
        >
          {item.label}
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
            },
            {
              value: "7",
              label: "Multimarcas",
              children: null,
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
            },
            {
              value: "9",
              label: "Multimarcas",
              children: null,
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
            },
            {
              value: "16",
              label: "Gamer/Diseño",
              children: null,
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
            },
            {
              value: "18",
              label: "Gamer/Diseño",
              children: null,
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
            },
            {
              value: "20",
              label: "Motherboards",
              children: null,
            },
            {
              value: "21",
              label: "Memorias RAM",
              children: null,
            },
            {
              value: "22",
              label: "Almacenamiento",
              children: null,
            },
            {
              value: "23",
              label: "Placas de video",
              children: null,
            },
            {
              value: "24",
              label: "Gabinetes",
              children: null,
            },
            {
              value: "25",
              label: "Fuentes",
              children: null,
            },
            {
              value: "26",
              label: "Sillas gamer",
              children: null,
            },
            {
              value: "27",
              label: "Soluciones termicas",
              children: null,
            },
          ],
        },
        {
          value: "13",
          label: "Monitores",
          children: null,
        },
        {
          value: "14",
          label: "Impresoras",
          children: null,
        },
      ],
    },
    {
      value: "28",
      label: "Electronica",
      childre: null,
    },
    {
      value: "29",
      label: "Juegos digitales",
      childre: null,
    },
    {
      value: "30",
      label: "Impresion 3D",
      childre: null,
    },
    {
      value: "31",
      label: "Servicio tecnico",
      childre: null,
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
