import { Award, Phone, ArrowRight, Shield } from "lucide-react";

// ---- Design tokens (shared brand system) --------------------------------
const color = {
  ink: "#0B2036", // deep navy, primary text
  inkSoft: "#4E5F70", // muted body text
  paper: "#FBFAF6", // warm ivory background
  card: "#FFFFFF",
  navy: "#0B2036", // primary CTA / brand navy
  teal: "#1F4B44", // secondary brand teal
  tealSoft: "#E7EEE9",
  gold: "#B78B34", // credential accent, muted antique gold
  goldSoft: "#F3EBD8",
  line: "#E4E1D6",
};

export default function LeadershipHero() {
  return (
    <section
      style={{
        position: "relative",
        background: color.paper,
        fontFamily: "'Inter', system-ui, sans-serif",
        color: color.ink,
        padding: "64px 24px",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');
        @keyframes lh-draw { to { stroke-dashoffset: 0; } }
        .lh-pulse path { stroke-dasharray: 240; stroke-dashoffset: 240; animation: lh-draw 1.4s ease-out .3s forwards; }
        .lh-cta-primary { transition: transform .18s ease,  }
        .lh-cta-primary:hover { transform: translateY(-2px); }
        .lh-cta-secondary svg { transition: transform .18s ease; }
        .lh-cta-secondary:hover svg { transform: translateX(3px); }
        .lh-cta-secondary:hover { background: ${color.tealSoft}; }
        .lh-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 28px; align-items: stretch; }
        @media (max-width: 900px) {
          .lh-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="lh-grid">
          {/* -------- Left: identity card -------- */}
          <div
            style={{
              background: color.card,
              borderRadius: 28,
              border: `1px solid ${color.line}`,
              padding: "44px 44px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                alignSelf: "flex-start",
                background: color.goldSoft,
                color: "#8A6A26",
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "8px 15px",
                borderRadius: 999,
              }}
            >
              <Award size={14} strokeWidth={2.25} color={color.gold} />
              Founder &amp; Clinical Leadership
            </div>

            <div>
              <h1
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 600,
                  fontSize: "clamp(34px, 4vw, 50px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                Angela Ananti,{" "}
                <span
                  style={{
                    color: color.gold,
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  BSN, RN
                </span>
              </h1>
              <p
                style={{
                  margin: "12px 0 0",
                  fontSize: 18,
                  fontWeight: 600,
                  color: color.teal,
                }}
              >
                Founder, Owner, Administrator, and Director of Nursing
              </p>
            </div>

            {/* signature: a single drawn pulse-line, referencing vigilant clinical care */}
            <svg
              className="lh-pulse"
              viewBox="0 0 400 28"
              width="180"
              height="16"
              style={{ display: "block" }}
            >
              <path
                d="M0 14 H130 L145 3 L160 25 L175 14 H400"
                fill="none"
                stroke={color.gold}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p
              style={{
                margin: 0,
                fontSize: 16.5,
                lineHeight: 1.7,
                color: color.inkSoft,
                maxWidth: 540,
              }}
            >
              Bringing more than two decades of dedicated nursing and healthcare
              leadership experience to families across the Dallas-Fort Worth
              Metroplex.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginTop: 6,
              }}
            >
              <a
                href="tel:9723251598"
                className="lh-cta-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: color.navy,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 14.5,
                  padding: "15px 26px",
                  borderRadius: 14,
                  textDecoration: "none",
                }}
              >
                <Phone size={16} strokeWidth={2.25} color={color.gold} />
                Call Our Team: 972-325-1598
              </a>
              <a
                href="/referrals"
                className="lh-cta-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: color.ink,
                  fontWeight: 600,
                  fontSize: 14.5,
                  padding: "14px 24px",
                  borderRadius: 14,
                  border: `1.5px solid ${color.line}`,
                  textDecoration: "none",
                }}
              >
                Refer a Patient
                <ArrowRight size={16} strokeWidth={2.25} />
              </a>
            </div>
          </div>

          {/* -------- Right: bento column -------- */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                position: "relative",
                flex: 1,
                background: color.teal,
                borderRadius: 26,
                padding: "34px 30px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* faint DFW skyline watermark, grounding the metroplex mention */}
              <svg
                width="100%"
                height="64"
                viewBox="0 0 300 64"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  opacity: 0.14,
                }}
              >
                <rect x="0" y="30" width="18" height="34" fill="#fff" />
                <rect x="22" y="18" width="14" height="46" fill="#fff" />
                <rect x="40" y="36" width="20" height="28" fill="#fff" />
                <rect x="64" y="10" width="12" height="54" fill="#fff" />
                <rect x="80" y="26" width="16" height="38" fill="#fff" />
                <rect x="100" y="4" width="10" height="60" fill="#fff" />
                <rect x="114" y="32" width="18" height="32" fill="#fff" />
                <rect x="140" y="16" width="14" height="48" fill="#fff" />
                <rect x="158" y="34" width="20" height="30" fill="#fff" />
                <rect x="182" y="8" width="12" height="56" fill="#fff" />
                <rect x="198" y="28" width="16" height="36" fill="#fff" />
                <rect x="220" y="20" width="14" height="44" fill="#fff" />
                <rect x="238" y="38" width="20" height="26" fill="#fff" />
                <rect x="262" y="14" width="12" height="50" fill="#fff" />
                <rect x="278" y="30" width="18" height="34" fill="#fff" />
              </svg>

              {/* nursing-pin badge */}
              <div
                style={{
                  position: "relative",
                  width: 84,
                  height: 84,
                  marginBottom: 18,
                }}
              >
                <svg viewBox="0 0 100 100" width="84" height="84">
                  {Array.from({ length: 16 }).map((_, i) => {
                    const angle = (i / 16) * Math.PI * 2;
                    const x1 = 50 + Math.cos(angle) * 46;
                    const y1 = 50 + Math.sin(angle) * 46;
                    const x2 = 50 + Math.cos(angle) * 40;
                    const y2 = 50 + Math.sin(angle) * 40;
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={color.gold}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    );
                  })}
                  <circle
                    cx="50"
                    cy="50"
                    r="34"
                    fill={color.teal}
                    stroke={color.gold}
                    strokeWidth="2"
                  />
                </svg>
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Fraunces', serif",
                    color: "#fff",
                    fontSize: 22,
                    fontWeight: 600,
                  }}
                >
                  AA
                </span>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: color.gold,
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 6,
                }}
              >
                <Award size={13} strokeWidth={2.5} />
                Clinical Expert
              </div>
              <h3
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 600,
                  fontSize: 19,
                  color: "#fff",
                  margin: 0,
                }}
              >
                Angela Ananti, BSN, RN
              </h3>
              <p
                style={{
                  margin: "3px 0 0",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Founder &amp; Director of Nursing
              </p>
            </div>

            <div
              style={{
                background: color.card,
                border: `1px solid ${color.line}`,
                borderRadius: 20,
                padding: "20px 26px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{ fontSize: 14.5, fontWeight: 600, color: color.ink }}
              >
                Serving Clients Since 2010
              </span>
              <Shield size={18} color={color.gold} strokeWidth={2.25} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
