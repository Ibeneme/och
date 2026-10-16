/**
 * Generates src/styles/dark-theme.generated.css
 *
 * The site is styled with literal brand colors (bg-[#F4F4F2], text-[#07162C]...).
 * Rather than rewriting thousands of classes, this script scans the source for
 * those classes and emits `.dark` overrides that remap them to a dark palette.
 *
 * Run:  npm run theme:gen      (also runs automatically before `npm run build`)
 * Edit the palette below to retune dark mode, then re-run.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["src", "app"];
const OUT = "src/styles/dark-theme.generated.css";

const hexToRgb = (h) => {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const rgba = (hex, alpha) => {
  const [r, g, b] = hexToRgb(hex);
  return alpha == null || alpha === 1 ? `rgb(${r} ${g} ${b})` : `rgb(${r} ${g} ${b} / ${alpha})`;
};

/* ---------------- Dark palette ---------------- */
const INK = "#E6ECF5"; // main text
const MUTED = "#AAB6C8"; // secondary text
const GOLD_TEXT = "#E4B95A"; // small gold text on dark surfaces
const LINE = "#E6ECF5"; // border base (used with the original alpha)

// background-like colors
const BG = {
  "#F4F4F2": "#0B1322", // page canvas
  white: "#121D31", // cards / surfaces
  "#E9EAE5": "#1B2A44", // pills, subtle panels
  "#FBF8F2": "#16233A",
  "#FBF6E6": "#16233A",
  "#F3ECDC": "#16233A",
  "#F0E9D9": "#16233A",
  "#F0F4F8": "#16233A",
  "#E6E9F0": "#16233A",
  "#E2E8F0": "#16233A",
  "#E8DFC8": "#2A2A26",
  "#F6EBD2": "#3A3220",
  "#07162C": "#0F2542", // navy sections/buttons (lifted so they separate from the page)
  "#101B33": "#0F2542",
  "#0F172A": "#0F2542",
  "#0A2140": "#102A4C",
  "#051122": "#07101F",
};
// text colors
const TEXT = {
  "#07162C": INK,
  "#101B33": INK,
  "#0F172A": INK,
  "#0A2140": INK,
  "#051122": INK,
  "#5B6B7C": MUTED,
  "#475569": MUTED,
  "#3A4657": MUTED,
  "#1E293B": INK,
  "#996515": GOLD_TEXT,
  "#8A6423": GOLD_TEXT,
  "#0B4A8F": "#8DBBF0",
  "slate-600": MUTED,
  "slate-700": MUTED,
  "slate-500": MUTED,
};
// border / ring / outline colors
const LINEMAP = {
  "#07162C": LINE,
  "#101B33": LINE,
  "#0F172A": LINE,
  "#E2E8F0": LINE,
  "#CBD5E1": LINE,
  "#E9EAE5": LINE,
  "#F0E9D9": LINE,
  "#F3ECDC": LINE,
  "#FBF8F2": LINE,
  "#FBF6E6": LINE,
  "#F0F4F8": LINE,
  "#E6E9F0": LINE,
  "#E8DFC8": "#E4B95A",
  "#996515": "#E4B95A",
  "#8A6423": "#E4B95A",
  "#0B4A8F": "#8DBBF0",
};
// Light hairline colours (cream / grey borders on light cards). In dark mode they
// become a soft, fixed-opacity line instead of a bright cream or heavy white one.
const SOFT_LINES = new Set(["#E2E8F0", "#CBD5E1", "#E9EAE5", "#F0E9D9", "#F3ECDC", "#FBF8F2", "#FBF6E6", "#F0F4F8", "#E6E9F0"]);
const SOFT_ALPHA = 0.14; // hairline strength
const MIN_LINE_ALPHA = 0.16; // translucent navy borders (/10) are invisible on dark: never go below this
const GOLD_BGS = ["#E4B95A", "#EDC878", "#C89B3C", "#C79A3B", "#D9A93F", "#D4AF37"];
const NAVY_TEXTS = ["#07162C", "#101B33", "#0F172A"];

/* ---------------- Scan ---------------- */
function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const s = statSync(p);
    if (s.isDirectory()) {
      if (["node_modules", ".next", "styles"].includes(f)) continue;
      walk(p, out);
    } else if (/\.(tsx|ts)$/.test(f)) out.push(p);
  }
  return out;
}
const src = ROOTS.flatMap((r) => walk(r)).map((f) => readFileSync(f, "utf8")).join("\n");

const TOKEN =
  /((?:[a-z0-9-]+:)*)(bg|text|border(?:-[trblxy])?|divide(?:-[xy])?|ring|outline|fill|stroke|from|via|to)-(\[#[0-9A-Fa-f]{6}\]|white|slate-\d+)(?:\/(\d+))?(?![\w\[\]#-])/g;

const tokens = new Map();
for (const m of src.matchAll(TOKEN)) {
  const [full, variants, util, color, alpha] = m;
  tokens.set(full, { variants: variants.split(":").filter(Boolean), util, color: color.replace(/[\[\]]/g, ""), alpha: alpha ? Number(alpha) / 100 : null });
}

const esc = (s) => s.replace(/[^a-zA-Z0-9_-]/g, (c) => "\\" + c);
const BREAKPOINTS = { sm: "40rem", md: "48rem", lg: "64rem", xl: "80rem", "2xl": "96rem" };
const BP_ORDER = ["sm", "md", "lg", "xl", "2xl"];
const STATES = {
  hover: ":hover",
  focus: ":focus",
  "focus-visible": ":focus-visible",
  "focus-within": ":focus-within",
  active: ":active",
  disabled: ":disabled",
  placeholder: "::placeholder",
  first: ":first-child",
  last: ":last-child",
};

function declFor(util, color, alpha) {
  const isWhite = color === "white";
  const hexKey = isWhite ? "white" : color;
  if (util === "bg") {
    // translucent whites are overlays on already-dark sections: leave them
    if (isWhite && alpha != null && alpha < 0.5) return null;
    const to = BG[hexKey];
    if (!to) return null;
    // faint navy tints (bg-[#07162C]/10) are highlights on light surfaces: use a light tint in dark mode
    if (NAVY_TEXTS.includes(hexKey) && alpha != null && alpha <= 0.3) return `background-color: ${rgba(INK, alpha)};`;
    return `background-color: ${rgba(to, alpha)};`;
  }
  if (util === "text") {
    if (isWhite) return null;
    const to = TEXT[hexKey];
    return to ? `color: ${rgba(to, alpha)};` : null;
  }
  if (util.startsWith("border") || util.startsWith("divide")) {
    if (isWhite) return null;
    const to = LINEMAP[hexKey];
    if (!to) return null;
    const a = SOFT_LINES.has(hexKey)
      ? SOFT_ALPHA // cream/grey hairlines -> quiet line
      : alpha == null
        ? 0.35 // solid navy borders -> visible but soft
        : Math.max(alpha, MIN_LINE_ALPHA); // faint navy borders stay visible
    // divide-* sets the colour on the children's borders
    const prop = util.startsWith("divide")
      ? "border-color"
      : { "": "border-color", t: "border-top-color", r: "border-right-color", b: "border-bottom-color", l: "border-left-color", x: "border-inline-color", y: "border-block-color" }[util.replace("border", "").replace("-", "")];
    return `${prop}: ${rgba(to, a)};`;
  }
  if (util === "ring") return LINEMAP[hexKey] ? `--tw-ring-color: ${rgba(LINEMAP[hexKey], alpha == null ? 0.35 : alpha)};` : null;
  if (util === "outline") return LINEMAP[hexKey] ? `outline-color: ${rgba(LINEMAP[hexKey], alpha == null ? 0.5 : alpha)};` : null;
  if (util === "fill" || util === "stroke") return TEXT[hexKey] ? `${util}: ${rgba(TEXT[hexKey], alpha)};` : null;
  if (util === "from" || util === "via" || util === "to") {
    const to = BG[hexKey];
    return to && !(isWhite && alpha != null && alpha < 0.5) ? `--tw-gradient-${util}: ${rgba(to, alpha)};` : null;
  }
  return null;
}

const base = [];
const bp = Object.fromEntries(BP_ORDER.map((b) => [b, []]));
let skipped = 0;
for (const [token, t] of [...tokens].sort((a, b) => a[0].localeCompare(b[0]))) {
  const decl = declFor(t.util, t.color, t.alpha);
  if (!decl) continue;
  let bpName = null;
  let suffix = "";
  let groupHover = false;
  let ok = true;
  for (const v of t.variants) {
    if (BREAKPOINTS[v]) bpName = v;
    else if (STATES[v]) suffix += STATES[v];
    else if (v === "group-hover") groupHover = true;
    else ok = false;
  }
  if (!ok) { skipped++; continue; }
  const cls = `.${esc(token)}${suffix}`;
  const target = t.util.startsWith("divide") ? `${cls} > :not(:last-child)` : cls;
  const sel = groupHover ? `:where(.dark) .group:hover ${target}` : `:where(.dark) ${target}`;
  const rule = `${sel} { ${decl} }`;
  (bpName ? bp[bpName] : base).push(rule);
}

/* Exceptions: navy text/borders sitting on a gold fill must stay navy. */
const present = (u, c) => [...tokens.keys()].filter((k) => { const t = tokens.get(k); return t.variants.length === 0 && t.util === u && t.color === c; });
const exc = [];
for (const g of GOLD_BGS) for (const bgTok of present("bg", g)) {
  for (const n of NAVY_TEXTS) for (const tx of present("text", n)) exc.push(`:where(.dark) .${esc(bgTok)}.${esc(tx)} { color: #07162C; }`);
  for (const n of NAVY_TEXTS) for (const bt of present("border", n)) exc.push(`:where(.dark) .${esc(bgTok)}.${esc(bt)} { border-color: #07162C; }`);
}
/* Navy-filled gold-ringed pills etc. keep white text automatically (text-white is untouched). */

const css = `/* AUTO-GENERATED by scripts/generate-dark-theme.mjs. Do not edit by hand. */
@layer utilities {
${base.join("\n")}
${BP_ORDER.map((b) => (bp[b].length ? `@media (min-width: ${BREAKPOINTS[b]}) {\n${bp[b].join("\n")}\n}` : "")).join("\n")}
${exc.join("\n")}
}
`;
writeFileSync(OUT, css);
console.log(`dark theme: ${base.length} base + ${BP_ORDER.reduce((n, b) => n + bp[b].length, 0)} responsive + ${exc.length} exception rules (${skipped} tokens skipped for unsupported variants)`);
