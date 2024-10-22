import { Navbar } from "@/shared/components/Navbar/Navbar";
import { SearchProduct } from "@/shared/components/Search/SearchProduct";
import { ReactNode } from "react";

export default function HeaderLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-20 2xl:pt-36">
      <Navbar />
      {children}
    </div>
  );
}
