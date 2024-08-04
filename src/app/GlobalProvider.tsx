import { ReactNode } from "react";

import { CartProvider } from "@/context/CartContext";

export function GlobalProvider({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
