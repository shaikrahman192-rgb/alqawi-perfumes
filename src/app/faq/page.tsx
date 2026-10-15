import { PageShell } from "@/components/page-shell";

const faqItems = [
  {
    question: "Do you offer international shipping?",
    answer: "Yes. We ship globally with premium packaging and tracking on every order.",
  },
  {
    question: "Are the fragrances unisex?",
    answer: "Our collection is intentionally crafted for modern premium wear, with bold masculine character balanced by elegance.",
  },
  {
    question: "How long do the fragrances last?",
    answer: "Each composition is designed for lasting wear, with the depth and projection depending on skin chemistry and weather.",
  },
  {
    question: "Can I order a sample set?",
    answer: "Yes. Sample discovery sets are available to help you explore the collection before committing to a full bottle.",
  },
];

export default function FAQPage() {
  return (
    <PageShell
      eyebrow="FAQ"
      title="Your questions, answered."
      description="Everything you need to know about crafting your fragrance wardrobe with AL QAWI."
    >
      <div className="space-y-4">
        {faqItems.map((item) => (
          <div key={item.question} className="rounded-[24px] border border-[#d4af6c]/15 bg-[#121110] p-6">
            <h3 className="text-xl text-[#f5efe5]">{item.question}</h3>
            <p className="mt-3 text-base leading-7 text-[#c8c1b3]">{item.answer}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
