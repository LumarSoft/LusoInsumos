import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { IBrands } from "@/shared/type/IBrands";
import { ProductType } from "@/shared/type/ProductTypes";
import { SliderBanner } from "./components/SliderBanner";
import { SliderProductsComponent } from "./components/SliderProductsComponent";

const HomeModule = ({
  products,
  brands,
  banners,
  computer,
}: {
  products: ProductType[];
  brands: IBrands[];
  banners: any[];
  computer: ProductType[];
}) => {

  const productsForSlider = products
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  return (
    <main className="w-full h-full">
      <SliderBanner banners={banners} />
      <div className="px-4 md:px-28 2xl:px-80 pt-16">
        <div>
          <h3 className="text-xl 2xl:text-4xl text-center pb-6 font-semibold">
            Celulares destacados
          </h3>
          <SliderProductsComponent items={productsForSlider} />
        </div>

        <div>
          <h3 className="text-xl 2xl:text-4xl text-center pb-6 font-semibold">
            Computadoras destacadas
          </h3>
          <SliderProductsComponent items={computer} />
        </div>

        <div>
          <h3 className="text-xl 2xl:text-4xl text-center pb-6 font-semibold">
            Catalogo de celulares
          </h3>
          <GridProducts products={products} brands={brands} />
        </div>
      </div>
    </main>
  );
};

export default HomeModule;
