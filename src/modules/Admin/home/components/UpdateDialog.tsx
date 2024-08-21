"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IProductManual } from "@/shared/types/IProductManual";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateData } from "@/services/request";

export const UpdateDialog = ({ product }: { product: IProductManual }) => {
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [currency, setCurrency] = useState(product.currency);

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price.toString());
    formData.append("stock", stock.toString());
    formData.append("currency", currency);

    const result = await updateData(product.tableName, product.id, formData);

    if (result.message === "Product updated") {
      window.location.reload();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>Editar</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSave}>
          <DialogHeader>
            <DialogTitle className="text-center">
              Editar producto {product.title}
            </DialogTitle>
          </DialogHeader>
          <Label className="w-full">
            Titulo
            <Input
              defaultValue={product.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Label>

          <Label>
            Descripcion
            <Input
              defaultValue={product.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Label>

          <Label>
            Moneda
            <Select onValueChange={setCurrency}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione una moneda" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ARS">ARS</SelectItem>
                <SelectItem value="USD">USD</SelectItem>
              </SelectContent>
            </Select>
          </Label>

          <Label>
            Precio
            <Input
              defaultValue={product.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Label>

          <Label>
            Stock
            <Input
              type="number"
              defaultValue={product.stock}
              onChange={(e) => setStock(Number(e.target.value))}
            />
          </Label>
          <DialogFooter>
            <DialogClose type="submit" className="w-full mt-4">
              Guardar
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
