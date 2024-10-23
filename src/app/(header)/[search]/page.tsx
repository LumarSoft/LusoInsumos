import CategoryModule from "@/modules/client/CategoryModule";
import { fetchData } from "@/services/request";

export default async function Page({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const searchTerm = encodeURIComponent(searchParams.q);
  const products = await fetchData(`getSearch/${searchTerm}`);

  return (
    <CategoryModule
      brands={[]}
      products={products || []}
      category={`Resultado de: ${searchTerm}`}
    />
  );
}
