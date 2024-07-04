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

export default function FileModule() {
  return (
    <main className="py-2 lg:py-10">
      <h4 className="text-2xl lg:text-4xl text-center font-semibold mb-20">
        Cargar productos con archivo
      </h4>
      <Card className="max-w-xl m-auto shadow-2xl">
        <CardHeader>
          <CardTitle className="text-center">Inserte el archivo</CardTitle>
          <CardDescription className="text-center">
            Por favor, asegúrese de cargar únicamente archivos en formato Excel
            (.xlsx) para la carga de productos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Label>
            Archivo
            <Input type="file" accept=".xlsx, .xls" />
          </Label>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Cargar</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
