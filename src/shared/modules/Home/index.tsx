import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { IBrands } from "@/shared/type/IBrands";
import { IProduct } from "@/shared/type/IProduct";

const HomeModule = ({celulares,brands,}: {celulares: IProduct[];brands: IBrands[]}) => {
  return (
    <main className="w-full h-full">
      <h1 className="text-center text-2xl font-semibold pt-6 lg:text-4xl">
        Productos disponibles
      </h1>
      <GridProducts products={celulares} brands={brands}/>
    </main>
  );
};

export default HomeModule;
