import Image from "next/image";
import { masterBottleImage, Product } from "@/lib/products";

const atmospheres: Record<string, string> = {
  oud: "from-[#624024] via-[#211610] to-[#080909]",
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
      className={`group relative isolate h-full min-h-[280px] w-full overflow-hidden bg-gradient-to-br ${
        atmospheres[product.atmosphere] ??
        "from-[#665133] via-[#27221b] to-[#10100e]"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[65%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9bf68]/20 blur-[65px]"
      />

      <Image
        src={masterBottleImage}
        alt={`${product.name} perfume bottle`}
        fill
        priority={priority}
        unoptimized
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center center",
          zIndex: 10,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/4 bg-gradient-to-t from-black/35 to-transparent"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-4 z-30 px-3 text-center">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#fff0cc] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {product.name}
        </span>
      </div>
    </div>
  );
}
