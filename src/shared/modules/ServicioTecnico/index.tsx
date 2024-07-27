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
import { Textarea } from "@/components/ui/textarea";

export const ServicioTecnicoModule = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-10">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Contáctanos</CardTitle>
        <CardDescription>
          Llena el formulario y nos pondremos en contacto contigo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" placeholder="tu@ejemplo.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Número de teléfono</Label>
            <Input id="phone" type="tel" placeholder="3415690470" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">Enviar</Button>
      </CardFooter>
    </Card>
  );
};
