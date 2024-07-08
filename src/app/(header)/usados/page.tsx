import { getAllProducts } from "@/firebase/firestore/firestore";
import UsadosModule from "@/shared/modules/Usados";
import { IProduct } from "@/shared/type/IProduct";

const loadUsados = async () => {
  try {
    const response = await getAllProducts("celulares-usados");
    return response as IProduct[];
  } catch {
    console.log("Ha ocurrido un error inesperado", Error);
  }
};
export default async function Usados() {
  const celularesUsados = await loadUsados();
  return <UsadosModule celulares={celularesUsados || []} />;
}
