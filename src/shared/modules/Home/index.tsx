import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { IBrands } from "@/shared/type/IBrands";
import { ProductType } from "@/shared/type/ProductTypes";

const HomeModule = ({
  products,
  brands,
}: {
  products: ProductType[];
  brands: IBrands[];
}) => {
  return (
    <main className="w-full h-full">
      <h1 className="text-center text-2xl font-semibold pt-6 lg:text-4xl">
        Productos disponibles
      </h1>
      <GridProducts products={products} brands={brands} />
    </main>
  );
};

export default HomeModule;
