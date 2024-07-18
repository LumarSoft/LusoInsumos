import { CartItem } from "./ICartItem";
export interface ICart {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (title: string) => void;
  clearToCart: () => void;
  getTotalItems: () => number;
  increaseQuantity: (title: string) => void;
  decreaseQuantity: (title: string) => void;
  removeItem: (title: string) => void;
}
