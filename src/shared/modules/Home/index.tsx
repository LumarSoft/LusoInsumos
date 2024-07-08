import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { IProduct } from "@/shared/type/IProduct";

const HomeModule = ({ celulares }: { celulares: IProduct[] }) => {
  return (
    <main className="w-full h-full">
      <h1 className="text-center text-2xl font-semibold pt-6 lg:text-4xl">
        Productos disponibles
      </h1>
      <GridProducts products={celulares} />
    </main>
  );
};

export default HomeModule;
