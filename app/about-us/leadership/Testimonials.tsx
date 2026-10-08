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

/* Design tokens: flat surfaces, 1px borders, no shadows, no gradients.
   navy #07162C · navy-2 #0A2140 · gold #E4B95A · gold-d #996515 (small text on light)
   cream #FBF8F2 · sand #F3ECDC · line #E8DFC8 · body #3A4657 · muted #5B6B7C */

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

/* ---------------- Page copy (EN / ES) ---------------- */

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

/* ---------------- Shared classes ---------------- */

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const eyebrowLight =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#996515]";
const eyebrowDark =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#E4B95A]";
const h2 =
  "ohh-serif text-3xl font-semibold leading-[1.15] tracking-tight text-[#07162C] sm:text-4xl lg:text-5xl";
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
const btnGold = `${btnBase} bg-[#E4B95A] text-[#07162C] hover:bg-[#EDC878] focus-visible:outline-[#E4B95A]`;
const btnGhostLight = `${btnBase} border border-white/30 !font-semibold text-white hover:border-[#E4B95A] hover:text-[#E4B95A] focus-visible:outline-[#E4B95A]`;
const btnNavy = `${btnBase} bg-[#07162C] text-[#E4B95A] hover:bg-[#0A2140] focus-visible:outline-[#07162C]`;
const arrowBtn =
  "flex h-11 w-11 items-center justify-center rounded-full border border-[#E8DFC8] bg-white text-[#07162C] transition-colors hover:bg-[#07162C] hover:text-[#E4B95A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";

const pillarIcons = [Compass, ClipboardCheck, Home];

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
    <div className="bg-white text-[#3A4657]">
      {/* ===== Hero: about us intro + at a glance ===== */}
      <section className="bg-[#07162C] text-white">
        <div
          className={`${container} grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28`}
        >
          <div className="lg:col-span-7">
            <p className={eyebrowDark}>{t.heroEyebrow}</p>
            <h2 className="ohh-serif mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {t.heroTitleA}{" "}
              <span className="text-[#E4B95A]">{t.heroTitleB}</span>
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-[#E4B95A]" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {t.heroBody}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={PHONE_HREF} className={btnGold}>
                <Phone size={16} aria-hidden />
                {t.call} {PHONE}
              </a>
              <Link href="/contact" className={btnGhostLight}>
                {t.request}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-[#FBF8F2] p-7 text-[#07162C] sm:p-9 lg:col-span-5">
            <p className={eyebrowLight}>{t.glanceTitle}</p>
            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-7">
              {t.facts.map((f) => (
                <div key={f.l} className="border-t border-[#E8DFC8] pt-4">
                  <dt className="ohh-serif text-3xl font-semibold leading-none sm:text-4xl">
                    {f.n}
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-[#5B6B7C]">
                    {f.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ===== Who we are ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-7">
            <p className={eyebrowLight}>{t.whoEyebrow}</p>
            <h2 className={`${h2} mt-4`}>{t.whoTitle}</h2>
            <div className="mt-8 space-y-5 border-l-4 border-[#E4B95A] pl-6 text-base leading-relaxed sm:text-lg">
              <p>{t.whoBody1}</p>
              <p>{t.whoBody2}</p>
            </div>
          </div>

          <div className="self-start rounded-3xl bg-[#07162C] p-8 text-white sm:p-10 lg:col-span-5">
            <span className="inline-block rounded-full bg-[#E4B95A] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#07162C]">
              {t.founderTag}
            </span>
            <h3 className="ohh-serif mt-6 text-2xl font-semibold leading-snug text-[#E4B95A]">
              Angela Ananti, BSN, RN
            </h3>
            <p className="mt-2 text-white/75">{t.founderRole}</p>
            <Link
              href="/about-us/leadership"
              className="group mt-8 inline-flex items-center gap-2 border-t border-white/15 pt-6 text-sm font-bold text-[#E4B95A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]"
            >
              {t.founderLink}
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
      <section className="bg-[#FBF8F2] py-20 lg:py-28">
        <div className={container}>
          <div className="max-w-2xl">
            <p className={eyebrowLight}>{t.pillarsEyebrow}</p>
            <h2 className={`${h2} mt-4`}>{t.pillarsTitle}</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.pillars.map((p, i) => {
              const Icon = pillarIcons[i % pillarIcons.length];
              const isNavy = i === 1;
              return (
                <div
                  key={p.title}
                  className={`flex flex-col rounded-3xl border p-8 ${
                    isNavy
                      ? "border-[#07162C] bg-[#07162C] text-white"
                      : "border-[#E8DFC8] bg-white text-[#07162C]"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      isNavy
                        ? "bg-[#E4B95A] text-[#07162C]"
                        : "bg-[#07162C] text-[#E4B95A]"
                    }`}
                  >
                    <Icon size={22} aria-hidden />
                  </span>
                  <h3 className="ohh-serif mt-6 text-xl font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p
                    className={`mt-3 text-[15px] leading-relaxed ${
                      isNavy ? "text-white/75" : "text-[#5B6B7C]"
                    }`}
                  >
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Family stories (testimonials) ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className={container}>
          <div className="max-w-2xl">
            <p className={eyebrowLight}>{t.storiesEyebrow}</p>
            <h2 className={`${h2} mt-4`}>{t.storiesTitle}</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            {/* Story picker */}
            <ul
              className="flex gap-3 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0"
              aria-label={t.storiesTitle}
            >
              {seedTestimonials.map((item, i) => {
                const active = i === currentIndex;
                return (
                  <li key={item.author} className="min-w-[200px] lg:min-w-0">
                    <button
                      onClick={() => setCurrentIndex(i)}
                      aria-current={active}
                      className={`w-full rounded-2xl border px-5 py-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C] ${
                        active
                          ? "border-[#07162C] bg-[#07162C] text-white"
                          : "border-[#E8DFC8] bg-[#FBF8F2] text-[#07162C] hover:border-[#C89B3C]"
                      }`}
                    >
                      <span
                        className={`block text-[11px] font-bold uppercase tracking-wider ${
                          active ? "text-[#E4B95A]" : "text-[#996515]"
                        }`}
                      >
                        {isSpanish ? item.categoryEs : item.category}
                      </span>
                      <span className="ohh-serif mt-1 block text-lg font-semibold">
                        {item.author}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Active story */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-[#E8DFC8] bg-[#FBF8F2] p-8 sm:p-12 lg:col-span-8">
              <Quote
                size={72}
                strokeWidth={1}
                aria-hidden
                className="absolute right-8 top-8 text-[#C89B3C]/30"
              />
              <div className="relative">
                <span className="inline-block rounded-full bg-[#07162C] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E4B95A]">
                  {isSpanish
                    ? activeTestimonial.categoryEs
                    : activeTestimonial.category}
                </span>
                <p
                  aria-live="polite"
                  className="ohh-serif mt-6 text-lg italic leading-relaxed text-[#07162C] sm:text-xl lg:text-2xl"
                >
                  &ldquo;
                  {isSpanish
                    ? activeTestimonial.quoteEs
                    : activeTestimonial.quote}
                  &rdquo;
                </p>
              </div>

              <div className="relative mt-8 flex flex-col justify-between gap-6 border-t border-[#E8DFC8] pt-6 sm:flex-row sm:items-center">
                <div>
                  <h4 className="ohh-serif text-lg font-semibold text-[#07162C]">
                    {activeTestimonial.author}
                  </h4>
                  <p className="mt-0.5 text-sm font-medium text-[#5B6B7C]">
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
                    <ChevronLeft size={20} aria-hidden />
                  </button>
                  <span className="min-w-[3rem] text-center text-xs font-bold text-[#5B6B7C]">
                    {currentIndex + 1} / {seedTestimonials.length}
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label={t.next}
                    className={arrowBtn}
                  >
                    <ChevronRight size={20} aria-hidden />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How care begins ===== */}
      <section className="bg-[#FBF8F2] py-20 lg:py-28">
        <div className={`${container} space-y-12`}>
          <div className="max-w-2xl">
            <p className={eyebrowLight}>{t.stepsEyebrow}</p>
            <h2 className={`${h2} mt-4`}>{t.stepsTitle}</h2>
          </div>
          <ol className="grid gap-8 md:grid-cols-3">
            {t.steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-[#07162C] pt-6">
                <span className="ohh-serif flex h-10 w-10 items-center justify-center rounded-full bg-[#07162C] text-base font-semibold text-[#E4B95A]">
                  {i + 1}
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#996515]">
                  {t.stepLabel} {i + 1}
                </p>
                <h3 className="ohh-serif mt-1 text-xl font-semibold text-[#07162C]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5B6B7C]">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Where we serve ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-6">
            <p className={eyebrowLight}>{t.areaEyebrow}</p>
            <h2 className={`${h2} mt-4`}>{t.areaTitle}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
              {t.areaBody}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {COUNTIES.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#F3ECDC] px-4 py-1.5 text-sm font-semibold text-[#07162C]"
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

          <div className="self-start rounded-3xl border border-[#E8DFC8] border-l-[6px] border-l-[#E4B95A] bg-[#FBF8F2] p-8 sm:p-10 lg:col-span-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
              <MapPin size={22} aria-hidden />
            </span>
            <p className={`${eyebrowLight} mt-6`}>{t.officeLabel}</p>
            <p className="ohh-serif mt-2 text-xl font-semibold leading-snug text-[#07162C] sm:text-2xl">
              {t.officeAddress}
            </p>
            <div className="mt-7 flex flex-col gap-3 border-t border-[#E8DFC8] pt-7 sm:flex-row">
              <a href={PHONE_HREF} className={btnNavy}>
                <Phone size={16} aria-hidden />
                {PHONE}
              </a>
              <Link
                href="/contact"
                className={`${btnBase} border border-[#07162C] !font-semibold text-[#07162C] hover:bg-[#07162C] hover:text-[#E4B95A] focus-visible:outline-[#07162C]`}
              >
                {t.contactUs}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
