export const categories = [
  "apple_informatica",
  "almacenamiento",
  "bluetooth",
  "cargadores_y_baterias",
  "camaras_seguridad",
  "celulares_nuevos",
  "celulares_usados",
  "conversores_smart",
  "computadoras",
  "consolas",
  "electronica",
  "energia_cables",
  "hardware",
  "impresion_3d",
  "impresoras",
  "internet",
  "juegos_digitales",
  "leds",
  "liquidacion",
  "monitores",
  "notebooks",
  "perifericos",
  "perfumes",
  "seguridad",
  "sillas",
  "smartwatchs",
  "soluciones_termicas",
  "varios",
];

export const accordionData = [
  // Liquidacion
  {
    value: "item-1",
    label: "Liquidacion",
    href: "/category/liquidacion",
  },

  // Celulares
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
            href: "/category/celulares/celulares_nuevos/multimarcas",
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
            href: "/category/celulares/celulares_usados/multimarcas",
          },
        ],
      },
    ],
  },

  // Informatica
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
            label: "Discos rigidos",
            href: "/category/hardware/discmecanico",
          },
          {
            value: "38",
            label: "Discos solidos",
            href: "/category/hardware/discsolido",
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
            value: "31",
            label: "Soluciones termicas",
            href: "/category/soluciones_termicas",
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
      {
        value: "30",
        label: "Sillas",
        href: "/category/sillas",
      },
    ],
  },

  // Electronica
  {
    value: "34",
    label: "Electronica",
    children: [
      {
        value: "39",
        label: "Perifericos",
        children: [
          {
            value: "40",
            label: "Mouse con cable",
            href: "/category/periferiscos/mouse",
          },
          {
            value: "41",
            label: "Mouse inalambrico",
            href: "/category/periferiscos/mouse_inalambrico",
          },
          {
            value: "42",
            label: "Mouse pads",
            href: "/category/periferiscos/mouse_pad",
          },
          {
            value: "43",
            label: "Teclado con cable",
            href: "/category/periferiscos/teclado",
          },
          {
            value: "44",
            label: "Teclado inalambrico",
            href: "/category/periferiscos/teclado_inalambrico",
          },
          {
            value: "45",
            label: "Parlantes",
            href: "/category/periferiscos/parlantes",
          },
          {
            value: "46",
            label: "Joysticks",
            href: "/category/periferiscos/joystick",
          },
          {
            value: "47",
            label: "Webcam",
            href: "/category/periferiscos/webcam",
          },
          {
            value: "48",
            label: "Auriculares",
            href: "/category/periferiscos/auriculares",
          },
          {
            value: "49",
            label: "Mouse + teclado cableados",
            href: "/category/periferiscos/kit_cables",
          },
          {
            value: "50",
            label: "Mouse + teclado inalambricos",
            href: "/category/periferiscos/kit_inalambrico",
          },
          {
            value: "51",
            label: "Multiplicadores USB",
            href: "/category/periferiscos/multiplicadores_USB",
          },
          {
            value: "52",
            label: "Placas de sonido USB",
            href: "/category/periferiscos/placas_sonido",
          },
        ],
      },
      {
        value: "53",
        label: "Internet",
        children: [
          {
            value: "54",
            label: "Routers",
            href: "/category/internet/router",
          },
          {
            value: "55",
            label: "Extensor",
            href: "/category/internet/extensores",
          },
          {
            value: "56",
            label: "Mesh",
            href: "/category/internet/mesh",
          },
          {
            value: "57",
            label: "Placas de red",
            href: "/category/internet/placa_red",
          },
        ],
      },
      {
        value: "58",
        label: "Energia y cables",
        children: [
          {
            value: "59",
            label: "Cargadores Notebooks",
            href: "/category/energia_cables/cargador_notebook",
          },
          {
            value: "60",
            label: "Cargadores autos",
            href: "/category/energia_cables/cargador_auto",
          },
          {
            value: "61",
            label: "Cargadores 220V",
            href: "/category/energia_cables/cargadore_220v",
          },
          {
            value: "62",
            label: "Pilas",
            href: "/category/energia_cables/pila",
          },
          {
            value: "63",
            label: "Cables",
            href: "/category/energia_cables/cable",
          },
          {
            value: "64",
            label: "Enería",
            href: "/category/energia_cables/energia",
          },
        ],
      },
      {
        value: "65",
        label: "Leds",
        children: [
          {
            value: "66",
            label: "Espejos leds",
            href: "/category/leds/espejos_led",
          },
          {
            value: "67",
            label: "Aros led",
            href: "/category/leds/aros_led",
          },
          {
            value: "68",
            label: "Luces tiras",
            href: "/category/leds/luces_tiras",
          },
          {
            value: "69",
            label: "Lamparas inteligentes",
            href: "/category/leds/lamparas",
          },
        ],
      },
      {
        value: "70",
        label: "Almacenamiento",
        children: [
          {
            value: "71",
            label: "Memorias Micro SD",
            href: "/category/almacenamiento/micro_sd",
          },
          {
            value: "72",
            label: "Pendrives",
            href: "/category/almacenamiento/pendrives",
          },
          {
            value: "73",
            label: "Carry disk/Caddy",
            href: "/category/almacenamiento/carry_disk",
          },
        ],
      },
      {
        value: "74",
        label: "Bluetooth",
        children: [
          {
            value: "75",
            label: "Adaptadores",
            href: "/category/bluetooth/adaptadores_bluetooth",
          },
          {
            value: "76",
            label: "Auriculares",
            href: "/category/bluetooth/auriculares_bluetooth",
          },
          {
            value: "77",
            label: "Parlantes",
            href: "/category/bluetooth/parlantes_bluetooth",
          },
        ],
      },
      {
        value: "78",
        label: "Smartwatchs",
        href: "/category/smartwatchs",
      },
      {
        value: "79",
        label: "Seguridad",
        href: "/category/seguridad",
      },
      {
        value: "80",
        label: "Varios",
        children: [
          {
            value: "81",
            label: "Soporte TV",
            href: "/category/varios/soporte_tv",
          },
          {
            value: "82",
            label: "Control remotos",
            href: "/category/varios/control_remoto",
          },
          {
            value: "83",
            label: "Conversores Smart",
            href: "/category/varios/conversores_smart",
          },
          {
            value: "84",
            label: "Balanzas",
            href: "/category/varios/balanzas",
          },
          {
            value: "85",
            label: "Carteles",
            href: "/category/varios/carteles",
          },
          {
            value: "86",
            label: "Máscaras",
            href: "/category/varios/mascaras",
          },
          {
            value: "87",
            label: "Pizarras",
            href: "/category/varios/pizarras",
          },
          {
            value: "88",
            label: "Adaptadores",
            href: "/category/varios/adaptadores",
          },
          {
            value: "89",
            label: "Soportes notebooks",
            href: "/category/varios/soportes_notebooks",
          },
          {
            value: "90",
            label: "Videoconsolas",
            href: "/category/varios/videoconsolas",
          },
          {
            value: "91",
            label: "Varios",
            href: "/category/varios/varios",
          },
        ],
      },
    ],
  },

  //Juegos
  {
    value: "35",
    label: "Juegos digitales",
    href: "/category/juegos_digitales",
  },

  //Impresion 3D
  {
    value: "36",
    label: "Impresion 3D",
    href: "/category/impresion_3d",
  },

  //Servicio tecnico
  {
    value: "37",
    label: "Servicio tecnico",
    href: "/servicio_tecnico",
  },
];

