"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { getCartLineId, useCart } from "@/components/cart-provider";
import { getProductSizePrice } from "@/lib/products";
import { formatPrice, storeConfig } from "@/lib/store";

export function CartPageContent() {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-8 text-center">
        <p className="text-xl text-[#f5efe5]">Your cart is empty.</p>
        <p className="mt-3 text-sm text-[#c8c1b3]">
          Discover the signature collection and build a fragrance wardrobe that lasts.
        </p>
        <Link href="/shop" className="mt-6 inline-flex rounded-full bg-[#d4af6c] px-6 py-3 text-xs font-medium uppercase tracking-[0.24em] text-[#111111]">
          Explore the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
      <div className="space-y-4">
        {items.map((item) => {
          const { product, size, quantity } = item;
          const lineId = getCartLineId(item);
          return (
          <div key={lineId} className="flex flex-col gap-4 rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-4 sm:flex-row">
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-[#d4af6c]/15">
              <Image src={product.image} alt={`${product.name} Al Qawi bottle`} fill className="object-contain mix-blend-screen" sizes="112px" />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-[#d4af6c]">{product.family}</p>
                <h3 className="mt-2 text-2xl text-[#f5efe5]">{product.name}</h3>
                <p className="mt-1 text-sm text-[#c8c1b3]">{size.label} · {product.accent}</p>
              </div>

              <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                <div className="text-right text-sm font-medium text-[#f5efe5]">{formatPrice(getProductSizePrice(product, size))}</div>
                <div className="flex items-center gap-3 rounded-full border border-[#d4af6c]/20 bg-[#171614] px-2 py-1.5">
                  <button type="button" onClick={() => updateQuantity(lineId, quantity - 1)} className="p-1 text-[#f5efe5]" aria-label={`Decrease ${product.name}`}>
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-6 text-center text-sm text-[#f5efe5]">{quantity}</span>
                  <button type="button" onClick={() => updateQuantity(lineId, quantity + 1)} className="p-1 text-[#f5efe5]" aria-label={`Increase ${product.name}`}>
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button type="button" onClick={() => removeFromCart(lineId)} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#d4af6c]">
                  <Trash2 className="h-3.5 w-3.5" />
                  Remove
                </button>
              </div>
            </div>
          </div>
          );
        })}
      </div>

      <aside className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-6">
        <h3 className="text-xl text-[#f5efe5]">Order summary</h3>
        <div className="mt-6 space-y-4 text-sm text-[#c8c1b3]">
          <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>{subtotal !== null && subtotal >= storeConfig.freeShippingThreshold ? "Complimentary" : "Calculated at checkout"}</span></div>
          <div className="flex justify-between"><span>Tax</span><span>Calculated at checkout</span></div>
        </div>
        <div className="my-5 h-px bg-[#d4af6c]/15" />
        <div className="flex justify-between text-lg text-[#f5efe5]">
          <span>Total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <Link href="/checkout" className={`mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#d4af6c] px-6 py-3 text-xs font-medium uppercase tracking-[0.24em] text-[#111111] ${subtotal === null ? "opacity-70" : ""}`}>
          Proceed to checkout
        </Link>
      </aside>
    </div>
  );
}
