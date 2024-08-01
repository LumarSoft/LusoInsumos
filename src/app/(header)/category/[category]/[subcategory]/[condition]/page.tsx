import { fetchData } from "@/services/request";
import CategoryModule from "@/shared/modules/CategoryModule";
import { IBrands } from "@/shared/type/IBrands";
import { getBrands } from "@/shared/utils/getBrands";

interface SubcategoryParams {
  category: string;
  subcategory: string;
  condition: string;
}

export default async function Subcategory({
  params,
}: {
  params: SubcategoryParams;
}) {
  let brands: IBrands[] = []


  const products = await fetchData(`getProductsByCondition/${params.subcategory}/${params.condition}`);

  if (products) {
    brands = getBrands(products);
  }



  return (
    <CategoryModule brands={brands} products={products || []} category={params.condition} />
  )


}
