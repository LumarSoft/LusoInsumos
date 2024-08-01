"use client";
import { DataTable } from "./components/DataTable";
import { columns } from "./components/Columns";

const AdminModule = ({ products }: { products: any[] }) => {
  return (
    <main className="py-10 px-20">
      <h4 className="text-4xl font-semibold text-center">
        Productos editables
      </h4>
      <DataTable columns={columns} data={products || []} />
    </main>
  );
};

export default AdminModule;
