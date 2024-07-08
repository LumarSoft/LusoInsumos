import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";
import { IProduct } from "@/shared/type/IProduct";
import { IBrands } from "@/shared/type/IBrands";

export const getAllProducts = async (
  collectionName: string
): Promise<IProduct[]> => {
  try {
    const collectionRef = collection(db, collectionName);
    const documentos = await getDocs(collectionRef);
    const data: IProduct[] = documentos.docs.map(
      (doc) => doc.data() as IProduct
    );
    return data;
  } catch (error) {
    console.log("Ha ocurrido un error", error);
    return [];
  }
};

export const getBrandsPhones = async (): Promise<IBrands[]> => {
  try {
    const collectionRef = collection(db, "celulares");
    const documentos = await getDocs(collectionRef);
    const data = documentos.docs.map((doc) => doc.data());
    const brands = data.map((doc) => doc.brand);
    return brands.filter((brand, index) => brands.indexOf(brand) === index);
  } catch (error) {
    console.log("Ha ocurrido un error", error);
    return [];
  }
};
