import type { ReactNode } from "react";

export type TocItem = { id: string; label: string };

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

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
      className="min-h-screen overflow-x-hidden bg-white text-[#1E2B4A] antialiased selection:bg-[#C9A227]/30 selection:text-[#0A1F44]"
    >
      {/* Header */}
      <header className="relative bg-[#0A1F44] text-white">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16">
          {identity && (
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm font-medium text-white/80 sm:mb-10">
              {identity}
            </div>
          )}

          <h1 className="max-w-3xl text-balance break-words text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {tagline && (
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:mt-5 sm:text-lg lg:text-xl">
              {tagline}
            </p>
          )}

          <div className="mt-7 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
            <p className="inline-flex flex-wrap items-center gap-x-2 rounded-full border border-[#C9A227]/50 bg-white/5 px-3.5 py-1.5 text-sm text-white/80">
              <span
                aria-hidden="true"
                className="size-1.5 shrink-0 rounded-full bg-[#C9A227]"
              />
              <span>{lastUpdatedLabel}&nbsp;</span>
              <span className="font-mono text-[0.8125rem] font-medium tabular-nums text-[#E6C75A]">
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
        <div aria-hidden="true" className="h-1 w-full bg-[#C9A227]" />
      </header>

      {/* Body */}
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-x-16">
          <aside className="min-w-0 print:hidden lg:sticky lg:top-8 lg:self-start">
            <nav
              aria-label="Table of contents"
              className="rounded-xl border border-[#0A1F44]/10 bg-[#F6F8FC] p-4 sm:p-5 lg:rounded-none lg:border-0 lg:border-l-2 lg:border-[#C9A227] lg:bg-transparent lg:py-1 lg:pl-5 lg:pr-0"
            >
              {/* "Contents" label is now pinned and stays stationary */}
              <p className="mb-3 text-sm font-semibold text-[#0A1F44]">
                {contentsLabel}
              </p>
              {/* Only the list container below will scroll if it overflows */}
              <div className="lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-2">
                <ol className="grid grid-cols-1 gap-x-6 gap-y-0.5 [counter-reset:toc] sm:grid-cols-2 lg:grid-cols-1">
                  {toc.map((t) => (
                    <li key={t.id} className="min-w-0 [counter-increment:toc]">
                      <a
                        href={`#${t.id}`}
                        className={`flex items-baseline gap-3 rounded-md px-2 py-1.5 text-sm leading-snug text-[#1E2B4A]/80 transition-colors before:w-6 before:shrink-0 before:font-mono before:text-xs before:tabular-nums before:text-[#8A6A12] before:content-[counter(toc,decimal-leading-zero)] hover:bg-[#C9A227]/15 hover:text-[#0A1F44] lg:-ml-2 ${focusRing}`}
                      >
                        <span className="min-w-0 break-words">{t.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>
          </aside>

          <article className="min-w-0 max-w-[68ch] break-words text-base leading-[1.75] text-[#1E2B4A] sm:text-[1.0625rem] sm:leading-[1.8]">
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
      className="scroll-mt-6 border-t border-[#0A1F44]/10 pb-10 pt-8 first:border-t-0 first:pt-0 last:pb-0 sm:pb-12 sm:pt-10 [&>p]:mt-4 sm:[&>p]:mt-5"
    >
      <h2
        id={id}
        className="flex scroll-mt-6 items-baseline gap-3 text-xl font-semibold leading-snug tracking-tight text-[#0A1F44] sm:text-2xl lg:text-[1.75rem]"
      >
        {number ? (
          <span
            aria-hidden="true"
            className="shrink-0 font-mono text-[0.7em] font-medium tabular-nums text-[#8A6A12]"
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
  <h3 className="mt-8 text-lg font-semibold leading-snug tracking-tight text-[#0A1F44] sm:mt-10 sm:text-xl">
    {children}
  </h3>
);

export const Sub4 = ({ children }: { children: ReactNode }) => (
  <h4 className="mt-6 text-base font-semibold leading-snug text-[#0A1F44] sm:mt-8">
    {children}
  </h4>
);

export const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#C9A227] sm:mt-5 sm:space-y-2.5 sm:pl-6">
    {items.map((i, n) => (
      <li key={n} className="pl-1.5">
        {i}
      </li>
    ))}
  </ul>
);

export const Callout = ({ children }: { children: ReactNode }) => (
  <div className="my-6 rounded-r-xl border-l-4 border-[#C9A227] bg-[#FBF6E6] px-4 py-4 text-[0.9688rem] leading-relaxed text-[#0A1F44] sm:my-8 sm:px-6 sm:py-5 [&>p+p]:mt-3">
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
  <p className="my-6 rounded-xl border border-[#0A1F44]/15 bg-[#F6F8FC] px-4 py-4 text-[0.9688rem] leading-relaxed sm:px-5">
    {label ? (
      <span className="mr-2 inline-block rounded-md bg-[#0A1F44] px-2 py-0.5 align-baseline font-mono text-xs font-medium text-[#E6C75A]">
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
    className={`rounded-sm font-medium text-[#0A1F44] underline decoration-[#C9A227] decoration-2 underline-offset-[3px] transition-colors hover:bg-[#C9A227]/20 print:no-underline ${focusRing}`}
  >
    {children}
  </a>
);

export const Pending = ({ what }: { what: string }) => (
  <p className="my-6 rounded-xl border-2 border-dashed border-[#C9A227] bg-[#FBF6E6] px-4 py-4 font-mono text-sm font-medium text-[#8A6A12] sm:px-5">
    PASTE VERBATIM: {what}
  </p>
);
