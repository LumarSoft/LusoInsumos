import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { IBrands } from "@/shared/type/IBrands";
import { ProductType } from "@/shared/type/ProductTypes";

interface CategoryModuleProps {
  products: ProductType[];
  category: string;
  brands: IBrands[];
}

export default function CategoryModule({
  products,
  category,
  brands,
}: CategoryModuleProps) {
  return (
    <div className="px-4 md:px-28 2xl:px-80 pt-20">
      {products.length > 0 ? (
        <GridProducts products={products} brands={brands} />
      ) : (
        <h3 className="text-center">No se encontraron productos</h3>
      )}
    </div>
  );
}
