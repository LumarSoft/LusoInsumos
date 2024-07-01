import { GridProducts } from "@/shared/components/GridProducts/GridProducts";

const HomeModule = () => {
  return (
    <main className="w-full h-full">
      <h1 className="text-center text-2xl font-semibold pt-6 lg:text-4xl">
        Productos disponibles
      </h1>
      <GridProducts />
    </main>
  );
};

export default HomeModule;
