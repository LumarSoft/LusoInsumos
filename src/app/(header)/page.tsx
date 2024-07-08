import HomeModule from "@/shared/modules/Home";
import { getAllProducts } from "@/firebase/firestore/firestore";
import { IProduct } from "@/shared/type/IProduct";
const loadHome = async () => {
  try {
    const response = await getAllProducts("celulares");
    return response as IProduct[];
  } catch {
    console.log("Ha ocurrido un error inesperado al retornar celulares", Error);
  }
};
export default async function Home() {
  const celulares = await loadHome();
  return <HomeModule celulares={celulares || []} />;
}
