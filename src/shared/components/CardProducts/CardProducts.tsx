import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CardProduct = () => {
  return (
    <Card>
      <CardContent>{/* Imagen del producto */}</CardContent>
      <CardFooter>{/* Titulo y precio del producto */}</CardFooter>
    </Card>
  );
};
