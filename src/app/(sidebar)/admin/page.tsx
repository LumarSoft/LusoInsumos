import { fetchData } from "@/services/request";
import AdminModule from "@/modules/Admin/home";

export default async function Admin() {
  const productsEditables = await fetchData("getProductsEditables");

  if (!productsEditables) {
    return null;
  }

  return <AdminModule products={productsEditables} />;
}
