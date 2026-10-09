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

/* Restyled to match Request Care UI:
   soft gray canvas #F4F4F2, pill badges with dot indicators, light serif headings,
   rounded bento cards (3xl), flat style with 1px borders. */

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

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";
const card = "rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-8";

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
    <main className="min-h-screen bg-[#F4F4F2] pb-24 pt-14 text-[#07162C] sm:pt-20 lg:pb-28">
      {/* ===== Hero ===== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className={wrap}>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-6 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#07162C]/10 bg-[#E9EAE5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#07162C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#996515] animate-pulse" />
                {t(
                  "Personal attendant services",
                  "Servicios de asistencia personal"
                )}
              </span>
              <h1 className={`${heading} text-4xl sm:text-5xl lg:text-6xl`}>
                {t(
                  "Personal attendant services at home",
                  "Servicios de asistencia personal en el hogar"
                )}
              </h1>
              <div className="h-1 w-16 rounded-full bg-[#996515]" />
              <p className="max-w-xl text-sm leading-relaxed text-[#07162C]/75 sm:text-base">
                {t(
                  "Hands-on help with bathing, dressing, grooming, meals, light housekeeping, and getting around safely at home.",
                  "Ayuda práctica y cotidiana para vivir con independencia, de alguien en quien puede confiar todos los días."
                )}
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140]"
                >
                  <Phone size={16} aria-hidden />
                  {t(`Call intake: ${PHONE}`, `Llamar a Admisiones: ${PHONE}`)}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:border-[#07162C]"
                >
                  {t("Request care", "Solicitar atención")}
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </div>

            <aside className={`${card} lg:col-span-5`}>
              <h2 className={`${heading} text-2xl font-medium leading-snug`}>
                {t(
                  "Covered options and programs",
                  "Cubierto por STAR+PLUS y Medicaid"
                )}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#07162C]/70">
                {t(
                  "Across eight North Texas counties, through:",
                  "En ocho condados del norte de Texas, a través de:"
                )}
              </p>
              <ul className="mt-5 divide-y divide-[#07162C]/10 border-y border-[#07162C]/10">
                {covered.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 py-3 text-sm font-semibold text-[#07162C]/85"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                      <Check size={12} strokeWidth={3} aria-hidden />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-[#07162C]/60">
                {t(
                  "Molina, Superior, and UnitedHealthcare plans. HHSC approved.",
                  "Planes de Molina, Superior y UnitedHealthcare. Aprobado por HHSC."
                )}
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== Statement ===== */}
      <section className="py-12">
        <div className={wrap}>
          <div className={`${card} max-w-3xl border-l-4 border-l-[#996515]`}>
            <p
              className={`${heading} text-xl font-medium leading-snug tracking-tight sm:text-2xl`}
            >
              {t(
                "Most people who need care at home do not need a hospital. They need a hand getting out of the shower. Someone to make sure breakfast happens. A person who notices when something is off.",
                "La mayoría de las personas que necesitan atención en casa no necesitan un hospital. Necesitan una mano al salir de la ducha. Alguien que se asegure de que haya desayuno. Una persona que note cuando algo no está bien."
              )}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#07162C]/75 sm:text-base">
              {t(
                "That is what our attendants do. It is the largest part of what this agency does every day, and it is the reason most of our patients stay in their own homes instead of moving into a facility.",
                "Eso es lo que hacen nuestros asistentes. Es la parte más grande de lo que esta agencia hace cada día, y es la razón por la que la mayoría de nuestros pacientes se quedan en sus hogares en lugar de mudarse a un centro."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ===== What an attendant helps with ===== */}
      <section className="py-12">
        <div className={wrap}>
          <div className="max-w-2xl mb-10">
            <h2 className={`${heading} text-3xl sm:text-4xl`}>
              {t("What an attendant helps with", "En qué ayuda un asistente")}
            </h2>
            <p className="mt-2 text-sm text-[#07162C]/70">
              {t(
                "Daily support, built around the person and the home they live in.",
                "Apoyo diario, adaptado a la persona y al hogar en el que vive."
              )}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {help.map(({ icon: Icon, title, items }) => (
              <div key={title} className={card}>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#07162C] text-[#E4B95A]">
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 className={`${heading} text-xl font-medium leading-snug`}>
                    {title}
                  </h3>
                </div>
                <ul className="mt-6 space-y-3 border-t border-[#07162C]/10 pt-6 text-sm leading-relaxed text-[#07162C]/80">
                  {items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#996515]"
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
      <section className="py-12">
        <div className={`${wrap} grid gap-8 lg:grid-cols-12 lg:gap-12`}>
          <div className={`${card} lg:col-span-6`}>
            <h2 className={`${heading} text-2xl font-medium sm:text-3xl`}>
              {t("Who this is for", "Para quién es esto")}
            </h2>
            <ul className="mt-6 divide-y divide-[#07162C]/10 border-y border-[#07162C]/10">
              {whoFor.map((w) => (
                <li
                  key={w}
                  className="flex items-start gap-3.5 py-4 text-sm leading-relaxed text-[#07162C]/85"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                    <Check size={12} strokeWidth={3} aria-hidden />
                  </span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#07162C] p-8 text-white sm:p-10 lg:col-span-6">
            <h3 className="ohh-serif text-2xl font-medium tracking-tight text-[#E4B95A]">
              {t("Where we provide care", "Dónde brindamos atención")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
              {t(
                "We serve people in their own homes, in a family member's home, and in assisted living communities across eight North Texas counties.",
                "Atendemos a personas en sus propios hogares, en casa de un familiar y en comunidades de vida asistida en ocho condados del norte de Texas."
              )}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 border-t border-white/15 pt-6">
              {COUNTIES.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-[#E4B95A]/40 bg-white/5 px-4 py-1.5 text-xs font-bold text-[#E4B95A]"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Payment ===== */}
      <section className="py-12">
        <div className={`${wrap} space-y-10`}>
          <div className="max-w-3xl space-y-3">
            <h2 className={`${heading} text-3xl sm:text-4xl`}>
              {t(
                "How attendant care is paid for",
                "Cómo se paga la atención de asistentes"
              )}
            </h2>
            <p className="text-sm text-[#07162C]/70 sm:text-base">
              {t(
                "Most of our attendant care is covered. You do not usually pay out of pocket.",
                "La mayor parte de nuestro cuidado está cubierto. Por lo general, no paga de su bolsillo."
              )}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {payment.map((p, i) => (
              <div key={p.title} className={card}>
                <span className="font-mono text-xs font-bold text-[#996515]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`${heading} mt-2 text-xl font-medium leading-snug`}
                >
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#07162C]/75">
                  {p.body}
                </p>
                {p.note && (
                  <p className="mt-4 border-t border-[#07162C]/10 pt-4 text-xs font-medium leading-relaxed text-[#07162C]/70">
                    {p.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#E4B95A] p-7 text-[#07162C] sm:p-9 md:flex-row md:items-center">
            <div className="max-w-2xl space-y-1.5">
              <h3 className={`${heading} text-xl font-medium sm:text-2xl`}>
                {t(
                  "Not sure what you have, or whether you qualify?",
                  "¿No está seguro de su elegibilidad?"
                )}
              </h3>
              <p className="text-sm leading-relaxed text-[#07162C]/80">
                {t(
                  "Call us, read us what is on the front of your card, and we will tell you where you stand, usually in one call.",
                  "Llámenos y léanos lo que dice al frente de su tarjeta; le diremos dónde se encuentra, por lo general en una sola llamada."
                )}
              </p>
            </div>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140] shrink-0"
            >
              <Phone size={16} aria-hidden />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ===== Family caregiver program ===== */}
      <section className="py-12">
        <div className={wrap}>
          <div
            className={`${card} grid items-center gap-8 border-l-4 border-l-[#996515] lg:grid-cols-12`}
          >
            <div className="space-y-4 lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
                {t("Family caregiver program", "Programa para familiares")}
              </span>
              <h3
                className={`${heading} text-2xl font-medium leading-snug tracking-tight sm:text-3xl`}
              >
                {t(
                  "A family member or friend may be able to be the paid attendant",
                  "Un familiar o amigo puede ser el asistente pagado"
                )}
              </h3>
              <p className="max-w-2xl text-sm leading-relaxed text-[#07162C]/75">
                {t(
                  "In several Texas Medicaid programs, the person already helping (an adult child, a grandchild, a sibling, a neighbor) can be hired, trained, and paid as the official attendant. They become our employee. We handle the hiring paperwork, the training, the payroll, and the state's visit-tracking requirements.",
                  "En varios programas de Medicaid de Texas, la persona que ya ayuda (un hijo, nieto, hermano o vecino) puede ser contratada, capacitada y pagada como asistente oficial. Se convierten en empleados nuestros y nosotros manejamos la documentación, capacitación y nómina."
                )}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#E4B95A] transition-colors hover:bg-[#0A2140]"
              >
                {t("Learn how it works", "Ver opciones de empleo")}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== What to expect ===== */}
      <section className="py-12">
        <div className={`${wrap} space-y-10`}>
          <h2 className={`${heading} text-3xl sm:text-4xl`}>
            {t("What to expect when you call", "Qué esperar cuando llama")}
          </h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className={card}>
                <span className="ohh-serif flex h-10 w-10 items-center justify-center rounded-full bg-[#07162C] text-sm font-semibold text-[#E4B95A]">
                  {i + 1}
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#996515]">
                  {t("Step", "Paso")} {i + 1}
                </p>
                <h3 className={`${heading} mt-1 text-xl font-medium`}>
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#07162C]/70">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Call to action ===== */}
      <section className="py-12">
        <div className={wrap}>
          <div className="rounded-3xl bg-[#07162C] p-8 text-white sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <h2 className={`${heading} text-3xl text-white sm:text-4xl`}>
                {t("Talk to someone today", "Hable con alguien hoy")}
              </h2>
              <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                {t(
                  "Call and a person who knows the DFW area will answer. Tell us what a hard day looks like and we will tell you what we can do about it.",
                  "Llame y le responderá alguien que conoce el área de DFW. Cuéntenos sus necesidades."
                )}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E4B95A] bg-[#E4B95A] px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:bg-[#EDC878]"
              >
                <Phone size={16} aria-hidden />
                {PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#E4B95A] hover:text-[#E4B95A]"
              >
                {t("Request care", "Solicitar atención")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Service coordinators & case managers ===== */}
      <section className="py-12">
        <div className={`${wrap} grid gap-8 lg:grid-cols-12 lg:gap-12`}>
          <div className={`${card} space-y-4 lg:col-span-7`}>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#996515]">
              {t(
                "For service coordinators and case managers",
                "Para coordinadores de servicios y administradores de casos"
              )}
            </span>
            <h3
              className={`${heading} text-2xl font-medium tracking-tight sm:text-3xl`}
            >
              {t(
                "Provider referrals and MCO coordination",
                "Referencias de proveedores y coordinación MCO"
              )}
            </h3>
            <p className="text-sm leading-relaxed text-[#07162C]/75">
              {t(
                "One Community Home Health accepts personal attendant services, Community First Choice, Primary Home Care, and Community Attendant Services referrals across Collin, Dallas, Denton, Ellis, Johnson, Kaufman, Rockwall, and Tarrant counties.",
                "One Community Home Health acepta referencias de servicios de asistencia personal, Community First Choice, Primary Home Care y Community Attendant Services en los condados de Collin, Dallas, Denton, Ellis, Johnson, Kaufman, Rockwall y Tarrant."
              )}
            </p>
            <p className="text-sm leading-relaxed text-[#07162C]/75">
              {t(
                "We are contracted with Molina, Superior HealthPlan, and UnitedHealthcare Community Plan for STAR+PLUS, and we serve HHSC members directly. We use HHAeXchange for electronic visit verification.",
                "Estamos contratados con Molina, Superior HealthPlan y UnitedHealthcare Community Plan para STAR+PLUS, y atendemos a miembros de HHSC directamente. Utilizamos HHAeXchange para la verificación electrónica de visitas."
              )}
            </p>
          </div>

          <div className={`${card} self-start lg:col-span-5`}>
            <h4 className={`${heading} text-xl font-medium`}>
              {t("Send a referral", "Enviar referencia")}
            </h4>
            <ul className="mt-4 divide-y divide-[#07162C]/10 border-y border-[#07162C]/10 text-sm">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 py-3.5 font-semibold text-[#07162C] transition-colors hover:text-[#996515]"
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
                  className="flex items-center gap-3 py-3.5 font-semibold text-[#07162C] transition-colors hover:text-[#996515]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                    <Mail size={14} aria-hidden />
                  </span>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 py-3.5 font-semibold text-[#07162C]/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                  <Printer size={14} aria-hidden />
                </span>
                {t("Fax", "Fax")} {FAX}
              </li>
            </ul>
            <p className="mt-4 text-xs text-[#07162C]/60">
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
