import {
    deleteObject,
    getDownloadURL,
    ref,
    listAll,
    uploadBytes,
  } from "firebase/storage";
  import { storage } from "../config";
  
  // Función para subir archivos
  export const uploadFile = async (file: File) => {
    try {
      const storageRef = ref(storage, `images/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      return url;
    } catch (error) {
      console.log("Ha ocurrido un error", error);
    }
  };
  
  export const deleteFile = async (url: string) => {
    try {
      const imagesRef = ref(storage, 'images');
      
      const result = await listAll(imagesRef);
      
      for (const itemRef of result.items) {
        const itemUrl = await getDownloadURL(itemRef);
        if (itemUrl === url) {
          await deleteObject(itemRef);
          console.log("Archivo eliminado correctamente");
          return;
        }
      }
  
      console.log("No se encontró el archivo con la URL proporcionada");
    } catch (error) {
      console.log("Ha ocurrido un error", error);
    }
  };
  