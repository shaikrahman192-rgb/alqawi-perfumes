import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { formatPrice } from "@/lib/store";

const orders = [
  { id: "ALQ-1042", status: "Delivered", total: 220 },
  { id: "ALQ-1048", status: "Processing", total: 440 },
];

export default function AccountPage() {
  return (
    <PageShell
      eyebrow="Account"
      title="My orders."
      description="Track your fragrance wardrobe, view order history and manage your account details."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d4af6c]">Profile</p>
          <h3 className="mt-4 text-3xl text-[#f5efe5]">John Al Qawi</h3>
          <p className="mt-4 text-base text-[#c8c1b3]">hello@alqawi.com</p>
        </div>

        <div className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-8">
          <h3 className="text-xl text-[#f5efe5]">Recent orders</h3>
          <div className="mt-6 space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between rounded-2xl border border-[#d4af6c]/10 bg-[#171614] p-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-[#d4af6c]">{order.id}</p>
                  <p className="mt-2 text-sm text-[#c8c1b3]">{order.status}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg text-[#f5efe5]">{formatPrice(order.total)}</p>
                  <Link href="/account" className="mt-2 inline-flex text-xs uppercase tracking-[0.18em] text-[#d4af6c]">
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
