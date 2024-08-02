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
import { useUserStore } from "@/shared/stores/userStore";
import { RiLogoutBoxLine } from "react-icons/ri";

export const LogoutModal = () => {
  const { clearUser } = useUserStore();

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
