export type ProductSize = {
  label: string;
  value: 10 | 30 | 50 | 100;
  suffix: "ml";
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  family: string;
  shortDescription: string;
  description: string;
  notes: string[];
  sizes: ProductSize[];
  prices: Record<ProductSize["value"], number | null>;
  price: number | null;
  image: string;
  atmosphere: string;
  accent: string;
  featured: boolean;
};

export const masterBottleImage = "/images/brand/al-qawi-master-bottle.png";

const sizes: ProductSize[] = [
  { label: "10 ml", value: 10, suffix: "ml" },
  { label: "30 ml", value: 30, suffix: "ml" },
  { label: "50 ml", value: 50, suffix: "ml" },
  { label: "100 ml", value: 100, suffix: "ml" },
];

const pricePlaceholders: Product["prices"] = {
  10: 199,
  30: 499,
  50: 799,
  100: 1599,
};

const createProduct = (
  id: string,
  slug: string,
  name: string,
  family: string,
  shortDescription: string,
  description: string,
  notes: string[],
  atmosphere: string,
  accent: string,
  featured = false,
): Product => ({
  id,
  slug,
  name,
  family,
  shortDescription,
  description,
  notes,
  sizes,
  prices: { ...pricePlaceholders },
  price: null,
  image: masterBottleImage,
  atmosphere,
  accent,
  featured,
});

export const products: Product[] = [
  createProduct(
    "prod_oudh_and_roses",
    "oudh-and-roses",
    "Oudh and Roses",
    "Rose Â· Oud",
    "Damask rose meets polished oud in an opulent, softly resinous trail.",
    "A luminous rose opening leads into velvety oud, warm woods and a graceful lingering amber finish.",
    ["Damask rose", "Saffron", "Oud", "Amber", "Soft woods"],
    "oud",
    "Rose and oud",
    true,
  ),
  createProduct(
    "prod_bin_shaik",
    "bin-shaik",
    "Bin Shaik",
    "Oriental Â· Spiced",
    "A rich, composed oriental profile with spice, incense and warm woods.",
    "Spiced aromatics and aromatic incense settle into a deep, smooth woody accord with an elegant, lasting finish.",
    ["Cardamom", "Spices", "Incense", "Oud", "Warm woods"],
    "desert",
    "Spice and incense",
    true,
  ),
  createProduct(
    "prod_ysl_y",
    "y",
    "Y",
    "Fresh Â· Aromatic",
    "Crisp aromatic freshness over a refined, confident woody base.",
    "Bright green aromatics and fresh citrus meet clean woods for a modern, versatile signature.",
    ["Bergamot", "Green aromatics", "Sage", "Woods", "Musk"],
    "citrus",
    "Fresh aromatic woods",
    true,
  ),
  createProduct(
    "prod_stronger_with_you_absolutely",
    "stronger-with-you-absolutely",
    "Stronger With You Absolutely",
    "Amber Â· Gourmand",
    "Warm amber, smooth spice and comforting vanilla in a deep evening trail.",
    "A rich, warmly spiced gourmand accord blends mellow amber and creamy vanilla with a soft, polished woody dry-down.",
    ["Spice", "Amber", "Vanilla", "Chestnut", "Woods"],
    "amber",
    "Amber and vanilla",
  ),
  createProduct(
    "prod_marj",
    "marj",
    "Marj",
    "Floral Â· Woody",
    "A graceful floral-woody composition with a warm, enveloping finish.",
    "Expressive florals mingle with smooth woods and soft musk in a balanced fragrance with an elegant, lingering presence.",
    ["Floral petals", "Citrus", "Soft spice", "Woods", "Musk"],
    "floral",
    "Florals and soft woods",
  ),
  createProduct(
    "prod_naxos",
    "naxos",
    "Naxos",
    "Amber Â· Aromatic",
    "A sun-warmed Mediterranean mood of citrus, honeyed warmth and woods.",
    "Lively citrus and aromatic freshness unfold into golden honey, soft tobacco and mellow woods.",
    ["Citrus", "Lavender", "Honey", "Tobacco", "Tonka"],
    "mediterranean",
    "Citrus and honey",
    true,
  ),
  createProduct(
    "prod_ganymede",
    "ganymede",
    "Ganymede",
    "Mineral Â· Woody",
    "A polished mineral impression with luminous spice and smooth woods.",
    "Cool mineral facets and bright spice create a quietly futuristic contrast against suede-like woods and soft amber.",
    ["Saffron", "Mandarin", "Mineral accord", "Suede", "Woods"],
    "mineral",
    "Mineral and suede",
    true,
  ),
  createProduct(
    "prod_purpose_50",
    "purpose-50",
    "Purpose 50",
    "Incense Â· Woody",
    "Incense and aromatic spice rise over a polished, earthy woody base.",
    "A textured incense accord meets vibrant aromatics and deep woods for a meditative, richly layered signature.",
    ["Incense", "Pink pepper", "Papyrus", "Vetiver", "Oud"],
    "incense",
    "Incense and woods",
  ),
  createProduct(
    "prod_outlands",
    "outlands",
    "Outlands",
    "Amber Â· Woody",
    "A broad, enveloping amber-wood profile with a sense of open distance.",
    "Warm amber and expansive woods create a smooth, atmospheric composition with a softly smoldering finish.",
    ["Amber", "Incense", "Resins", "Dry woods", "Musk"],
    "ember",
    "Amber and resin",
  ),
  createProduct(
    "prod_althair",
    "althair",
    "Althair",
    "Amber Â· Vanilla",
    "Creamy vanilla and glowing amber wrapped in polished woods.",
    "A soft vanilla warmth is lifted by aromatic spice and golden amber, leaving an elegant, velvety trail.",
    ["Vanilla", "Cinnamon", "Amber", "Orange blossom", "Woods"],
    "vanilla",
    "Vanilla and amber",
  ),
  createProduct(
    "prod_ombre_nomade",
    "ombre-nomade",
    "Ombre Nomade",
    "Oud Â· Smoky",
    "Shadowed oud and resin evoke dark desert air at dusk.",
    "A dense, elegant oud accord blends with warm resins and soft smoke for a deep, enveloping fragrance.",
    ["Oud", "Incense", "Saffron", "Resins", "Smoke"],
    "nomadicOud",
    "Oud and smoke",
  ),
  createProduct(
    "prod_baccarat_rouge_540",
    "baccarat-rouge-540",
    "Baccarat Rouge 540",
    "Amber Â· Woody",
    "A radiant amber-woody impression with airy sweetness and warm depth.",
    "Airy amber facets, luminous woods and a gently sweet mineral warmth create a striking, lasting signature.",
    ["Amber", "Saffron", "Jasmine", "Woods", "Musk"],
    "crystal",
    "Airy amber woods",
  ),
  createProduct(
    "prod_tobacco_vanille",
    "tobacco-vanille",
    "Tobacco Vanille",
    "Tobacco Â· Gourmand",
    "Soft tobacco leaf and creamy vanilla wrapped in warm spice.",
    "A rich tobacco accord meets velvety vanilla and aromatic spice for an intimate, beautifully composed evening fragrance.",
    ["Tobacco leaf", "Vanilla", "Spice", "Cacao", "Dry woods"],
    "tobacco",
    "Tobacco and vanilla",
  ),
  createProduct(
    "prod_pacific_chill",
    "pacific-chill",
    "Pacific Chill",
    "Fresh Â· Citrus",
    "A fresh coastal impression of bright citrus and cool, green aromatics.",
    "Breezy citrus and green aromatic notes bring a sense of sunlit sea air, balanced by an understated clean finish.",
    ["Citrus", "Mint", "Blackcurrant", "Green aromatics", "Musk"],
    "coastal",
    "Citrus and green notes",
  ),
  createProduct(
    "prod_afternoon_swim",
    "afternoon-swim",
    "Afternoon Swim",
    "Citrus Â· Fresh",
    "Sparkling citrus and sunlit freshness with a clean, uplifting trail.",
    "Juicy citrus notes capture the feeling of an open-water afternoon, brightened by airy freshness and a soft, clean base.",
    ["Orange", "Mandarin", "Bergamot", "Neroli", "Musk"],
    "aquatic",
    "Citrus and sea air",
  ),
];

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductSizePrice(product: Product, size: ProductSize) {
  return product.prices[size.value];
}

export function getProductsByFamily(family: string) {
  return products.filter((product) => product.family === family);
}

export default products;


