// src/app/(sidebar)/admin/page.tsx
import AdminModule from "@/modules/Admin/home";
import { fetchData } from "@/services/request";
import { IProductManual } from "@/shared/types/IProductManual";

export default async function Admin() {

  const products = await fetchData("getProductsEditables");

  return <AdminModule products={products as IProductManual[]} />;  
}
