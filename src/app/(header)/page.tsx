import { getAllDocs, getAllProducts } from "@/firebase/firestore/firestore";
import HomeModule from "@/shared/modules/Home";
import { IBrands } from "@/shared/type/IBrands";
import { getBrands } from "@/shared/utils/getBrands";

export default async function Home() {
  const products = await getAllProducts("celulares-nuevos");

  const brands = getBrands(products) as unknown as IBrands[];

  const banners = await getAllDocs("banners");

  return <HomeModule products={products} brands={brands} banners={banners} />;
}
