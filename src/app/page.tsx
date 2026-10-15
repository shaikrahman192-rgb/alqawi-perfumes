import Link from "next/link";
import { ArrowRight, Gem, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts } from "@/lib/products";
import { ProductImage } from "@/components/product-image";
import { formatPrice } from "@/lib/store";

const discovery = ["Woody", "Oriental", "Fresh", "Amber", "Leather", "Sweet", "Citrus", "Floral"];

export default function Home() {
  const featured = getFeaturedProducts();
  const hero = featured[0];

  if (!hero) {
    return <main className="min-h-screen bg-[#080807] px-6 py-24 text-[#f5efe5]"><h1 className="text-4xl">AL QAWI PERFUMES</h1><p className="mt-4">Our collection is being prepared.</p><Link className="mt-8 inline-block text-[#d4af6c]" href="/shop">Explore the shop →</Link></main>;
  }

  return (
    <main className="overflow-hidden bg-[#080807] text-[#f5efe5]">
      <section className="border-b border-[#d4af6c]/20 bg-[radial-gradient(ellipse_at_75%_35%,rgba(212,175,108,0.13),transparent_40%)]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="py-5">
            <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#d4af6c]/30 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#d4af6c]"><Sparkles className="h-4 w-4" /> Luxury that lingers</p>
            <h1 className="text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl">AL QAWI<span className="mt-3 block text-[#d4af6c]">Perfumes</span></h1>
            <div className="my-7 h-px w-20 bg-[#d4af6c]" />
            <p className="max-w-lg text-base leading-8 text-[#c8c1b3] sm:text-lg">Distinctive fragrances crafted for presence, character and a lasting impression.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d4af6c] px-7 py-4 text-xs font-semibold uppercase tracking-widest text-black transition hover:bg-[#efd49a]">Explore the collection <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/collection" className="inline-flex items-center justify-center rounded-full border border-[#d4af6c]/40 px-7 py-4 text-xs uppercase tracking-widest transition hover:border-[#d4af6c]">Discover your scent</Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-4 text-xs text-[#c8c1b3]">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#d4af6c]" /> Premium ingredients</span>
              <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-[#d4af6c]" /> Shipping information at checkout</span>
              <span className="flex items-center gap-2"><Gem className="h-4 w-4 text-[#d4af6c]" /> Refined presentation</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-[#d4af6c]/25 bg-[#100d0b] shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(212,175,108,0.15),transparent_65%)]" />
            <div className="relative h-[390px] sm:h-[560px]">
              <ProductImage product={hero} priority />
            </div>
            <div className="relative border-t border-[#d4af6c]/20 bg-[#100f0d] p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4af6c]">The signature collection</p>
              <div className="mt-3 flex items-start justify-between gap-4">
                <h2 className="text-2xl sm:text-3xl">{hero.name}</h2>
                <span className="whitespace-nowrap text-sm">{formatPrice(hero.prices[50])}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#c8c1b3]">{hero.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4af6c]">The AL QAWI signature</p>
        <h2 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-5xl">Luxury designed to leave a trace.</h2>
        <p className="mt-5 max-w-2xl leading-8 text-[#c8c1b3]">A world of depth, warmth and quiet distinction. Every fragrance is experienced through mood, texture and lasting character.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#d4af6c]/20 bg-[#11100e] p-7 sm:p-9"><Gem className="mb-5 h-6 w-6 text-[#d4af6c]" /><h3 className="text-xl">Presence in every note</h3><p className="mt-3 leading-7 text-[#c8c1b3]">Discover scents designed to feel refined, assured and unforgettable.</p></article>
          <article className="rounded-2xl border border-[#d4af6c]/20 bg-[#11100e] p-7 sm:p-9"><Sparkles className="mb-5 h-6 w-6 text-[#d4af6c]" /><h3 className="text-xl">Inspired by distinction</h3><p className="mt-3 leading-7 text-[#c8c1b3]">Inspired by Arabian evenings, balancing depth with softness and warmth with precision.</p></article>
        </div>
      </section>

      <section className="border-y border-[#d4af6c]/10 bg-[#0c0b0a]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs uppercase tracking-[0.3em] text-[#d4af6c]">The collection</p><h2 className="mt-4 text-3xl sm:text-5xl">Curated signatures.</h2></div><Link href="/shop" className="text-sm text-[#d4af6c]">View all fragrances →</Link></div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{featured.map(product => <ProductCard key={product.id} product={product} />)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4af6c]">Discover your signature</p>
        <h2 className="mt-4 text-3xl sm:text-5xl">Find the mood that suits you.</h2>
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">{discovery.map((item, i) => <Link key={item} href="/collection" className="group flex min-h-28 flex-col justify-between rounded-xl border border-[#d4af6c]/20 bg-[#11100e] p-5 transition hover:-translate-y-1 hover:border-[#d4af6c]/70"><span className="text-[10px] tracking-widest text-[#d4af6c]">0{i + 1}</span><span className="text-sm uppercase tracking-widest transition group-hover:text-[#d4af6c]">{item}</span></Link>)}</div>
      </section>
    </main>
  );
}
