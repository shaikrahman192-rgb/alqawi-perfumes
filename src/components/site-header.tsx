"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, Search, ShoppingBag, Heart, User, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { storeConfig } from "@/lib/store";

const navItems = [
  { href: "/shop", label: "Shop" },
  { href: "/collection", label: "Collections" },
  { href: "/about", label: "The House" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d4af6c]/15 bg-[#0d0d0c]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.24em] text-[#f5efe5] md:flex">
          <Link href="/shop" className="transition hover:text-[#d4af6c]">
            Shop
          </Link>
        </div>

        <div className="flex items-center justify-center md:flex-1">
          <Link href="/" className="flex items-center gap-3" aria-label="AL QAWI PERFUMES home">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#d4af6c]/40 bg-[#111111] p-1 shadow-[0_0_30px_rgba(212,175,108,0.16)]">
              <Image src="/logo.svg" alt="AL QAWI logo" width={48} height={48} className="h-full w-full object-contain" />
            </div>
            <div className="hidden text-center md:block">
              <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4af6c]">AL QAWI</div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#f5efe5]">Perfumes</div>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-[11px] font-medium uppercase tracking-[0.22em] text-[#f5efe5] md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "text-[#d4af6c]" : "transition hover:text-[#d4af6c]"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 text-[#f5efe5] md:gap-3">
          <a
            href={storeConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-[#d4af6c] xl:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            {storeConfig.phone}
          </a>
          <button className="rounded-full border border-[#d4af6c]/25 bg-[#111111]/80 p-2.5 transition hover:border-[#d4af6c]/50 hover:text-[#d4af6c]" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <Link href="/account" className="hidden rounded-full border border-[#d4af6c]/25 bg-[#111111]/80 p-2.5 transition hover:border-[#d4af6c]/50 hover:text-[#d4af6c] sm:inline-flex" aria-label="Account">
            <User className="h-4 w-4" />
          </Link>
          <button className="hidden rounded-full border border-[#d4af6c]/25 bg-[#111111]/80 p-2.5 transition hover:border-[#d4af6c]/50 hover:text-[#d4af6c] sm:inline-flex" aria-label="Wishlist">
            <Heart className="h-4 w-4" />
          </button>
          <Link href="/cart" className="inline-flex rounded-full border border-[#d4af6c]/25 bg-[#111111]/80 p-2.5 transition hover:border-[#d4af6c]/50 hover:text-[#d4af6c]" aria-label="Cart">
            <ShoppingBag className="h-4 w-4" />
          </Link>
          <button
            className="inline-flex rounded-full border border-[#d4af6c]/25 bg-[#111111]/80 p-2.5 transition hover:border-[#d4af6c]/50 hover:text-[#d4af6c] md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#d4af6c]/15 bg-[#0d0d0c] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm uppercase tracking-[0.18em] text-[#f5efe5]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="transition hover:text-[#d4af6c]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
