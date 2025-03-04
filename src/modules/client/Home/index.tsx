"use client";

import { IProduct } from "@/shared/types/IProduct";
import { SliderBanner } from "./components/SliderBanner";
import { SliderProductsComponent } from "./components/SliderProductsComponent";
import { useState, useEffect } from "react";
import { fetchData } from "@/services/request";
import { getAllDocs } from "@/services/firebase/firestore/firestore";
import { IBanners } from "@/shared/types/IBanner";
import { SearchProduct } from "@/shared/components/Search/SearchProduct";

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
    <main className="w-full h-full py-20 lg:pt-36">
      <SearchProduct />

      <SliderBanner banners={banners} />
      <div className="px-4 md:px-28 2xl:px-80 pt-10">
        <div>
          <div className="flex justify-center mb-6">
            <h3 className="relative inline-block text-2xl 2xl:text-4xl text-center font-bold text-white uppercase tracking-wider">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-80 rounded-lg transform -skew-x-6"></span>
              <span className="relative z-10 px-6 py-2">
                Lo último en smartphones
              </span>
            </h3>
          </div>

          <SliderProductsComponent items={productsForSlider} />
        </div>

        <div className="mt-16">
          <div className="flex justify-center mb-6">
            <h3 className="relative inline-block text-2xl 2xl:text-4xl text-center font-bold text-white uppercase tracking-wider">
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-80 rounded-lg transform -skew-x-6"></span>
              <span className="relative z-10 px-6 py-2">
                Potencia tu trabajo con nuestras PCs
              </span>
            </h3>
          </div>
          <SliderProductsComponent items={computer} />
        </div>
      </div>
    </main>
  );
};

export default HomeModule;
