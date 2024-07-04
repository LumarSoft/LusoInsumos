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

export default function AddProductModule() {
  return (
    <main className="py-2 lg:py-10">
      <h4 className="text-2xl lg:text-4xl text-center font-semibold mb-20">
        Cargar productos manualmente
      </h4>
      <Card className="max-w-3xl m-auto">
        <form>
          <CardHeader className="text-center">
            <CardTitle>Agregar un producto</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col">
            <Label className="w-full">
              Nombre
              <Input
                type="text"
                className="input"
                placeholder="Nombre del producto"
              />
            </Label>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Cargar</Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
