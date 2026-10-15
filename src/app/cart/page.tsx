import { CartPageContent } from "@/components/cart-page";
import { PageShell } from "@/components/page-shell";

export default function CartPage() {
  return (
    <PageShell
      eyebrow="Cart"
      title="Your fragrance wardrobe."
      description="Refine your selection, review the final composition and continue towards checkout."
    >
      <CartPageContent />
    </PageShell>
  );
}
