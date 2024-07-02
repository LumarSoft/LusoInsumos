import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ICardProductProps {
  title: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  color: string;
}

export const CardProduct: React.FC<ICardProductProps> = ({
  title,
  description,
  image,
  price,
  stock,
  color,
}) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden w-full max-w-md flex flex-col">
      <div>
        <img
          src={image}
          alt="Product Image"
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-center text-lg font-bold text-black">{title}</h3>
        <p className="text-gray-600 text-sm font-semibold text-center mt-2 flex-grow">
          {description}
        </p>
        <hr className="mt-2" />
        <div className="flex items-center justify-between mt-4">
          <div className="grid gap-1">
            <p className="text-sm font-medium text-gray-600">Precio</p>
            <p className="text-lg font-semibold text-black">${price}</p>
          </div>
          <div className="grid gap-1">
            <p className="text-sm font-medium text-gray-600">Stock</p>
            <p className="text-lg font-semibold text-black">{stock}</p>
          </div>
          <div className="grid gap-1">
            <p className="text-sm font-medium text-gray-600">Color</p>
            <p className="text-lg font-semibold text-black">{color}</p>
          </div>
        </div>
        <button className="mt-4 w-full bg-black rounded-md py-1.5 text-white font-semibold hover:bg-zinc-700 transition duration-300 ease-in-out">
          Agregar a carrito
        </button>
      </div>
    </div>
  );
};
