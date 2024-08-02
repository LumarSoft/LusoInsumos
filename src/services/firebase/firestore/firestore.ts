import { db } from "@/services/firebase/config";
import { collection, getDocs, deleteDoc, addDoc } from "firebase/firestore";
import { IBanners } from "@/shared/types/IBanner";

export const getAllDocs = async (
  collectionName: string
): Promise<IBanners[]> => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const banners: IBanners[] = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      url: data.url,
      alt: data.alt,
      category: data.category,
    };
  });
  return banners;
};

export const addDocument = async (nameCollection: string, data: IBanners) => {
  try {
    await addDoc(collection(db, nameCollection), data);
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};

export const deleteBanner = async (url: string): Promise<boolean> => {
  try {
    const querySnapshot = await getDocs(collection(db, "banners"));
    const deletePromises = querySnapshot.docs.map(async (doc) => {
      const data = doc.data();
      if (data.url === url) {
        await deleteDoc(doc.ref);
        console.log("Banner successfully deleted!");
      }
    });

    await Promise.all(deletePromises);
    return true;
  } catch (error) {
    console.error("Error deleting banner: ", error);
    return false;
  }
};
