"use client";
import { useEffect, useState } from "react";
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
import { categories } from "@/shared/constant/categories";
import { toast } from "react-toastify";
import { generateRandomString } from "@/shared/utils/generateIdProduct";
import { fetchData, postData } from "@/services/request";
import { uploadFile } from "@/services/firebase/storage/storage";

export const AddForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [currency, setCurrency] = useState("USD");
  const [subcategoryData, setsubcategoryData] = useState<
    { ID: Number; NOMBRE: string }[]
  >([]);

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
          setSubcategory(value);
          break;

        case "price":
          setPrice(value);
          break;
        case "stock":
          setStock(value);
          break;
      }
    }
  };

  const handleSave = async () => {
    let url;
    if (image) {
      url = await uploadFile(image);
    }

    if (
      title.length < 1 ||
      category.length < 1 ||
      price.length < 1 ||
      stock.length < 1
    ) {
      return toast.error("Rellene correcatamente los campos");
    }

    const formData = new FormData();
    formData.append("id", generateRandomString());
    formData.append("title", title);
    formData.append("category", category);
    formData.append("brand", subcategory);
    formData.append("price", price);
    formData.append("currency", currency);
    formData.append("stock", stock);
    if (image) {
      formData.append("image", url ?? "");
    }

    const response = await postData(`addProduct/${category}`, formData);

    if (response.message === "Product added") {
      setTitle("");
      setCategory("");
      setSubcategory("");
      setPrice("");
      setStock("");
      setImage(null);
      setCurrency("USD");

      return toast.success("Producto cargado exitosamente");
    } else {
      toast.error("Ocurrió un error al cargar el producto");
    }
  };

  useEffect(() => {
    const fetchSubcategories = async () => {
      const results = await fetchData(`getSubcategories/${category}`);
      setsubcategoryData(results);
    };

    if (category.length > 0) {
      fetchSubcategories();
    }
  }, [category]);
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

          {subcategoryData.length > 0 && (
            <Label className="w-full">
              Subcategoria
              <Select onValueChange={setSubcategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione una subcategoria" />
                </SelectTrigger>
                <SelectContent>
                  {subcategoryData.map((subcategory) => (
                    <SelectItem
                      key={subcategory.NOMBRE}
                      value={subcategory.NOMBRE}
                    >
                      {subcategory.NOMBRE}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Label>
          )}

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
          <Label>
            Stock
            <Input
              type="number"
              name="stock"
              className="input"
              placeholder="Stock del producto"
              onChange={handleInputChange}
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
