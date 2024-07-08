import { getAllProducts } from "@/firebase/firestore/firestore";
import UsadosModule from "@/shared/modules/Usados";
import { IProduct } from "@/shared/type/IProduct";

const loadCategory = async (category: string) => {
  try {
    const response = await getAllProducts(category);
    return response as IProduct[];
  } catch {
    console.log("Ha ocurrido un error inesperado", Error);
  }
};
export default async function Category({params}: {params: { category: string }}) {
  const celularesUsados = await loadCategory(params.category);

  
  return <UsadosModule celulares={celularesUsados || []} />;
}
