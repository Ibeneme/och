This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Bilingual routing (English + Spanish)
- English: `/contact`  ·  Spanish: `/es/contact` (all pages live under `app/[locale]/`).
- `proxy.ts` rewrites un-prefixed URLs to `/en/...` internally and 308-redirects `/en/...` to the clean URL.
- SEO copy for every page, in both languages, is in `src/seo/pages.ts` (also drives the sitemap + hreflang).
- Use `@/src/components/LocaleLink` instead of `next/link` so links keep the visitor's language.
- Set `NEXT_PUBLIC_SITE_URL` to your production domain.
- Fill `counties` in `app/local-business.ts`.

## Extra languages (German, French, Mandarin Chinese, Italian, Portuguese)
- Off by default: the site is English + Spanish only.
- Turn on: set `ENABLE_EXTRA_LANGUAGES = true` in `src/i18n/languages.ts`, or set the env var `NEXT_PUBLIC_ENABLE_EXTRA_LANGUAGES=true` and rebuild.
- Pick individual languages with `EXTRA_LANGUAGE_SWITCHES` in the same file (`de`, `fr`, `zh`, `it`, `pt`).
- URLs: `/de/...`, `/fr/...`, `/zh/...`, `/it/...`, `/pt/...`. Disabled languages return 404 and are not shown in the picker.
- Translated today (`src/i18n/messages.ts`): homepage hero, skip link, site tagline/description. Everything else shows English until translated.
- SEO: extra-language pages canonicalize to the English page and stay out of the sitemap/hreflang until fully translated.
- Machine-quality drafts: have native speakers review before launch.

## Dark / light mode
- Toggle (sun/moon) is in the navbar (desktop) and the mobile menu. The choice is saved in `localStorage` (`theme`); with no saved choice the site follows the visitor's OS setting. `app/[locale]/layout.tsx` sets the class before first paint, so there is no flash.
- The site uses literal brand colors in its classes, so dark mode is produced by `scripts/generate-dark-theme.mjs`, which scans the source and writes `src/styles/dark-theme.generated.css` (`.dark` overrides). It runs automatically on `npm run dev` and `npm run build`.
- Retune the dark palette at the top of that script. After adding new color classes (e.g. `bg-[#123456]`), re-run `npm run theme:gen`. Tailwind's `dark:` variant also works.
