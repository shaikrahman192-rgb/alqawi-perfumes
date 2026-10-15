"use client";

import { useCart } from "@/components/cart-provider";
import { getProductSizePrice } from "@/lib/products";
import { formatPrice } from "@/lib/store";

export function CheckoutOrderSummary() {
  const { items, subtotal } = useCart();

  return (
    <div className="mt-6 space-y-4 text-sm text-[#c8c1b3]">
      {items.map((item) => {
        const price = getProductSizePrice(item.product, item.size);
        return (
        <div key={`${item.product.id}:${item.size.value}`} className="flex items-center justify-between gap-3">
          <span>
            {item.product.name} · {item.size.label} x {item.quantity}
          </span>
          <span>{formatPrice(price === null ? null : price * item.quantity)}</span>
        </div>
        );
      })}
      <div className="h-px bg-[#d4af6c]/15" />
      <div className="flex justify-between text-base text-[#f5efe5]">
        <span>Total</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
    </div>
  );
}
