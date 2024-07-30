"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addProducts } from "@/services/mysql/querys";
import { categories } from "@/shared/constant/categories";

export const AddForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "image" && files) {
      setImage(files[0]); // Asignar el archivo de imagen
    } else {
      switch (name) {
        case "title":
          setTitle(value);
          break;
        case "category":
          setCategory(value);
          break;
        case "brand":
          setBrand(value);
          break;
        case "description":
          setDescription(value);
          break;
        case "price":
          setPrice(value);
          break;
      }
    }
  };

  const handleSave = async () => {
    if (image) {
      const result = await addProducts(category, {
        title,
        brand,
        description,
        price,
        image,
      });

      if (result) {
        alert("Producto cargado correctamente");
      } else {
        alert("Error al cargar el producto");
      }
    } else {
      alert("Por favor, seleccione una imagen.");
    }
  };

  return (
    <Card className="max-w-3xl m-auto">
      <form>
        <CardHeader className="text-center">
          <CardTitle>Agregar un producto</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Label className="w-full">
            Título
            <Input
              type="text"
              name="title"
              className="input"
              placeholder="Título del producto"
              onChange={handleInputChange}
              value={title}
            />
          </Label>
          <Label className="w-full">
            Categoría
            <Select onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccione una categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Label>
          <Label className="w-full">
            Marca
            <Input
              type="text"
              name="brand"
              className="input"
              placeholder="Marca del producto"
              onChange={handleInputChange}
              value={brand}
            />
          </Label>
          <Label className="w-full">
            Descripción
            <Input
              type="text"
              name="description"
              placeholder="Descripción del producto"
              onChange={handleInputChange}
              value={description}
            />
          </Label>
          <Label className="w-full">
            Precio
            <Input
              type="number"
              name="price"
              className="input"
              placeholder="Precio del producto"
              onChange={handleInputChange}
              value={price}
            />
          </Label>
          <Label className="w-full">
            Imagen
            <Input type="file" name="image" onChange={handleInputChange} />
          </Label>
        </CardContent>
        <CardFooter>
          <Button type="button" className="w-full" onClick={handleSave}>
            Cargar
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
