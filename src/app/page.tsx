import Link from "next/link";
import {
  ArrowRight,
  Gem,
  ShieldCheck,
  Sparkles,
  Truck,
  Crown,
  Flame,
  Star,
} from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts } from "@/lib/products";
import { ProductImage } from "@/components/product-image";

const scentNotes = ["Woody", "Oriental", "Amber", "Oud", "Leather", "Fresh", "Spiced", "Floral"];

const promises = [
  {
    icon: Gem,
    title: "A signature presence",
    description: "Distinctive fragrances chosen for character, depth and a memorable trail.",
  },
  {
    icon: Crown,
    title: "A considered collection",
    description: "Explore expressive scent profiles, from warm woods to luminous fresh notes.",
  },
  {
    icon: ShieldCheck,
    title: "A refined experience",
    description: "Clear product details and a considered shopping experience from discovery to checkout.",
  },
];

export default function Home() {
  const featured = getFeaturedProducts();
  const hero = featured[0];

  if (!hero) {
    return (
      <main className="aq-home min-h-screen bg-[#070706] px-6 py-24 text-[#f5efe5]">
        <p className="aq-eyebrow">The world of fragrance</p>
        <h1 className="aq-gold-text mt-5 text-5xl sm:text-7xl">AL QAWI PERFUMES</h1>
        <p className="mt-5 max-w-xl text-[#c8c1b3]">Our collection is being prepared.</p>
        <Link className="aq-luxury-button mt-8 inline-flex items-center gap-3 rounded-full border border-[#d4af6c]/50 bg-[#d4af6c] px-7 py-4 text-xs font-semibold uppercase tracking-[.2em] text-black" href="/shop">
          Explore the shop <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
    );
  }

  return (
    <main className="aq-home overflow-hidden bg-[#070706] text-[#f5efe5]">
      {/* Cinematic hero */}
      <section className="aq-cinematic aq-hero relative isolate border-b border-[#d4af6c]/20">
        <div className="aq-hero-inner mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[.92fr_1.08fr] lg:gap-12 lg:px-12 lg:py-20">
          <div className="aq-hero-copy relative z-10 py-4">
            <p className="aq-eyebrow aq-enter inline-flex items-center gap-3 rounded-full border border-[#d4af6c]/35 bg-black/25 px-4 py-2">
              <Sparkles className="h-4 w-4" /> The art of fine fragrance
            </p>

            <h1 className="aq-hero-title aq-enter aq-delay-1 mt-8 max-w-3xl text-5xl font-medium leading-[.98] tracking-[-.045em] sm:text-7xl xl:text-[6.5rem]">
              Presence
              <span className="aq-gold-text mt-3 block pb-2">in every note.</span>
            </h1>

            <div className="aq-gold-rule aq-enter aq-delay-2 my-7 w-28" />
            <p className="aq-enter aq-delay-2 max-w-xl text-base leading-8 text-[#d0c5b1] sm:text-lg">
              Discover a world of depth, warmth and distinction. Fragrances selected
              to express character long after the first impression.
            </p>

            <div className="aq-enter aq-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/shop"
                className="aq-luxury-button group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#e8c982]/70 bg-gradient-to-r from-[#a77d36] via-[#e4c27b] to-[#b58b43] px-7 py-4 text-xs font-bold uppercase tracking-[.18em] text-[#100c05] shadow-[0_10px_40px_rgba(200,164,93,.15)]"
              >
                Explore the collection
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/collection"
                className="aq-luxury-button inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#d4af6c]/40 bg-black/20 px-7 py-4 text-xs uppercase tracking-[.18em] text-[#f5efe5] backdrop-blur-sm"
              >
                Discover your scent
              </Link>
            </div>

            <div className="aq-enter aq-delay-4 mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#c8c1b3]">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#d4af6c]" /> Thoughtfully curated</span>
              <span className="flex items-center gap-2"><Gem className="h-4 w-4 text-[#d4af6c]" /> Refined presentation</span>
            </div>
          </div>

          <div className="aq-hero-visual aq-enter aq-delay-2 relative">
            <div className="aq-hero-frame relative overflow-hidden rounded-[26px] border border-[#d4af6c]/30 bg-[#100d09] shadow-[0_30px_100px_rgba(0,0,0,.58)] sm:rounded-[34px]">
              <div className="aq-frame-light" aria-hidden="true" />
              <div className="aq-bottle-stage relative h-[390px] sm:h-[560px] lg:h-[640px]">
                <div className="aq-hero-halo" aria-hidden="true" />
                <ProductImage product={hero} priority />
              </div>
              <div className="relative z-10 border-t border-[#d4af6c]/20 bg-gradient-to-r from-[#0d0b08]/95 via-[#17120b]/95 to-[#0b0a08]/95 p-5 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="aq-eyebrow text-[9px]">The signature selection</p>
                    <h2 className="mt-2 text-xl sm:text-2xl">{hero.name}</h2>
                  </div>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#bdb3a1]">{hero.shortDescription}</p>
              </div>
            </div>
            <div className="aq-floating-seal pointer-events-none absolute -right-3 top-8 hidden h-24 w-24 items-center justify-center rounded-full border border-[#e2c17c]/40 bg-[#090806]/85 text-center shadow-[0_0_45px_rgba(212,175,108,.12)] backdrop-blur-md sm:flex">
              <div className="rounded-full border border-[#d4af6c]/25 px-3 py-4">
                <Star className="mx-auto h-4 w-4 text-[#e4c982]" />
                <span className="mt-1 block text-[8px] uppercase leading-4 tracking-[.18em] text-[#e4c982]">Scent<br />with character</span>
              </div>
            </div>
          </div>
        </div>
        <div className="aq-scroll-cue" aria-hidden="true"><span /> Scroll to discover</div>
      </section>

      {/* Brand marquee */}
      <div className="aq-marquee border-b border-[#d4af6c]/15 bg-[#0b0a08] py-4" aria-label="Fragrance families">
        <div className="aq-marquee-track">
          {[...scentNotes, ...scentNotes].map((note, index) => (
            <span key={`${note}-${index}`} className="aq-marquee-item">
              <span className="text-[#d4af6c]">✦</span>{note}
            </span>
          ))}
        </div>
      </div>

      {/* Brand story */}
      <section className="aq-story-section aq-ambient relative">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="aq-reveal mx-auto max-w-3xl text-center">
            <p className="aq-eyebrow">The AL QAWI signature</p>
            <h2 className="mt-5 text-3xl leading-tight sm:text-5xl lg:text-6xl">
              Luxury is not loud.
              <span className="aq-gold-text block">It is remembered.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#bfb5a3] sm:text-lg">
              From deep, smoky woods to smooth amber and bright aromatic notes,
              discover fragrances that make an impression without saying a word.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {promises.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={`aq-reveal aq-story-card aq-delay-${index + 1} rounded-2xl border border-[#d4af6c]/20 bg-gradient-to-br from-[#17130d]/90 to-[#0b0a08]/95 p-7 sm:p-9`}>
                  <div className="aq-icon-frame mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af6c]/30 bg-[#d4af6c]/[.06]">
                    <Icon className="h-5 w-5 text-[#e1c17b]" />
                  </div>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#bdb3a1]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured collection */}
      <section className="aq-collection-section relative border-y border-[#d4af6c]/15 bg-[#0b0a08]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="aq-reveal mb-10 flex flex-wrap items-end justify-between gap-5 sm:mb-14">
            <div>
              <p className="aq-eyebrow">Curated signatures</p>
              <h2 className="mt-4 text-3xl sm:text-5xl">Find your next obsession.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#bdb3a1] sm:text-base">
                Explore expressive fragrances selected for every mood, moment and memory.
              </p>
            </div>
            <Link href="/shop" className="aq-text-link inline-flex items-center gap-2 pb-2 text-xs uppercase tracking-[.18em] text-[#e1c17b]">
              View all fragrances <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="aq-product-grid">
            {featured.map((product, index) => (
              <div key={product.id} className={`aq-reveal aq-product-reveal aq-delay-${Math.min(index + 1, 4)}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scent discovery */}
      <section className="aq-discovery-section relative">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="aq-reveal max-w-2xl">
            <p className="aq-eyebrow">Discover your signature</p>
            <h2 className="mt-4 text-3xl sm:text-5xl">Follow your senses.</h2>
            <p className="mt-5 leading-8 text-[#bdb3a1]">
              Start with the notes you love. Find a fragrance that feels unmistakably yours.
            </p>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {scentNotes.map((note, index) => (
              <Link key={note} href="/collection" className={`aq-reveal aq-scent-tile aq-delay-${(index % 4) + 1} group flex min-h-32 flex-col justify-between rounded-xl border border-[#d4af6c]/20 bg-gradient-to-br from-[#17130d] to-[#0b0a08] p-5 sm:min-h-40 sm:p-6`}>
                <span className="flex items-center justify-between text-[10px] tracking-[.2em] text-[#a78a52]">
                  0{index + 1}<ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                </span>
                <span className="text-sm uppercase tracking-[.18em] transition-colors duration-300 group-hover:text-[#f1d99e] sm:text-base">{note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="aq-closing relative overflow-hidden border-t border-[#d4af6c]/20">
        <div className="aq-closing-light" aria-hidden="true" />
        <div className="aq-reveal relative z-10 mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Flame className="mx-auto h-6 w-6 text-[#e1c17b]" />
          <p className="aq-eyebrow mt-5">Your scent. Your signature.</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">Leave a lasting impression.</h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#bdb3a1]">
            Find the fragrance that speaks before you do.
          </p>
          <Link href="/shop" className="aq-luxury-button group mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#e8c982]/70 bg-gradient-to-r from-[#a77d36] via-[#e4c27b] to-[#b58b43] px-8 py-4 text-xs font-bold uppercase tracking-[.18em] text-[#100c05]">
            Shop the collection <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
