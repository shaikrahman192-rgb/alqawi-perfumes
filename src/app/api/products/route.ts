import { NextResponse } from "next/server";
import { masterBottleImage, products } from "@/lib/products";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const rows = await prisma.product.findMany({ orderBy: { createdAt: "asc" } });

    if (rows.length === 0) {
      return NextResponse.json(products);
    }

    return NextResponse.json(
      rows.map((product) => ({
        ...product,
        image: masterBottleImage,
        notes: JSON.parse(product.notes),
        sizes: JSON.parse(product.sizes),
      })),
    );
  } catch {
    return NextResponse.json(products);
  }
}
