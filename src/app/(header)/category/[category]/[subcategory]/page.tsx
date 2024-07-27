import { getAllProducts } from "@/firebase/firestore/firestore";
import CategoryModule from "@/shared/modules/CategoryModule";
import { getBrands } from "@/shared/utils/getBrands";

export default async function Subcategory({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  const products = await getAllProducts(params.subcategory);

  const brands = getBrands(products);

  return (
    <CategoryModule
      products={products || []}
      category={params.subcategory}
      brands={brands}
    />
  );
}
