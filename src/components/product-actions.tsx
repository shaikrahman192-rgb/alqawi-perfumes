"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Minus, Plus } from "lucide-react";
import { Product, getProductSizePrice } from "@/lib/products";
import { formatPrice } from "@/lib/store";
import { useCart } from "@/components/cart-provider";

export function ProductActions({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [cartMessage, setCartMessage] = useState("");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const wishlist = JSON.parse(
        window.localStorage.getItem("alqawi-wishlist") ?? "[]",
      ) as string[];
      setWishlisted(wishlist.includes(product.id));
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, [product.id]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(
      window.localStorage.getItem("alqawi-wishlist") ?? "[]",
    ) as string[];
    const next = wishlisted
      ? wishlist.filter((id) => id !== product.id)
      : [...new Set([...wishlist, product.id])];

    window.localStorage.setItem("alqawi-wishlist", JSON.stringify(next));
    setWishlisted(!wishlisted);
  };

  const addSelectedProduct = () => {
    addToCart(product, selectedSize, quantity);
    setCartMessage(`${product.name} (${selectedSize.label}) added to your bag.`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="block text-xs uppercase tracking-[0.18em] text-[#b5af9d]">
            {selectedSize.label}
          </span>
          <span className="mt-1 block text-xl font-medium text-[#f5efe5]">
            {formatPrice(getProductSizePrice(product, selectedSize))}
          </span>
        </div>
        <button
          type="button"
          onClick={toggleWishlist}
          aria-pressed={wishlisted}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-xs uppercase tracking-[0.18em] ${
            wishlisted
              ? "border-[#d4af6c] text-[#d4af6c]"
              : "border-[#d4af6c]/25 text-[#f5efe5]"
          }`}
        >
          <Heart className={`h-4 w-4 ${wishlisted ? "fill-current" : ""}`} />
          {wishlisted ? "Saved" : "Wishlist"}
        </button>
      </div>

      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#d4af6c]">
          Select size
        </p>
        <div className="grid grid-cols-4 gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.label}
              type="button"
              aria-pressed={selectedSize.value === size.value}
              onClick={() => setSelectedSize(size)}
              className={`rounded-full border px-2 py-3 text-xs uppercase tracking-[0.08em] ${
                selectedSize.value === size.value
                  ? "border-[#d4af6c] bg-[#d4af6c]/15 text-[#f5efe5]"
                  : "border-[#d4af6c]/25 bg-[#171614] text-[#c8c1b3]"
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <span className="text-xs uppercase tracking-[0.2em] text-[#d4af6c]">
          Quantity
        </span>
        <div className="flex items-center gap-4 rounded-full border border-[#d4af6c]/20 bg-[#171614] px-3 py-2">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-5 text-center">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((current) => current + 1)}
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={addSelectedProduct}
          className="inline-flex flex-1 items-center justify-center rounded-full bg-[#d4af6c] px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#111111] transition hover:bg-[#e7c980]"
        >
          Add to Bag
        </button>
        <button
          type="button"
          onClick={() => {
            addSelectedProduct();
            router.push("/checkout");
          }}
          className="inline-flex items-center justify-center rounded-full border border-[#d4af6c]/25 bg-[#171614] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5efe5] transition hover:border-[#d4af6c]/50 hover:text-[#d4af6c]"
        >
          Buy Now
        </button>
      </div>
      {cartMessage && <p role="status" className="text-sm text-[#d4af6c]">{cartMessage} <button type="button" className="underline" onClick={() => router.push("/cart")}>View bag</button></p>}
    </div>
  );
}

