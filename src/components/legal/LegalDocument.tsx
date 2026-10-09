import type { ReactNode } from "react";

export type TocItem = { id: string; label: string };

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#996515] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F4F2]";

export default function LegalDocument({
  title,
  tagline,
  lastUpdated,
  toc,
  identity,
  actions,
  lang,
  lastUpdatedLabel = "Last updated:",
  contentsLabel = "Contents",
  children,
}: {
  title: string;
  tagline?: string;
  lastUpdated: string;
  toc: TocItem[];
  identity?: ReactNode;
  actions?: ReactNode;
  lang?: "en" | "es";
  lastUpdatedLabel?: string;
  contentsLabel?: string;
  children: ReactNode;
}) {
  return (
    <div
      lang={lang}
      className="min-h-screen overflow-x-hidden bg-[#F4F4F2] text-[#07162C] antialiased selection:bg-[#E4B95A]/30 selection:text-[#07162C]"
    >
      {/* Header */}
      <header className="relative bg-[#07162C] text-white">
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20">
          {identity && (
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm font-medium text-white/80 sm:mb-10">
              {identity}
            </div>
          )}

          <h1 className="ohh-serif max-w-3xl text-balance break-words text-3xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {tagline && (
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:mt-5 sm:text-lg lg:text-xl">
              {tagline}
            </p>
          )}

          <div className="mt-7 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
            <p className="inline-flex flex-wrap items-center gap-x-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/90">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E4B95A] animate-pulse"
              />
              <span>{lastUpdatedLabel}&nbsp;</span>
              <span className="font-mono text-xs font-medium tabular-nums text-[#E4B95A]">
                {lastUpdated}
              </span>
            </p>
            {actions && (
              <div className="flex flex-wrap items-center gap-3 print:hidden">
                {actions}
              </div>
            )}
          </div>
        </div>
        {/* gold rule */}
        <div aria-hidden="true" className="h-1 w-full bg-[#E4B95A]" />
      </header>

      {/* Body */}
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-x-16">
          <aside className="min-w-0 print:hidden lg:sticky lg:top-28 lg:self-start">
            <nav
              aria-label="Table of contents"
              className="rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-7 lg:rounded-none lg:border-0 lg:border-l-2 lg:border-[#996515] lg:bg-transparent lg:py-1 lg:pl-6 lg:pr-0"
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
                {contentsLabel}
              </p>
              <div className="lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto lg:pr-2">
                <ol className="grid grid-cols-1 gap-x-6 gap-y-1.5 [counter-reset:toc] sm:grid-cols-2 lg:grid-cols-1">
                  {toc.map((t) => (
                    <li key={t.id} className="min-w-0 [counter-increment:toc]">
                      <a
                        href={`#${t.id}`}
                        className={`flex items-baseline gap-3 rounded-xl px-3 py-2 text-sm leading-snug text-[#07162C]/75 transition-colors before:w-6 before:shrink-0 before:font-mono before:text-xs before:tabular-nums before:text-[#996515] before:content-[counter(toc,decimal-leading-zero)] hover:bg-[#E9EAE5] hover:text-[#07162C] lg:-ml-3 ${focusRing}`}
                      >
                        <span className="min-w-0 break-words font-medium">
                          {t.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>
          </aside>

          <article className="min-w-0 max-w-[68ch] break-words text-base leading-[1.8] text-[#07162C]/85 sm:text-[1.0625rem] sm:leading-[1.85]">
            {children}
          </article>
        </div>
      </div>
    </div>
  );
}

export function Section({
  id,
  title,
  number,
  children,
}: {
  id: string;
  title: string;
  number?: number;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="scroll-mt-8 border-t border-[#07162C]/10 pb-12 pt-10 first:border-t-0 first:pt-0 last:pb-0 sm:pb-16 sm:pt-12 [&>p]:mt-4 sm:[&>p]:mt-5"
    >
      <h2
        id={id}
        className="ohh-serif flex scroll-mt-8 items-baseline gap-3 text-2xl font-medium leading-snug tracking-tight text-[#07162C] sm:text-3xl"
      >
        {number ? (
          <span
            aria-hidden="true"
            className="shrink-0 font-mono text-[0.7em] font-bold tabular-nums text-[#996515]"
          >
            {String(number).padStart(2, "0")}
          </span>
        ) : null}
        <span className="min-w-0 text-balance break-words">{title}</span>
      </h2>
      {children}
    </section>
  );
}

export const Sub = ({ children }: { children: ReactNode }) => (
  <h3 className="ohh-serif mt-8 text-xl font-medium leading-snug tracking-tight text-[#07162C] sm:mt-10 sm:text-2xl">
    {children}
  </h3>
);

export const Sub4 = ({ children }: { children: ReactNode }) => (
  <h4 className="ohh-serif mt-6 text-lg font-medium leading-snug text-[#07162C] sm:mt-8">
    {children}
  </h4>
);

export const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="mt-4 list-disc space-y-2.5 pl-5 marker:text-[#996515] sm:mt-5 sm:space-y-3 sm:pl-6">
    {items.map((i, n) => (
      <li key={n} className="pl-1.5 text-[#07162C]/80">
        {i}
      </li>
    ))}
  </ul>
);

export const Callout = ({ children }: { children: ReactNode }) => (
  <div className="my-6 rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:my-8 sm:p-8 [&>p+p]:mt-3">
    {children}
  </div>
);

export const Example = ({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) => (
  <p className="my-6 rounded-3xl border border-[#07162C]/10 bg-white px-6 py-5 text-[0.9688rem] leading-relaxed text-[#07162C]/85">
    {label ? (
      <span className="mr-3 inline-block rounded-full bg-[#07162C] px-3 py-1 align-baseline font-mono text-xs font-bold text-[#E4B95A]">
        {label}
      </span>
    ) : null}
    {children}
  </p>
);

export const ExtLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`rounded-sm font-semibold text-[#07162C] underline decoration-[#996515] decoration-2 underline-offset-[3px] transition-colors hover:text-[#996515] print:no-underline ${focusRing}`}
  >
    {children}
  </a>
);

export const Pending = ({ what }: { what: string }) => (
  <p className="my-6 rounded-3xl border-2 border-dashed border-[#996515] bg-[#E9EAE5] px-6 py-5 font-mono text-sm font-semibold text-[#996515]">
    PASTE VERBATIM: {what}
  </p>
);
