"use client";

import { IProduct } from "@/shared/types/IProduct";
import { SliderBanner } from "./components/SliderBanner";
import { SliderProductsComponent } from "./components/SliderProductsComponent";
import { useState, useEffect } from "react";
import { fetchData } from "@/services/request";
import { getAllDocs } from "@/services/firebase/firestore/firestore";
import { IBanners } from "@/shared/types/IBanner";

const HomeModule = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [computer, setComputer] = useState<IProduct[]>([]);
  const [banners, setBanners] = useState<IBanners[]>([]);

  useEffect(() => {
    const fetchs = async () => {
      try {
        const phones = await fetchData("getAllTable/celulares_nuevos");
        setProducts(phones);

        const tenComputers = await fetchData("get10Products/computadoras");
        setComputer(tenComputers);

        const bannerData = await getAllDocs("banners");
        setBanners(bannerData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchs();
  }, []);

  const productsForSlider = products
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  return (
    <main className="w-full h-full">
      <SliderBanner banners={banners} />
      <div className="px-4 md:px-28 2xl:px-80 pt-16">
        <div>
          <h3 className="text-xl 2xl:text-4xl text-center pb-6 font-semibold oswald">
            Celulares destacados
          </h3>
          <SliderProductsComponent items={productsForSlider} />
        </div>

        <div>
          <h3 className="text-xl 2xl:text-4xl text-center pb-6 font-semibold mt-4 oswald">
            Computadoras destacadas
          </h3>
          <SliderProductsComponent items={computer} />
        </div>
      </div>
    </main>
  );
};

export default HomeModule;
