"use client";
import BannersModule from "@/modules/Admin/Banner";
import { getAllDocs } from "@/services/firebase/firestore/firestore";
import { IBanners } from "@/shared/types/IBanner";
import { useEffect, useState } from "react";

export default function Banners() {
  const [banners, setBanners] = useState<IBanners[]>([]);

  useEffect(() => {
    getAllDocs("banners").then((res) => {
      setBanners(res);
    });
  }, []);


  return <BannersModule data={banners} />;
}
