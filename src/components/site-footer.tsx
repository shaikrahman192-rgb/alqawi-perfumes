import Link from "next/link";
import { storeConfig } from "@/lib/store";

const linkGroups = [
  {
    title: "The House",
    links: [
      { href: "/about", label: "About Al Qawi" },
      { href: "/journal", label: "Fragrance Journal" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/shipping", label: "Shipping & Returns" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/account", label: "My Orders" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d4af6c]/15 bg-[#0d0d0c]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.42em] text-[#d4af6c]">AL QAWI</div>
          <p className="max-w-md text-sm leading-7 text-[#c8c1b3]">
            Luxury fragrances shaped for presence, character and lasting impression. Crafted in nuance, built for evenings that remain unforgettable.
          </p>
        </div>

        {linkGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#f5efe5]">{group.title}</h3>
            <ul className="space-y-3 text-sm text-[#c8c1b3]">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[#d4af6c]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#f5efe5]">Contact</h3>
          <ul className="space-y-3 text-sm text-[#c8c1b3]">
            <li>hello@alqawi.com</li>
            <li>
              <a href={storeConfig.phoneLink} className="transition hover:text-[#d4af6c]">
                {storeConfig.phone}
              </a>
            </li>
            <li>{storeConfig.address}</li>
            <li>
              <a href={storeConfig.whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-[#d4af6c]">
                WhatsApp · {storeConfig.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#d4af6c]/10 py-4 text-center text-xs uppercase tracking-[0.22em] text-[#9da196]">
        © 2026 AL QAWI PERFUMES
      </div>
    </footer>
  );
}
