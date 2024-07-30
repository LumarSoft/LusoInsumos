import { fetchData } from "@/services/axios/request";
import CategoryModule from "@/shared/modules/CategoryModule";
import { getBrands } from "@/shared/utils/getBrands";

export default async function Subcategory({
  params,
}: {
  params: { category: string; subcategory: string };
}) {

  const products = await fetchData(
    `getProductsByCondition/${params.category}/${params.subcategory}`
  );

  const brands = getBrands(products);

  return (
    <CategoryModule
      products={products || []}
      category={params.subcategory}
      brands={brands}
    />
  );
}
