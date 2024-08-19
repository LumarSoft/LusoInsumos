export enum ERoutes {
  HOME = "/",
  CATEGORY = "/category/:category",
  PRODUCT = "/category/:category/:product",
  LOGIN = "/login",
  ADMIN = "/admin",
  ADDPRODUCT = "/admin/add-product",
  BANNERS = "/admin/banners",
}

export type TRoutes =
  | "Home"
  | "Category"
  | "Product"
  | "Login"
  | "Admin"
  | "Producto manualmente"
  | "Banners";

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
    subroutes: [],
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
        name: "Producto manualmente",
        path: ERoutes.ADDPRODUCT,
      },
      {
        name: "Banners",
        path: ERoutes.BANNERS,
      },
    ],
  },
];
