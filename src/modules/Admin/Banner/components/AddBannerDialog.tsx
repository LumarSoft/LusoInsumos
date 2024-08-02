"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-menubar";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { uploadFile } from "@/services/firebase/storage/storage";
import { addDocument } from "@/services/firebase/firestore/firestore";
import { IBanners } from "@/shared/types/IBanner";

export const AddBannerDialog = () => {
  const [alt, setAlt] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    if (!file) return;

    try {
      const imgUrl = (await uploadFile(file)) || "";

      const newBanner: IBanners = {
        url: imgUrl,
        alt,
        category,
      };

      await addDocument("banners", newBanner);
      window.location.reload();
    } catch (error) {
      console.error("Error adding banner: ", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Agregar Banner</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Agregar banner</DialogTitle>
          <DialogDescription>
            <div className="grid w-full items-center gap-1.5">
              <Label>Alt</Label>
              <Input
                onChange={(e) => setAlt(e.target.value)}
                type="text"
                placeholder="Ejemplo: Placa de video RX 5700XT"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label>Categoria</Label>
              <Select onValueChange={setCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mobile">Mobile</SelectItem>
                  <SelectItem value="desktop">Desktop</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label>Imagen</Label>
              <Input type="file" onChange={handleImageChange} />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full" onClick={handleSave}>
              Guardar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
