import Image from "next/image";

export const Loading = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
        <Image
          src="/logo_fondo.png"
          width={100}
          height={100}
          alt="Logo luso insumos"
        />
      </div>
    </div>
  );
};
