import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config";
import { uploadFile } from "../storage/storage";

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
