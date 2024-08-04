export interface Item {
  name: string;
  img: string;
  price: number;
  description: string;
}

export interface CartItem {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}
