import { IBrands } from "../type/IBrands";
import { ProductType } from "../type/ProductTypes";

export const getBrands = (arrProducts: ProductType[]): IBrands[] => {
  const brands = arrProducts
    .map((product) => product.brand)
    .filter((brand): brand is string => brand !== undefined);

  const uniqueBrands = brands.filter(
    (brand, index) => brands.indexOf(brand) === index
  );

  return uniqueBrands.map((brand) => ({ brand: [brand] }));
};