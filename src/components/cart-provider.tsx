"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  getProductById,
  getProductSizePrice,
  Product,
  ProductSize,
} from "@/lib/products";

type CartItem = {
  product: Product;
  size: ProductSize;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  itemCount: number;
  subtotal: number | null;
  addToCart: (product: Product, size: ProductSize, quantity?: number) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeFromCart: (lineId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
const STORAGE_KEY = "alqawi-cart-v3";

export function getCartLineId(item: Pick<CartItem, "product" | "size">) {
  return `${item.product.id}:${item.size.value}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    let restoredItems: CartItem[] = [];
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Array<{
          product?: { id?: string };
          size?: { value?: number };
          quantity?: number;
        }>;
        restoredItems = parsed.flatMap((item) => {
          const product = item.product?.id
            ? getProductById(item.product.id)
            : undefined;
          const size =
            product?.sizes.find((candidate) => candidate.value === item.size?.value) ??
            product?.sizes[0];

          return product &&
            size &&
            Number.isInteger(item.quantity) &&
            typeof item.quantity === "number" &&
            item.quantity > 0
            ? [{ product, size, quantity: item.quantity }]
            : [];
        });
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }

    const timeoutId = window.setTimeout(() => {
      setItems(restoredItems);
      setStorageReady(true);
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (storageReady) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, storageReady]);

  const addToCart = (product: Product, size: ProductSize, quantity = 1) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.product.id === product.id && item.size.value === size.value,
      );
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id && item.size.value === size.value
            ? { ...item, quantity: quantity }
            : item,
        );
      }
      return [...current, { product, size, quantity }];
    });
  };

  const updateQuantity = (lineId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(lineId);
      return;
    }

    setItems((current) =>
      current.map((item) =>
        getCartLineId(item) === lineId ? { ...item, quantity } : item,
      ),
    );
  };

  const removeFromCart = (lineId: string) => {
    setItems((current) =>
      current.filter((item) => getCartLineId(item) !== lineId),
    );
  };

  const clearCart = () => setItems([]);

  const subtotal = useMemo(
    () =>
      items.reduce<number | null>((sum, item) => {
        const price = getProductSizePrice(item.product, item.size);
        return sum === null || price === null ? null : sum + price * item.quantity;
      }, 0),
    [items],
  );

  const value: CartContextType = {
    items,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}


