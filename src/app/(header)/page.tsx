import CategoryModule from "@/shared/modules/CategoryModule";
import {
  getAllProducts,
  getBrandsPhones,
} from "@/firebase/firestore/firestore";
import { IBrands } from "@/shared/type/IBrands";
import { ProductType } from "@/shared/type/ProductTypes";

const loadHome = async (): Promise<{
  products: ProductType[];
  brands: IBrands[];
}> => {
  try {
    const products = await getAllProducts("celulares");
    const brands = await getBrandsPhones("celulares");

    return { products, brands };
  } catch (error) {
    console.log("Ha ocurrido un error inesperado al retornar productos", error);
    return { products: [], brands: [] };
  }
};

export default async function Home() {
  const { products, brands } = await loadHome();

  return <CategoryModule products={products} brands={brands} category="" />;
}
