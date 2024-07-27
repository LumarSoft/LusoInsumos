import { getProductsByCondition } from "@/firebase/firestore/firestore";
import CategoryModule from "@/shared/modules/CategoryModule";
import { ProductType } from "@/shared/type/ProductTypes";
import { getBrands } from "@/shared/utils/getBrands";
import { IBrands } from "@/shared/type/IBrands";

interface SubcategoryParams {
  category: string;
  subcategory: string;
  condition: string;
}

export default async function Subcategory({
  params,
}: {
  params: SubcategoryParams;
}) {
  let products: ProductType[] = [];
  let brands: IBrands[] = [];

  products = await getProductsByCondition(params.subcategory, params.condition);

  const brandStrings = getBrands(products);
  brands = brandStrings.map((brand) => ({ brand }));

  return (
    <CategoryModule
      brands={brands}
      products={products}
      category={params.category}
    />
  );
}
