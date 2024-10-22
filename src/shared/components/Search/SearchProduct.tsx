"use client";
import { Input } from "@/components/ui/input";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import { useState } from "react";

export const SearchProduct = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto px-2 py-2">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          className="pl-10 pr-4 py-5 text-lg rounded-full border-2 border-px-2 border-zinc-200 shadow-sm"
          placeholder="Busca tu producto aquí"
          onClick={() => setOpen(true)}
        />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Escribe para buscar..." />
        <CommandList>
          {/* <CommandGroup>
            <CommandItem>
              <span>Realiza tu búsqueda y presiona Enter para buscar</span>
            </CommandItem>
          </CommandGroup> */}
        </CommandList>
      </CommandDialog>
    </div>
  );
};
