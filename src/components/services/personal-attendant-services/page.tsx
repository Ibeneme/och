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
   navy  #07162C  primary text + dark surfaces
   gold  #D9A93F  primary action only
   tint  #F4F6F9  quiet section background
   line  #E3E8EF  every border and divider
   muted #4A5568  secondary text                                      */

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

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#000] px-7 py-3.5 text-sm font-semibold text-[#fff] transition-colors hover:bg-[#C99A33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";
const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[#07162C] px-7 py-3.5 text-sm font-semibold text-[#07162C] transition-colors hover:bg-[#07162C] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";
const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

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
          "Uso del baño y ayuda con el cuidado de incontinencia",
        ),
        t(
          "Getting in and out of bed or a chair, and moving safely around the house",
          "Entrar y salir de la cama o silla, y moverse con seguridad",
        ),
        t(
          "Eating, and help preparing meals that match any diet restrictions",
          "Alimentación y preparación de comidas según dietas",
        ),
        t(
          "Reminders to take medication on time",
          "Recordatorios para tomar medicamentos a tiempo",
        ),
      ],
    },
    {
      icon: Home,
      title: t("Keeping the household running", "Mantenimiento del hogar"),
      items: [
        t(
          "Light housekeeping, laundry, and changing linens",
          "Limpieza ligera, lavandería y cambio de ropa de cama",
        ),
        t("Washing up after meals", "Lavar los platos después de las comidas"),
        t("Grocery and errand assistance", "Asistencia con compras y mandados"),
        t(
          "Getting ready for appointments so nothing is a scramble",
          "Prepararse para citas para que nada sea apresurado",
        ),
      ],
    },
    {
      icon: Users,
      title: t("Companionship and supervision", "Compañía y supervisión"),
      items: [
        t(
          "Someone present so a person who should not be alone is not alone",
          "Alguien presente para que quien no deba estar solo, no lo esté",
        ),
        t(
          "Conversation, activities, and a reason to look forward to the day",
          "Conversación, actividades y un motivo para esperar el día",
        ),
        t(
          "Safety checks for a person at risk of falling or wandering",
          "Revisiones de seguridad para personas con riesgo de caídas",
        ),
      ],
    },
    {
      icon: Clock,
      title: t("Respite for family caregivers", "Respiro para cuidadores"),
      items: [
        t(
          "Scheduled relief so the family member doing the caring can sleep, work, go to their own doctor, or take a break without worrying",
          "Alivio programado para que el familiar cuidador pueda dormir, trabajar, ir a su propio médico o tomar un descanso sin preocupaciones",
        ),
      ],
    },
  ];

  const whoFor = [
    t(
      "Older adults who are managing at home but cannot do everything alone anymore",
      "Adultos mayores que se manejan en casa pero ya no pueden hacerlo todo solos",
    ),
    t(
      "Adults with disabilities who need daily hands-on support to live independently",
      "Adultos con discapacidades que necesitan apoyo diario para vivir de forma independiente",
    ),
    t(
      "People recovering from a hospital stay, a surgery, or a fall",
      "Personas recuperándose de una estancia hospitalaria, cirugía o caída",
    ),
    t(
      "People living with a long-term condition that makes daily tasks harder than they used to be",
      "Personas con una condición a largo plazo que dificulta las tareas diarias",
    ),
    t(
      "Families who are doing the caring themselves and need real relief, not just advice",
      "Familias que cuidan por sí mismas y necesitan un alivio real",
    ),
  ];

  const payment = [
    {
      title: t("Texas Medicaid: STAR+PLUS", "Medicaid de Texas: STAR+PLUS"),
      body: t(
        "If you are on STAR+PLUS, personal attendant services are a covered benefit. Your health plan's service coordinator authorizes how many hours a week you get, and we provide the attendant.",
        "Si está en STAR+PLUS, los servicios de asistencia personal son un beneficio cubierto. El coordinador de su plan de salud autoriza las horas semanales y nosotros proporcionamos el asistente.",
      ),
      note: t(
        "We accept Molina Healthcare, Superior HealthPlan, and UnitedHealthcare Community Plan. We also provide Community First Choice services through STAR+PLUS.",
        "Aceptamos Molina Healthcare, Superior HealthPlan y UnitedHealthcare Community Plan. También ofrecemos servicios de Community First Choice.",
      ),
    },
    {
      title: t(
        "Texas Medicaid: traditional programs",
        "Medicaid tradicional",
      ),
      body: t(
        "If you have Medicaid but are not in a health plan, you may qualify through Primary Home Care or Community Attendant Services, both administered by Texas HHSC. We serve members under both.",
        "Si tiene Medicaid pero no está en un plan de salud, puede calificar mediante Primary Home Care o Community Attendant Services, administrados por HHSC de Texas.",
      ),
    },
    {
      title: t("Veterans", "Veteranos"),
      body: t(
        "We provide non-skilled attendant care to veterans through VA Community Care. A VA referral and authorization have to be in place first, and we can walk you through what that takes.",
        "Brindamos atención de asistencia no especializada a veteranos a través de VA Community Care. Se requiere una remisión y autorización previa del VA.",
      ),
    },
    {
      title: t("Private pay", "Pago privado"),
      body: t(
        "No insurance required, no authorization to wait on. Call for an hourly rate and we will build a schedule around what you actually need.",
        "Sin seguro requerido ni autorizaciones pendientes. Llame para consultar tarifas por hora y diseñaremos un horario según sus necesidades.",
      ),
    },
  ];

  const steps = [
    {
      title: t("We check your coverage", "Verificamos su cobertura"),
      desc: t(
        "Tell us your program and plan and we will confirm what you are eligible for.",
        "Díganos su plan para confirmar elegibilidad y autorizaciones.",
      ),
    },
    {
      title: t("We visit and plan", "Evaluamos en persona"),
      desc: t(
        "A nurse or coordinator visits to build a plan around your actual day.",
        "Un coordinador visita su hogar para crear un plan adaptado a su rutina real.",
      ),
    },
    {
      title: t("Match and schedule", "Asignamos su asistente"),
      desc: t(
        "You meet the person before they start. If the fit isn't right, we change it.",
        "Conoce al asistente antes de iniciar. Si no es compatible, lo ajustamos.",
      ),
    },
  ];

  return (
    <main className="ohh-sans min-h-screen bg-white text-[#07162C]">
      {/* ===== Hero ===== */}
      <section className="border-b border-[#E3E8EF]">
        <div className={`${container} grid gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24`}>
          <div className="space-y-7 lg:col-span-7">
            <p className="text-sm font-semibold text-[#996515]">
              {t("Personal attendant services", "Servicios de asistencia personal")}
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {t(
                "Personal attendant services at home",
                "Servicios de asistencia personal en el hogar",
              )}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[#4A5568]">
              {t(
                "Hands-on help with bathing, dressing, grooming, meals, light housekeeping, and getting around safely at home.",
                "Ayuda práctica y cotidiana para vivir con independencia, de alguien en quien puede confiar todos los días.",
              )}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href={PHONE_HREF} className={btnPrimary}>
                <Phone size={17} aria-hidden />
                {t(`Call intake: ${PHONE}`, `Llamar a Admisiones: ${PHONE}`)}
              </a>
              <Link href="/contact" className={btnOutline}>
                {t("Request care", "Solicitar atención")}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-[#E3E8EF] bg-[#F4F6F9] p-7 sm:p-8 lg:col-span-5">
            <h2 className="text-xl font-semibold">
              {t("Covered options and programs", "Cubierto por STAR+PLUS y Medicaid")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">
              {t(
                "Across eight North Texas counties, through:",
                "En ocho condados del norte de Texas, a través de:",
              )}
            </p>
            <ul className="mt-5 divide-y divide-[#E3E8EF] border-y border-[#E3E8EF]">
              {covered.map((c) => (
                <li key={c} className="flex items-center gap-3 py-3 text-sm font-medium">
                  <Check size={16} className="shrink-0 text-[#996515]" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-[#4A5568]">
              {t(
                "Molina, Superior, and UnitedHealthcare plans. HHSC approved.",
                "Planes de Molina, Superior y UnitedHealthcare. Aprobado por HHSC.",
              )}
            </p>
          </aside>
        </div>
      </section>

      {/* ===== Statement ===== */}
      <section className="border-b border-[#E3E8EF]">
        <div className={`${container} py-16 lg:py-24`}>
          <div className="max-w-3xl space-y-6">
            <p className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              {t(
                "Most people who need care at home do not need a hospital. They need a hand getting out of the shower. Someone to make sure breakfast happens. A person who notices when something is off.",
                "La mayoría de las personas que necesitan atención en casa no necesitan un hospital. Necesitan una mano al salir de la ducha. Alguien que se asegure de que haya desayuno. Una persona que note cuando algo no está bien.",
              )}
            </p>
            <p className="text-lg leading-relaxed text-[#4A5568]">
              {t(
                "That is what our attendants do. It is the largest part of what this agency does every day, and it is the reason most of our patients stay in their own homes instead of moving into a facility.",
                "Eso es lo que hacen nuestros asistentes. Es la parte más grande de lo que esta agencia hace cada día, y es la razón por la que la mayoría de nuestros pacientes se quedan en sus hogares en lugar de mudarse a un centro.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ===== What an attendant helps with ===== */}
      <section className="border-b border-[#E3E8EF]">
        <div className={`${container} grid gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24`}>
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("What an attendant helps with", "En qué ayuda un asistente")}
            </h2>
            <p className="mt-4 max-w-sm text-[#4A5568]">
              {t(
                "Daily support, built around the person and the home they live in.",
                "Apoyo diario, adaptado a la persona y al hogar en el que vive.",
              )}
            </p>
          </div>

          <div className="lg:col-span-8">
            {help.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="grid gap-4 border-t border-[#E3E8EF] py-8 first:border-t-0 first:pt-0 sm:grid-cols-5 sm:gap-8"
              >
                <div className="flex items-start gap-3 sm:col-span-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F4F6F9] text-[#996515]">
                    <Icon size={19} aria-hidden />
                  </span>
                  <h3 className="pt-2 text-lg font-semibold leading-snug">{title}</h3>
                </div>
                <ul className="space-y-2.5 text-[15px] leading-relaxed text-[#2C3744] sm:col-span-3">
                  {items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#996515]" />
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
      <section className="border-b border-[#E3E8EF] bg-[#F4F6F9]">
        <div className={`${container} grid gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24`}>
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("Who this is for", "Para quién es esto")}
            </h2>
            <ul className="mt-8 divide-y divide-[#E3E8EF] border-y border-[#E3E8EF]">
              {whoFor.map((w) => (
                <li key={w} className="flex items-start gap-3 py-4 text-[15px] leading-relaxed">
                  <Check size={18} className="mt-0.5 shrink-0 text-[#996515]" aria-hidden />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="self-start rounded-2xl bg-[#07162C] p-8 text-white sm:p-10 lg:col-span-6">
            <h3 className="text-2xl font-semibold tracking-tight">
              {t("Where we provide care", "Dónde brindamos atención")}
            </h3>
            <p className="mt-3 leading-relaxed text-slate-300">
              {t(
                "We serve people in their own homes, in a family member's home, and in assisted living communities across eight North Texas counties.",
                "Atendemos a personas en sus propios hogares, en casa de un familiar y en comunidades de vida asistida en ocho condados del norte de Texas.",
              )}
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {COUNTIES.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-white/25 px-4 py-1.5 text-sm font-medium"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Payment ===== */}
      <section className="border-b border-[#E3E8EF]">
        <div className={`${container} space-y-12 py-16 lg:py-24`}>
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("How attendant care is paid for", "Cómo se paga la atención de asistentes")}
            </h2>
            <p className="text-lg text-[#4A5568]">
              {t(
                "Most of our attendant care is covered. You do not usually pay out of pocket.",
                "La mayor parte de nuestro cuidado está cubierto. Por lo general, no paga de su bolsillo.",
              )}
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-[#E3E8EF] bg-[#E3E8EF] md:grid-cols-2">
            {payment.map((p) => (
              <div key={p.title} className="space-y-3 bg-white p-7 sm:p-9">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#2C3744]">{p.body}</p>
                {p.note && (
                  <p className="text-[15px] font-medium leading-relaxed">{p.note}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#F4F6F9] p-7 sm:p-9 md:flex-row md:items-center">
            <div className="max-w-2xl space-y-1.5">
              <h3 className="text-xl font-semibold">
                {t(
                  "Not sure what you have, or whether you qualify?",
                  "¿No está seguro de su elegibilidad?",
                )}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#4A5568]">
                {t(
                  "Call us, read us what is on the front of your card, and we will tell you where you stand, usually in one call.",
                  "Llámenos y léanos lo que dice al frente de su tarjeta; le diremos dónde se encuentra, por lo general en una sola llamada.",
                )}
              </p>
            </div>
            <a href={PHONE_HREF} className={`${btnPrimary} shrink-0`}>
              <Phone size={16} aria-hidden />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ===== Family caregiver program ===== */}
      <section className="border-b border-[#E3E8EF]">
        <div className={`${container} py-16 lg:py-24`}>
          <div className="grid items-center gap-8 rounded-2xl border border-[#E3E8EF] p-8 sm:p-12 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-8">
              <p className="text-sm font-semibold text-[#996515]">
                {t("Family caregiver program", "Programa para familiares")}
              </p>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {t(
                  "A family member or friend may be able to be the paid attendant",
                  "Un familiar o amigo puede ser el asistente pagado",
                )}
              </h3>
              <p className="max-w-2xl leading-relaxed text-[#4A5568]">
                {t(
                  "In several Texas Medicaid programs, the person already helping (an adult child, a grandchild, a sibling, a neighbor) can be hired, trained, and paid as the official attendant. They become our employee. We handle the hiring paperwork, the training, the payroll, and the state's visit-tracking requirements.",
                  "En varios programas de Medicaid de Texas, la persona que ya ayuda (un hijo, nieto, hermano o vecino) puede ser contratada, capacitada y pagada como asistente oficial. Se convierten en empleados nuestros y nosotros manejamos la documentación, capacitación y nómina.",
                )}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#07162C] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#102B4E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]"
              >
                {t("Learn how it works", "Ver opciones de empleo")}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== What to expect (a real sequence) ===== */}
      <section className="border-b border-[#E3E8EF]">
        <div className={`${container} space-y-10 py-16 lg:py-24`}>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("What to expect when you call", "Qué esperar cuando llama")}
          </h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-[#07162C] pt-5">
                <span className="text-sm font-semibold text-[#996515]">
                  {t("Step", "Paso")} {i + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#4A5568]">{s.desc}</p>
              </li>
            ))}
          </ol>
          <p className="max-w-2xl text-sm text-[#4A5568]">
            {t(
              "Services begin once eligibility and authorization are confirmed. We will tell you honestly how long that usually takes for your program.",
              "Los servicios comienzan una vez confirmada la elegibilidad y autorización. Le informaremos los plazos estimados.",
            )}
          </p>
        </div>
      </section>

      {/* ===== Call to action ===== */}
      <section className="bg-[#07162C] text-white">
        <div className={`${container} flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center lg:py-20`}>
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("Talk to someone today", "Hable con alguien hoy")}
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              {t(
                "Call and a person who knows the DFW area will answer. Tell us what a hard day looks like and we will tell you what we can do about it.",
                "Llame y le responderá alguien que conoce el área de DFW. Cuéntenos sus necesidades.",
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={PHONE_HREF} className={btnPrimary}>
              <Phone size={16} aria-hidden />
              {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#07162C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t("Request care", "Solicitar atención")}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Service coordinators & case managers (B17 item 4) ===== */}
      <section className="bg-[#F4F6F9]">
        <div className={`${container} grid gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-16`}>
          <div className="space-y-4 lg:col-span-7">
            <p className="text-sm font-semibold text-[#996515]">
              {t(
                "For service coordinators and case managers",
                "Para coordinadores de servicios y administradores de casos",
              )}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">
              {t("Provider referrals and MCO coordination", "Referencias de proveedores y coordinación MCO")}
            </h3>
            <p className="leading-relaxed text-[#2C3744]">
              {t(
                "One Community Home Health accepts personal attendant services, Community First Choice, Primary Home Care, and Community Attendant Services referrals across Collin, Dallas, Denton, Ellis, Johnson, Kaufman, Rockwall, and Tarrant counties.",
                "One Community Home Health acepta referencias de servicios de asistencia personal, Community First Choice, Primary Home Care y Community Attendant Services en los condados de Collin, Dallas, Denton, Ellis, Johnson, Kaufman, Rockwall y Tarrant.",
              )}
            </p>
            <p className="leading-relaxed text-[#2C3744]">
              {t(
                "We are contracted with Molina, Superior HealthPlan, and UnitedHealthcare Community Plan for STAR+PLUS, and we serve HHSC members directly. We use HHAeXchange for electronic visit verification.",
                "Estamos contratados con Molina, Superior HealthPlan y UnitedHealthcare Community Plan para STAR+PLUS, y atendemos a miembros de HHSC directamente. Utilizamos HHAeXchange para la verificación electrónica de visitas.",
              )}
            </p>
          </div>

          <div className="self-start rounded-2xl border border-[#E3E8EF] bg-white p-7 lg:col-span-5">
            <h4 className="font-semibold">{t("Send a referral", "Enviar referencia")}</h4>
            <ul className="mt-4 divide-y divide-[#E3E8EF] border-y border-[#E3E8EF] text-[15px]">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-3 py-3 font-medium hover:text-[#996515]">
                  <Phone size={16} className="text-[#996515]" aria-hidden />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 py-3 font-medium hover:text-[#996515]">
                  <Mail size={16} className="text-[#996515]" aria-hidden />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 py-3 font-medium">
                <Printer size={16} className="text-[#996515]" aria-hidden />
                {t("Fax", "Fax")} {FAX}
              </li>
            </ul>
            <p className="mt-4 text-sm text-[#4A5568]">
              {t(
                "We confirm receipt the same business day.",
                "Confirmamos recepción el mismo día hábil.",
              )}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}