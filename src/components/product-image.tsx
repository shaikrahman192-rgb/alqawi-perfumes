import Image from "next/image";
import { masterBottleImage, Product } from "@/lib/products";

const atmospheres: Record<string, string> = {
  oud: "from-[#401910] via-[#170e0d] to-[#080909]",
  desert: "from-[#8a5729] via-[#3b2418] to-[#10100e]",
  nomadicOud: "from-[#49364c] via-[#251c2d] to-[#101015]",
  citrus: "from-[#70824b] via-[#26382b] to-[#111614]",
  amber: "from-[#89521e] via-[#422817] to-[#120f0d]",
  floral: "from-[#704653] via-[#302332] to-[#121114]",
  mediterranean: "from-[#a46a27] via-[#51401f] to-[#16202a]",
  mineral: "from-[#526b78] via-[#293946] to-[#10141a]",
  incense: "from-[#605039] via-[#2e271f] to-[#12110f]",
  ember: "from-[#62301c] via-[#321c19] to-[#111010]",
  vanilla: "from-[#b88a53] via-[#655039] to-[#1b1713]",
  crystal: "from-[#a27f52] via-[#56463c] to-[#171618]",
  tobacco: "from-[#58351f] via-[#32241c] to-[#100f0e]",
  coastal: "from-[#397d80] via-[#214753] to-[#10171b]",
  aquatic: "from-[#3f7a9a] via-[#25536f] to-[#10161d]",
};

export function ProductImage({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative isolate h-full overflow-hidden bg-gradient-to-br ${
        atmospheres[product.atmosphere] ?? "from-[#665133] via-[#27221b] to-[#10100e]"
      }`}
    >
      <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-[#f3d69b]/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-black/30 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_44%,rgba(248,219,164,0.18),transparent_51%)]" />
      <Image
        src={masterBottleImage}
        alt={`${product.name} in the Al Qawi Perfumes bottle`}
        fill
        priority={priority}
        className="z-10 object-contain p-1 mix-blend-screen drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-x-0 bottom-0 z-20 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-4 z-30 text-center">
        <span className="text-[10px] uppercase tracking-[0.42em] text-[#f7e7c5]">
          {product.name}
        </span>
      </div>
    </div>
  );
}
