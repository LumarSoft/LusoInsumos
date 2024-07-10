import { getAllBrands, getAllProducts } from "@/firebase/firestore/firestore";
import CategoryModule from "@/shared/modules/CategoryModule";
import { ProductType } from "@/shared/type/ProductTypes";

const loadCategory = async (category: string) => {
  try {
    const products = await getAllProducts(category);
    const brands = await getAllBrands(category);
    return { products, brands };
  } catch {
    console.log("Ha ocurrido un error inesperado", Error);
  }
};
export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const categoryData = await loadCategory(params.category);
  const { products, brands } = categoryData || { products: [], brands: [] };
  return (
    <CategoryModule
      products={products || []}
      category={params.category}
      brands={brands || []}
    />
  );
}

// Se eliminó el HomeModule y se reemplazó por el CategoryModule
