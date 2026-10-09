"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Phone,
  ArrowRight,
  MapPin,
  ClipboardCheck,
  Home,
  Compass,
  Check,
} from "lucide-react";

/* Restyled to match Request Care layout:
   soft gray canvas #F4F4F2, pill badges with number chips, large light headings,
   rounded bento cards, flat style with 1px borders. */

export interface TestimonialItem {
  quote: string;
  quoteEs: string;
  author: string;
  details: string;
  detailsEs: string;
  seed: boolean;
  category: string;
  categoryEs: string;
}

export const seedTestimonials: TestimonialItem[] = [
  {
    quote:
      "The VA paperwork said I qualified for help. Getting someone to actually show up was a different story. One Community sat on the phone with my coordinator until the hours got approved, and then they sat on it again when the authorization lapsed. I did twenty-two years in the Army. I know the difference between somebody who says they'll handle it and somebody who handles it.",
    quoteEs:
      "El papeleo del VA decía que califiqué para recibir ayuda. Conseguir que alguien realmente se presentara fue otra historia. One Community se quedó al teléfono con mi coordinador hasta que se aprobaron las horas, y luego volvieron a hacerlo cuando caducó la autorización. Serví veintidós años en el Ejército. Conozco la diferencia entre alguien que dice que se encargará y alguien que realmente lo hace.",
    author: "James W.",
    details: "Fort Worth - Veteran, patient since 2023",
    detailsEs: "Fort Worth - Veterano, paciente desde 2023",
    seed: false,
    category: "Veteran Care",
    categoryEs: "Cuidado de Veteranos",
  },
  {
    quote:
      "I quit my job to take care of my mother. I didn't know there was any other option. My mom's service coordinator mentioned One Community, and within a few weeks I was hired, trained, and getting a paycheck for the work I was already doing every single day. I'm still her daughter first. But now the light bill gets paid too.",
    quoteEs:
      "Renuncié a mi trabajo para cuidar a mi madre. No sabía que había otra opción. El coordinador de servicios de mi mamá mencionó a One Community, y a las pocas semanas me contrataron, me capacitaron y recibí un cheque por el trabajo que ya hacía todos los días. Sigo siendo su hija primero. Pero ahora la factura de la luz también se paga.",
    author: "Maribel C.",
    details: "Grand Prairie - Daughter and paid attendant",
    detailsEs: "Grand Prairie - Hija y asistente remunerada",
    seed: false,
    category: "Family Attendant",
    categoryEs: "Asistente Familiar",
  },
  {
    quote:
      "Nurse Angela came out herself the first week. She sat at my kitchen table and asked what my day actually looks like, not what was on a form. Nobody had asked me that before.",
    quoteEs:
      "La enfermera Angela vino en persona la primera semana. Se sentó a la mesa de mi cocina y me preguntó cómo es realmente mi día, no lo que decía un formulario. Nadie me había preguntado eso antes.",
    author: "Ruby T.",
    details: "DeSoto - Patient",
    detailsEs: "DeSoto - Paciente",
    seed: false,
    category: "Skilled Nursing",
    categoryEs: "Enfermería Especializada",
  },
  {
    quote:
      "I live in Houston and my father lives in Arlington. I used to call him twice a day and still not know how he was doing. Now I get a call from his attendant if something seems off, and Angela has called me herself twice when Dad's blood pressure looked wrong. He's ninety-one and he's still in the house he bought in 1974. That's because of them.",
    quoteEs:
      "Vivo en Houston y mi padre vive en Arlington. Solía llamarlo dos veces al día y aun así no sabía cómo estaba. Ahora recibo una llamada de su asistente si algo parece extraño, y Angela me ha llamado ella misma dos veces cuando la presión arterial de papá no estaba bien. Tiene noventa y un años y sigue en la casa que compró en 1974. Eso es gracias a ellos.",
    author: "Marcus B.",
    details: "Arlington - Son of a patient",
    detailsEs: "Arlington - Hijo de un paciente",
    seed: false,
    category: "Family Member",
    categoryEs: "Familiar del Paciente",
  },
  {
    quote:
      "After my husband passed I found out I qualified for a VA benefit I'd never heard of. One Community didn't file anything for me - they were clear that they couldn't - but they pointed me to the county veterans office, and they told me exactly what home care would cost so I had a real number to work with. The lady who comes now, Yolanda, has been with me two years. She knows how I take my coffee and she knows when to tell me to sit down. I'm eighty-four and I am still in my own home.",
    quoteEs:
      "Después de que falleció mi esposo, descubrí que calificaba para un beneficio del VA del que nunca había oído hablar. One Community no presentó nada por mí —fueron claros en que no podían— pero me indicaron la oficina de veteranos del condado y me dijeron exactamente cuánto costaría la atención domiciliaria para tener un número real con el que trabajar. La señora que viene ahora, Yolanda, lleva dos años conmigo. Sabe cómo tomo mi café y sabe cuándo decirme que me siente. Tengo ochenta y cuatro años y sigo en mi propia casa.",
    author: "Eleanor M.",
    details: "Cedar Hill - Surviving spouse of a Korean War veteran",
    detailsEs:
      "Cedar Hill - Cónyuge sobreviviente de un veterano de la Guerra de Corea",
    seed: false,
    category: "Veteran Spouse",
    categoryEs: "Cónyuge de Veterano",
  },
];

const PHONE = "(972) 325-1598";
const PHONE_HREF = "tel:9723251598";
const COUNTIES = [
  "Collin",
  "Dallas",
  "Denton",
  "Ellis",
  "Johnson",
  "Kaufman",
  "Rockwall",
  "Tarrant",
];

const copy = {
  en: {
    heroEyebrow: "About One Community Home Health",
    heroTitleA: "Home health care that",
    heroTitleB: "shows up",
    heroBody:
      "One Community Home Health brings skilled nursing, therapy, and daily personal care to people in their own homes across North Texas, led by a nurse and built around how each person actually lives.",
    call: "Call",
    request: "Request care",
    glanceTitle: "At a glance",
    facts: [
      { n: "8", l: "North Texas counties served" },
      { n: "2010", l: "Serving families since" },
      { n: "Medicare", l: "Certified home health agency" },
      { n: "STAR+PLUS", l: "Contracted Medicaid plans" },
    ],
    whoEyebrow: "Who we are",
    whoTitle: "A nurse-led agency with a simple job: keep people home",
    whoBody1:
      "One Community Home Health is a DBA of JACOP Healthcare Services, Inc., based in Grand Prairie, Texas. Our care is led by a registered nurse, and it starts with a conversation about what a normal day looks like, not a form.",
    whoBody2:
      "From there we handle the parts that wear families out: confirming coverage, coordinating authorizations and paperwork, and keeping everyone who cares for the patient on the same plan.",
    founderRole: "Founder, Administrator, and Director of Nursing",
    founderTag: "Clinical leadership",
    founderLink: "Meet our leadership",
    pillarsEyebrow: "How we work",
    pillarsTitle: "Three things we do every time",
    pillars: [
      {
        title: "Care built around your day",
        body: "A nurse or coordinator visits to understand your routine, your home, and what a hard day looks like before a plan is written.",
      },
      {
        title: "We handle the paperwork",
        body: "We verify benefits and eligibility, coordinate prior authorizations, and support billing, so families are not left on hold.",
      },
      {
        title: "Rooted in North Texas",
        body: "Our team lives and works in the communities we serve, from our Grand Prairie office to homes across eight counties.",
      },
    ],
    storiesEyebrow: "Family stories",
    storiesTitle: "Trusted voices from the families we serve",
    prev: "Previous testimonial",
    next: "Next testimonial",
    stepsEyebrow: "Getting started",
    stepsTitle: "How care begins",
    steps: [
      {
        title: "We check your coverage",
        desc: "Tell us your program and plan and we will confirm what you are eligible for.",
      },
      {
        title: "We visit and plan",
        desc: "A nurse or coordinator visits to build a plan around your actual day.",
      },
      {
        title: "Match and schedule",
        desc: "You meet the person before they start. If the fit isn't right, we change it.",
      },
    ],
    stepLabel: "Step",
    areaEyebrow: "Where we serve",
    areaTitle: "Across the Dallas–Fort Worth area",
    areaBody:
      "We care for people in their own homes, in a family member's home, and in assisted living communities across eight North Texas counties.",
    officeLabel: "Our office",
    officeAddress: "3560 Quannah Drive, Grand Prairie, TX 75052",
    contactUs: "Contact us",
    ctaTitle: "Talk to someone today",
    ctaBody:
      "Call and a person who knows the DFW area will answer. Tell us what a hard day looks like and we will tell you what we can do about it.",
  },
  es: {
    heroEyebrow: "Acerca de One Community Home Health",
    heroTitleA: "Atención médica en el hogar que",
    heroTitleB: "sí se presenta",
    heroBody:
      "One Community Home Health lleva enfermería especializada, terapia y cuidado personal diario a las personas en sus propios hogares en el norte de Texas, bajo la dirección de una enfermera y adaptado a cómo vive realmente cada persona.",
    call: "Llamar",
    request: "Solicitar atención",
    glanceTitle: "De un vistazo",
    facts: [
      { n: "8", l: "condados del norte de Texas" },
      { n: "2010", l: "Sirviendo a familias desde" },
      { n: "Medicare", l: "Agencia certificada de salud en el hogar" },
      { n: "STAR+PLUS", l: "Planes de Medicaid contratados" },
    ],
    whoEyebrow: "Quiénes somos",
    whoTitle:
      "Una agencia dirigida por una enfermera con una misión simple: mantener a las personas en casa",
    whoBody1:
      "One Community Home Health es un nombre comercial (DBA) de JACOP Healthcare Services, Inc., con sede en Grand Prairie, Texas. Nuestra atención está dirigida por una enfermera registrada y comienza con una conversación sobre cómo es un día normal, no con un formulario.",
    whoBody2:
      "A partir de ahí nos encargamos de lo que más cansa a las familias: confirmar la cobertura, coordinar autorizaciones y trámites, y mantener a todos los que cuidan al paciente con el mismo plan.",
    founderRole: "Fundadora, Administradora y Directora de Enfermería",
    founderTag: "Liderazgo clínico",
    founderLink: "Conozca a nuestro liderazgo",
    pillarsEyebrow: "Cómo trabajamos",
    pillarsTitle: "Tres cosas que hacemos siempre",
    pillars: [
      {
        title: "Atención adaptada a su día",
        body: "Una enfermera o coordinador visita su hogar para entender su rutina y cómo es un día difícil antes de escribir un plan.",
      },
      {
        title: "Nos encargamos del papeleo",
        body: "Verificamos beneficios y elegibilidad, coordinamos autorizaciones previas y apoyamos la facturación, para que las familias no queden esperando en el teléfono.",
      },
      {
        title: "Arraigados en el norte de Texas",
        body: "Nuestro equipo vive y trabaja en las comunidades que atendemos, desde nuestra oficina en Grand Prairie hasta hogares en ocho condados.",
      },
    ],
    storiesEyebrow: "Historias de familias",
    storiesTitle: "Lo que dicen las familias a las que servimos",
    prev: "Testimonio anterior",
    next: "Siguiente testimonio",
    stepsEyebrow: "Cómo empezar",
    stepsTitle: "Cómo comienza la atención",
    steps: [
      {
        title: "Verificamos su cobertura",
        desc: "Díganos su plan para confirmar elegibilidad y autorizaciones.",
      },
      {
        title: "Evaluamos en persona",
        desc: "Un coordinador visita su hogar para crear un plan adaptado a su rutina real.",
      },
      {
        title: "Asignamos su asistente",
        desc: "Conoce al asistente antes de iniciar. Si no es compatible, lo ajustamos.",
      },
    ],
    stepLabel: "Paso",
    areaEyebrow: "Dónde servimos",
    areaTitle: "En toda el área de Dallas–Fort Worth",
    areaBody:
      "Atendemos a personas en sus propios hogares, en casa de un familiar y en comunidades de vida asistida en ocho condados del norte de Texas.",
    officeLabel: "Nuestra oficina",
    officeAddress: "3560 Quannah Drive, Grand Prairie, TX 75052",
    contactUs: "Contáctenos",
    ctaTitle: "Hable con alguien hoy",
    ctaBody:
      "Llame y le responderá alguien que conoce el área de DFW. Cuéntenos cómo es un día difícil y le diremos qué podemos hacer.",
  },
};

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5]";
const cardWhite = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-10";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";
const arrowBtn =
  "flex h-11 w-11 items-center justify-center rounded-full border border-[#07162C]/20 bg-white text-[#07162C] transition-colors hover:bg-[#07162C] hover:text-[#E4B95A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";

const pillarIcons = [Compass, ClipboardCheck, Home];

function Pill({ n, label }: { n?: string | number; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] py-1.5 pl-1.5 pr-4 text-xs font-medium text-[#07162C]">
      {n !== undefined ? (
        <span
          aria-hidden
          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#07162C] text-[10px] font-semibold text-[#E4B95A]"
        >
          {n}
        </span>
      ) : (
        <span
          aria-hidden
          className="ml-2.5 h-1.5 w-1.5 rounded-full bg-[#996515]"
        />
      )}
      {label}
    </span>
  );
}

export default function TestimonialsComponent() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const t = copy[isSpanish ? "es" : "en"];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!seedTestimonials || seedTestimonials.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? seedTestimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === seedTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const activeTestimonial = seedTestimonials[currentIndex];

  return (
    <main className="min-h-screen bg-[#F4F4F2] text-base leading-relaxed text-[#07162C]/80">
      {/* ===== Header: centered ===== */}
      <section className="px-4 pb-10 pt-14 text-center sm:px-6 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <Pill label={t.heroEyebrow} />
          <h1 className={`${heading} mt-6 text-4xl sm:text-5xl lg:text-6xl`}>
            {t.heroTitleA}{" "}
            <span className="text-[#996515]">{t.heroTitleB}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-[#07162C]/70 sm:text-lg">
            {t.heroBody}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] ${focusRing}`}
            >
              <Phone size={16} aria-hidden />
              <span>
                {t.call} {PHONE}
              </span>
            </a>
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#07162C] ${focusRing}`}
            >
              <span>{t.request}</span>
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== At a glance Bento Grid ===== */}
      <section className="px-4 pb-16 sm:px-6">
        <div className={container}>
          <div className="mb-5 text-center">
            <Pill n="01" label={t.glanceTitle} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.facts.map((f, i) => (
              <div
                key={f.l}
                className={`flex min-h-[160px] flex-col justify-between p-6 ${card}`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#07162C] font-mono text-[10px] font-semibold text-[#E4B95A]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="ohh-serif text-3xl font-light leading-none text-[#07162C]">
                    {f.n}
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#996515]">
                    {f.l}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Who we are ===== */}
      <section className="px-4 pb-16 sm:px-6">
        <div className={`${container} grid gap-6 lg:grid-cols-12`}>
          <div className={`p-6 sm:p-10 lg:col-span-7 ${card}`}>
            <Pill n="02" label={t.whoEyebrow} />
            <h2 className={`${heading} mt-4 text-2xl sm:text-3xl`}>
              {t.whoTitle}
            </h2>
            <div className="mt-5 space-y-4 text-sm text-[#07162C]/75 leading-relaxed sm:text-base">
              <p>{t.whoBody1}</p>
              <p>{t.whoBody2}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-[#07162C] p-6 text-white sm:p-10 lg:col-span-5">
            <div>
              <span className="inline-block rounded-full bg-[#E4B95A] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#07162C]">
                {t.founderTag}
              </span>
              <h3 className="ohh-serif mt-4 text-2xl font-light leading-snug text-[#E4B95A]">
                Angela Ananti, BSN, RN
              </h3>
              <p className="mt-1 text-sm text-white/75">{t.founderRole}</p>
            </div>
            <Link
              href="/about-us/leadership"
              className={`group mt-8 inline-flex items-center gap-2 border-t border-white/15 pt-5 text-sm font-semibold text-[#E4B95A] hover:text-white ${focusRing}`}
            >
              <span>{t.founderLink}</span>
              <ArrowRight
                size={16}
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== How we work: three pillars ===== */}
      <section className="px-4 pb-16 sm:px-6">
        <div className={container}>
          <div className="mb-8 text-center">
            <Pill n="03" label={t.pillarsEyebrow} />
            <h2 className={`${heading} mt-4 text-3xl sm:text-4xl`}>
              {t.pillarsTitle}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {t.pillars.map((p, i) => {
              const Icon = pillarIcons[i % pillarIcons.length];
              const isNavy = i === 1;
              return (
                <div
                  key={p.title}
                  className={`flex flex-col justify-between p-7 ${
                    isNavy ? "rounded-3xl bg-[#07162C] text-white" : card
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      isNavy
                        ? "bg-[#E4B95A] text-[#07162C]"
                        : "bg-[#07162C] text-[#E4B95A]"
                    }`}
                  >
                    <Icon size={18} aria-hidden />
                  </span>
                  <div className="mt-6">
                    <h3 className="ohh-serif text-xl font-medium leading-snug">
                      {p.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        isNavy ? "text-white/75" : "text-[#07162C]/70"
                      }`}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Family stories (testimonials) ===== */}
      <section className="px-4 pb-16 sm:px-6">
        <div className={container}>
          <div className="mb-8 text-center">
            <Pill n="04" label={t.storiesEyebrow} />
            <h2 className={`${heading} mt-4 text-3xl sm:text-4xl`}>
              {t.storiesTitle}
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            {/* Story picker */}
            <ul
              className="flex gap-2 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0"
              aria-label={t.storiesTitle}
            >
              {seedTestimonials.map((item, i) => {
                const active = i === currentIndex;
                return (
                  <li key={item.author} className="min-w-[200px] lg:min-w-0">
                    <button
                      onClick={() => setCurrentIndex(i)}
                      aria-current={active}
                      className={`w-full rounded-2xl border px-4 py-3.5 text-left transition-colors ${focusRing} ${
                        active
                          ? "border-[#07162C] bg-[#07162C] text-white"
                          : "border-[#07162C]/10 bg-white text-[#07162C]"
                      }`}
                    >
                      <span
                        className={`block text-[10px] font-bold uppercase tracking-wider ${
                          active ? "text-[#E4B95A]" : "text-[#996515]"
                        }`}
                      >
                        {isSpanish ? item.categoryEs : item.category}
                      </span>
                      <span className="ohh-serif mt-1 block text-base font-medium">
                        {item.author}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Active story */}
            <div
              className={`relative flex flex-col justify-between p-6 sm:p-10 lg:col-span-8 ${cardWhite}`}
            >
              <Quote
                size={60}
                strokeWidth={1}
                aria-hidden
                className="absolute right-6 top-6 text-[#07162C]/10"
              />
              <div className="relative">
                <span className="inline-block rounded-full border border-[#07162C]/20 bg-[#F4F4F2] px-3.5 py-1 text-xs font-semibold text-[#07162C]">
                  {isSpanish
                    ? activeTestimonial.categoryEs
                    : activeTestimonial.category}
                </span>
                <p
                  aria-live="polite"
                  className="ohh-serif mt-5 text-base italic leading-relaxed text-[#07162C] sm:text-lg"
                >
                  &ldquo;
                  {isSpanish
                    ? activeTestimonial.quoteEs
                    : activeTestimonial.quote}
                  &rdquo;
                </p>
              </div>

              <div className="relative mt-8 flex flex-col justify-between gap-4 border-t border-[#07162C]/10 pt-6 sm:flex-row sm:items-center">
                <div>
                  <h4 className="ohh-serif text-base font-semibold text-[#07162C]">
                    {activeTestimonial.author}
                  </h4>
                  <p className="mt-0.5 text-xs text-[#07162C]/60">
                    {isSpanish
                      ? activeTestimonial.detailsEs
                      : activeTestimonial.details}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    aria-label={t.prev}
                    className={arrowBtn}
                  >
                    <ChevronLeft size={18} aria-hidden />
                  </button>
                  <span className="min-w-[2.5rem] text-center text-xs font-bold text-[#07162C]/70">
                    {currentIndex + 1} / {seedTestimonials.length}
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label={t.next}
                    className={arrowBtn}
                  >
                    <ChevronRight size={18} aria-hidden />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How care begins ===== */}
      <section className="px-4 pb-16 sm:px-6">
        <div className={container}>
          <div className="mb-8 text-center">
            <Pill n="05" label={t.stepsEyebrow} />
            <h2 className={`${heading} mt-4 text-3xl sm:text-4xl`}>
              {t.stepsTitle}
            </h2>
          </div>
          <ol className="grid gap-4 md:grid-cols-3">
            {t.steps.map((s, i) => (
              <li
                key={s.title}
                className={`flex flex-col justify-between p-6 ${card}`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#07162C] font-mono text-[10px] font-semibold text-[#E4B95A]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-6">
                  <h3 className="ohh-serif text-xl font-medium text-[#07162C]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#07162C]/70">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Where we serve ===== */}
      <section className="px-4 pb-20 sm:px-6 lg:pb-24">
        <div className={`${container} grid gap-4 lg:grid-cols-12`}>
          <div className={`p-6 sm:p-10 lg:col-span-7 ${card}`}>
            <Pill n="06" label={t.areaEyebrow} />
            <h2 className={`${heading} mt-4 text-2xl sm:text-3xl`}>
              {t.areaTitle}
            </h2>
            <p className="mt-3 text-sm text-[#07162C]/75 leading-relaxed sm:text-base">
              {t.areaBody}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {COUNTIES.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#07162C]/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#07162C]"
                >
                  <Check
                    size={13}
                    strokeWidth={3}
                    aria-hidden
                    className="text-[#996515]"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`flex flex-col justify-between p-6 sm:p-10 lg:col-span-5 ${card}`}
          >
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                <MapPin size={18} aria-hidden />
              </span>
              <span className="mt-6 block text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
                {t.officeLabel}
              </span>
              <p className="ohh-serif mt-2 text-xl font-medium leading-snug text-[#07162C]">
                {t.officeAddress}
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-[#07162C]/10 pt-6 sm:flex-row">
              <a
                href={PHONE_HREF}
                className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-6 py-3.5 text-sm font-semibold text-[#E4B95A] ${focusRing}`}
              >
                <Phone size={16} aria-hidden />
                <span>{PHONE}</span>
              </a>
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C]/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#07162C] ${focusRing}`}
              >
                <span>{t.contactUs}</span>
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
