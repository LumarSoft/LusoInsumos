import HomeModule from "@/shared/modules/Home";
import {
  getAllProducts,
  getBrandsPhones,
} from "@/firebase/firestore/firestore";
import { IProduct } from "@/shared/type/IProduct";
import { IBrands } from "@/shared/type/IBrands";

const loadHome = async (): Promise<{
  products: IProduct[];
  brands: IBrands[];
}> => {
  try {
    const products = await getAllProducts("celulares");
    const brands = await getBrandsPhones();

    return { products, brands };
  } catch (error) {
    console.log("Ha ocurrido un error inesperado al retornar celulares", error);
    return { products: [], brands: [] };
  }
};

export default async function Home() {
  const { products, brands } = await loadHome();

  return <HomeModule celulares={products} brands={brands} />;
}
