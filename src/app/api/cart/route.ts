import { NextResponse } from "next/server";

const cartStore = new Map<string, { productId: string; quantity: number }>();

export async function GET() {
  return NextResponse.json(Array.from(cartStore.values()));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const productId = String(body.productId ?? "");
    const quantity = Number(body.quantity ?? 1);

    if (!productId) {
      return NextResponse.json({ error: "Product ID required" }, { status: 400 });
    }

    const current = cartStore.get(productId) ?? { productId, quantity: 0 };
    cartStore.set(productId, { productId, quantity: current.quantity + quantity });

    return NextResponse.json({ productId, quantity: cartStore.get(productId)?.quantity ?? 0 });
  } catch {
    return NextResponse.json({ error: "Unable to update cart" }, { status: 400 });
  }
}
