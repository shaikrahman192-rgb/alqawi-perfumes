"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Product, getProductSizePrice } from "@/lib/products";
import { formatPrice } from "@/lib/store";
import { useCart } from "@/components/cart-provider";
import { ProductImage } from "@/components/product-image";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] shadow-[0_0_0_1px_rgba(212,175,108,0.05)]">
      <div className="relative h-[360px] overflow-hidden">
        <ProductImage product={product} />
        <div className="absolute left-4 top-4 z-30 rounded-full border border-[#d4af6c]/30 bg-[#111111]/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[#f5efe5]">
          {product.family}
        </div>
      </div>

      <div className="space-y-5 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-medium text-[#f5efe5]">{product.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[#d4af6c]">
              {product.accent}
            </p>
          </div>
          <div className="max-w-40 text-right text-sm font-medium leading-5 text-[#f5efe5]">
            {formatPrice(getProductSizePrice(product, selectedSize))}
          </div>
        </div>

        <p className="text-sm leading-6 text-[#c8c1b3]">{product.shortDescription}</p>

        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.label}
              type="button"
              aria-pressed={selectedSize.value === size.value}
              onClick={() => setSelectedSize(size)}
              className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] ${
                selectedSize.value === size.value
                  ? "border-[#d4af6c] bg-[#d4af6c]/15 text-[#f5efe5]"
                  : "border-[#d4af6c]/25 bg-[#171614] text-[#d9d0c0]"
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => addToCart(product, selectedSize)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#d4af6c] px-4 py-3 text-xs font-medium uppercase tracking-[0.24em] text-[#111111] transition hover:bg-[#e4c57f]"
          >
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </button>
          <Link
            href={`/product/${product.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4af6c]/25 bg-[#181716] px-4 py-3 text-xs uppercase tracking-[0.16em] text-[#f5efe5] transition hover:border-[#d4af6c]/50 hover:text-[#d4af6c]"
          >
            View Fragrance
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
