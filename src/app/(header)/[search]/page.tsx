import CategoryModule from "@/modules/client/CategoryModule";
import { fetchData } from "@/services/request";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const products = await fetchData(`getSearch/${resolvedSearchParams.q}`);

  return (
    <CategoryModule
      brands={[]}
      products={products || []}
      category={`Resultado de: ${resolvedSearchParams.q}`}
    />
  );
}
