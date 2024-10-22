import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { IProduct } from "@/shared/types/IProduct";
import { PackageSearch } from "lucide-react";

interface CategoryModuleProps {
  products: IProduct[];
  category: string;
  brands: any[];
}

export default function CategoryModule({
  products,
  category,
  brands,
}: CategoryModuleProps) {
  return (
    <div className="px-4 md:px-28 2xl:px-80">
      {products.length > 0 ? (
        <GridProducts products={products} brands={brands} category={category} />
      ) : (
        <Card className="w-full max-w-md mx-auto mt-20">
          <CardHeader className="text-center">
            <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center">
              <PackageSearch className="h-10 w-10 text-muted-foreground" />
            </div>
            <CardTitle className="mt-4 text-xl font-semibold">
              No se han encontrado productos
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            <p>
              Lo sentimos, no hemos podido encontrar ningún producto que
              coincida con tu búsqueda.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline">
              <a href="/">Regresar a la home</a>
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
