import { PageShell } from "@/components/page-shell";

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms"
      title="Terms & conditions."
      description="By shopping with AL QAWI, you agree to our service terms, order policies and product care standards."
    >
      <div className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-8 text-base leading-8 text-[#c8c1b3]">
        Every order is subject to product availability, secure payment authorization and delivery confirmation. Customers are responsible for accuracy in shipping details, and AL QAWI reserves the right to cancel or adjust orders when necessary for verification or fulfilment requirements.
      </div>
    </PageShell>
  );
}
