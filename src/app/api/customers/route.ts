import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const customer = await prisma.customer.upsert({
      where: { email: body.email },
      update: {
        name: body.name,
        phone: body.phone,
      },
      create: {
        name: body.name,
        email: body.email,
        phone: body.phone,
      },
    });

    return NextResponse.json({ customer });
  } catch {
    return NextResponse.json({ error: "Unable to create customer" }, { status: 400 });
  }
}
