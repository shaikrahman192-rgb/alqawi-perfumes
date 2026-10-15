import { ProductCard } from "@/components/product-card";
import { PageShell } from "@/components/page-shell";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <PageShell
      eyebrow="The collection"
      title="Shop the Al Qawi signature."
      description="A curated rare-house collection made for depth, distinction and lasting presence."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </PageShell>
  );
}
