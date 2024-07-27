import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { IBrands } from "@/shared/type/IBrands";
import { ProductType } from "@/shared/type/ProductTypes";
import { SliderBanner } from "./components/SliderBanner";
import { SliderProductsComponent } from "./components/SliderProductsComponent";

const HomeModule = ({
  products,
  brands,
  banners,
}: {
  products: ProductType[];
  brands: IBrands[];
  banners: any[];
}) => {
  const productsForSlider = products.slice(0, 10);
  return (
    <main className="w-full h-full">
      <SliderBanner banners={banners} />
      <div className="px-4 md:px-28 2xl:px-80 pt-16">
        <SliderProductsComponent items={productsForSlider} />

        <GridProducts products={products} brands={brands} />
      </div>
    </main>
  );
};

export default HomeModule;
