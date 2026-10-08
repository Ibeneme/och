"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Source_Serif_4, Atkinson_Hyperlegible } from "next/font/google";
import { CheckCircle2, ArrowRight, Phone, ChevronDown } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";


const HEADING = "font-[family-name:var(--font-serif)] text-[#17302F]";
const FOCUS =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#0E5A5A]";

const input =
  "w-full rounded-xl border border-[#9FB5B1] bg-white px-4 py-3.5 text-base text-[#17302F] outline-none transition-colors placeholder:text-[#64807C] focus:border-[#0E5A5A] focus:outline focus:outline-[3px] focus:outline-offset-0 focus:outline-[#F2B544]/70";

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
    <div className="space-y-2">
      <label htmlFor={id} className="block  text-[#17302F]">
        {label}
        {required && (
          <span className="text-[#8A5A00]" aria-hidden>
            {" "}
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className={`${HEADING} border-b border-[#D3DEDB] pb-3 text-2xl font-semibold leading-tight`}
    >
      {children}
    </h2>
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
      className={`flex cursor-pointer text-[12px] items-start gap-3 rounded-2xl border-2 p-4  leading-snug transition-colors focus-within:outline focus-within:outline-[3px] focus-within:outline-offset-2 focus-within:outline-[#0E5A5A] ${
        checked
          ? "border-[#0E5A5A] bg-[#E4EFED] text-[#0E3F3F]"
          : "border-[#D3DEDB] bg-white text-[#2B4240] hover:border-[#9FB5B1] hover:bg-[#F6F8F7]"
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
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
          checked
            ? "border-[#0E5A5A] bg-[#0E5A5A]"
            : "border-[#7F9995] bg-white"
        }`}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-white" />}
      </span>
      <span>{label}</span>
    </label>
  );
}

export default function RequestCarePage() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

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
      smsText:
        "Text me about my inquiry. By checking this box you agree to receive text messages from JACOP Healthcare Services, Inc., doing business as One Community Health about your inquiry, scheduling, and care coordination. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of receiving services. See our SMS Terms and Privacy Policy.",
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
      smsText:
        "Envíeme mensajes de texto sobre mi consulta. Al marcar esta casilla, acepta recibir mensajes de texto de JACOP Healthcare Services, Inc., doing business as One Community Health sobre su consulta, programación y coordinación de atención. La frecuencia de los mensajes varía. Responda STOP para cancelar o HELP para obtener ayuda. El consentimiento no es una condición para recibir servicios.",
      sending: "Enviando...",
      submit: "Enviar solicitud",
      legalIntro: "Cómo manejamos su información:",
      npp: "Aviso de Prácticas de Privacidad",
      privacy: "Política de privacidad",
      terms: "Términos de servicio",
    },
  }[language];

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
    } catch (err) {
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
    {
      value: "Physical, occupational, or speech therapy",
      label: t.helpOpt2,
    },
    { value: "Home health aide or personal care", label: t.helpOpt3 },
    { value: "Not sure — I'd like to talk it through", label: t.helpOpt4 },
  ];

  const steps = [
    { title: t.next1Title, desc: t.next1Desc },
    { title: t.next2Title, desc: t.next2Desc },
    { title: t.next3Title, desc: t.next3Desc },
  ];

  const link = ` text-[#0E5A5A] underline underline-offset-4 hover:text-[#0A4545] rounded-sm ${FOCUS}`;

  return (
    <main
      className={` min-h-screen bg-[#F6F8F7]  text-[1.0625rem] leading-relaxed text-[#2B4240] antialiased`}
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:py-16">
        {/* Left: intro, steps, phone */}
        <aside className="lg:col-span-5 lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-[2rem] bg-[#0E3F3F] p-7 text-white sm:p-10">
            <header className="space-y-4">
              <p className=" text-[#F2B544]">{t.badge}</p>
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-[2.75rem]">
                {t.title}
              </h1>
              <p className="text-lg leading-relaxed text-[#D7E8E5]">
                {t.subtitle}
              </p>
            </header>

            {/* Process: a real sequence, so numbered */}
            <section
              aria-labelledby="next-title"
              className="mt-10 border-t border-white/20 pt-8"
            >
              <h2
                id="next-title"
                className=" text-xl font-semibold"
              >
                {t.nextTitle}
              </h2>
              <ol className="mt-5">
                {steps.map((s, i) => (
                  <li
                    key={s.title}
                    className="relative flex gap-4 pb-6 last:pb-0"
                  >
                    {i < steps.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute left-4 top-9 h-[calc(100%-2.25rem)] w-px -translate-x-1/2 bg-white/25"
                      />
                    )}
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2B544]  text-[#17302F]">
                      {i + 1}
                    </span>
                    <div>
                      <p className="">{s.title}</p>
                      <p className="text-base leading-snug text-[#D7E8E5]">
                        {s.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Phone */}
            <div className="mt-10 flex items-center gap-4 rounded-2xl bg-white/10 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2B544] text-[#17302F]">
                <Phone size={22} aria-hidden />
              </span>
              <div>
                <p className="text-base text-[#D7E8E5]">{t.needNow}</p>
                <a
                  href="tel:+19728489174"
                  className="rounded-sm text-2xl  hover:underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#F2B544]"
                >
                  (972) 848-9174
                </a>
                <p className="text-base text-[#D7E8E5]">{t.hours}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Right: form / success */}
        <div className="lg:col-span-7">
          <div className="rounded-[2rem] border border-[#D3DEDB] bg-white p-6 sm:p-10">
            {submitted ? (
              <div role="status" className="space-y-5 py-8 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E4EFED] text-[#0E5A5A]">
                  <CheckCircle2 size={32} aria-hidden />
                </span>
                <h2
                  className={`${HEADING} text-3xl font-semibold leading-tight`}
                >
                  {t.successTitle}
                </h2>
                <p className="mx-auto max-w-lg">{t.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border-l-4 border-[#B91C1C] bg-[#FEF2F2] p-4  text-[#991B1B]"
                  >
                    {error}
                  </div>
                )}

                {/* Who */}
                <section className="space-y-5">
                  <SectionHeading>{t.sectionWho}</SectionHeading>

                  <fieldset className="space-y-3">
                    <h3 className=" text-[#17302F] text-[16px]">
                      {t.whoLabel}{" "}
                      <span className="text-[#8A5A00]" aria-hidden>
                        *
                      </span>
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-3">
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
                      className="space-y-2 rounded-2xl border-l-4 border-[#0E5A5A] bg-[#E4EFED] p-5 text-base"
                    >
                      <p className=" text-[#17302F]">
                        {t.providerNote1}
                      </p>
                      <p className="text-[#4A5F5D]">{t.providerNote2}</p>
                    </div>
                  )}
                </section>

                {/* Contact */}
                <section className="space-y-5">
                  <SectionHeading>{t.sectionContact}</SectionHeading>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="first_name" label={t.firstName} required>
                      <input
                        id="first_name"
                        type="text"
                        required
                        autoComplete="given-name"
                        value={formData.first_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            first_name: e.target.value,
                          })
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
                        value={formData.last_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            last_name: e.target.value,
                          })
                        }
                        className={input}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="phone" label={t.phone} required>
                      <input
                        id="phone"
                        type="tel"
                        required
                        autoComplete="tel"
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
                      value={formData.city_or_zip}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          city_or_zip: e.target.value,
                        })
                      }
                      className={input}
                    />
                  </Field>
                </section>

                {/* Needs */}
                <section className="space-y-5">
                  <SectionHeading>{t.sectionNeeds}</SectionHeading>

                  <fieldset className="space-y-3">
                    <h3 className=" text-[#17302F]">
                      {t.helpTypeLabel}
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
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
                        className={`${input} appearance-none pr-11`}
                      >
                        <option>Texas Medicaid or STAR+PLUS</option>
                        <option>Medicare</option>
                        <option>Medicare Advantage or private insurance</option>
                        <option>VA</option>
                        <option>Private pay</option>
                        <option>Not sure</option>
                      </select>
                      <ChevronDown
                        size={20}
                        aria-hidden
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0E5A5A]"
                      />
                    </div>
                  </Field>

                  <Field id="message" label={t.messageLabel}>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={input}
                    />
                  </Field>
                </section>

                {/* SMS Consent */}
                <label
                  htmlFor="sms_consent"
                  className="flex cursor-pointer items-start gap-4 rounded-2xl border border-[#D3DEDB] bg-[#F6F8F7] p-5 text-[0.95rem] leading-relaxed text-[#2B4240] focus-within:outline focus-within:outline-[3px] focus-within:outline-offset-2 focus-within:outline-[#0E5A5A]"
                >
                  <input
                    id="sms_consent"
                    type="checkbox"
                    checked={formData.sms_consent}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        sms_consent: e.target.checked,
                      })
                    }
                    className="mt-1 h-5 w-5 shrink-0 accent-[#0E5A5A]"
                  />
                  <span>{t.smsText}</span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#F2B544] py-4 text-lg  text-[#17302F] transition-colors hover:bg-[#F7C766] disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS}`}
                >
                  {loading ? t.sending : t.submit}
                  <ArrowRight size={20} aria-hidden />
                </button>

                {/* Legal Links */}
                <p className="text-center text-base leading-relaxed text-[#4A5F5D]">
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
        </div>
      </div>
    </main>
  );
}
