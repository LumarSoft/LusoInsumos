import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { ProductType } from "@/shared/type/ProductTypes";

interface CategoryModuleProps {
  products: ProductType[];
  category: string;
  brands: any[];
}

export default function CategoryModule({
  products,
  category,
  brands,
}: CategoryModuleProps) {
  return (
    <div className="px-4 md:px-28 2xl:px-80 pt-10">
      {products.length > 0 ? (
        <GridProducts products={products} brands={brands} />
      ) : (
        <h3 className="text-center">No se encontraron productos</h3>
      )}
    </div>
  );
}
