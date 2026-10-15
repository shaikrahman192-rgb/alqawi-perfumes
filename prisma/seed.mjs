import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    slug: "ganymede-noir",
    name: "Ganymede Noir",
    family: "Amber Woody",
    description:
      "Ganymede Noir unfolds in smoky citrus and saffron before settling into a rich amber-wood cloud.",
    shortDescription: "A velvet woods signature built with incense, soft amber and deep cedar.",
    notes: JSON.stringify(["Saffron", "Golden fig", "Incense", "Cedarwood", "Amber musk"]),
    sizes: JSON.stringify([
      { label: "50 ml", value: 50, suffix: "ml" },
      { label: "100 ml", value: 100, suffix: "ml" },
      { label: "200 ml", value: 200, suffix: "ml" },
    ]),
    price: 220,
    image: "/images/brand/al-qawi-master-bottle.png",
    accent: "Gold and cedar",
    featured: true,
  },
  {
    slug: "sahara-resin",
    name: "Sahara Resin",
    family: "Oriental",
    description:
      "Sahara Resin balances luminous spice with a resinous depth that feels both intimate and expansive.",
    shortDescription: "A warm desert trail of resin, oud and a whisper of vanilla smoke.",
    notes: JSON.stringify(["Bergamot", "Oud", "Labdanum", "Vanilla", "Myrrh"]),
    sizes: JSON.stringify([
      { label: "50 ml", value: 50, suffix: "ml" },
      { label: "100 ml", value: 100, suffix: "ml" },
    ]),
    price: 240,
    image: "/images/brand/al-qawi-master-bottle.png",
    accent: "Oud and amber",
    featured: true,
  },
  {
    slug: "cedar-veil",
    name: "Cedar Veil",
    family: "Woody",
    description:
      "Cedar Veil uses polished woods and a soft suede finish to craft a quietly compelling, masculinely elegant silhouette.",
    shortDescription: "A clean cedar structure softened by iris, suede and gentle musk.",
    notes: JSON.stringify(["Iris", "Cedarwood", "Suede", "Musk", "Tonka bean"]),
    sizes: JSON.stringify([
      { label: "50 ml", value: 50, suffix: "ml" },
      { label: "100 ml", value: 100, suffix: "ml" },
      { label: "200 ml", value: 200, suffix: "ml" },
    ]),
    price: 210,
    image: "/images/brand/al-qawi-master-bottle.png",
    accent: "Iris and suede",
    featured: true,
  },
  {
    slug: "mirage-amber",
    name: "Mirage Amber",
    family: "Amber",
    description:
      "Mirage Amber begins with warm citrus and ginger, then settles into golden resins and soft woods.",
    shortDescription: "A radiant, skin-close amber wrapped in golden spice and soft woods.",
    notes: JSON.stringify(["Citrus peel", "Ginger", "Amber", "Guaiac wood", "Vanilla"]),
    sizes: JSON.stringify([
      { label: "50 ml", value: 50, suffix: "ml" },
      { label: "100 ml", value: 100, suffix: "ml" },
    ]),
    price: 225,
    image: "/images/brand/al-qawi-master-bottle.png",
    accent: "Citrus and amber",
    featured: false,
  },
  {
    slug: "royal-palm",
    name: "Royal Palm",
    family: "Fresh",
    description:
      "Royal Palm pools the energy of green citrus and warm woods into a modern expression of freshness.",
    shortDescription: "A refined fresh-woody composition that feels crisp, clean and confident.",
    notes: JSON.stringify(["Lime leaf", "Palm heart", "Juniper", "White cedar", "Vetiver"]),
    sizes: JSON.stringify([
      { label: "50 ml", value: 50, suffix: "ml" },
      { label: "100 ml", value: 100, suffix: "ml" },
    ]),
    price: 195,
    image: "/images/brand/al-qawi-master-bottle.png",
    accent: "Citrus and vetiver",
    featured: false,
  },
  {
    slug: "zenith-leather",
    name: "Zenith Leather",
    family: "Leather",
    description:
      "Zenith Leather is built around polished leather and aromatic smoke, framed by saffron and dry woods.",
    shortDescription: "Dark leather, smoke and saffron arranged into a confident signature.",
    notes: JSON.stringify(["Saffron", "Black tea", "Leather", "Birch tar", "Patchouli"]),
    sizes: JSON.stringify([
      { label: "50 ml", value: 50, suffix: "ml" },
      { label: "100 ml", value: 100, suffix: "ml" },
      { label: "200 ml", value: 200, suffix: "ml" },
    ]),
    price: 260,
    image: "/images/brand/al-qawi-master-bottle.png",
    accent: "Leather and smoke",
    featured: false,
  },
];

await prisma.product.deleteMany();

for (const product of products) {
  await prisma.product.create({ data: product });
}

console.log("Seeded 6 products for AL QAWI PERFUMES.");

await prisma.$disconnect();
