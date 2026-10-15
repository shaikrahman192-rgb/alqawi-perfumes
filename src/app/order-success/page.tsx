import { OrderSuccessPanel } from "@/components/order-success-panel";
import { PageShell } from "@/components/page-shell";

export default function OrderSuccessPage() {
  return (
    <PageShell
      eyebrow="Order success"
      title="Order placed successfully."
      description="Your scent has been reserved, packed and prepared for its journey."
    >
      <OrderSuccessPanel />
    </PageShell>
  );
}
