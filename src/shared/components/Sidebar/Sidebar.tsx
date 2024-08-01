"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouterHelper } from "@/shared/hooks/useRouterHelper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useUserStore } from "@/shared/stores/userStore";
import { IRoute } from "@/shared/routes/routes";
import Link from "next/link";

export const SidebarComponent = () => {
  const actualRoute = useRouterHelper().getCurrentRoute();
  const routesForDashboard = useRouterHelper().getOneRoute("/admin")?.subroutes;
  const { clearUser } = useUserStore();
  const adminRoute = useRouterHelper().getOneRoute("/admin");

  return (
    <section className="lg:w-80 fixed">
      {/* responsive */}
      <div className="w-screen h-20 flex items-center px-4 justify-between border-b lg:hidden">
        <h1 className="text-2xl tracking-tighter">{actualRoute?.name}</h1>
        <div className="flex items-center gap-4">
          <LogoutModal clearUser={clearUser} />
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
        <LogoutModal clearUser={clearUser} />
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

export const LogoutModal = ({ clearUser }: { clearUser: () => void }) => {
  const handleLogout = () => {
    clearUser();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="hidden lg:block">
        Cerrar sesion
      </AlertDialogTrigger>
      <AlertDialogTrigger className="block lg:hidden text-2xl">
        <RiLogoutBoxLine />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cerrar sesion</AlertDialogTitle>
          <AlertDialogDescription>
            ¿Estas seguro que deseas cerrar sesion?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
