import { PageShell } from "@/components/page-shell";
import { formatPrice, storeConfig } from "@/lib/store";

export default function ShippingPage() {
  return (
    <PageShell
      eyebrow="Shipping & returns"
      title="Seamless delivery, considered care."
      description="We aim to ensure every order arrives as beautifully as it was designed."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-8 text-base leading-8 text-[#c8c1b3]">
          <h3 className="mb-4 text-2xl text-[#f5efe5]">Shipping</h3>
          Complimentary delivery on orders above {formatPrice(storeConfig.freeShippingThreshold)}. Standard international delivery takes 3-7 business days depending on destination and customs processing.
        </div>
        <div className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-8 text-base leading-8 text-[#c8c1b3]">
          <h3 className="mb-4 text-2xl text-[#f5efe5]">Returns</h3>
          We accept returns within 14 days for unopened, undamaged items in their original packaging. Contact our team to arrange a return.
        </div>
      </div>
    </PageShell>
  );
}
