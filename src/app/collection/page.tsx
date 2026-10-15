import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { PageShell } from "@/components/page-shell";
import { products } from "@/lib/products";

const families = [
  "Amber",
  "Amber Woody",
  "Oriental",
  "Woody",
  "Fresh",
  "Leather",
];

export default function CollectionPage() {
  return (
    <PageShell
      eyebrow="Collections"
      title="Fragrance families, narrowed to presence."
      description="Explore the scent worlds that define the AL QAWI house, from polished woods to smoke-rich orientals."
    >
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {families.map((family) => (
          <Link
            key={family}
            href="/shop"
            className="rounded-[22px] border border-[#d4af6c]/15 bg-[#121110] p-6 text-center text-sm uppercase tracking-[0.28em] text-[#f5efe5] transition hover:border-[#d4af6c]/40 hover:text-[#d4af6c]"
          >
            {family}
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </PageShell>
  );
}
