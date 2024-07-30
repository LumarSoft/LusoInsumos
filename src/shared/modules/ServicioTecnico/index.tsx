"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ServicioTecnicoModule = () => {
  const [formData, setFormData] = useState({
    user_email: "",
    user_phone: "",
    message: "",
  });

  const form = useRef<HTMLFormElement | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.user_email || !formData.user_phone || !formData.message) {
      console.log("Por favor, completa todos los campos.");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_deu08ae",
        "template_j3qafnh",
        (form.current ?? undefined) as unknown as HTMLFormElement,
        "9WDePDRC2s6hN1xRx"
      );
      console.log("Mensaje enviado con éxito!");
      setFormData({ user_email: "", user_phone: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      console.log(
        "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo."
      );
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto mt-10">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Contáctanos</CardTitle>
        <CardDescription>
          Llena el formulario y nos pondremos en contacto contigo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="user_email">Correo electrónico</Label>
            <Input
              id="user_email"
              name="user_email"
              type="email"
              placeholder="tu@ejemplo.com"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="user_phone">Número de teléfono</Label>
            <Input
              id="user_phone"
              name="user_phone"
              type="number"
              placeholder="3415690470"
              value={formData.user_phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Enviar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
