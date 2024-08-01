import { fetchData } from "@/services/request";
import AdminModule from "@/shared/modules/Admin";

export default async function Admin() {
  const productsEditables = await fetchData("getProductsEditables")


  return <AdminModule products={productsEditables} />;
}
