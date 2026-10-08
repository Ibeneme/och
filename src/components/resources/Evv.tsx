"use client";

import type { ReactNode } from "react";
import { ExternalLink, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { siteConfig } from "@/src/constants/siteConfig";
/* Design tokens: navy + gold. Flat surfaces, 1px borders, no shadows, no gradients.
   navy       #07162C  hero, headings, buttons on light surfaces
   navy-panel #0D2342  card on navy
   gold       #E4B95A  accents and buttons on navy, CTA band
   gold-deep  #C89B3C  borders and rules on light surfaces
   gold-text  #8A6A12  gold text on white (AA contrast)
   gold-tint  #FBF6E6  quiet gold background
   line       #E6E9F0  dividers on white                               */

const PHONE = siteConfig.contact.phone;

const container = "mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8";
const h3Cls =
  "text-lg font-semibold leading-snug tracking-tight text-[#07162C] sm:text-xl";
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C89B3C]";

const Steps = ({ items }: { items: string[] }) => (
  <ol className="mt-4 space-y-3.5 [counter-reset:step]">
    {items.map((s, i) => (
      <li
        key={i}
        className="relative min-w-0 break-words pl-10 leading-relaxed [counter-increment:step] before:absolute before:left-0 before:top-0.5 before:flex before:h-6 before:w-6 before:items-center before:justify-center before:rounded-full before:bg-[#07162C] before:font-mono before:text-xs before:font-medium before:text-[#E4B95A] before:content-[counter(step)]"
      >
        {s}
      </li>
    ))}
  </ol>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#C89B3C]">
    {items.map((s, i) => (
      <li key={i} className="min-w-0 break-words pl-1 leading-relaxed">
        {s}
      </li>
    ))}
  </ul>
);

const Method = ({
  id,
  tag,
  title,
  children,
}: {
  id: string;
  tag: string;
  title: string;
  children: ReactNode;
}) => (
  <section
    id={id}
    className="scroll-mt-32 space-y-8 rounded-2xl border border-[#E6E9F0] border-t-4 border-t-[#E4B95A] bg-white p-5 sm:p-8"
  >
    <header>
      <p className="font-mono text-xs font-medium text-[#8A6A12]">{tag}</p>
      <h2 className="mt-2 text-balance break-words text-2xl font-semibold leading-tight tracking-tight text-[#07162C] sm:text-3xl">
        {title}
      </h2>
    </header>
    {children}
  </section>
);

const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className={h3Cls}>{children}</h3>
);

export default function EmployeeEVVHelpPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      badge: "EVV Clock-In Help",
      title: "EVV Clock-In & Clock-Out Help",
      subtitle:
        "Every visit has to be clocked in and out through EVV. If it isn't recorded, the visit may not be paid. There are three ways to clock in and out. Use the one your coordinator set up for your case.",
      btnMobile: "Mobile App",
      btnFob: "FOB Device",
      btnPhone: "Call in by Phone",
      urgentBanner: "Having trouble right now? Call the office at ",
      urgentTime:
        "Monday–Friday 9:00 a.m.–5:00 p.m. Do not leave the visit unrecorded — call us.",
      method1Tag: "Method 1",
      method1Title: "HHAeXchange+ mobile app",
      m1InTitle: "To clock in",
      m1InSteps: [
        "Open the HHAeXchange+ app and log in.",
        "Tap Today's Schedule.",
        "Tap the visit you are starting.",
        "On the Clock In/Out tab, tap Clock In.",
        "Choose your verification method — GPS if you are at the member's home, or Security Token if you are using a FOB device.",
        "Check the time that appears under Clock In. Green means it worked. Red means it did not — try again, and call the office if it stays red.",
      ],
      m1OutTitle: "To clock out",
      m1OutSteps: [
        "Open the visit again and tap Clock Out.",
        "Go through the duties list. Tap the checkmark for each duty you completed and the X for any the member refused. If you mark a duty refused, choose a reason.",
        "If the member's plan requires a signature, hand them the device to sign. If they cannot sign, tap Skip and choose a reason — the Save button stays gray until you pick one.",
        "Tap Save. You will see a confirmation, then tap OK.",
      ],
      goodToKnowTitle: "Good to know",
      goodToKnowItems: [
        "No signal at the member's home? Clock in and out normally. The app holds the visit and sends it once your phone is back in coverage.",
        "Serving two members in the same home? You still enter duties separately for each member.",
        "Visit happening away from the member's home? If your coordinator has enabled it, tap the icon at the bottom left and check Community Visit before clocking in.",
      ],
      method2Tag: "Method 2",
      method2Title: "FOB device (alternative device)",
      fobDesc:
        "The FOB is the small device kept at the member's home. It has two numbers you will need:",
      fobItem1:
        "Device ID — the six-digit number printed on the front of the device.",
      fobItem2:
        "Passcode — the eight-digit number in the little window. It changes every 30 seconds.",
      fobStartTitle: "At the start of the visit",
      fobStartSteps: [
        "Turn on the FOB and read the eight-digit passcode.",
        "Write it down — this is your clock-in code.",
      ],
      fobEndTitle: "At the end of the visit",
      fobEndSteps: [
        "Turn on the FOB again and read the new eight-digit passcode.",
        "Write it down — this is your clock-out code.",
      ],
      fobSubmitTitle: "Submit the codes by phone",
      fobSubmitSteps: [
        "Call the EVV phone number your coordinator gave you (or call the office at (972) 325-1598).",
        "Press 3 for FOB device.",
        "Press 3 again for FOB clock in or clock out.",
        "Enter your Time & Attendance PIN.",
        "Enter the six-digit Device ID.",
        "Enter the eight-digit clock-in passcode and clock-out passcode when prompted.",
        "Enter your duties one at a time and dial 000 to finish.",
      ],
      method3Tag: "Method 3",
      method3Title: "Call in by phone",
      m3Desc:
        "Call from the member's home phone. Use the EVV phone number your coordinator gave you. If you don't have it, call the office at (972) 325-1598.",
      m3InTitle: "To clock in",
      m3InSteps: [
        "From the member's home phone, dial your EVV number.",
        "Press 1 for clock in.",
        "Enter your Time & Attendance PIN and confirm.",
        "Listen for 'Your call-in has been successfully registered.'",
      ],
      m3OutTitle: "To clock out",
      m3OutSteps: [
        "Dial the same EVV number and press 2 for clock out.",
        "Enter your Time & Attendance PIN.",
        "Enter the ID number for each duty performed. If refused, press star (*) then the duty ID.",
        "Dial 00 (or 000) to finish and listen for confirmation.",
      ],
      troubleTitle: "Troubleshooting when it doesn't work",
      troubleTh1: "What's happening",
      troubleTh2: "What to do",
      troubleshootingRows: [
        {
          q: "My PIN isn't working",
          a: "Try again carefully. After 3 wrong tries it locks. Call the office to reset.",
        },
        {
          q: "I never got a PIN / lost it",
          a: "Call the office at (972) 325-1598. We can look it up or reissue it.",
        },
        {
          q: "The FOB window is blank",
          a: "Press the power button on the front. If still blank, call the office.",
        },
        {
          q: "Clock-in shows red in the app",
          a: "It did not record. Try again. If it stays red, call the office before leaving.",
        },
        {
          q: "I forgot to clock in or out",
          a: "Call the office the same day so we can correct it promptly.",
        },
      ],
      guidesTitle: "Official HHAeXchange guides",
      guidesDesc:
        "These are HHAeXchange's own guides. The phone instructions are a blank template — the dial-in numbers are not printed in it. Use the steps above, and call the office at (972) 325-1598 if you need your number.",
      guide1:
        "Clocking in and out with the HHAeXchange+ mobile app — Knowledge base",
      guide2: "Texas EVV phone instructions (PDF, ~1.2 MB) — Job aid",
      guide3:
        "Getting started with the alternative device (FOB), Texas (PDF, ~950 KB) — Job aid",
      guide4:
        "Video: Clocking in and out with the HHAeXchange+ mobile app (3:36) — Training video",
    },
    es: {
      badge: "Ayuda de Reloj EVV",
      title: "Cómo registrar entradas y salidas con EVV",
      subtitle:
        "Cada visita debe registrarse a través de EVV. Si no se registra, es posible que no se pague. Elija el método configurado para su caso:",
      btnMobile: "Aplicación Móvil",
      btnFob: "Dispositivo FOB",
      btnPhone: "Llamada Telefónica",
      urgentBanner: "¿Tiene problemas ahora mismo? Llame a la oficina al ",
      urgentTime:
        "lunes a viernes de 9:00 a.m. a 5:00 p.m. No deje la visita sin registrar.",
      method1Tag: "Método 1",
      method1Title: "Aplicación móvil HHAeXchange+",
      m1InTitle: "Para registrar la entrada (Clock In)",
      m1InSteps: [
        "Abra la aplicación HHAeXchange+ e inicie sesión.",
        "Toque Horario de Hoy (Today's Schedule).",
        "Toque la visita que va a comenzar.",
        "En la pestaña Clock In/Out, toque Clock In.",
        "Elija su método de verificación: GPS si está en la casa del miembro, o Token de Seguridad si usa un dispositivo FOB.",
        "Verifique la hora que aparece en Clock In. El verde indica que funcionó. El rojo indica que no: inténtelo de nuevo y llame a la oficina si se mantiene en rojo.",
      ],
      m1OutTitle: "Para registrar la salida (Clock Out)",
      m1OutSteps: [
        "Abra la visita nuevamente y toque Clock Out.",
        "Revise la lista de tareas. Toque la marca de verificación para cada tarea completada y la X para cualquiera que el miembro haya rechazado. Si marca una tarea rechazada, elija un motivo.",
        "Si el plan del miembro requiere firma, entréguele el dispositivo para firmar. Si no puede firmar, toque Omitir (Skip) y elija un motivo: el botón Guardar permanece gris hasta que seleccione uno.",
        "Toque Guardar (Save). Verá una confirmación, luego toque OK.",
      ],
      goodToKnowTitle: "Información útil",
      goodToKnowItems: [
        "¿Sin señal en la casa del miembro? Registre entrada y salida normalmente. La aplicación guarda la visita y la envía una vez que su teléfono recupere señal.",
        "¿Atiende a dos miembros en el mismo hogar? Aún debe ingresar las tareas por separado para cada miembro.",
        "¿Visita fuera de la casa del miembro? Si su coordinador lo ha habilitado, toque el icono inferior izquierdo y marque Visita Comunitaria (Community Visit) antes de registrar la entrada.",
      ],
      method2Tag: "Método 2",
      method2Title: "Dispositivo FOB (Alternativo)",
      fobDesc:
        "El FOB es el pequeño dispositivo que se guarda en la casa del miembro. Tiene dos números que necesitará:",
      fobItem1:
        "ID del dispositivo (Device ID): el número de seis dígitos impreso en el frente del aparato.",
      fobItem2:
        "Código de acceso (Passcode): el número de ocho dígitos en la pequeña ventanilla. Cambia cada 30 segundos.",
      fobStartTitle: "Al inicio de la visita",
      fobStartSteps: [
        "Encienda el FOB y lea el código de acceso de ocho dígitos.",
        "Anótelo: este es su código de entrada.",
      ],
      fobEndTitle: "Al final de la visita",
      fobEndSteps: [
        "Encienda el FOB nuevamente y lea el nuevo código de acceso de ocho dígitos.",
        "Anótelo: este es su código de salida.",
      ],
      fobSubmitTitle: "Envío de códigos por teléfono",
      fobSubmitSteps: [
        "Llame al número de teléfono EVV que le dio su coordinador (o llame a la oficina al (972) 325-1598).",
        "Presione 3 para dispositivo FOB.",
        "Presione 3 nuevamente para entrada o salida de FOB.",
        "Ingrese su PIN de Tiempo y Asistencia.",
        "Ingrese el ID del dispositivo de seis dígitos.",
        "Ingrese el código de entrada y salida de ocho dígitos cuando se le solicite.",
        "Ingrese sus tareas una por una y marque 000 para terminar.",
      ],
      method3Tag: "Método 3",
      method3Title: "Llamada telefónica (Call in by phone)",
      m3Desc:
        "Llame desde el teléfono de la casa del miembro. Use el número de teléfono EVV que le dio su coordinador. Si no lo tiene, llame a la oficina al (972) 325-1598.",
      m3InTitle: "Para registrar entrada",
      m3InSteps: [
        "Desde el teléfono de la casa del miembro, marque su número EVV.",
        "Presione 1 para registrar entrada.",
        "Ingrese su PIN de Tiempo y Asistencia y confirme.",
        "Escuche: 'Your call-in has been successfully registered.'",
      ],
      m3OutTitle: "Para registrar salida",
      m3OutSteps: [
        "Marque el mismo número EVV y presione 2 para registrar salida.",
        "Ingrese su PIN de Tiempo y Asistencia.",
        "Ingrese el número de ID para cada tarea realizada. Si fue rechazada, presione asterisco (*) y luego el ID de la tarea.",
        "Marque 00 (o 000) para terminar y escuchar la confirmación.",
      ],
      troubleTitle: "Solución de problemas",
      troubleTh1: "Qué está pasando",
      troubleTh2: "Qué hacer",
      troubleshootingRows: [
        {
          q: "Mi PIN no funciona",
          a: "Inténtelo de nuevo con cuidado. Después de 3 intentos incorrectos se bloquea. Llame a la oficina para restablecerlo.",
        },
        {
          q: "Nunca recibí un PIN / lo perdí",
          a: "Llame a la oficina al (972) 325-1598. Podemos buscarlo o reemitirlo.",
        },
        {
          q: "La ventana del FOB está en blanco",
          a: "Presione el botón de encendido en el frente. Si sigue en blanco, llame a la oficina.",
        },
        {
          q: "La hora de entrada se muestra en rojo en la app",
          a: "No se registró. Inténtelo de nuevo. Si se mantiene en rojo, llame a la oficina antes de irse.",
        },
        {
          q: "Olvidé registrar la entrada o salida",
          a: "Llame a la oficina el mismo día para que podamos corregirlo a tiempo.",
        },
      ],
      guidesTitle: "Guías oficiales de HHAeXchange",
      guidesDesc:
        "Estas son guías propias de HHAeXchange. Las instrucciones telefónicas son una plantilla en blanco: los números de marcado no están impresos en ella. Use los pasos anteriores y llame a la oficina al (972) 325-1598 si necesita su número.",
      guide1:
        "Registro de entrada y salida con la app móvil HHAeXchange+ — Base de conocimientos",
      guide2:
        "Instrucciones telefónicas EVV de Texas (PDF, ~1.2 MB) — Guía de trabajo",
      guide3:
        "Primeros pasos con el dispositivo alternativo (FOB), Texas (PDF, ~950 KB) — Guía de trabajo",
      guide4:
        "Video: Registro de entrada y salida con la app móvil HHAeXchange+ (3:36) — Video de capacitación",
    },
  }[language];

  const guides = [
    { href: "https://knowledge.hhaexchange.com", label: t.guide1 },
    { href: "https://hhaxsupport.s3.amazonaws.com", label: t.guide2 },
    { href: "https://hhaxsupport.s3.amazonaws.com", label: t.guide3 },
    { href: "https://vimeo.com", label: t.guide4 },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[15px] text-[#1E2B4A] sm:text-base">
      {/* ===== Header ===== */}
      <section className="border-b-4 border-[#E4B95A] bg-[#07162C] text-white">
        <div className={`${container} py-12 sm:py-16 lg:py-20`}>
          <p className="inline-flex rounded-full border border-[#E4B95A]/40 px-3 py-1 font-mono text-xs font-medium text-[#E4B95A]">
            {t.badge}
          </p>
          <h1 className="mt-5 max-w-3xl text-balance break-words text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-5 sm:text-lg">
            {t.subtitle}
          </p>

          <nav
            aria-label={t.badge}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {[
              ["#method-1", t.btnMobile],
              ["#method-2", t.btnFob],
              ["#method-3", t.btnPhone],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-white/25 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-[#E4B95A] hover:bg-[#E4B95A] hover:text-[#07162C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4B95A]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div
            role="note"
            className="mt-8 flex items-start gap-3 rounded-xl bg-[#E4B95A] p-4 text-[#07162C] sm:p-5"
          >
            <AlertTriangle size={20} aria-hidden className="mt-0.5 shrink-0" />
            <p className="min-w-0 break-words text-sm leading-relaxed sm:text-[15px]">
              {t.urgentBanner}
              <a
                href="tel:9723251598"
                className="whitespace-nowrap font-mono font-semibold underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07162C]"
              >
                {PHONE}
              </a>
              , {t.urgentTime}
            </p>
          </div>
        </div>
      </section>

      <div className={`${container} space-y-8 py-10 sm:space-y-10 sm:py-14`}>
        {/* ===== Method 1 ===== */}
        <Method id="method-1" tag={t.method1Tag} title={t.method1Title}>
          <div>
            <H3>{t.m1InTitle}</H3>
            <Steps items={t.m1InSteps} />
          </div>
          <div>
            <H3>{t.m1OutTitle}</H3>
            <Steps items={t.m1OutSteps} />
          </div>
          <aside className="rounded-xl border-l-4 border-[#E4B95A] bg-[#FBF6E6] p-5">
            <h4 className="font-semibold text-[#07162C]">
              {t.goodToKnowTitle}
            </h4>
            <Bullets items={t.goodToKnowItems} />
          </aside>
        </Method>

        {/* ===== Method 2 ===== */}
        <Method id="method-2" tag={t.method2Tag} title={t.method2Title}>
          <div className="rounded-xl border-l-4 border-[#E4B95A] bg-[#FBF6E6] p-5">
            <p className="leading-relaxed">{t.fobDesc}</p>
            <Bullets items={[t.fobItem1, t.fobItem2]} />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="min-w-0 rounded-xl bg-[#F6F8FC] p-5">
              <h3 className={h3Cls}>{t.fobStartTitle}</h3>
              <Steps items={t.fobStartSteps} />
            </div>
            <div className="min-w-0 rounded-xl bg-[#F6F8FC] p-5">
              <h3 className={h3Cls}>{t.fobEndTitle}</h3>
              <Steps items={t.fobEndSteps} />
            </div>
          </div>
          <div>
            <H3>{t.fobSubmitTitle}</H3>
            <Steps items={t.fobSubmitSteps} />
          </div>
        </Method>

        {/* ===== Method 3 ===== */}
        <Method id="method-3" tag={t.method3Tag} title={t.method3Title}>
          <p className="leading-relaxed">{t.m3Desc}</p>
          <div>
            <H3>{t.m3InTitle}</H3>
            <Steps items={t.m3InSteps} />
          </div>
          <div>
            <H3>{t.m3OutTitle}</H3>
            <Steps items={t.m3OutSteps} />
          </div>
        </Method>

        {/* ===== Troubleshooting ===== */}
        <section className="space-y-5">
          <div>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-[#07162C] sm:text-3xl">
              {t.troubleTitle}
            </h2>
            <span
              aria-hidden="true"
              className="mt-3 block h-1 w-10 rounded-full bg-[#E4B95A]"
            />
          </div>
          {/* Rows become stacked cards on phones, a real table from md up */}
          <div className="md:overflow-hidden md:rounded-xl md:border md:border-[#E6E9F0]">
            <table className="block w-full border-collapse text-left md:table">
              <thead className="hidden bg-[#07162C] md:table-header-group">
                <tr>
                  <th
                    scope="col"
                    className="w-1/3 px-5 py-3 text-sm font-semibold text-white"
                  >
                    {t.troubleTh1}
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-semibold text-white"
                  >
                    {t.troubleTh2}
                  </th>
                </tr>
              </thead>
              <tbody className="block space-y-3 md:table-row-group md:space-y-0">
                {t.troubleshootingRows.map((row, i) => (
                  <tr
                    key={i}
                    className="block rounded-xl border border-[#E6E9F0] p-4 md:table-row md:rounded-none md:border-0 md:border-b md:border-[#E6E9F0] md:p-0 md:last:border-b-0 md:odd:bg-white md:even:bg-[#F6F8FC]"
                  >
                    <th
                      scope="row"
                      className="mb-1 block break-words text-left font-semibold text-[#07162C] md:mb-0 md:table-cell md:px-5 md:py-4 md:align-top"
                    >
                      {row.q}
                    </th>
                    <td className="block break-words leading-relaxed md:table-cell md:px-5 md:py-4">
                      {row.a}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Official guides ===== */}
        <section className="space-y-5">
          <div>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-[#07162C] sm:text-3xl">
              {t.guidesTitle}
            </h2>
            <span
              aria-hidden="true"
              className="mt-3 block h-1 w-10 rounded-full bg-[#E4B95A]"
            />
          </div>
          <p className="max-w-2xl leading-relaxed text-[#1E2B4A]/80">
            {t.guidesDesc}
          </p>
          <ul className="space-y-3">
            {guides.map((g, i) => (
              <li key={i}>
                <a
                  href={g.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between gap-4 rounded-xl border border-[#E6E9F0] px-4 py-3.5 transition-colors hover:border-[#C89B3C] hover:bg-[#FBF6E6] sm:px-5 ${focus}`}
                >
                  <span className="min-w-0 break-words font-medium text-[#07162C]">
                    {g.label}
                  </span>
                  <ExternalLink
                    size={16}
                    aria-hidden
                    className="shrink-0 text-[#8A6A12] transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
