import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { SearchProduct } from "@/shared/components/Search/SearchProduct";
import { IProduct } from "@/shared/types/IProduct";

interface CategoryModuleProps {
  brands: any[];
  products: IProduct[];
  category: string;
}

export default function CategoryModule({
  brands,
  products,
  category,
}: CategoryModuleProps) {
  return (
    <div className="px-4 md:px-28 2xl:px-80">
      <SearchProduct />

      {products.length > 0 ? (
        <GridProducts products={products} brands={brands} category={category} />
      ) : (
        <h3 className="text-center">No se encontraron productos</h3>
      )}
    </div>
  );
}
