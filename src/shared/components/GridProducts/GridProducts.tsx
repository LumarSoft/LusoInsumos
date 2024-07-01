import { CardProduct } from "../CardProducts/CardProducts";

export const GridProducts = () => {
  return (
    <div className="mt-4 w-full h-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, i) => (
        <CardProduct key={i} />
      ))}
    </div>
  );
};
