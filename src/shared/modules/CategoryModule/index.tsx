import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { IBrands } from "@/shared/type/IBrands";
import { ProductType } from "@/shared/type/ProductTypes";

export default function CategoryModule({
  products,
  category,
  brands,
}: {
  products: ProductType[];
  category: string;
  brands: IBrands[];
}) {
  return (
    <div>
      <GridProducts products={products} brands={brands} />
    </div>
  );
}
