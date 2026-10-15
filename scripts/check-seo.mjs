// Fails the build if a page exists without SEO copy / sitemap entry.
// Run: npm run check:seo   (also runs automatically before `npm run build`)
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "app/[locale]";
const pages = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f === "page.tsx") pages.push(p);
  }
})(ROOT);

const registry = readFileSync("src/seo/pages.ts", "utf8");
const registered = new Set([...registry.matchAll(/^\s+path: "([^"]+)"/gm)].map((m) => m[1]));
const errors = [];

for (const file of pages) {
  const route = file.slice(ROOT.length).replace(/\/?page\.tsx$/, "") || "/";
  if (!registered.has(route))
    errors.push(`${file}: route "${route}" is not in src/seo/pages.ts (no title/description/sitemap entry)`);
  if (!/pageMetadata\(/.test(readFileSync(file, "utf8")))
    errors.push(`${file}: missing  export const generateMetadata = pageMetadata("...")`);
}

// every registered page needs a brand-bearing, non-empty title + description in both languages
for (const m of registry.matchAll(/^  (\w+): \{\n    path: "([^"]+)"/gm)) {
  const block = registry.slice(m.index, registry.indexOf("\n  },", m.index));
  for (const lang of ["en", "es"]) {
    const c = block.match(new RegExp(`${lang}: \\{\\s*title:\\s*"([^"]+)",\\s*description:\\s*"([^"]+)"`));
    if (!c) errors.push(`${m[1]}: missing ${lang} title/description`);
    else if (c[2].length > 170) errors.push(`${m[1]} (${lang}): description is ${c[2].length} chars (keep under ~170)`);
  }
}
const home = registry.match(/home: \{[\s\S]*?title: "([^"]+)"/);
if (!home || !/One Community Home Health/.test(home[1])) errors.push("home: title must include the brand name");

if (errors.length) {
  console.error("SEO check failed:\n - " + errors.join("\n - "));
  process.exit(1);
}
console.log(`SEO check OK: ${pages.length} pages registered with en + es titles.`);
