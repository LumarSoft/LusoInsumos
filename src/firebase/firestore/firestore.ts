import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";
import { IBrands } from "@/shared/type/IBrands";
import { ProductType } from "@/shared/type/ProductTypes";

export const getAllProducts = async (
  collectionName: string
): Promise<ProductType[]> => {
  try {
    const collectionRef = collection(db, collectionName);
    const documentos = await getDocs(collectionRef);
    const data: ProductType[] = documentos.docs.map(
      (doc) => doc.data() as ProductType
    );
    return data;
  } catch (error) {
    console.log("Ha ocurrido un error", error);
    return [];
  }
};

export const getBrandsPhones = async (category: string): Promise<IBrands[]> => {
  try {
    const collectionRef = collection(db, category);
    const documentos = await getDocs(collectionRef);
    const data = documentos.docs.map((doc) => doc.data());
    const brands = data.map((doc) => doc.brand);
    return brands.filter((brand, index) => brands.indexOf(brand) === index);
  } catch (error) {
    console.log("Ha ocurrido un error", error);
    return [];
  }
};

export const getAllBrands = async (
  collectionName: string
): Promise<IBrands[]> => {
  try {
    const collectionRef = collection(db, collectionName);
    const documentos = await getDocs(collectionRef);
    const data = documentos.docs.map((doc) => doc.data());
    const brands = data.map((doc) => doc.brand);
    return brands.filter((brand, index) => brands.indexOf(brand) === index);
  } catch (error) {
    console.log("Ha ocurrido un error", error);
    return [];
  }
};
