"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import { getProductSizePrice } from "@/lib/products";

export function CheckoutForm() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "Hyderabad",
    country: "India",
    address: "Hyderabad, Telangana 500059",
  });

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (items.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    if (subtotal === null) {
      setError("Prices are being finalized. Please contact us before placing this order.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          items: items.map(({ product, size, quantity }) => ({
            productId: product.id,
            name: `${product.name} · ${size.label}`,
            quantity,
            price: getProductSizePrice(product, size),
          })),
          total: subtotal,
        }),
      });

      const data = (await response.json()) as { error?: string; order?: { id: string } };

      if (!response.ok || !data.order) {
        throw new Error(data.error ?? "Unable to place order");
      }

      clearCart();
      router.push(`/order-success?orderId=${data.order.id}`);
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error ? checkoutError.message : "Unable to complete checkout.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#d4af6c]">Full name</span>
          <input
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="w-full rounded-2xl border border-[#d4af6c]/20 bg-[#121110] px-4 py-3 text-[#f5efe5] outline-none focus:border-[#d4af6c]/50"
            placeholder="Your name"
            required
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#d4af6c]">Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="w-full rounded-2xl border border-[#d4af6c]/20 bg-[#121110] px-4 py-3 text-[#f5efe5] outline-none focus:border-[#d4af6c]/50"
            placeholder="name@example.com"
            required
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#d4af6c]">Phone</span>
          <input
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            className="w-full rounded-2xl border border-[#d4af6c]/20 bg-[#121110] px-4 py-3 text-[#f5efe5] outline-none focus:border-[#d4af6c]/50"
            placeholder="Your phone number"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#d4af6c]">City</span>
          <input
            value={form.city}
            onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))}
            className="w-full rounded-2xl border border-[#d4af6c]/20 bg-[#121110] px-4 py-3 text-[#f5efe5] outline-none focus:border-[#d4af6c]/50"
            placeholder="Hyderabad"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#d4af6c]">Address</span>
          <input
            value={form.address}
            onChange={(event) => setForm((current) => ({ ...current, address: event.target.value }))}
            className="w-full rounded-2xl border border-[#d4af6c]/20 bg-[#121110] px-4 py-3 text-[#f5efe5] outline-none focus:border-[#d4af6c]/50"
            placeholder="Hyderabad, Telangana 500059"
            required
          />
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#d4af6c]">Country</span>
          <input
            value={form.country}
            onChange={(event) => setForm((current) => ({ ...current, country: event.target.value }))}
            className="w-full rounded-2xl border border-[#d4af6c]/20 bg-[#121110] px-4 py-3 text-[#f5efe5] outline-none focus:border-[#d4af6c]/50"
            placeholder="India"
          />
        </label>
      </div>

      {error ? <p className="text-sm text-[#ffaca3]">{error}</p> : null}

      <button
        type="submit"
        disabled={loading || subtotal === null}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#d4af6c] px-6 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#111111] transition hover:bg-[#e7c980] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading
          ? "Processing..."
          : subtotal === null
            ? "Prices to be announced"
            : "Place order"}
      </button>
    </form>
  );
}
