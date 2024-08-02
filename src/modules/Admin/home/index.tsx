import { DataTable } from "./components/table/DataTable";
import { columns } from "./components/table/Columns";

const AdminModule = ({ products }: { products: any[] }) => {
  return (
    <main className="py-10 px-20">
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
