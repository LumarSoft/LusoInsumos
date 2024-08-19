import { SidebarComponent } from "@/shared/components/Sidebar/Sidebar";
import { ValidateAuth } from "@/shared/components/ValidateAuth";
import { ReactNode } from "react";

export default function SidebarLayout({ children }: { children: ReactNode }) {
  return (
    <ValidateAuth>
      <div className="flex flex-col ">
        <SidebarComponent />
        <div className="lg:pl-80 w-full">{children}</div>
      </div>
    </ValidateAuth>
  );
}
