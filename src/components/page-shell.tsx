type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <div className="section-shell py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af6c]">
            {eyebrow}
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#f8f4ec] md:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base text-[#c8c1b3] md:text-lg">{description}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
