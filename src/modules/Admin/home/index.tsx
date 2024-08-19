import { DataTable } from "./components/table/DataTable";
import { columns } from "./components/table/Columns";
import { IProductManual } from "@/shared/types/IProductManual";

const AdminModule = ({ products }: { products: IProductManual[] }) => {
  return (
    <main className="pt-28 lg:pt-10 lg:px-20 px-4">
      <h4 className="text-4xl font-semibold text-center">
        Productos editables
      </h4>
      <p className="text-center">
        Es posible que debas recargar la pagina para ver los cambios
      </p>
      <DataTable columns={columns} data={products || []} />
    </main>
  );
};

export default AdminModule;
