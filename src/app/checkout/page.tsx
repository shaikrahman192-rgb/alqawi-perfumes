import { CheckoutForm } from "@/components/checkout-form";
import { CheckoutOrderSummary } from "@/components/checkout-order-summary";
import { PageShell } from "@/components/page-shell";

export default function CheckoutPage() {
  return (
    <PageShell
      eyebrow="Checkout"
      title="Complete your order."
      description="Secure payment, refined delivery and thoughtful presentation for every bottle."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-6 md:p-8">
          <CheckoutForm />
        </div>
        <div className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-6">
          <h3 className="text-xl text-[#f5efe5]">Summary</h3>
          <CheckoutOrderSummary />
        </div>
      </div>
    </PageShell>
  );
}
