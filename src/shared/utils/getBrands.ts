import { ProductType } from "../type/ProductTypes";

export const getBrands = (arrProducts: ProductType[]): string[] => {
  const brands = arrProducts
    .map((product) => product.brand)
    .filter((brand): brand is string => brand !== undefined);

  const uniqueBrands = brands.filter(
    (brand, index) => brands.indexOf(brand) === index
  );

  return uniqueBrands;
};
