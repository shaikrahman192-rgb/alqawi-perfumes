import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";
import { ProductActions } from "@/components/product-actions";
import { ProductCard } from "@/components/product-card";
import { ProductImage } from "@/components/product-image";
import { getProductBySlug, products } from "@/lib/products";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-7xl px-4 py-20 text-center text-sm uppercase tracking-[0.24em] text-[#d4af6c] sm:px-6 lg:px-8">
          Loading fragrance...
        </main>
      }
    >
      <ProductPageContent params={params} />
    </Suspense>
  );
}

async function ProductPageContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.32em] text-[#d4af6c]">Not found</p>
        <h1 className="mt-4 text-4xl text-[#f5efe5]">This fragrance is not available.</h1>
        <Link href="/shop" className="mt-8 inline-flex rounded-full bg-[#d4af6c] px-6 py-3 text-xs font-medium uppercase tracking-[0.24em] text-[#111111]">
          Return to shop
        </Link>
      </main>
    );
  }

  return (
    <main className="section-shell py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/shop" className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af6c]">
          <ArrowLeft className="h-4 w-4" />
          Back to shop
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-[#d4af6c]/15 bg-[#121110] p-3">
            <div className="relative h-[620px] overflow-hidden rounded-[24px]">
              <ProductImage product={product} priority />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.32em] text-[#d4af6c]">{product.family}</p>
            <h1 className="mt-4 text-5xl text-[#f5efe5] md:text-6xl">{product.name}</h1>
            <div className="mt-4 flex items-center gap-2 text-[#d4af6c]">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-2 text-sm text-[#c8c1b3]">4.9 / 5</span>
            </div>
            <p className="mt-6 text-base leading-8 text-[#c8c1b3]">{product.description}</p>

            <div className="mt-8">
              <ProductActions product={product} />
            </div>

            <div className="mt-10 rounded-[24px] border border-[#d4af6c]/15 bg-[#121110] p-6">
              <h2 className="text-xs uppercase tracking-[0.28em] text-[#d4af6c]">Notes</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.notes.map((note) => (
                  <span key={note} className="rounded-full border border-[#d4af6c]/15 bg-[#171614] px-3 py-2 text-xs uppercase tracking-[0.22em] text-[#f5efe5]">
                    {note}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
        <section className="mt-20">
          <p className="text-xs uppercase tracking-[0.32em] text-[#d4af6c]">
            Explore the house
          </p>
          <h2 className="mt-4 text-3xl text-[#f5efe5]">Related fragrances</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {products
              .filter((related) => related.id !== product.id)
              .slice(0, 3)
              .map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
