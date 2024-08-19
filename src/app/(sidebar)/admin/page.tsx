import AdminModule from "@/modules/Admin/home";
import { IProductManual } from "@/shared/types/IProductManual";

export default async function Admin() {
  const response = await fetch(
    "https://www.lusoinsumos.com/api/getProductsEditables",
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );
  const products: IProductManual[] = await response.json();

  return <AdminModule products={products} />;
}
