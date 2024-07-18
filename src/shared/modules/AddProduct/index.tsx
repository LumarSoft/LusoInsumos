import { AddForm } from "./components/AddForm";

export default function AddProductModule() {
  return (
    <main className="py-2 lg:py-10">
      <h4 className="text-2xl lg:text-4xl text-center font-semibold mb-20">
        Cargar productos manualmente
      </h4>
      <AddForm />
    </main>
  );
}
