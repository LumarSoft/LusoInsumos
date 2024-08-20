// src/app/(sidebar)/admin/page.tsx
import AdminModule from "@/modules/Admin/home";
import { BASE_API_URL } from "@/shared/providers/envProvider";
import { IProductManual } from "@/shared/types/IProductManual";

export default async function Admin() {
  try {
    const response = await fetch(
      `https://www.lusoinsumos.com/api/getProductsEditables`,
      {
        next: { revalidate: 0 },
      }
    );

    if (!response.ok) {
      throw new Error(`Error al obtener productos: ${response.statusText}`);
    }

    const products: IProductManual[] = await response.json();
    return <AdminModule products={products} />;
  } catch (error) {
    console.error("Error al cargar productos:", error);
    return <div>Error al cargar productos</div>; // Manejo de errores en la UI
  }
}
