import BannersModule from "@/modules/Admin/Banner";
import { getAllDocs } from "@/services/firebase/firestore/firestore";

export default async function Banners() {
  const banners = await getAllDocs("banners");

  return <BannersModule data={banners} />;
}
