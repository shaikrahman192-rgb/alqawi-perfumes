import { PageShell } from "@/components/page-shell";
import { storeConfig } from "@/lib/store";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Begin your fragrance conversation."
      description="For private consultations, gifting requests and wholesale enquiries, our team is ready to assist."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-8 text-sm leading-8 text-[#c8c1b3]">
          <p>hello@alqawi.com</p>
          <p>
            <a href={storeConfig.phoneLink} className="transition hover:text-[#d4af6c]">
              {storeConfig.phone}
            </a>
          </p>
          <p>{storeConfig.address}</p>
          <a
            href={storeConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex pt-3 text-[#d4af6c] hover:text-[#f5efe5]"
          >
            Chat with us on WhatsApp
          </a>
        </div>
        <form className="rounded-[28px] border border-[#d4af6c]/15 bg-[#121110] p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#d4af6c]">Name</span>
              <input className="w-full rounded-2xl border border-[#d4af6c]/20 bg-[#171614] px-4 py-3 text-[#f5efe5] outline-none" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#d4af6c]">Email</span>
              <input type="email" className="w-full rounded-2xl border border-[#d4af6c]/20 bg-[#171614] px-4 py-3 text-[#f5efe5] outline-none" placeholder="name@example.com" />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#d4af6c]">Message</span>
              <textarea className="min-h-32 w-full rounded-2xl border border-[#d4af6c]/20 bg-[#171614] px-4 py-3 text-[#f5efe5] outline-none" placeholder="How can we help?" />
            </label>
          </div>
          <button type="submit" className="mt-6 inline-flex rounded-full bg-[#d4af6c] px-6 py-3 text-xs font-medium uppercase tracking-[0.24em] text-[#111111]">
            Send inquiry
          </button>
        </form>
      </div>
    </PageShell>
  );
}
