import { fetchData } from "@/services/request";
import AdminModule from "@/shared/modules/Admin";

export default async function Admin() {
  const productsEditables = await fetchData("getProductsEditables")
  console.log(productsEditables)


  return <AdminModule products={productsEditables} />;
}
