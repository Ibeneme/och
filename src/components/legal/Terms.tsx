"use client";

import LegalDocument, { Section, Bullets, ExtLink } from "./LegalDocument";
import { useLanguage } from "@/src/context/LanguageContext";

const link = "text-[#0B4A8F] underline underline-offset-2 hover:text-[#07162C]";

const LAST_UPDATED = "August 18, 2026";

const COPY = {
  en: {
    title: "Terms of Service",
    updated: "Last updated:",
    contents: "Contents",
    intro:
      'These Terms of Service govern your use of the website onecommunityhomehealth.com (the "Site"), operated by JACOP Healthcare Services, Inc., doing business as One Community Home Health ("One Community," "we," "us"). By using the Site, you agree to these Terms. If you do not agree, please do not use the Site.',
    s1Title: "1. The Site is informational",
    s1Text:
      "Content on this Site describes our home health services and related Texas programs for general information only. It is not medical advice, and it does not create a provider–patient relationship. Care decisions should always be made with qualified professionals based on an individual assessment. Program details, including Medicare, Texas Medicaid, and STAR+PLUS rules, can change; we work to keep descriptions current, but the administering agency's official materials control.",
    s2Title: "2. Not an emergency service",
    s2Text:
      "Do not use this Site or its forms for emergencies. If you are experiencing a medical emergency, call 911.\n\nForms and messages submitted through this Site are reviewed during administrative hours and are not monitored continuously. Patients already receiving care from One Community have a separate 24/7 on-call number provided at the start of care.",
    s3Title: "3. Website forms and communications",
    s3Text:
      "Forms on this Site are for contact, consultation requests, referral notification, and employment inquiries. Please do not submit detailed medical information, insurance policy numbers, Social Security numbers, or financial account information through them. To send clinical documentation, call 972-325-1598 or fax 972-674-2923.\n\nSubmitting a form does not establish services. Services begin only after eligibility and authorization are verified, physician orders are in place, and a separate service agreement is executed.",
    s4Title: "4. Acceptable use",
    s4Text:
      "You agree not to misuse the Site, including attempting to gain unauthorized access, submitting automated or fraudulent form entries, scraping content, or interfering with the Site's operation.",
    s5Title: "5. Intellectual property",
    s5Text:
      "The Site's content, branding, and design are owned by One Community or its licensors. You may view and share links to the Site; you may not republish or commercially exploit its content without written permission.",
    s6Title: "6. Third-party links",
    s6Text:
      "The Site links to third-party resources, including government program pages, payer websites, and VA resources. We are not responsible for third-party content or practices.",
    s7Title: "7. Disclaimers and limitation of liability",
    s7Text:
      'The Site is provided "as is" without warranties of any kind, express or implied. To the fullest extent permitted by law, One Community is not liable for indirect, incidental, or consequential damages arising from use of the Site. Nothing in these Terms limits rights you may have under applicable law, or any obligations we owe under a written service agreement or under state or federal healthcare regulations.',
    s8Title: "8. Governing law",
    s8Text:
      "These Terms are governed by the laws of the State of Texas. Any disputes arising from use of the Site will be resolved in the state or federal courts located in Dallas County, Texas.",
    s9Title: "9. Changes and contact",
    s9Text:
      'We may update these Terms from time to time; the "Last updated" date above reflects the current version. Questions? Call 972-325-1598 or use our contact page.',
    s10Title: "10. SMS Terms and Conditions",
    s10Intro:
      'These SMS Terms and Conditions govern text messages sent by JACOP Healthcare Services, Inc., doing business as One Community Home Health ("One Community," "we," "us," or "our"). By opting in to receive text messages from One Community, you agree to these SMS Terms and Conditions.',
    s10Sub1Title: "1. Program Description",
    s10Sub1Text: [
      "One Community may send text messages concerning:",
      "Responses to inquiries about our services;",
      "Consultation and appointment scheduling;",
      "Care coordination and service-related updates;",
      "Employment, caregiver-interest, and application-related communications; and",
      "Other informational messages you request or authorize.",
      "We do not use this SMS program to send detailed medical records or other sensitive health information. Text messages are not a substitute for emergency services. If you are experiencing a medical emergency, call 911.",
    ],
    s10Sub2Title: "2. Consent to Receive Text Messages",
    s10Sub2Text:
      "You may opt in to receive text messages from One Community by providing your mobile number and affirmatively agreeing to receive messages through a website form, by phone, in writing, or through another disclosed opt-in method.\n\nYour consent to receive text messages is not a condition of purchasing or receiving services, obtaining care, or applying for or accepting employment. Consent applies only to One Community and the purposes described when you opt in.\n\nYou must be 18 years of age or older to use this SMS service.",
    s10Sub3Title: "3. Message Frequency",
    s10Sub3Text:
      "Message frequency varies depending on your inquiry, scheduling needs, care-coordination activity, or employment-related communications.",
    s10Sub4Title: "4. Message and Data Rates",
    s10Sub4Text:
      "Message and data rates may apply. Your mobile carrier's rates and charges are your responsibility. Contact your carrier for information about your messaging or data plan.",
    s10Sub5Title: "5. How to Opt Out",
    s10Sub5Text:
      "You may cancel text messages at any time by replying STOP to any message from One Community. After you send STOP, you may receive one final message confirming that you have been unsubscribed. After that confirmation, we will not send additional text messages unless you opt in again.\n\nYou may also request to stop messages by calling 972-325-1598 or emailing info@onechh.com.",
    s10Sub6Title: "6. How to Get Help",
    s10Sub6Text: [
      "Reply HELP to any message from One Community for assistance. You may also contact us at:",
      "Phone: 972-325-1598",
      "Email: info@onechh.com",
      "Address: 3560 Quannah Drive, Grand Prairie, Texas 75052",
    ],
    s10Sub7Title: "7. Privacy",
    s10Sub7Text:
      "Your privacy is important to us. Our collection, use, and protection of information associated with our text-messaging program are described in our [Privacy Policy](/privacy-policy).\n\nNo mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text-messaging originator opt-in data and consent will not be sold, rented, or shared with third parties or affiliates for their marketing or promotional purposes. We may disclose information to service providers that help us operate and deliver text messages, but only as necessary to provide those services, or when disclosure is required by law.",
    s10Sub8Title: "8. Supported Carriers and Delivery",
    s10Sub8Text:
      "Message delivery is subject to effective transmission by your mobile carrier and is not guaranteed. Wireless carriers are not liable for delayed or undelivered messages. Availability may vary by carrier, device, location, and service coverage.",
    s10Sub9Title: "9. Your Responsibilities",
    s10Sub9Text:
      "You represent that you are the subscriber or customary user of the mobile number you provide and that you are authorized to consent to receive messages at that number. If your mobile number changes or is reassigned, you agree to opt out or notify One Community promptly.\n\nYou agree not to use the SMS program for unlawful, abusive, or fraudulent purposes or in a manner that interferes with its operation.",
    s10Sub10Title: "10. Changes to These Terms",
    s10Sub10Text:
      'We may update these SMS Terms and Conditions as our messaging practices, services, or legal obligations change. The "Last updated" date above identifies the current version. Material changes will be posted on this page or communicated as required by law. Your continued participation in the SMS program after an update constitutes acceptance of the revised terms to the extent permitted by law.',
    s11Title: "11. Contact Us",
    s11Address: [
      "JACOP Healthcare Services, Inc. d/b/a One Community Home Health",
      "3560 Quannah Drive",
      "Grand Prairie, Texas 75052",
      "Phone: 972-325-1598",
      "Email: info@onechh.com",
    ],
  },
  es: {
    title: "Términos de Servicio",
    updated: "Última actualización:",
    contents: "Contenido",
    intro:
      'Estos Términos de Servicio rigen su uso del sitio web onecommunityhomehealth.com (el "Sitio"), operado por JACOP Healthcare Services, Inc., doing business as One Community Home Health ("One Community," "nosotros," "nos"). Al utilizar el Sitio, usted acepta estos Términos. Si no está de acuerdo, por favor no utilice el Sitio.',
    s1Title: "1. El Sitio es informativo",
    s1Text:
      "El contenido de este Sitio describe nuestros servicios de salud en el hogar y programas relacionados de Texas únicamente con fines informativos generales. No constituye asesoramiento médico y no crea una relación entre proveedor y paciente. Las decisiones de atención siempre deben tomarse con profesionales calificados basándose en una evaluación individual. Los detalles de los programas, incluidas las reglas de Medicare, Medicaid de Texas y STAR+PLUS, pueden cambiar; trabajamos para mantener las descripciones actualizadas, pero rigen los materiales oficiales de la agencia administradora.",
    s2Title: "2. No es un servicio de emergencia",
    s2Text:
      "No utilice este Sitio ni sus formularios para emergencias. Si está experimentando una emergencia médica, llame al 911.\n\nLos formularios y mensajes enviados a través de este Sitio se revisan durante las horas administrativas y no se monitorean continuamente. Los pacientes que ya reciben atención de One Community tienen un número de guardia independiente disponible las 24 horas, los 7 días de la semana, proporcionado al inicio de la atención.",
    s3Title: "3. Formularios y comunicaciones del sitio web",
    s3Text:
      "Los formularios en este Sitio son para contacto, solicitudes de consulta, notificaciones de referencias y consultas de empleo. Por favor, no envíe información médica detallada, números de pólizas de seguro, números de Seguro Social o información de cuentas financieras a través de ellos. Para enviar documentación clínica, llame al 972-325-1598 o envíe un fax al 972-674-2923.\n\nEnviar un formulario no establece servicios. Los servicios comienzan solo después de que se verifican la elegibilidad y la autorización, se establecen las órdenes médicas y se ejecuta un acuerdo de servicio por separado.",
    s4Title: "4. Uso aceptable",
    s4Text:
      "Usted acepta no hacer un uso indebido del Sitio, incluido intentar obtener acceso no autorizado, enviar entradas de formularios automatizadas o fraudulentas, extraer contenido (scraping) o interferir con el funcionamiento del Sitio.",
    s5Title: "5. Propiedad intelectual",
    s5Text:
      "El contenido, la marca y el diseño del Sitio son propiedad de One Community o de sus licenciantes. Puede ver y compartir enlaces al Sitio; no puede republicar ni explotar comercialmente su contenido sin permiso por escrito.",
    s6Title: "6. Enlaces de terceros",
    s6Text:
      "El Sitio contiene enlaces a recursos de terceros, incluidas páginas de programas gubernamentales, sitios web de pagadores y recursos del VA. No somos responsables del contenido ni de las prácticas de terceros.",
    s7Title: "7. Descargos de responsabilidad y limitación de responsabilidad",
    s7Text:
      'El Sitio se proporciona "tal cual" sin garantías de ningún tipo, expresas o implícitas. Hasta el límite máximo permitido por la ley, One Community no es responsable por daños indirectos, incidentales o consecuentes derivados del uso del Sitio. Nada en estos Términos limita los derechos que pueda tener bajo la ley aplicable ni las obligaciones que debamos bajo un acuerdo de servicio por escrito o bajo las regulaciones de atención médica estatales o federales.',
    s8Title: "8. Ley aplicable",
    s8Text:
      "Estos Términos se rigen por las leyes del Estado de Texas. Cualquier disputa derivada del uso del Sitio se resolverá en los tribunales estatales o federales ubicados en el condado de Dallas, Texas.",
    s9Title: "9. Cambios y contacto",
    s9Text:
      'Podemos actualizar estos Términos periódicamente; la fecha de "Última actualización" indicada arriba refleja la versión actual. ¿Preguntas? Llame al 972-325-1598 o utilice nuestra página de contacto.',
    s10Title: "10. Términos y Condiciones de SMS",
    s10Intro:
      'Estos Términos y Condiciones de SMS rigen los mensajes de texto enviados por JACOP Healthcare Services, Inc., doing business as One Community Home Health ("One Community," "nosotros," "nos" u "nuestro"). Al optar por recibir mensajes de texto de One Community, usted acepta estos Términos y Condiciones de SMS.',
    s10Sub1Title: "1. Descripción del Programa",
    s10Sub1Text: [
      "One Community puede enviar mensajes de texto relacionados con:",
      "Respuestas a consultas sobre nuestros servicios;",
      "Programación de consultas y citas;",
      "Coordinación de cuidados y actualizaciones relacionadas con el servicio;",
      "Comunicaciones de empleo, interés en el cuidado y solicitudes; y",
      "Otros mensajes informativos que solicite o autorice.",
      "No utilizamos este programa de SMS para enviar expedientes médicos detallados u otra información de salud sensible. Los mensajes de texto no sustituyen a los servicios de emergencia. Si experimenta una emergencia médica, llame al 911.",
    ],
    s10Sub2Title: "2. Consentimiento para Recibir Mensajes de Texto",
    s10Sub2Text:
      "Puede optar por recibir mensajes de texto de One Community proporcionando su número de teléfono móvil y aceptando afirmativamente recibir mensajes a través de un formulario en el sitio web, por teléfono, por escrito o mediante otro método de suscripción divulgado.\n\nSu consentimiento para recibir mensajes de texto no es una condición para comprar o recibir servicios, obtener atención, ni para postularse o aceptar un empleo. El consentimiento se aplica únicamente a One Community y a los fines descritos al momento de suscribirse.\n\nDebe tener 18 años de edad o más para utilizar este servicio de SMS.",
    s10Sub3Title: "3. Frecuencia de Mensajes",
    s10Sub3Text:
      "La frecuencia de los mensajes varía según su consulta, necesidades de programación, actividad de coordinación de cuidados o comunicaciones relacionadas con el empleo.",
    s10Sub4Title: "4. Tarifas de Mensajes y Datos",
    s10Sub4Text:
      "Pueden aplicarse tarifas de mensajes y datos. Las tarifas y cargos de su operador de telefonía móvil son su responsabilidad. Comuníquese con su operador para obtener información sobre su plan de mensajería o datos.",
    s10Sub5Title: "5. Cómo Darse de Baja (Opt Out)",
    s10Sub5Text:
      "Puede cancelar los mensajes de texto en cualquier momento respondiendo STOP a cualquier mensaje de One Community. Después de enviar STOP, es posible que reciba un mensaje final confirmando que se ha dado de baja. Tras dicha confirmación, no enviaremos mensajes de texto adicionales a menos que vuelva a suscribirse.\nTambién puede solicitar detener los mensajes llamando al 972-325-1598 o enviando un correo electrónico a info@onechh.com.",
    s10Sub6Title: "6. Cómo Obtener Ayuda",
    s10Sub6Text: [
      "Responda HELP a cualquier mensaje de One Community para recibir asistencia. También puede comunicarse con nosotros en:",
      "Teléfono: 972-325-1598",
      "Correo electrónico: info@onechh.com",
      "Dirección: 3560 Quannah Drive, Grand Prairie, TX 75052",
    ],
    s10Sub7Title: "7. Privacidad",
    s10Sub7Text:
      "Su privacidad es importante para nosotros. Nuestra recopilación, uso y protección de la información asociada con nuestro programa de mensajería de texto se describen en nuestra [Política de Privacidad](/privacy-policy).\n\nNinguna información móvil será compartida con terceros o afiliados para fines de mercadeo (marketing) o promocionales. Los datos de suscripción y el consentimiento del originador de mensajes de texto no se venderán, alquilarán ni compartirán con terceros o afiliados para sus fines de mercadeo o promocionales. Podemos divulgar información a proveedores de servicios que nos ayudan a operar y entregar mensajes de texto, pero solo según sea necesario para proporcionar dichos servicios, o cuando la ley exija su divulgación.",
    s10Sub8Title: "8. Operadores Compatibles y Entrega",
    s10Sub8Text:
      "La entrega de mensajes está sujeta a una transmisión efectiva por parte de su operador móvil y no está garantizada. Los operadores inalámbricos no son responsables por mensajes retrasados o no entregados. La disponibilidad puede variar según el operador, dispositivo, ubicación y cobertura de servicio.",
    s10Sub9Title: "9. Sus Responsabilidades",
    s10Sub9Text:
      "Usted declara que es el suscriptor o usuario habitual del número de teléfono móvil que proporciona y que está autorizado para dar su consentimiento para recibir mensajes en dicho número. Si su número de móvil cambia o es reasignado, usted acepta darse de baja o notificar a One Community con prontitud.\n\nUsted acepta no utilizar el programa de SMS para fines ilegales, abusivos o fraudulentos, o de manera que interfiera con su funcionamiento.",
    s10Sub10Title: "10. Cambios a Estos Términos",
    s10Sub10Text:
      'Podemos actualizar estos Términos y Condiciones de SMS a medida que cambien nuestras prácticas de mensajería, servicios u obligaciones legales. La fecha de "Última actualización" indicada arriba identifica la versión actual. Los cambios importantes se publicarán en esta página o se comunicarán según lo requiera la ley. Su participación continua en el programa de SMS después de una actualización constituye la aceptación de los términos revisados en la medida permitida por la ley.',
    s11Title: "11. Contáctenos",
    s11Address: [
      "JACOP Healthcare Services, Inc. d/b/a One Community Home Health",
      "3560 Quannah Drive",
      "Grand Prairie, Texas 75052",
      "Teléfono: 972-325-1598",
      "Correo electrónico: info@onechh.com",
    ],
  },
} as const;

export default function TermsOfServiceContent() {
  const { language } = useLanguage();
  const L = language === "es" ? "es" : "en";
  const c = COPY[L];

  const ids = {
    s1: "1-the-site-is-informational",
    s2: "2-not-an-emergency-service",
    s3: "3-website-forms-and-communications",
    s4: "4-acceptable-use",
    s5: "5-intellectual-property",
    s6: "6-third-party-links",
    s7: "7-disclaimers-and-limitation-of-liability",
    s8: "8-governing-law",
    s9: "9-changes-and-contact",
    s10: "10-sms-terms-and-conditions",
  };

  return (
    <LegalDocument
      title={c.title}
      lang={L}
      lastUpdated={LAST_UPDATED}
      lastUpdatedLabel={c.updated}
      contentsLabel={c.contents}
      toc={[
        { id: ids.s1, label: c.s1Title },
        { id: ids.s2, label: c.s2Title },
        { id: ids.s3, label: c.s3Title },
        { id: ids.s4, label: c.s4Title },
        { id: ids.s5, label: c.s5Title },
        { id: ids.s6, label: c.s6Title },
        { id: ids.s7, label: c.s7Title },
        { id: ids.s8, label: c.s8Title },
        { id: ids.s9, label: c.s9Title },
        { id: ids.s10, label: c.s10Title },
      ]}
    >
      <div className="space-y-4">
        <p>{c.intro}</p>
      </div>

      <Section id={ids.s1} title={c.s1Title}>
        <p className="whitespace-pre-line">{c.s1Text}</p>
      </Section>

      <Section id={ids.s2} title={c.s2Title}>
        <p className="whitespace-pre-line">{c.s2Text}</p>
      </Section>

      <Section id={ids.s3} title={c.s3Title}>
        <p className="whitespace-pre-line">{c.s3Text}</p>
      </Section>

      <Section id={ids.s4} title={c.s4Title}>
        <p className="whitespace-pre-line">{c.s4Text}</p>
      </Section>

      <Section id={ids.s5} title={c.s5Title}>
        <p className="whitespace-pre-line">{c.s5Text}</p>
      </Section>

      <Section id={ids.s6} title={c.s6Title}>
        <p className="whitespace-pre-line">{c.s6Text}</p>
      </Section>

      <Section id={ids.s7} title={c.s7Title}>
        <p className="whitespace-pre-line">{c.s7Text}</p>
      </Section>

      <Section id={ids.s8} title={c.s8Title}>
        <p className="whitespace-pre-line">{c.s8Text}</p>
      </Section>

      <Section id={ids.s9} title={c.s9Title}>
        <p className="whitespace-pre-line">{c.s9Text}</p>
      </Section>

      <Section id={ids.s10} title={c.s10Title}>
        <div className="space-y-6">
          <p>{c.s10Intro}</p>

          <div>
            <h3 className="font-semibold text-lg mb-2">{c.s10Sub1Title}</h3>
            <p className="mb-2">{c.s10Sub1Text[0]}</p>
            <Bullets items={c.s10Sub1Text.slice(1, c.s10Sub1Text.length - 1)} />
            <p className="mt-2">{c.s10Sub1Text[c.s10Sub1Text.length - 1]}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{c.s10Sub2Title}</h3>
            <p className="whitespace-pre-line">{c.s10Sub2Text}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{c.s10Sub3Title}</h3>
            <p>{c.s10Sub3Text}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{c.s10Sub4Title}</h3>
            <p>{c.s10Sub4Text}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{c.s10Sub5Title}</h3>
            <p className="whitespace-pre-line">{c.s10Sub5Text}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{c.s10Sub6Title}</h3>
            <p className="mb-2">{c.s10Sub6Text[0]}</p>
            <Bullets items={c.s10Sub6Text.slice(1)} />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{c.s10Sub7Title}</h3>
            <p className="whitespace-pre-line">{c.s10Sub7Text}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{c.s10Sub8Title}</h3>
            <p>{c.s10Sub8Text}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{c.s10Sub9Title}</h3>
            <p className="whitespace-pre-line">{c.s10Sub9Text}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{c.s10Sub10Title}</h3>
            <p>{c.s10Sub10Text}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{c.s11Title}</h3>
            <address className="space-y-1 not-italic">
              {c.s11Address.map((line, idx) => (
                <p key={idx} className={idx === 0 ? "font-semibold" : ""}>
                  {line}
                </p>
              ))}
            </address>
          </div>
        </div>
      </Section>
    </LegalDocument>
  );
}
