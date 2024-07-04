"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginAdmin } from "@/firebase/auth/auth";
import { useUserStore } from "@/shared/stores/userStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setUser } = useUserStore();

  const handleLogin = async () => {
    if (email.length === 0 || password.length === 0) {
      toast.error("Por favor complete todos los campos");
      return;
    }

    try {
      const user: any = await LoginAdmin(email, password);

      if (user.accessToken) {
        setUser(user.email ?? "");
        router.push("/admin");
      }
    } catch (error: any) {
      toast.error("Error al iniciar sesion");
    }
  };

  return (
    <Card className="w-full max-w-xl shadow-2xl">
      <CardHeader>
        <CardTitle>Iniciar sesión</CardTitle>
        <CardDescription>Acceda al panel de administrador</CardDescription>
      </CardHeader>
      <CardContent>
        <Label>
          Email
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        </Label>
        <Label>
          Contraseña
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleLogin}>
          Iniciar sesión
        </Button>
      </CardFooter>
    </Card>
  );
};
