"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { CheckCircle2, ArrowRight, Phone, ChevronDown } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

/* Clean layout: soft gray page, pill labels with a number chip, large light
   headings, rounded bento cards.
   navy #07162C · gold #E4B95A · gold-d #996515 (small text on light)
   page #F4F4F2 · card #E9EAE5 · gold-tint #F6EBD2
   Flat: 1px borders only, no shadows, no hover effects, no transitions.
   Focus rings are kept for keyboard users. */

const FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]";
const FOCUS_GOLD =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]";
const HEADING =
  "ohh-serif font-light leading-tight tracking-tight text-[#07162C]";

const input =
  "w-full rounded-xl border border-[#07162C]/20 bg-[#F4F4F2] px-4 py-3 text-base text-[#07162C] outline-none placeholder:text-[#07162C]/45 focus:border-[#07162C] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[#E4B95A]";

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

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-[#07162C]"
      >
        {label}
        {required && (
          <span className="text-[#996515]" aria-hidden>
            {" "}
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

function SectionHeading({
  number,
  children,
}: {
  number: number;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <Pill n={String(number).padStart(2, "0")} label={String(children)} />
      <span aria-hidden className="h-px flex-1 bg-[#07162C]/10" />
    </div>
  );
}

/* Big tap-target radio card (no images) */
function ChoiceCard({
  name,
  value,
  label,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 text-sm font-medium leading-snug focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#07162C] ${
        checked
          ? "border-[#07162C] bg-[#07162C] text-white"
          : "border-[#07162C]/20 bg-white text-[#07162C]"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
      />
      <span
        aria-hidden
        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
          checked ? "border-[#E4B95A]" : "border-[#07162C]/40"
        }`}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-[#E4B95A]" />}
      </span>
      <span>{label}</span>
    </label>
  );
}

export default function RequestCarePage() {
  const { language } = useLanguage();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    city_or_zip: "",
    inquiry_type: "myself",
    relationship: "",
    message: "",
    best_time: "Anytime",
    help_type: "Home health aide or personal care",
    insurance_type: "Texas Medicaid or STAR+PLUS",
    heard_about: "Online search",
    sms_consent: false,
  });

  const t = {
    en: {
      badge: "Patient Inquiry Form",
      title: "Request care or ask a question",
      subtitle:
        "Fill out the form below and a member of our intake team will call you within one business day.",
      nextTitle: "What happens next",
      next1Title: "You send the form",
      next1Desc: "Tell us who needs care and how to reach you.",
      next2Title: "We call you",
      next2Desc: "Our intake team calls within one business day.",
      next3Title: "We talk through options",
      next3Desc: "We go over the care that fits and the next steps.",
      needNow: "Need to talk to someone now?",
      hours: "Monday–Friday, 9:00 a.m.–5:00 p.m.",
      successTitle: "Thank you — we've got it.",
      successDesc:
        "A member of our intake team will call you within one business day. Need to talk to someone now? Call (972) 848-9174, Monday–Friday 9:00 a.m.–5:00 p.m.",
      errText:
        "There was an error submitting your request. Please call us at (972) 848-9174.",
      sectionWho: "Who needs care",
      sectionContact: "How to reach you",
      sectionNeeds: "What you need",
      whoLabel: "Who is this care for?",
      who1: "Myself",
      who2: "A family member or someone I care for",
      who3: "I'm a healthcare provider making a referral",
      providerNote1:
        "Thanks — for patient referrals, our intake team can take the details securely by phone at (972) 848-9174 or by fax at 972-674-2923.",
      providerNote2:
        "Please don't include diagnoses, medical history, or insurance policy numbers here. We'll call you and take those details securely.",
      firstName: "First name",
      lastName: "Last name",
      phone: "Phone",
      email: "Email",
      cityOrZip: "City or ZIP code",
      helpTypeLabel: "What kind of help are you looking for?",
      helpOpt1: "Skilled nursing",
      helpOpt2: "Physical, occupational, or speech therapy",
      helpOpt3: "Home health aide or personal care",
      helpOpt4: "Not sure — I'd like to talk it through",
      insuranceLabel: "Insurance type",
      messageLabel: "Tell us a little about what you need",
      phFirstName: "e.g. John",
      phLastName: "e.g. Smith",
      phPhone: "e.g. (972) 555-0199",
      phEmail: "e.g. john@example.com",
      phCityOrZip: "e.g. Dallas or 75001",
      phMessage:
        "Share any details about schedules, specific care needs, or questions...",
      smsText:
        "Text me about my inquiry. By checking this box you agree to receive text messages from JACOP Healthcare Services, Inc., doing business as One Community Home Health about your inquiry, scheduling, and care coordination. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of receiving services. See our SMS Terms and Privacy Policy.",
      sending: "Sending...",
      submit: "Submit request",
      legalIntro: "How we handle your information:",
      npp: "Notice of Privacy Practices",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    es: {
      badge: "Solicitud de Atención",
      title: "Solicitar atención domiciliaria",
      subtitle:
        "Complete el formulario a continuación y un miembro de nuestro equipo se comunicará con usted dentro de un día hábil.",
      nextTitle: "Qué sigue",
      next1Title: "Usted envía el formulario",
      next1Desc: "Díganos quién necesita atención y cómo contactarle.",
      next2Title: "Le llamamos",
      next2Desc:
        "Nuestro equipo de admisiones le llama dentro de un día hábil.",
      next3Title: "Hablamos de las opciones",
      next3Desc: "Revisamos la atención adecuada y los próximos pasos.",
      needNow: "¿Necesita hablar con alguien ahora?",
      hours: "Lunes a viernes, 9:00 a.m.–5:00 p.m.",
      successTitle: "¡Gracias, ya lo recibimos!",
      successDesc:
        "Un miembro de nuestro equipo de admisiones le llamará dentro de un día hábil. ¿Necesita hablar con alguien ahora? Llame al (972) 848-9174.",
      errText:
        "Hubo un error al enviar el formulario. Por favor llame al (972) 848-9174.",
      sectionWho: "Quién necesita atención",
      sectionContact: "Cómo contactarle",
      sectionNeeds: "Qué necesita",
      whoLabel: "¿Para quién es esta atención?",
      who1: "Para mí",
      who2: "Un familiar o ser querido",
      who3: "Soy proveedor de salud",
      providerNote1:
        "Gracias — para referencias de pacientes, nuestro equipo de admisiones puede tomar los detalles de manera segura por teléfono al (972) 848-9174 o por fax al 972-674-2923.",
      providerNote2:
        "Por favor no incluya diagnósticos, historial médico o números de póliza de seguro aquí. Le llamaremos para tomar esos detalles de forma segura.",
      firstName: "Nombre",
      lastName: "Apellido",
      phone: "Teléfono",
      email: "Correo electrónico",
      cityOrZip: "Ciudad o Código Postal",
      helpTypeLabel: "¿Qué tipo de ayuda busca?",
      helpOpt1: "Enfermería especializada",
      helpOpt2: "Fisioterapia, ocupacional o del habla",
      helpOpt3: "Asistente de salud o cuidado personal",
      helpOpt4: "No estoy seguro — me gustaría conversar",
      insuranceLabel: "Tipo de seguro",
      messageLabel: "Cuéntenos un poco sobre lo que necesita",
      phFirstName: "ej. Juan",
      phLastName: "ej. Pérez",
      phPhone: "ej. (972) 555-0199",
      phEmail: "ej. juan@example.com",
      phCityOrZip: "ej. Dallas o 75001",
      phMessage:
        "Comparta cualquier detalle sobre horarios, necesidades de atención o preguntas...",
      smsText:
        "Envíeme mensajes de texto sobre mi consulta. Al marcar esta casilla, acepta recibir mensajes de texto de JACOP Healthcare Services, Inc., doing business as One Community Home Health sobre su consulta, programación y coordinación de atención. La frecuencia de los mensajes varía. Pueden aplicarse tarifas de mensajes y datos. Responda STOP para cancelar o HELP para obtener ayuda. El consentimiento no es una condición para recibir servicios. Consulte nuestros Términos de SMS y nuestra Política de privacidad.",
      sending: "Enviando...",
      submit: "Enviar solicitud",
      legalIntro: "Cómo manejamos su información:",
      npp: "Aviso de Prácticas de Privacidad",
      privacy: "Política de privacidad",
      terms: "Términos de servicio",
    },
  }[language === "es" ? "es" : "en"];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = {
        ...formData,
        submitted_at: new Date().toISOString(),
        source_page: window.location.pathname,
      };

      const endpoint =
        process.env.NEXT_PUBLIC_INQUIRY_WEBHOOK_URL || "/api/inquiries";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSubmitted(true);
    } catch {
      setError(t.errText);
    } finally {
      setLoading(false);
    }
  };

  const who = [
    { id: "myself", label: t.who1 },
    { id: "family", label: t.who2 },
    { id: "provider", label: t.who3 },
  ];

  const helpOptions = [
    { value: "Skilled nursing", label: t.helpOpt1 },
    { value: "Physical, occupational, or speech therapy", label: t.helpOpt2 },
    { value: "Home health aide or personal care", label: t.helpOpt3 },
    { value: "Not sure — I'd like to talk it through", label: t.helpOpt4 },
  ];

  const steps = [
    { title: t.next1Title, desc: t.next1Desc },
    { title: t.next2Title, desc: t.next2Desc },
    { title: t.next3Title, desc: t.next3Desc },
  ];

  const link = `rounded-sm font-semibold text-[#07162C] underline decoration-[#E4B95A] decoration-2 underline-offset-4 ${FOCUS}`;

  return (
    <main className="min-h-screen bg-[#F4F4F2] text-base leading-relaxed text-[#07162C]/80">
      {/* ===== Header: centered ===== */}
      <section className="px-4 pb-10 pt-14 text-center sm:px-6 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <Pill label={t.badge} />
          <h1 className={`${HEADING} mt-6 text-4xl sm:text-5xl lg:text-6xl`}>
            {t.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-[#07162C]/70 sm:text-lg">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* ===== What happens next: bento row ===== */}
      <section aria-labelledby="next-title" className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 id="next-title" className="mb-5 text-center">
            <Pill n="01" label={t.nextTitle} />
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="flex min-h-[200px] flex-col justify-between rounded-3xl border border-[#07162C]/10 bg-[#E9EAE5] p-6"
              >
                <span
                  aria-hidden
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07162C] text-xs font-semibold text-[#E4B95A]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="ohh-serif text-lg font-medium leading-snug text-[#07162C]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-[#07162C]/70">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex min-h-[200px] flex-col justify-between rounded-3xl bg-[#07162C] p-6 text-white md:col-span-2 lg:col-span-1">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E4B95A] text-[#07162C]">
                <Phone size={16} aria-hidden />
              </span>
              <div>
                <p className="text-sm text-white/75">{t.needNow}</p>
                <a
                  href="tel:+19728489174"
                  className={`mt-1 inline-block rounded-sm text-2xl font-semibold text-[#E4B95A] ${FOCUS_GOLD}`}
                >
                  (972) 848-9174
                </a>
                <p className="mt-1 text-xs text-white/70">{t.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Form ===== */}
      <section className="px-4 pb-16 pt-12 sm:px-6 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#07162C]/10 bg-white p-6 sm:p-10">
          {submitted ? (
            <div role="status" className="space-y-4 py-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#07162C] text-[#E4B95A]">
                <CheckCircle2 size={28} aria-hidden />
              </span>
              <h2 className={`${HEADING} text-3xl`}>{t.successTitle}</h2>
              <p className="mx-auto max-w-md text-sm text-[#07162C]/70">
                {t.successDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {error && (
                <div
                  role="alert"
                  className="rounded-2xl border border-[#B91C1C] bg-[#FEF2F2] p-4 text-sm font-medium text-[#991B1B]"
                >
                  {error}
                </div>
              )}

              {/* Who */}
              <section className="space-y-5">
                <SectionHeading number={1}>{t.sectionWho}</SectionHeading>

                <fieldset className="space-y-2.5">
                  <legend className="text-sm font-semibold text-[#07162C]">
                    {t.whoLabel}{" "}
                    <span className="text-[#996515]" aria-hidden>
                      *
                    </span>
                  </legend>
                  <div className="grid gap-2.5 pt-1 sm:grid-cols-3">
                    {who.map((item) => (
                      <ChoiceCard
                        key={item.id}
                        name="inquiry_type"
                        value={item.id}
                        label={item.label}
                        checked={formData.inquiry_type === item.id}
                        onChange={(v) =>
                          setFormData({ ...formData, inquiry_type: v })
                        }
                      />
                    ))}
                  </div>
                </fieldset>

                {formData.inquiry_type === "provider" && (
                  <div
                    role="note"
                    className="space-y-1.5 rounded-2xl border border-[#E4B95A] bg-[#F6EBD2] p-4 text-sm"
                  >
                    <p className="font-semibold text-[#07162C]">
                      {t.providerNote1}
                    </p>
                    <p className="text-[#07162C]/75">{t.providerNote2}</p>
                  </div>
                )}
              </section>

              {/* Contact */}
              <section className="space-y-5">
                <SectionHeading number={2}>{t.sectionContact}</SectionHeading>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="first_name" label={t.firstName} required>
                    <input
                      id="first_name"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder={t.phFirstName}
                      value={formData.first_name}
                      onChange={(e) =>
                        setFormData({ ...formData, first_name: e.target.value })
                      }
                      className={input}
                    />
                  </Field>
                  <Field id="last_name" label={t.lastName} required>
                    <input
                      id="last_name"
                      type="text"
                      required
                      autoComplete="family-name"
                      placeholder={t.phLastName}
                      value={formData.last_name}
                      onChange={(e) =>
                        setFormData({ ...formData, last_name: e.target.value })
                      }
                      className={input}
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="phone" label={t.phone} required>
                    <input
                      id="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder={t.phPhone}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={input}
                    />
                  </Field>
                  <Field id="email" label={t.email} required>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={t.phEmail}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={input}
                    />
                  </Field>
                </div>

                <Field id="city_or_zip" label={t.cityOrZip} required>
                  <input
                    id="city_or_zip"
                    type="text"
                    required
                    placeholder={t.phCityOrZip}
                    value={formData.city_or_zip}
                    onChange={(e) =>
                      setFormData({ ...formData, city_or_zip: e.target.value })
                    }
                    className={input}
                  />
                </Field>
              </section>

              {/* Needs */}
              <section className="space-y-5">
                <SectionHeading number={3}>{t.sectionNeeds}</SectionHeading>

                <fieldset className="space-y-2.5">
                  <legend className="text-sm font-semibold text-[#07162C]">
                    {t.helpTypeLabel}
                  </legend>
                  <div className="grid gap-2.5 pt-1 sm:grid-cols-2">
                    {helpOptions.map((opt) => (
                      <ChoiceCard
                        key={opt.value}
                        name="help_type"
                        value={opt.value}
                        label={opt.label}
                        checked={formData.help_type === opt.value}
                        onChange={(v) =>
                          setFormData({ ...formData, help_type: v })
                        }
                      />
                    ))}
                  </div>
                </fieldset>

                <Field id="insurance_type" label={t.insuranceLabel}>
                  <div className="relative">
                    <select
                      id="insurance_type"
                      value={formData.insurance_type}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          insurance_type: e.target.value,
                        })
                      }
                      className={`${input} appearance-none pr-10`}
                    >
                      <option>Texas Medicaid or STAR+PLUS</option>
                      <option>Medicare</option>
                      <option>Medicare Advantage or private insurance</option>
                      <option>VA</option>
                      <option>Private pay</option>
                      <option>Not sure</option>
                    </select>
                    <ChevronDown
                      size={18}
                      aria-hidden
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#07162C]"
                    />
                  </div>
                </Field>

                <Field id="message" label={t.messageLabel}>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder={t.phMessage}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={input}
                  />
                </Field>
              </section>

              {/* SMS consent */}
              <label
                htmlFor="sms_consent"
                className="flex cursor-pointer items-start gap-3.5 rounded-2xl border border-[#07162C]/15 bg-[#F4F4F2] p-4 text-xs leading-relaxed text-[#07162C]/80 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#07162C]"
              >
                <input
                  id="sms_consent"
                  type="checkbox"
                  checked={formData.sms_consent}
                  onChange={(e) =>
                    setFormData({ ...formData, sms_consent: e.target.checked })
                  }
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#07162C]"
                />
                <span>{t.smsText}</span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#07162C] bg-[#07162C] py-4 text-base font-semibold text-[#E4B95A] disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS}`}
              >
                {loading ? t.sending : t.submit}
                <ArrowRight size={18} aria-hidden />
              </button>

              {/* Legal links */}
              <p className="border-t border-[#07162C]/10 pt-6 text-center text-sm leading-relaxed text-[#07162C]/70">
                {t.legalIntro}{" "}
                <a href="/notice-of-privacy-practices" className={link}>
                  {t.npp}
                </a>
                {" · "}
                <a href="/privacy-policy" className={link}>
                  {t.privacy}
                </a>
                {" · "}
                <a href="/terms-of-service" className={link}>
                  {t.terms}
                </a>
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
