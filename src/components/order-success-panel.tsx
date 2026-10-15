"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function OrderSuccessPanel() {
  const [orderId, setOrderId] = useState("ALQ-000000");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("orderId") ?? "ALQ-000000";
    setOrderId(id);

    fetch(`/api/payment-status/${id}`)
      .then((response) => response.json())
      .then((data) => setStatus(data.status ?? "paid"))
      .catch(() => setStatus("paid"));
  }, []);

  return (
    <div className="rounded-[30px] border border-[#d4af6c]/20 bg-[#121110] p-8 text-center shadow-[0_0_30px_rgba(212,175,108,0.08)]">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af6c]/40 bg-[#111111] text-2xl text-[#d4af6c]">
        ✓
      </div>
      <p className="text-xs uppercase tracking-[0.35em] text-[#d4af6c]">Order confirmed</p>
      <h1 className="mt-5 text-4xl text-[#f5efe5]">Thank you for choosing AL QAWI</h1>
      <p className="mx-auto mt-4 max-w-xl text-base text-[#c8c1b3]">
        Your order #{orderId.slice(0, 8).toUpperCase()} has been received. Payment status: <span className="text-[#d4af6c]">{status}</span>.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <Link href="/shop" className="rounded-full bg-[#d4af6c] px-6 py-3 text-xs font-medium uppercase tracking-[0.24em] text-[#111111]">
          Continue shopping
        </Link>
        <Link href="/account" className="rounded-full border border-[#d4af6c]/25 bg-[#171614] px-6 py-3 text-xs font-medium uppercase tracking-[0.24em] text-[#f5efe5]">
          View orders
        </Link>
      </div>
    </div>
  );
}
