// Archivo auth.ts
import { signInWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "../config";

export const LoginAdmin = async (email: string, password: string) => {
  try {
    const data = await signInWithEmailAndPassword(
      authFirebase,
      email,
      password
    );
    const userData = data.user;
    return userData;
  } catch (error) {
    throw error; // Lanza el error para que sea capturado por la llamada a LoginAdmin
  }
};
