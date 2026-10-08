"use client";

import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Check,
  Heart,
  Home,
  Users,
  Clock,
  Mail,
  Printer,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

/* Design tokens: flat surfaces, 1px borders, no shadows, no gradients.
   navy   #07162C  primary text + dark surfaces
   gold   #E4B95A  accents + primary action on navy
   gold-d #996515  small gold text on light backgrounds (AA contrast)
   cream  #FBF8F2  quiet section background
   sand   #F3ECDC  chips + soft highlight
   line   #E8DFC8  every border and divider
   muted  #4A5568  secondary text                                      */

const PHONE = "(972) 848-9174";
const PHONE_HREF = "tel:9728489174";
const FAX = "972-674-2923";
const EMAIL = "intake@onechh.com";

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

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
/* Use on navy backgrounds */
const btnGold = `${btnBase} bg-[#E4B95A] text-[#07162C] hover:bg-[#EDC878] focus-visible:outline-[#E4B95A]`;
const btnGhostLight = `${btnBase} border border-white/30 !font-semibold text-white hover:border-[#E4B95A] hover:text-[#E4B95A] focus-visible:outline-[#E4B95A]`;
/* Use on light backgrounds */
const btnNavy = `${btnBase} bg-[#07162C] text-[#E4B95A] hover:bg-[#0A2140] focus-visible:outline-[#07162C]`;
const btnOutline = `${btnBase} border border-[#07162C] !font-semibold text-[#07162C] hover:bg-[#07162C] hover:text-[#E4B95A] focus-visible:outline-[#07162C]`;

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const eyebrowLight =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#996515]";
const eyebrowDark =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#E4B95A]";
const h2 =
  "ohh-serif text-3xl font-semibold leading-[1.15] tracking-tight text-[#07162C] sm:text-4xl";

export default function PersonalAttendantServicesPage() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const t = (en: string, es: string) => (isSpanish ? es : en);

  const covered = [
    "STAR+PLUS",
    "Primary Home Care",
    "Community Attendant Services",
    t("VA Community Care", "VA Community Care"),
    t("Private pay", "Pago privado"),
  ];

  const help = [
    {
      icon: Heart,
      title: t("Personal care", "Cuidado personal"),
      items: [
        t("Bathing, showering, and grooming", "Baño, ducha y arreglo personal"),
        t("Dressing and undressing", "Vestirse y desvestirse"),
        t(
          "Using the bathroom, and help with incontinence care",
          "Uso del baño y ayuda con el cuidado de incontinencia"
        ),
        t(
          "Getting in and out of bed or a chair, and moving safely around the house",
          "Entrar y salir de la cama o silla, y moverse con seguridad"
        ),
        t(
          "Eating, and help preparing meals that match any diet restrictions",
          "Alimentación y preparación de comidas según dietas"
        ),
        t(
          "Reminders to take medication on time",
          "Recordatorios para tomar medicamentos a tiempo"
        ),
      ],
    },
    {
      icon: Home,
      title: t("Keeping the household running", "Mantenimiento del hogar"),
      items: [
        t(
          "Light housekeeping, laundry, and changing linens",
          "Limpieza ligera, lavandería y cambio de ropa de cama"
        ),
        t("Washing up after meals", "Lavar los platos después de las comidas"),
        t("Grocery and errand assistance", "Asistencia con compras y mandados"),
        t(
          "Getting ready for appointments so nothing is a scramble",
          "Prepararse para citas para que nada sea apresurado"
        ),
      ],
    },
    {
      icon: Users,
      title: t("Companionship and supervision", "Compañía y supervisión"),
      items: [
        t(
          "Someone present so a person who should not be alone is not alone",
          "Alguien presente para que quien no deba estar solo, no lo esté"
        ),
        t(
          "Conversation, activities, and a reason to look forward to the day",
          "Conversación, actividades y un motivo para esperar el día"
        ),
        t(
          "Safety checks for a person at risk of falling or wandering",
          "Revisiones de seguridad para personas con riesgo de caídas"
        ),
      ],
    },
    {
      icon: Clock,
      title: t("Respite for family caregivers", "Respiro para cuidadores"),
      items: [
        t(
          "Scheduled relief so the family member doing the caring can sleep, work, go to their own doctor, or take a break without worrying",
          "Alivio programado para que el familiar cuidador pueda dormir, trabajar, ir a su propio médico o tomar un descanso sin preocupaciones"
        ),
      ],
    },
  ];

  const whoFor = [
    t(
      "Older adults who are managing at home but cannot do everything alone anymore",
      "Adultos mayores que se manejan en casa pero ya no pueden hacerlo todo solos"
    ),
    t(
      "Adults with disabilities who need daily hands-on support to live independently",
      "Adultos con discapacidades que necesitan apoyo diario para vivir de forma independiente"
    ),
    t(
      "People recovering from a hospital stay, a surgery, or a fall",
      "Personas recuperándose de una estancia hospitalaria, cirugía o caída"
    ),
    t(
      "People living with a long-term condition that makes daily tasks harder than they used to be",
      "Personas con una condición a largo plazo que dificulta las tareas diarias"
    ),
    t(
      "Families who are doing the caring themselves and need real relief, not just advice",
      "Familias que cuidan por sí mismas y necesitan un alivio real"
    ),
  ];

  const payment = [
    {
      title: t("Texas Medicaid: STAR+PLUS", "Medicaid de Texas: STAR+PLUS"),
      body: t(
        "If you are on STAR+PLUS, personal attendant services are a covered benefit. Your health plan's service coordinator authorizes how many hours a week you get, and we provide the attendant.",
        "Si está en STAR+PLUS, los servicios de asistencia personal son un beneficio cubierto. El coordinador de su plan de salud autoriza las horas semanales y nosotros proporcionamos el asistente."
      ),
      note: t(
        "We accept Molina Healthcare, Superior HealthPlan, and UnitedHealthcare Community Plan. We also provide Community First Choice services through STAR+PLUS.",
        "Aceptamos Molina Healthcare, Superior HealthPlan y UnitedHealthcare Community Plan. También ofrecemos servicios de Community First Choice."
      ),
    },
    {
      title: t("Texas Medicaid: traditional programs", "Medicaid tradicional"),
      body: t(
        "If you have Medicaid but are not in a health plan, you may qualify through Primary Home Care or Community Attendant Services, both administered by Texas HHSC. We serve members under both.",
        "Si tiene Medicaid pero no está en un plan de salud, puede calificar mediante Primary Home Care o Community Attendant Services, administrados por HHSC de Texas."
      ),
    },
    {
      title: t("Veterans", "Veteranos"),
      body: t(
        "We provide non-skilled attendant care to veterans through VA Community Care. A VA referral and authorization have to be in place first, and we can walk you through what that takes.",
        "Brindamos atención de asistencia no especializada a veteranos a través de VA Community Care. Se requiere una remisión y autorización previa del VA."
      ),
    },
    {
      title: t("Private pay", "Pago privado"),
      body: t(
        "No insurance required, no authorization to wait on. Call for an hourly rate and we will build a schedule around what you actually need.",
        "Sin seguro requerido ni autorizaciones pendientes. Llame para consultar tarifas por hora y diseñaremos un horario según sus necesidades."
      ),
    },
  ];

  const steps = [
    {
      title: t("We check your coverage", "Verificamos su cobertura"),
      desc: t(
        "Tell us your program and plan and we will confirm what you are eligible for.",
        "Díganos su plan para confirmar elegibilidad y autorizaciones."
      ),
    },
    {
      title: t("We visit and plan", "Evaluamos en persona"),
      desc: t(
        "A nurse or coordinator visits to build a plan around your actual day.",
        "Un coordinador visita su hogar para crear un plan adaptado a su rutina real."
      ),
    },
    {
      title: t("Match and schedule", "Asignamos su asistente"),
      desc: t(
        "You meet the person before they start. If the fit isn't right, we change it.",
        "Conoce al asistente antes de iniciar. Si no es compatible, lo ajustamos."
      ),
    },
  ];

  return (
    <main className="ohh-sans min-h-screen bg-white text-[#07162C]">
      {/* ===== Hero ===== */}
      <section className="bg-[#07162C] text-white">
        <div
          className={`${container} grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24`}
        >
          <div className="space-y-6 lg:col-span-7">
            <p className={eyebrowDark}>
              {t(
                "Personal attendant services",
                "Servicios de asistencia personal"
              )}
            </p>
            <h1 className="ohh-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {t(
                "Personal attendant services at home",
                "Servicios de asistencia personal en el hogar"
              )}
            </h1>
            <div className="h-1 w-16 rounded-full bg-[#E4B95A]" />
            <p className="max-w-xl text-lg leading-relaxed text-white/75">
              {t(
                "Hands-on help with bathing, dressing, grooming, meals, light housekeeping, and getting around safely at home.",
                "Ayuda práctica y cotidiana para vivir con independencia, de alguien en quien puede confiar todos los días."
              )}
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <a href={PHONE_HREF} className={btnGold}>
                <Phone size={17} aria-hidden />
                {t(`Call intake: ${PHONE}`, `Llamar a Admisiones: ${PHONE}`)}
              </a>
              <Link href="/contact" className={btnGhostLight}>
                {t("Request care", "Solicitar atención")}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl bg-[#FBF8F2] p-7 text-[#07162C] sm:p-9 lg:col-span-5">
            <h2 className="ohh-serif text-2xl font-semibold leading-snug">
              {t(
                "Covered options and programs",
                "Cubierto por STAR+PLUS y Medicaid"
              )}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">
              {t(
                "Across eight North Texas counties, through:",
                "En ocho condados del norte de Texas, a través de:"
              )}
            </p>
            <ul className="mt-5 divide-y divide-[#E8DFC8] border-y border-[#E8DFC8]">
              {covered.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 py-3 text-sm font-semibold"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                    <Check size={12} strokeWidth={3} aria-hidden />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-[#4A5568]">
              {t(
                "Molina, Superior, and UnitedHealthcare plans. HHSC approved.",
                "Planes de Molina, Superior y UnitedHealthcare. Aprobado por HHSC."
              )}
            </p>
          </aside>
        </div>
      </section>

      {/* ===== Statement ===== */}
      <section className="bg-[#FBF8F2]">
        <div className={`${container} py-16 lg:py-24`}>
          <div className="max-w-3xl border-l-4 border-[#E4B95A] pl-6 sm:pl-8">
            <p className="ohh-serif text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              {t(
                "Most people who need care at home do not need a hospital. They need a hand getting out of the shower. Someone to make sure breakfast happens. A person who notices when something is off.",
                "La mayoría de las personas que necesitan atención en casa no necesitan un hospital. Necesitan una mano al salir de la ducha. Alguien que se asegure de que haya desayuno. Una persona que note cuando algo no está bien."
              )}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[#4A5568]">
              {t(
                "That is what our attendants do. It is the largest part of what this agency does every day, and it is the reason most of our patients stay in their own homes instead of moving into a facility.",
                "Eso es lo que hacen nuestros asistentes. Es la parte más grande de lo que esta agencia hace cada día, y es la razón por la que la mayoría de nuestros pacientes se quedan en sus hogares en lugar de mudarse a un centro."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ===== What an attendant helps with ===== */}
      <section className="bg-white">
        <div className={`${container} py-16 lg:py-24`}>
          <div className="max-w-2xl">
            <h2 className={h2}>
              {t("What an attendant helps with", "En qué ayuda un asistente")}
            </h2>
            <p className="mt-4 text-lg text-[#4A5568]">
              {t(
                "Daily support, built around the person and the home they live in.",
                "Apoyo diario, adaptado a la persona y al hogar en el que vive."
              )}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {help.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="rounded-3xl border border-[#E8DFC8] bg-[#FBF8F2] p-7 transition-colors hover:border-[#C89B3C] sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 className="ohh-serif text-xl font-semibold leading-snug">
                    {title}
                  </h3>
                </div>
                <ul className="mt-6 space-y-3 border-t border-[#E8DFC8] pt-6 text-[15px] leading-relaxed text-[#2C3744]">
                  {items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C89B3C]"
                      />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Who it's for + where ===== */}
      <section className="bg-[#FBF8F2]">
        <div
          className={`${container} grid gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24`}
        >
          <div className="lg:col-span-6">
            <h2 className={h2}>{t("Who this is for", "Para quién es esto")}</h2>
            <ul className="mt-8 divide-y divide-[#E8DFC8] border-y border-[#E8DFC8]">
              {whoFor.map((w) => (
                <li
                  key={w}
                  className="flex items-start gap-3.5 py-4 text-[15px] leading-relaxed"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                    <Check size={12} strokeWidth={3} aria-hidden />
                  </span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="self-start rounded-3xl bg-[#07162C] p-8 text-white sm:p-10 lg:col-span-6">
            <h3 className="ohh-serif text-2xl font-semibold tracking-tight text-[#E4B95A]">
              {t("Where we provide care", "Dónde brindamos atención")}
            </h3>
            <p className="mt-3 leading-relaxed text-white/75">
              {t(
                "We serve people in their own homes, in a family member's home, and in assisted living communities across eight North Texas counties.",
                "Atendemos a personas en sus propios hogares, en casa de un familiar y en comunidades de vida asistida en ocho condados del norte de Texas."
              )}
            </p>
            <ul className="mt-7 flex flex-wrap gap-2 border-t border-white/15 pt-7">
              {COUNTIES.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-[#E4B95A]/40 px-4 py-1.5 text-sm font-semibold text-[#E4B95A]"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Payment ===== */}
      <section className="bg-white">
        <div className={`${container} space-y-12 py-16 lg:py-24`}>
          <div className="max-w-3xl space-y-4">
            <h2 className={h2}>
              {t(
                "How attendant care is paid for",
                "Cómo se paga la atención de asistentes"
              )}
            </h2>
            <p className="text-lg text-[#4A5568]">
              {t(
                "Most of our attendant care is covered. You do not usually pay out of pocket.",
                "La mayor parte de nuestro cuidado está cubierto. Por lo general, no paga de su bolsillo."
              )}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {payment.map((p, i) => (
              <div
                key={p.title}
                className="flex flex-col rounded-3xl border border-[#E8DFC8] bg-[#FBF8F2] p-7 sm:p-9"
              >
                <span className="ohh-serif text-sm font-semibold text-[#996515]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="ohh-serif mt-2 text-xl font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#2C3744]">
                  {p.body}
                </p>
                {p.note && (
                  <p className="mt-4 border-t border-[#E8DFC8] pt-4 text-[15px] font-medium leading-relaxed">
                    {p.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#E4B95A] p-7 text-[#07162C] sm:p-9 md:flex-row md:items-center">
            <div className="max-w-2xl space-y-1.5">
              <h3 className="ohh-serif text-xl font-semibold sm:text-2xl">
                {t(
                  "Not sure what you have, or whether you qualify?",
                  "¿No está seguro de su elegibilidad?"
                )}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#07162C]/80">
                {t(
                  "Call us, read us what is on the front of your card, and we will tell you where you stand, usually in one call.",
                  "Llámenos y léanos lo que dice al frente de su tarjeta; le diremos dónde se encuentra, por lo general en una sola llamada."
                )}
              </p>
            </div>
            <a
              href={PHONE_HREF}
              className={`${btnNavy} shrink-0 focus-visible:outline-[#07162C]`}
            >
              <Phone size={16} aria-hidden />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ===== Family caregiver program ===== */}
      <section className="bg-[#FBF8F2]">
        <div className={`${container} py-16 lg:py-24`}>
          <div className="grid items-center gap-8 rounded-3xl border border-[#E8DFC8] border-l-[6px] border-l-[#E4B95A] bg-white p-8 sm:p-12 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-8">
              <p className={eyebrowLight}>
                {t("Family caregiver program", "Programa para familiares")}
              </p>
              <h3 className="ohh-serif text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                {t(
                  "A family member or friend may be able to be the paid attendant",
                  "Un familiar o amigo puede ser el asistente pagado"
                )}
              </h3>
              <p className="max-w-2xl leading-relaxed text-[#4A5568]">
                {t(
                  "In several Texas Medicaid programs, the person already helping (an adult child, a grandchild, a sibling, a neighbor) can be hired, trained, and paid as the official attendant. They become our employee. We handle the hiring paperwork, the training, the payroll, and the state's visit-tracking requirements.",
                  "En varios programas de Medicaid de Texas, la persona que ya ayuda (un hijo, nieto, hermano o vecino) puede ser contratada, capacitada y pagada como asistente oficial. Se convierten en empleados nuestros y nosotros manejamos la documentación, capacitación y nómina."
                )}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link href="/careers" className={btnNavy}>
                {t("Learn how it works", "Ver opciones de empleo")}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== What to expect (a real sequence) ===== */}
      <section className="bg-white">
        <div className={`${container} space-y-12 py-16 lg:py-24`}>
          <h2 className={h2}>
            {t("What to expect when you call", "Qué esperar cuando llama")}
          </h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative border-t-2 border-[#07162C] pt-6"
              >
                <span className="ohh-serif flex h-10 w-10 items-center justify-center rounded-full bg-[#07162C] text-base font-semibold text-[#E4B95A]">
                  {i + 1}
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#996515]">
                  {t("Step", "Paso")} {i + 1}
                </p>
                <h3 className="ohh-serif mt-1 text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#4A5568]">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
          <p className="max-w-2xl border-l-4 border-[#E4B95A] pl-5 text-sm leading-relaxed text-[#4A5568]">
            {t(
              "Services begin once eligibility and authorization are confirmed. We will tell you honestly how long that usually takes for your program.",
              "Los servicios comienzan una vez confirmada la elegibilidad y autorización. Le informaremos los plazos estimados."
            )}
          </p>
        </div>
      </section>

      {/* ===== Call to action ===== */}
      <section className="bg-[#07162C] text-white">
        <div
          className={`${container} flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center lg:py-20`}
        >
          <div className="max-w-2xl space-y-3">
            <h2 className="ohh-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("Talk to someone today", "Hable con alguien hoy")}
            </h2>
            <p className="text-lg leading-relaxed text-white/75">
              {t(
                "Call and a person who knows the DFW area will answer. Tell us what a hard day looks like and we will tell you what we can do about it.",
                "Llame y le responderá alguien que conoce el área de DFW. Cuéntenos sus necesidades."
              )}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={PHONE_HREF} className={btnGold}>
              <Phone size={16} aria-hidden />
              {PHONE}
            </a>
            <Link href="/contact" className={btnGhostLight}>
              {t("Request care", "Solicitar atención")}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Service coordinators & case managers (B17 item 4) ===== */}
      <section className="bg-[#FBF8F2]">
        <div
          className={`${container} grid gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20`}
        >
          <div className="space-y-4 lg:col-span-7">
            <p className={eyebrowLight}>
              {t(
                "For service coordinators and case managers",
                "Para coordinadores de servicios y administradores de casos"
              )}
            </p>
            <h3 className="ohh-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              {t(
                "Provider referrals and MCO coordination",
                "Referencias de proveedores y coordinación MCO"
              )}
            </h3>
            <p className="leading-relaxed text-[#2C3744]">
              {t(
                "One Community Home Health accepts personal attendant services, Community First Choice, Primary Home Care, and Community Attendant Services referrals across Collin, Dallas, Denton, Ellis, Johnson, Kaufman, Rockwall, and Tarrant counties.",
                "One Community Home Health acepta referencias de servicios de asistencia personal, Community First Choice, Primary Home Care y Community Attendant Services en los condados de Collin, Dallas, Denton, Ellis, Johnson, Kaufman, Rockwall y Tarrant."
              )}
            </p>
            <p className="leading-relaxed text-[#2C3744]">
              {t(
                "We are contracted with Molina, Superior HealthPlan, and UnitedHealthcare Community Plan for STAR+PLUS, and we serve HHSC members directly. We use HHAeXchange for electronic visit verification.",
                "Estamos contratados con Molina, Superior HealthPlan y UnitedHealthcare Community Plan para STAR+PLUS, y atendemos a miembros de HHSC directamente. Utilizamos HHAeXchange para la verificación electrónica de visitas."
              )}
            </p>
          </div>

          <div className="self-start rounded-3xl border border-[#E8DFC8] bg-white p-7 sm:p-8 lg:col-span-5">
            <h4 className="ohh-serif text-xl font-semibold">
              {t("Send a referral", "Enviar referencia")}
            </h4>
            <ul className="mt-4 divide-y divide-[#E8DFC8] border-y border-[#E8DFC8] text-[15px]">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 py-3.5 font-semibold transition-colors hover:text-[#996515]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                    <Phone size={14} aria-hidden />
                  </span>
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 py-3.5 font-semibold transition-colors hover:text-[#996515]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                    <Mail size={14} aria-hidden />
                  </span>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 py-3.5 font-semibold">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                  <Printer size={14} aria-hidden />
                </span>
                {t("Fax", "Fax")} {FAX}
              </li>
            </ul>
            <p className="mt-4 text-sm text-[#4A5568]">
              {t(
                "We confirm receipt the same business day.",
                "Confirmamos recepción el mismo día hábil."
              )}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
