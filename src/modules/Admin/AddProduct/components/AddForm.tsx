"use client";
import { useCallback, useEffect, useState } from "react";
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
import { Loader2, Upload, X } from "lucide-react";

// Como las categorías en el frontend ya usan los nombres exactos de las tablas,
// simplemente retornamos el mismo valor
const getTableName = (category: string): string => {
  return category;
};

const CURRENCIES = [
  { value: "ARS", label: "Peso Argentino (ARS)" },
  { value: "USD", label: "Dólar Americano (USD)" }
] as const;

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

interface FormData {
  title: string;
  category: string;
  subcategory: string;
  price: string;
  stock: string;
  currency: string;
  image: File | null;
}

interface Subcategory {
  ID: number;
  NOMBRE: string;
}

interface FormErrors {
  title?: string;
  category?: string;
  price?: string;
  stock?: string;
  image?: string;
}

const initialFormState: FormData = {
  title: "",
  category: "",
  subcategory: "",
  price: "",
  stock: "",
  currency: "USD",
  image: null
};

export const AddForm = () => {
  // Estados del formulario
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [subcategoryData, setSubcategoryData] = useState<Subcategory[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSubcategories, setIsLoadingSubcategories] = useState(false);

  // Validación de archivos
  const validateFile = (file: File): string | null => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return "Solo se permiten archivos de imagen (JPEG, PNG, WebP)";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "El archivo no puede superar los 5MB";
    }
    return null;
  };

  // Validación del formulario
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "El título es obligatorio";
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "El título debe tener al menos 3 caracteres";
    }

    if (!formData.category) {
      newErrors.category = "La categoría es obligatoria";
    }

    const priceNum = parseFloat(formData.price);
    if (!formData.price || isNaN(priceNum) || priceNum <= 0) {
      newErrors.price = "El precio debe ser un número mayor a 0";
    }

    const stockNum = parseInt(formData.stock);
    if (!formData.stock || isNaN(stockNum) || stockNum < 0) {
      newErrors.stock = "El stock debe ser un número mayor o igual a 0";
    }

    if (formData.image) {
      const fileError = validateFile(formData.image);
      if (fileError) {
        newErrors.image = fileError;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejo de cambios en inputs
  const handleInputChange = useCallback((field: keyof FormData, value: string | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  // Manejo de archivos
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleInputChange('image', file);
  };

  // Remover imagen seleccionada
  const removeImage = () => {
    handleInputChange('image', null);
    // Reset file input
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  // Obtener subcategorías
  const fetchSubcategories = useCallback(async (category: string) => {
    if (!category) return;
    
    setIsLoadingSubcategories(true);
         try {
       const tableName = getTableName(category);
       if (tableName) {
         const results = await fetchData(`getSubcategories/${tableName}`);
         setSubcategoryData(Array.isArray(results) ? results : []);
       }
     } catch (error) {
      console.error('Error fetching subcategories:', error);
      toast.error('Error al cargar las subcategorías');
      setSubcategoryData([]);
    } finally {
      setIsLoadingSubcategories(false);
    }
  }, []);

  // Efecto para cargar subcategorías cuando cambia la categoría
  useEffect(() => {
    if (formData.category) {
      fetchSubcategories(formData.category);
      // Reset subcategory when category changes
      setFormData(prev => ({ ...prev, subcategory: "" }));
    } else {
      setSubcategoryData([]);
    }
  }, [formData.category, fetchSubcategories]);

  // Envío del formulario
  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error("Por favor, corrija los errores en el formulario");
      return;
    }

    setIsLoading(true);
    
    try {
      let imageUrl = "";
      
             // Subir imagen si existe
       if (formData.image) {
         try {
           const uploadResult = await uploadFile(formData.image);
           imageUrl = uploadResult || "";
         } catch (error) {
           console.error('Error uploading image:', error);
           toast.error('Error al subir la imagen');
           return;
         }
       }

      // Preparar datos para envío
      const submitData = new FormData();
      submitData.append("id", generateRandomString());
      submitData.append("title", formData.title.trim());
      submitData.append("category", formData.category);
      submitData.append("brand", formData.subcategory);
      submitData.append("price", formData.price);
      submitData.append("currency", formData.currency);
      submitData.append("stock", formData.stock);
      
      if (imageUrl) {
        submitData.append("image", imageUrl);
      }

             // Obtener nombre de tabla
       const tableName = getTableName(formData.category);
       if (!tableName) {
         toast.error('Categoría no válida');
         return;
       }

      // Enviar al API
      const response = await postData(`addProduct/${tableName}`, submitData);

      if (response?.message === "Product added") {
        // Reset formulario
        setFormData(initialFormState);
        setSubcategoryData([]);
        setErrors({});
        
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        
        toast.success("¡Producto agregado exitosamente!");
      } else {
        toast.error(response?.message || "Error al agregar el producto");
      }
    } catch (error) {
      console.error('Error saving product:', error);
      toast.error('Error inesperado al guardar el producto');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">
          Agregar Nuevo Producto
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Título */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm font-medium">
            Título del Producto *
          </Label>
          <Input
            id="title"
            type="text"
            placeholder="Ingrese el título del producto"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className={errors.title ? "border-red-500" : ""}
          />
          {errors.title && (
            <p className="text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        {/* Categoría */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Categoría *</Label>
          <Select 
            value={formData.category} 
            onValueChange={(value) => handleInputChange('category', value)}
          >
            <SelectTrigger className={errors.category ? "border-red-500" : ""}>
              <SelectValue placeholder="Seleccione una categoría" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.category && (
            <p className="text-sm text-red-600">{errors.category}</p>
          )}
        </div>

        {/* Subcategoría */}
        {formData.category && (
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Subcategoría
              {isLoadingSubcategories && (
                <Loader2 className="inline-block ml-2 h-4 w-4 animate-spin" />
              )}
            </Label>
            <Select 
              value={formData.subcategory} 
              onValueChange={(value) => handleInputChange('subcategory', value)}
              disabled={isLoadingSubcategories || subcategoryData.length === 0}
            >
              <SelectTrigger>
                <SelectValue 
                  placeholder={
                    isLoadingSubcategories 
                      ? "Cargando subcategorías..." 
                      : subcategoryData.length === 0 
                        ? "No hay subcategorías disponibles"
                        : "Seleccione una subcategoría"
                  } 
                />
              </SelectTrigger>
              <SelectContent>
                {subcategoryData.map((subcategory) => (
                  <SelectItem key={subcategory.ID} value={subcategory.NOMBRE}>
                    {subcategory.NOMBRE}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Precio y Moneda */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Moneda</Label>
            <Select 
              value={formData.currency} 
              onValueChange={(value) => handleInputChange('currency', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CURRENCIES.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price" className="text-sm font-medium">
              Precio *
            </Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={formData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
              className={errors.price ? "border-red-500" : ""}
            />
            {errors.price && (
              <p className="text-sm text-red-600">{errors.price}</p>
            )}
          </div>
        </div>

        {/* Stock */}
        <div className="space-y-2">
          <Label htmlFor="stock" className="text-sm font-medium">
            Stock *
          </Label>
          <Input
            id="stock"
            type="number"
            min="0"
            placeholder="0"
            value={formData.stock}
            onChange={(e) => handleInputChange('stock', e.target.value)}
            className={errors.stock ? "border-red-500" : ""}
          />
          {errors.stock && (
            <p className="text-sm text-red-600">{errors.stock}</p>
          )}
        </div>

        {/* Imagen */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Imagen del Producto</Label>
          {!formData.image ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-4">
                <Label htmlFor="image-upload" className="cursor-pointer">
                  <span className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    Subir imagen
                  </span>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </Label>
                <p className="text-xs text-gray-500 mt-1">
                  PNG, JPG, WebP hasta 5MB
                </p>
              </div>
            </div>
          ) : (
            <div className="relative border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {formData.image.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(formData.image.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={removeImage}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          {errors.image && (
            <p className="text-sm text-red-600">{errors.image}</p>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          type="button" 
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Guardando producto...
            </>
          ) : (
            'Guardar Producto'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
