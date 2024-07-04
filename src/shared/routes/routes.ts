export enum ERoutes {
  HOME = "/",
  CATEGORY = "/category/:category",
  PRODUCT = "/category/:category/:product",
  LOGIN = "/login",
  ADMIN = "/admin",
  FILE = "/admin/file",
  ADDPRODUCT = "/admin/add-product",
}

export type TRoutes =
  | "Home"
  | "Category"
  | "Product"
  | "Login"
  | "Admin"
  | "Archivo de productos"
  | "Producto manualmente";

export interface IRoute {
  name: TRoutes;
  path: string;
  subroutes?: IRoute[];
}

export const ROUTES: IRoute[] = [
  {
    name: "Home",
    path: ERoutes.HOME,
  },
  {
    name: "Category",
    path: ERoutes.CATEGORY,
  },
  {
    name: "Product",
    path: ERoutes.PRODUCT,
  },
  {
    name: "Login",
    path: ERoutes.LOGIN,
  },
  {
    name: "Admin",
    path: ERoutes.ADMIN,
    subroutes: [
      {
        name: "Archivo de productos",
        path: ERoutes.FILE,
      },
      {
        name: "Producto manualmente",
        path: ERoutes.ADDPRODUCT,
      },
    ],
  },
];
