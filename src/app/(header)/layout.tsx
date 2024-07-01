import { Navbar } from "@/shared/components/Navbar/Navbar";
import { ReactNode } from "react";

export default function HeaderLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-16 2xl:pt-28 px-4 md:px-28 2xl:px-80">
      <Navbar />
      {children}
    </div>
  );
}
