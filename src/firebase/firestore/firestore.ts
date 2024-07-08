import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";
export const getAllProducts = async (collectionName: string) => {
  try {
    const collectionRef = collection(db, collectionName);
    const documentos = await getDocs(collectionRef);
    const data = documentos.docs.map((doc) => doc.data());
    return data;
  } catch {
    console.log("Ha ocurrido un error", Error);
  }
};

export const getBrandsPhones = async () => {
  try {
    const collectionRef = collection(db, "celulares");
    const documentos = await getDocs(collectionRef);
    const data = documentos.docs.map((doc) => doc.data());
    const brands = data.map((doc) => doc.brand);
    return brands.filter((brand, index) => brands.indexOf(brand) === index);
  } catch {
    console.log("Ha ocurrido un error", Error);
  }
};
