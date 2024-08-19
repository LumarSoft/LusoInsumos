import AdminModule from "@/modules/Admin/home";
import { fetchData } from "@/services/request";

export default async function Admin() {
  const products = await fetchData("getProductsEditables");

  return <AdminModule products={products}/>;
}
