import { fetchData } from "@/services/request";
import CategoryModule from "@/shared/modules/CategoryModule";
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



  const products = await fetchData(`getProductsByCondition/${params.subcategory}/${params.condition}`);

  const brands = getBrands(products);


  return (
    <CategoryModule brands={brands} products={products} category={params.condition} />
  )


}
