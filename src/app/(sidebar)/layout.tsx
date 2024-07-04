import { SidebarComponent } from "@/shared/components/Sidebar/Sidebar";
import { ValidateAuth } from "@/shared/components/ValidateAuth";
import { ReactNode } from "react";

export default function SidebarLayout({ children }: { children: ReactNode }) {
  return (
    <ValidateAuth>
      <div className="flex flex-col lg:flex-row">
        <SidebarComponent />
        <div className="flex-1">{children}</div>
      </div>
    </ValidateAuth>
  );
}
