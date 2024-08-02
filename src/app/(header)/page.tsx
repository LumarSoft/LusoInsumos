import { getAllDocs } from "@/services/firebase/firestore/firestore";
import { fetchData } from "@/services/request";
import HomeModule from "@/modules/client/Home";
import { IProduct } from "@/shared/types/IProduct";
import { getBrands } from "@/shared/utils/getBrands";

export default async function Home() {
  const phones = await fetchData("getAllTable/celulares_nuevos");

  if (!phones) {
    return null;
  }
  const brands = getBrands(phones as IProduct[]);

  const tenComputers = await fetchData("get10Products/computadoras");

  const banners = await getAllDocs("banners");

  return (
    <HomeModule
      products={phones}
      brands={brands}
      banners={banners}
      computer={tenComputers}
    />
  );
}
