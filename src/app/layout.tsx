export const fetchCache = 'default-no-store';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MaintenancePage from "@/modules/Maintenance";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
  title: "Luso Insumos - Sitio en Mantenimiento",
  description: "Estamos trabajando para mejorar nuestra plataforma. Pronto estaremos de regreso con nuevas funcionalidades.",
};

// Mostrar página de mantenimiento en todo el sitio
export default function RootLayout() {
  return (
    <html lang="es">
      <body
        className={cn(
          `${inter.className} min-h-screen bg-white font-sans antialiased h-screen`
        )}
      >
        <MaintenancePage />
        <ToastContainer />
      </body>
    </html>
  );
}
