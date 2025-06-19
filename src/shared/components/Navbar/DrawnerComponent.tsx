import {
  Drawer,
  DrawerClose,
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
          {item.href ? (
            <DrawerClose asChild>
              <Link href={item.href}>{item.label}</Link>
            </DrawerClose>
          ) : (
            item.label
          )}
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
      label: "APPLE",
      href: "/category/apple_informatica",
    },

    // CELULARES
    {
      value: "item-2",
      label: "CELULARES",
      children: [
        {
          value: "apple-sellados",
          label: "Apple sellados",
          href: "/category/celulares/celulares_nuevos/apple",
        },
        {
          value: "multimarcas-sellados",
          label: "Multimarcas sellados",
          href: "/category/celulares/celulares_nuevos/multimarcas",
        },
        {
          value: "apple-usados",
          label: "Apple usados",
          href: "/category/celulares/celulares_usados/apple",
        },
        {
          value: "multimarcas-usados",
          label: "Multimarcas usados",
          href: "/category/celulares/celulares_usados/multimarcas",
        },
      ],
    },

    // INFORMÁTICA
    {
      value: "item-3",
      label: "INFORMÁTICA",
      children: [
        {
          value: "computadoras",
          label: "Computadoras",
          href: "/category/computadoras",
        },
        {
          value: "hardware",
          label: "Hardware",
          children: [
            {
              value: "combos-actualizacion",
              label: "Combos Actualización",
              href: "/category/hardware/combos-actualizacion",
            },
            {
              value: "procesadores",
              label: "MicrosProcesadores",
              href: "/category/hardware/procesadores",
            },
            {
              value: "motherboards",
              label: "Motherboards",
              href: "/category/informatica/hardware/motherboard",
            },
            {
              value: "ram",
              label: "Memorias RAM",
              href: "/category/informatica/hardware/memorias-ram",
            },
            {
              value: "discos-hdd",
              label: "Discos HDD",
              href: "/category/informatica/hardware/discos-rigidos",
            },
            {
              value: "discos-ssd",
              label: "Discos SSD",
              href: "/category/informatica/hardware/discos-solidos",
            },
            {
              value: "placas-video",
              label: "Placas de video",
              href: "/category/informatica/hardware/placas-video",
            },
            {
              value: "gabinetes",
              label: "Gabinetes",
              href: "/category/informatica/hardware/gabinetes",
            },
            {
              value: "fuentes",
              label: "Fuentes de Alimentación",
              href: "/category/informatica/hardware/fuentes-de-alimentacion",
            },
            {
              value: "cooling-mod",
              label: "COOLING y MOD",
              href: "/category/informatica/hardware/cooling-y-mod",
            },
          ],
        },
        {
          value: "impresoras",
          label: "Impresoras, tóners y tintas",
          href: "/category/impresoras",
        },
        {
          value: "notebooks",
          label: "Notebooks",
          href: "/category/notebooks",
        },
        {
          value: "monitores",
          label: "Monitores",
          href: "/category/monitores",
        },
        {
          value: "sillas",
          label: "Sillas",
          href: "/category/sillas",
        },
        {
          value: "perifericos",
          label: "Periféricos",
          children: [
            {
              value: "auriculares",
              label: "Auriculares",
              href: "/category/informatica/perifericos/auriculares",
            },
            {
              value: "kit-teclado-mouse",
              label: "Kit teclado + mouse",
              href: "/category/informatica/perifericos/kit-teclado-mouse",
            },
            {
              value: "mouse",
              label: "Mouse",
              href: "/category/informatica/perifericos/mouse",
            },
            {
              value: "microfonos",
              label: "Microfonos",
              href: "/category/informatica/perifericos/microfonos",
            },
            {
              value: "mousepad",
              label: "MousePad",
              href: "/category/informatica/perifericos/mouse-pad",
            },
            {
              value: "parlantes",
              label: "Parlantes",
              href: "/category/informatica/perifericos/parlantes",
            },
            {
              value: "teclados",
              label: "Teclados",
              href: "/category/informatica/perifericos/teclados",
            },
            {
              value: "tabletas",
              label: "Tabletas Digitalizadoras",
              href: "/category/informatica/perifericos/tabletas-digitalizadoras",
            },
            {
              value: "joysticks",
              label: "Joysticks",
              href: "/category/informatica/perifericos/joystick",
            },
            {
              value: "webcam",
              label: "Webcam",
              href: "/category/informatica/perifericos/webcam",
            },
          ],
        },
      ],
    },

    // ELECTRÓNICA
    {
      value: "item-4",
      label: "ELECTRÓNICA",
      children: [
        {
          value: "cargadores-baterias",
          label: "Cargadores y Baterías",
          href: "/category/cargadores_y_baterias",
        },
        {
          value: "internet",
          label: "Internet",
          children: [
            {
              value: "routers",
              label: "Routers",
              href: "/category/internet/router",
            },
            {
              value: "extensores",
              label: "Extensores",
              href: "/category/internet/extensores",
            },
            {
              value: "mesh",
              label: "Mesh",
              href: "/category/internet/mesh",
            },
            {
              value: "placas-red",
              label: "Placas de red",
              href: "/category/internet/placas_red",
            },
          ],
        },
        {
          value: "energia-cables",
          label: "Energía y cables",
          children: [
            {
              value: "cargadores-autos",
              label: "Cargadores autos",
              href: "/category/electronica/energia_cables/cargadores_autos",
            },
            {
              value: "cargadores-c-v8",
              label: "Cargadores C y V8",
              href: "/category/electronica/energia_cables/cargadores_c_v8",
            },
            {
              value: "pilas",
              label: "Pilas",
              href: "/category/electronica/energia_cables/pilas",
            },
            {
              value: "cables",
              label: "Cables",
              href: "/category/electronica/energia_cables/cables",
            },
            {
              value: "energia",
              label: "Energia",
              href: "/category/electronica/energia_cables/energia",
            },
          ],
        },
        {
          value: "leds",
          label: "Leds",
          children: [
            {
              value: "espejos-leds",
              label: "Espejos Leds",
              href: "/category/electronica/leds/espejos_leds",
            },
            {
              value: "aros-leds",
              label: "Aros Leds",
              href: "/category/electronica/leds/aros_leds",
            },
            {
              value: "luces-tiras",
              label: "Luces tiras",
              href: "/category/electronica/leds/luces_tiras",
            },
            {
              value: "lamparas-inteligentes",
              label: "Lamparas inteligentes",
              href: "/category/electronica/leds/lamparas_inteligentes",
            },
          ],
        },
        {
          value: "almacenamiento",
          label: "Almacenamiento",
          children: [
            {
              value: "micro-sd",
              label: "Memorias Micro SD",
              href: "/category/electronica/almacenamiento/micro_sd",
            },
            {
              value: "pendrives",
              label: "Pendrives",
              href: "/category/electronica/almacenamiento/pendrives",
            },
            {
              value: "carry-disk",
              label: "Carry disk/Caddy",
              href: "/category/electronica/almacenamiento/carry_disk",
            },
          ],
        },
        {
          value: "bluetooth",
          label: "Bluetooth",
          children: [
            {
              value: "adaptadores",
              label: "Adaptadores",
              href: "/category/electronica/bluetooth/adaptadores",
            },
            {
              value: "auriculares-bt",
              label: "Auriculares",
              href: "/category/electronica/bluetooth/auriculares",
            },
            {
              value: "parlantes-bt",
              label: "Parlantes",
              href: "/category/electronica/bluetooth/parlantes",
            },
          ],
        },
        {
          value: "smartwatchs",
          label: "Smartwatchs",
          href: "/category/electronica/smartwatchs",
        },
        {
          value: "conversores-smart",
          label: "Conversores Smart",
          href: "/category/conversores_smart",
        },
        {
          value: "camaras-seguridad",
          label: "Cámaras seguridad",
          href: "/category/camaras_seguridad",
        },
        {
          value: "varios-electronica",
          label: "Varios",
          children: [
            {
              value: "soporte-tv",
              label: "Soporte TV",
              href: "/category/electronica/varios/soporte_tv",
            },
            {
              value: "controles-remotos",
              label: "Controles remotos",
              href: "/category/electronica/varios/controles_remotos",
            },
            {
              value: "balanzas",
              label: "Balanzas",
              href: "/category/electronica/varios/balanzas",
            },
            {
              value: "carteles",
              label: "Carteles",
              href: "/category/electronica/varios/carteles",
            },
            {
              value: "pizarras",
              label: "Pizarras",
              href: "/category/electronica/varios/pizarras",
            },
            {
              value: "varios",
              label: "Varios",
              href: "/category/electronica/varios/varios",
            },
          ],
        },
      ],
    },

    // VIDEOJUEGOS
    {
      value: "item-5",
      label: "VIDEOJUEGOS",
      children: [
        {
          value: "consolas",
          label: "Consolas",
          href: "/category/consolas",
        },
        {
          value: "juegos-digitales",
          label: "Juegos digitales",
          children: [
            {
              value: "juegos-ps4",
              label: "Juegos PS4",
              href: "/category/juegos_digitales/ps4",
            },
            {
              value: "juegos-ps5",
              label: "Juegos PS5",
              href: "/category/juegos_digitales/ps5",
            },
          ],
        },
      ],
    },

    // PERFUMES
    {
      value: "item-6",
      label: "PERFUMES",
      href: "/category/perfumes",
    },

    // SERVICIO TÉCNICO
    {
      value: "item-7",
      label: "SERVICIO TÉCNICO",
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
          <DrawerTitle>Categorías</DrawerTitle>
        </DrawerHeader>
        <Accordion type="single" collapsible className="w-full">
          {renderAccordionItems(accordionData)}
        </Accordion>
      </DrawerContent>
    </Drawer>
  );
};
