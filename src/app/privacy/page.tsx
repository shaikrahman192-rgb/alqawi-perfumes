import { PageShell } from "@/components/page-shell";

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy policy"
      title="Your privacy is treated with care."
      description="Our use of personal information is limited to order fulfillment, service support and account management."
    >
      <div className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-8 text-base leading-8 text-[#c8c1b3]">
        We use customer details solely to deliver orders, maintain account records and improve service quality. We do not sell personal information. Payment data is processed securely and not stored in plain text.
      </div>
    </PageShell>
  );
}
