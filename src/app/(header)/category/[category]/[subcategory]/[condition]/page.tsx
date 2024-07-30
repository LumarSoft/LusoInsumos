import { getProductsByCondition } from "@/services/mysql/querys";
import CategoryModule from "@/shared/modules/CategoryModule";
import { ProductType } from "@/shared/type/ProductTypes";
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
  let products: ProductType[] = [];

  products = await getProductsByCondition(params.subcategory, params.condition);

  const brands = getBrands(products);

  return (
    <CategoryModule
      brands={brands}
      products={products}
      category={params.category}
    />
  );
}
