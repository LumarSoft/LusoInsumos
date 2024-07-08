import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getBrandsPhones } from "@/firebase/firestore/firestore";

const BrandsFilter = async ({
  setSelectedBrand,
}: {
  setSelectedBrand: any;
}) => {
  const brands = await getBrandsPhones();
  console.log(brands);
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Todas" />
      </SelectTrigger>
      <SelectContent onChange={() => console.log("asd")}>
        {brands?.map((brand) => (
          <SelectItem key={brand} value={brand}>
            {brand}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default BrandsFilter;
