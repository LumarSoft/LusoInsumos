"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchProduct = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (search) {
      router.push(`/search?q=${search}`);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-2 py-2">
      <form onSubmit={handleSearch} className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground cursor-pointer"
          onClick={handleSearch}
        />
        <Input
          className="pl-10 pr-4 py-5 text-lg rounded-full border-2 border-px-2 border-zinc-200 shadow-sm"
          placeholder="Busca tu producto aquí"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};
