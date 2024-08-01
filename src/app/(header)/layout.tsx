import { Navbar } from "@/shared/components/Navbar/Navbar";
import { ReactNode } from "react";

export default function HeaderLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-28 lg:pt-52">
      <Navbar />
      {children}
    </div>
  );
}
