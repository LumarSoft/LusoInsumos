import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IBrands } from "@/shared/type/IBrands";

export const FilterButtons = ({
  brands,
  setSortOrder,
  setSelectedBrand,
}: {
  brands: IBrands[];
  setSortOrder: (value: string) => void;
  setSelectedBrand: (value: string) => void;
}) => {
  return (
    <div className="mb-4 flex items-center space-x-4 justify-end max-md:justify-center">
      <FilterPrice setSortOrder={setSortOrder} />
      <FilterBrand brands={brands} setSelectedBrand={setSelectedBrand} />
    </div>
  );
};

const FilterPrice = ({
  setSortOrder,
}: {
  setSortOrder: (value: string) => void;
}) => {


  const handleChange = (value: string) => {
    setSortOrder(value);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Novedades" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Novedades">Novedades</SelectItem>
        <SelectItem value="Menor">Menor</SelectItem>
        <SelectItem value="Mayor">Mayor</SelectItem>
      </SelectContent>
    </Select>
  );
};

const FilterBrand = ({
  brands,
  setSelectedBrand,
}: {
  brands: IBrands[];
  setSelectedBrand: (value: string) => void;
}) => {
  
  const handleValueChange = (value: string) => {
    setSelectedBrand(value);
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Todos" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Todos">Todos</SelectItem>
        {brands.map((brand, index) => {
          return (
            <SelectItem key={index} value={brand.toString()}>
              {brand.toString()}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
