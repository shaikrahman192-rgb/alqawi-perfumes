import { PageShell } from "@/components/page-shell";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="The house"
      title="A fragrance philosophy shaped by presence."
      description="AL QAWI is a niche fragrance house built on depth, clarity and distinctive character."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-8 text-base leading-8 text-[#c8c1b3]">
          Our approach is deliberately quiet but unmistakably confident. We build each composition around mood, texture and longevity, creating scents that linger without overwhelming the room.
        </div>
        <div className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-8 text-base leading-8 text-[#c8c1b3]">
          Inspired by the sophistication of Arabian evenings and the discipline of artisanal perfumery, our fragrances are designed to feel luxurious, masculine and distinct from the first spray to the final trace.
        </div>
      </div>
    </PageShell>
  );
}
