import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config";
import { IBrands } from "@/shared/type/IBrands";
import { ProductType } from "@/shared/type/ProductTypes";
import { uploadFile } from "../storage/storage";

const collectionNames = [
  "celulares",
  "celulares-usados",
  "equiposarmados",
  "hardware",
  "monitores",
];

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

export const getAllProductsEditables = async () => {
  try {
    const promises = collectionNames.map(async (colName) => {
      const colRef = collection(db, colName);
      const q = query(colRef, where("editable", "==", true));
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    });

    const results = await Promise.all(promises);
    console.log("Documentos editables:", results.flat());
    return results.flat(); // Devuelve todos los documentos en un solo array
  } catch (error) {
    console.error("Ha ocurrido un error", error);
  }
};

export const getAllDocs = async (collectionName: string) => {
  try {
    const collectionRef = collection(db, collectionName);
    const documentos = await getDocs(collectionRef);
    const data = documentos.docs.map((doc) => doc.data());
    return data;
  } catch (error) {
    console.log("Ha ocurrido un error", error);
    return [];
  }
};

export const addProductEditable = async (collectionName: string, data: any) => {
  try {
    // primero almacenamos la imagen y obtenemos su url
    const url = await uploadFile(data.image);

    // almacenamos los datos en la coleccion correspondiente
    const collectionRef = collection(db, collectionName);
    await addDoc(collectionRef, {
      ...data,
      image: url,
      editable: true,
    });

    return true;
  } catch (error) {
    console.log("Ha ocurrido un error", error);
    return false;
  }
};
