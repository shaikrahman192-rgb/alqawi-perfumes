import { NextResponse } from "next/server";
import { getProductBySlug, masterBottleImage } from "@/lib/products";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  try {
    const product = await prisma.product.findUnique({ where: { slug } });

    if (!product) {
      const fallback = getProductBySlug(slug);
      return fallback
        ? NextResponse.json(fallback)
        : NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({
      ...product,
      image: masterBottleImage,
      notes: JSON.parse(product.notes),
      sizes: JSON.parse(product.sizes),
    });
  } catch {
    const fallback = getProductBySlug(slug);
    return fallback
      ? NextResponse.json(fallback)
      : NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
}
