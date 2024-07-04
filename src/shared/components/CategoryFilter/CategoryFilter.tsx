import React, { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import {
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { CategoryFilterProps } from "@/shared/type/CategoryFilterProps";

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedBrand,
  onSelectBrand,
}) => {
  const [brands, setBrands] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const productsRef = collection(db, "celulares");
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
          productsRef
        );
        const uniqueBrands: string[] = [];

        querySnapshot.forEach((doc) => {
          const brand = doc.data().brand;
          if (!uniqueBrands.includes(brand)) {
            uniqueBrands.push(brand);
          }
        });

        setBrands(["Todos", ...uniqueBrands]);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex ml-2 items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
        >
          <img src="./filterLogo.png" alt="" className="w-5 mr-2" />
          {selectedBrand === "Todos" ? "Todos" : selectedBrand}
        </button>
      </div>
      {dropdownOpen && (
        <div className="absolute left-3 mt-1 max-sm:w-32 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {brands.map((brand, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelectBrand(brand);
                  setDropdownOpen(false);
                }}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
