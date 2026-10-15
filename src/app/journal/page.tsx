import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const stories = [
  {
    title: "The Art of Memory in Perfume",
    excerpt: "Why lasting fragrance becomes part of a personal signature and how notes evolve with warmth and skin.",
  },
  {
    title: "Quiet Luxury in the Arabian Night",
    excerpt: "A study in warm woods, leather and amber that frame elegance in a modern, masculine silhouette.",
  },
  {
    title: "How to Build a Fragrance Wardrobe",
    excerpt: "From daytime freshness to evening intensity, discover how to create a repertoire of scents for every mood.",
  },
];

export default function JournalPage() {
  return (
    <PageShell
      eyebrow="Journal"
      title="Stories behind the scent."
      description="An editorial view into fragrance, mood, craft and the rituals that shape lasting signatures."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {stories.map((story) => (
          <article key={story.title} className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-7">
            <p className="text-xs uppercase tracking-[0.26em] text-[#d4af6c]">Editorial</p>
            <h3 className="mt-4 text-3xl text-[#f5efe5]">{story.title}</h3>
            <p className="mt-4 text-base leading-7 text-[#c8c1b3]">{story.excerpt}</p>
            <Link href="/journal" className="mt-6 inline-flex text-xs uppercase tracking-[0.22em] text-[#d4af6c]">
              Read story
            </Link>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
