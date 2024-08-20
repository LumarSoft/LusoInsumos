import AdminModule from "@/modules/Admin/home";
import { IProductManual } from "@/shared/types/IProductManual";

export default async function Admin() {
  const response = await fetch(`https://www.lusoinsumos.com/api/getProductsEditables`, {
    cache: "no-cache",
  });

  const products: IProductManual[] = await response.json();
  console.log(products);

  return <AdminModule products={products} />;
}
