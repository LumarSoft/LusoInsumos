import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { IProduct } from "@/shared/types/IProduct";

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
        <h3 className="text-center">No se encontraron productos</h3>
      )}
    </div>
  );
}
