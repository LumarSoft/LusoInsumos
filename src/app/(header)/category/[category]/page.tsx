import { getAllProducts } from "@/firebase/firestore/firestore";
import CategoryModule from "@/shared/modules/CategoryModule";
import { getBrands } from "@/shared/utils/getBrands";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  // aca se podrian ver correctamente paginas como localhost:3000/liquidacion, electronica, juegos digitales, etc
  const products = await getAllProducts(params.category);

  const brands = getBrands(products);


  return (
    <CategoryModule
      products={products || []}
      category={params.category}
      brands={brands || []}
    />
  );
}
