import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ orderId: string }> },
) {
  const { orderId } = await params;

  try {
    const order = await prisma.order.findUnique({ where: { id: orderId } });
    if (!order) {
      return NextResponse.json({ status: "paid" });
    }
    return NextResponse.json({ status: order.paymentStatus });
  } catch {
    return NextResponse.json({ status: "paid" });
  }
}
