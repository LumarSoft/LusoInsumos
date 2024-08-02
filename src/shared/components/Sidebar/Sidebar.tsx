"use client";

import { useRouterHelper } from "@/shared/hooks/useRouterHelper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { IRoute } from "@/shared/routes/routes";
import Link from "next/link";
import { LogoutModal } from "./LogoutModal";

export const SidebarComponent = () => {
  const actualRoute = useRouterHelper().getCurrentRoute();
  const routesForDashboard = useRouterHelper().getOneRoute("/admin")?.subroutes;
  const adminRoute = useRouterHelper().getOneRoute("/admin");

  return (
    <section className="lg:w-80 fixed">
      {/* responsive */}
      <div className="w-screen h-20 flex items-center px-4 justify-between border-b lg:hidden">
        <h1 className="text-2xl tracking-tighter">{actualRoute?.name}</h1>
        <div className="flex items-center gap-4">
          <LogoutModal />
          <DropDown
            routes={routesForDashboard ?? []}
            adminRoute={adminRoute || {}}
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="h-screen border-r hidden lg:flex flex-col py-10 gap-4 shadow-2xl">
        <h4 className="font-bold text-3xl text-center">Opciones</h4>
        <div className="flex flex-col h-full ">
          {adminRoute && (
            <Link
              href={adminRoute?.path}
              className={`${
                actualRoute?.name === adminRoute.name
                  ? "border border-x-0 shadow"
                  : ""
              } px-4 py-4`}
            >
              {adminRoute?.name}
            </Link>
          )}
          {routesForDashboard &&
            routesForDashboard.map((route, index) => (
              <Link
                href={route.path}
                key={index}
                className={`${
                  actualRoute?.name === route.name
                    ? "border border-x-0 shadow"
                    : ""
                } px-4 py-4`}
              >
                {route.name}
              </Link>
            ))}
        </div>
        <LogoutModal/>
      </div>
    </section>
  );
};

const DropDown = ({
  routes,
  adminRoute,
}: {
  routes: IRoute[];
  adminRoute: IRoute | {};
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <RxHamburgerMenu className="text-2xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {adminRoute && (
          <Link href={(adminRoute as IRoute).path}>
            <DropdownMenuItem>{(adminRoute as IRoute).name}</DropdownMenuItem>
          </Link>
        )}

        {routes.map((route, index) => (
          <Link href={route.path} key={index}>
            <DropdownMenuItem>{route.name}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
