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
import { Button } from "@/components/ui/button";
import { deleteData } from "@/services/request";
import { IProductManual } from "@/shared/types/IProductManual";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

export const DeleteProductDialog = ({
  product,
}: {
  product: IProductManual;
}) => {
  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const result = await deleteData(product.tableName, product.id);

    if (result.message === "Product deleted") {
      toast.success("Producto eliminado");
      window.location.reload();
    } else {
      toast.error("Error al eliminar el producto");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Estas seguro que quieres eliminar</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={handleDelete}>Continuar</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
