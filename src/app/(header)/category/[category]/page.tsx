import { fetchData } from "@/services/request";
import CategoryModule from "@/modules/client/CategoryModule";
import { getBrands } from "@/shared/utils/getBrands";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {

  const products = await fetchData(`getAllTable/${params.category}`);

  let brands;

  if (products) {
    brands = getBrands(products);
  }

  return (
    <CategoryModule
      products={products || []}
      category={params.category}
      brands={brands || []}
    />
  );
}
