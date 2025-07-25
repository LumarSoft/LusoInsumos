export const fetchCache = 'default-no-store';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import MaintenancePage from "@/modules/Maintenance";

export const metadata: Metadata = {
  title: "Luso Insumos - Tienda de Electrónica y Servicio Técnico",
  description: "Descubre la mejor tienda de productos electrónicos y servicios técnicos en Luso Insumos. Ofrecemos una amplia gama de dispositivos, accesorios y soluciones técnicas para todas tus necesidades. Calidad garantizada y atención personalizada.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${inter.className} min-h-screen bg-background font-sans antialiased h-screen`
        )}
      >
      <MaintenancePage />
      </body>
    </html>
  );
}
