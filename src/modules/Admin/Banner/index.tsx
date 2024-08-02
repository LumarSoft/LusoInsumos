import { AddBannerDialog } from "./components/AddBannerDialog";
import { DataTable } from "./components/table/Data-Table";
import { columns } from "./components/table/Columns";
import { IBanners } from "@/shared/types/IBanner";

export default function BannersModule({ data }: { data: IBanners[] }) {
  return (
    <main className="py-2 lg:py-10 px-40">
      <h4 className="text-2xl lg:text-4xl text-center font-semibold mb-5">
        Banners
      </h4>
      <AddBannerDialog />
      <DataTable columns={columns} data={data} />
    </main>
  );
}
