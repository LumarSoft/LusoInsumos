"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addProductEditable, getAllDocs } from "@/firebase/firestore/firestore";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategoryQuery } from "@/shared/type/ICategoryQuery";

export const AddForm = () => {
  const [categories, setCategories] = useState<ICategoryQuery[]>([]);

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files) {
      setImage(files[0]);
    } else {
      switch (name) {
        case "title":
          setTitle(value);
          break;
        case "price":
          setPrice(Number(value));
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
        default:
          break;
      }
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllDocs("categorias");
      setCategories(data as ICategoryQuery[]);
    };

    fetchCategories();
  }, []);

  const handleSave = async () => {
    try {
      setLoading(true);
      const finish = await addProductEditable(category, {
        title,
        price,
        image,
        description,
        brand,
      });
      if (finish === true) {
        setTitle("");
        setPrice(0);
        setImage(null);
        setCategory("");
        setBrand("");
        setDescription("");
      }
      setLoading(false);
    } catch (error) {
      console.log("Ha ocurrido un error", error);
    }
  };

  return (
    <Card className="max-w-3xl m-auto">
      <form>
        <CardHeader className="text-center">
          <CardTitle>Agregar un producto</CardTitle>
          <CardDescription></CardDescription>
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
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.nombre}>
                    {category.nombre}
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
