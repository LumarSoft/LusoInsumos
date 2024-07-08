import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { IProduct } from "@/shared/type/IProduct";

export default function UsadosModule({ celulares }: { celulares: IProduct[] }) {
  return (
    <div>
      <h1>Celulares Usados</h1>
      <GridProducts products={celulares} brands={[]} />
    </div>
  );
}
