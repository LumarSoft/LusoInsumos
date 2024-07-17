import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IBrands } from "@/shared/type/IBrands";

export const FilterButtons = ({
  setSortOrder,
}: {
  brands: IBrands[];
  setSortOrder: (value: string) => void;
  setSelectedBrand: (value: string) => void;
}) => {
  return (
    <div className="mb-4 flex items-center space-x-4 justify-end max-md:justify-center">
      <FilterPrice setSortOrder={setSortOrder} />
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
      <SelectTrigger className="lg:w-[280px] sm:w-full">
        <SelectValue placeholder="Ordenar por" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Mayor">
          <b>Ordenar por precio:</b> mayor a menor
        </SelectItem>
        <SelectItem value="Menor">
          <b>Ordenar por precio:</b> menor a mayor
        </SelectItem>
        <SelectItem value="Novedades">
          <b>Ordenar por:</b> los últimos
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
