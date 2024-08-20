import AdminModule from "@/modules/Admin/home";
import { BASE_API_URL } from "@/shared/providers/envProvider";
import { IProductManual } from "@/shared/types/IProductManual";

export default async function Admin() {
  const response = await fetch(`${BASE_API_URL}/getProductsEditables`, {
    cache: "no-cache",
  });

  const products: IProductManual[] = await response.json();
  console.log(products);

  return <AdminModule products={products} />;
}
