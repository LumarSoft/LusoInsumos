import { Navbar } from "@/shared/components/Navbar/Navbar";
import { ReactNode } from "react";

export default function HeaderLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-28 2xl:pt-36">
      <Navbar />
      {children}
    </div>
  );
}
