import { buildMetadata } from "@/app/seo";
import LegalDocument, {
  Section,
  Sub,
} from "@/src/components/legal/LegalDocument";
import { LEGAL_LAST_UPDATED } from "@/src/constants/legalDates";
import { siteConfig } from "@/src/constants/siteConfig";

export const metadata = {
  ...buildMetadata({
    title: "Términos de Servicio",
    description:
      "Términos que rigen el uso del sitio web de One Community Home Health, incluidos nuestros Términos y Condiciones de SMS.",
    path: "/es/terms-of-service",
  }),
  robots: { index: true, follow: true },
};

const TOC = [
  { id: "site-is-informational", label: "1. El Sitio es informativo" },
  {
    id: "not-an-emergency-service",
    label: "2. No es un servicio de emergencia",
  },
  {
    id: "website-forms-and-communications",
    label: "3. Formularios y comunicaciones del sitio web",
  },
  { id: "acceptable-use", label: "4. Uso aceptable" },
  { id: "intellectual-property", label: "5. Propiedad intelectual" },
  { id: "third-party-links", label: "6. Enlaces de terceros" },
  {
    id: "disclaimers-and-limitation-of-liability",
    label: "7. Descargos de responsabilidad y limitación de responsabilidad",
  },
  { id: "governing-law", label: "8. Ley aplicable" },
  { id: "changes-and-contact", label: "9. Cambios y contacto" },
  {
    id: "sms-terms-and-conditions",
    label: "10. Términos y Condiciones de SMS",
  },
];

export default function TermsOfServicePageEs() {
  const lastUpdated = LEGAL_LAST_UPDATED.terms ?? "18 de agosto de 2026";

  return (
    <LegalDocument
      title="Términos de Servicio"
      lastUpdated={lastUpdated}
      toc={TOC}
    >
      <p className="mt-4">
        Estos Términos de Servicio rigen su uso del sitio web
        onecommunityhomehealth.com (el &quot;Sitio&quot;), operado por JACOP
        Healthcare Services, Inc., doing business as {siteConfig.name}{" "}
        (&quot;One Community,&quot; &quot;nosotros,&quot; &quot;nos&quot;). Al
        utilizar el Sitio, usted acepta estos Términos. Si no está de acuerdo,
        por favor no utilice el Sitio.
      </p>

      <Section
        id="site-is-informational"
        number={1}
        title="El Sitio es informativo"
      >
        <p>
          El contenido de este Sitio describe nuestros servicios de salud en el
          hogar y programas relacionados de Texas únicamente con fines
          informativos generales. No constituye asesoramiento médico y no crea
          una relación entre proveedor y paciente. Las decisiones de atención
          siempre deben tomarse con profesionales calificados basándose en una
          evaluación individual. Los detalles de los programas, incluidas las
          reglas de Medicare, Medicaid de Texas y STAR+PLUS, pueden cambiar;
          trabajamos para mantener las descripciones actualizadas, pero rigen
          los materiales oficiales de la agencia administradora.
        </p>
      </Section>

      <Section
        id="not-an-emergency-service"
        number={2}
        title="No es un servicio de emergencia"
      >
        <p>
          No utilice este Sitio ni sus formularios para emergencias. Si está
          experimentando una emergencia médica, llame al 911.
        </p>
        <p>
          Los formularios y mensajes enviados a través de este Sitio se revisan
          durante las horas administrativas y no se monitorean continuamente.
          Los pacientes que ya reciben atención de One Community tienen un
          número de guardia independiente disponible las 24 horas, los 7 días de
          la semana, proporcionado al inicio de la atención.
        </p>
      </Section>

      <Section
        id="website-forms-and-communications"
        number={3}
        title="Formularios y comunicaciones del sitio web"
      >
        <p>
          Los formularios en este Sitio son para contacto, solicitudes de
          consulta, notificaciones de referencias y consultas de empleo. Por
          favor, no envíe información médica detallada, números de pólizas de
          seguro, números de Seguro Social o información de cuentas financieras
          a través de ellos. Para enviar documentación clínica, llame al{" "}
          {siteConfig.contact.phone} o envíe un fax al {siteConfig.contact.fax}.
        </p>
        <p>
          Enviar un formulario no establece servicios. Los servicios comienzan
          solo después de que se verifican la elegibilidad y la autorización, se
          establecen las órdenes médicas y se ejecuta un acuerdo de servicio por
          separado.
        </p>
      </Section>

      <Section id="acceptable-use" number={4} title="Uso aceptable">
        <p>
          Usted acepta no hacer un uso indebido del Sitio, incluido intentar
          obtener acceso no autorizado, enviar entradas de formularios
          automatizadas o fraudulentas, extraer contenido (scraping) o
          interferir con el funcionamiento del Sitio.
        </p>
      </Section>

      <Section
        id="intellectual-property"
        number={5}
        title="Propiedad intelectual"
      >
        <p>
          El contenido, la marca y el diseño del Sitio son propiedad de One
          Community o de sus licenciantes. Puede ver y compartir enlaces al
          Sitio; no puede republicar ni explotar comercialmente su contenido sin
          permiso por escrito.
        </p>
      </Section>

      <Section id="third-party-links" number={6} title="Enlaces de terceros">
        <p>
          El Sitio contiene enlaces a recursos de terceros, incluidas páginas de
          programas gubernamentales, sitios web de pagadores y recursos del VA.
          No somos responsables del contenido ni de las prácticas de terceros.
        </p>
      </Section>

      <Section
        id="disclaimers-and-limitation-of-liability"
        number={7}
        title="Descargos de responsabilidad y limitación de responsabilidad"
      >
        <p>
          El Sitio se proporciona &quot;tal cual&quot; sin garantías de ningún
          tipo, expresas o implícitas. Hasta el límite máximo permitido por la
          ley, One Community no es responsable por daños indirectos,
          incidentales o consecuentes derivados del uso del Sitio. Nada en estos
          Términos limita los derechos que pueda tener bajo la ley aplicable ni
          las obligaciones que debamos bajo un acuerdo de servicio por escrito o
          bajo las regulaciones de atención médica estatales o federales.
        </p>
      </Section>

      <Section id="governing-law" number={8} title="Ley aplicable">
        <p>
          Estos Términos se rigen por las leyes del Estado de Texas. Cualquier
          disputa derivada del uso del Sitio se resolverá en los tribunales
          estatales o federales ubicados en el condado de Dallas, Texas.
        </p>
      </Section>

      <Section id="changes-and-contact" number={9} title="Cambios y contacto">
        <p>
          Podemos actualizar estos Términos periódicamente; la fecha de
          &quot;Última actualización&quot; indicada arriba refleja la versión
          actual. ¿Preguntas? Llame al {siteConfig.contact.phone} o utilice
          nuestra{" "}
          <a href="/es/contact" className="text-[#0B4A8F] underline">
            página de contacto
          </a>
          .
        </p>
      </Section>

      <Section
        id="sms-terms-and-conditions"
        number={10}
        title="Términos y Condiciones de SMS"
      >
        <div className="space-y-6">
          <p>
            Estos Términos y Condiciones de SMS rigen los mensajes de texto
            enviados por JACOP Healthcare Services, Inc., doing business as{" "}
            {siteConfig.name} (&quot;One Community,&quot; &quot;nosotros,&quot;
            &quot;nos&quot; u &quot;nuestro&quot;). Al optar por recibir
            mensajes de texto de One Community, usted acepta estos Términos y
            Condiciones de SMS.
          </p>

          <Sub>1. Descripción del Programa</Sub>
          <p>One Community puede enviar mensajes de texto relacionados con:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Respuestas a consultas sobre nuestros servicios;</li>
            <li>Programación de consultas y citas;</li>
            <li>
              Coordinación de cuidados y actualizaciones relacionadas con el
              servicio;
            </li>
            <li>
              Comunicaciones de empleo, interés en el cuidado y solicitudes; y
            </li>
            <li>Otros mensajes informativos que solicite o autorice.</li>
          </ul>
          <p>
            No utilizamos este programa de SMS para enviar expedientes médicos
            detallados u otra información de salud sensible. Los mensajes de
            texto no sustituyen a los servicios de emergencia. Si experimenta
            una emergencia médica, llame al 911.
          </p>

          <Sub>2. Consentimiento para Recibir Mensajes de Texto</Sub>
          <p>
            Puede optar por recibir mensajes de texto de One Community
            proporcionando su número de teléfono móvil y aceptando
            afirmativamente recibir mensajes a través de un formulario en el
            sitio web, por teléfono, por escrito o mediante otro método de
            suscripción divulgado.
          </p>
          <p>
            Su consentimiento para recibir mensajes de texto no es una condición
            para comprar o recibir servicios, obtener atención, ni para
            postularse o aceptar un empleo. El consentimiento se aplica
            únicamente a One Community y a los fines descritos al momento de
            suscribirse.
          </p>

          <Sub>3. Frecuencia de Mensajes</Sub>
          <p>
            La frecuencia de los mensajes varía según su consulta, necesidades
            de programación, actividad de coordinación de cuidados o
            comunicaciones relacionadas con el empleo.
          </p>

          <Sub>4. Tarifas de Mensajes y Datos</Sub>
          <p>
            Pueden aplicarse tarifas de mensajes y datos. Las tarifas y cargos
            de su operador de telefonía móvil son su responsabilidad.
            Comuníquese con su operador para obtener información sobre su plan
            de mensajería o datos.
          </p>

          <Sub>5. Cómo Darse de Baja (Opt Out)</Sub>
          <p>
            Puede cancelar los mensajes de texto en cualquier momento
            respondiendo STOP a cualquier mensaje de One Community. Después de
            enviar STOP, es posible que reciba un mensaje final confirmando que
            se ha dado de baja. Tras dicha confirmación, no enviaremos mensajes
            de texto adicionales a menos que vuelva a suscribirse.
          </p>
          <p>
            También puede solicitar detener los mensajes llamando al{" "}
            {siteConfig.contact.phone} o enviando un correo electrónico a{" "}
            {siteConfig.contact.email}.
          </p>

          <Sub>6. Cómo Obtener Ayuda</Sub>
          <p>
            Responda HELP a cualquier mensaje de One Community para recibir
            asistencia. También puede comunicarse con nosotros en:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Teléfono: {siteConfig.contact.phone}</li>
            <li>Correo electrónico: {siteConfig.contact.email}</li>
            <li>Dirección: {siteConfig.address.full}</li>
          </ul>

          <Sub>7. Privacidad</Sub>
          <p>
            Su privacidad es importante para nosotros. Nuestra recopilación, uso
            y protección de la información asociada con nuestro programa de
            mensajería de texto se describen en nuestra{" "}
            <a href="/es/privacy-policy" className="text-[#0B4A8F] underline">
              Política de Privacidad
            </a>
            .
          </p>
          <p>
            Ninguna información móvil será compartida con terceros o afiliados
            para fines de mercadeo (marketing) o promocionales. Los datos de
            suscripción y el consentimiento del originador de mensajes de texto
            no se venderán, alquilarán ni compartirán con terceros o afiliados
            para sus fines de mercadeo o promocionales. Podemos divulgar
            información a proveedores de servicios que nos ayudan a operar y
            entregar mensajes de texto, pero solo según sea necesario para
            proporcionar dichos servicios, o cuando la ley exija su divulgación.
          </p>

          <Sub>8. Operadores Compatibles y Entrega</Sub>
          <p>
            La entrega de mensajes está sujeta a una transmisión efectiva por
            parte de su operador móvil y no está garantizada. Los operadores
            inalámbricos no son responsables por mensajes retrasados o no
            entregados. La disponibilidad puede variar según el operador,
            dispositivo, ubicación y cobertura de servicio.
          </p>

          <Sub>9. Sus Responsabilidades</Sub>
          <p>
            Usted declara que es el suscriptor o usuario habitual del número de
            teléfono móvil que proporciona y que está autorizado para dar su
            consentimiento para recibir mensajes en dicho número. Si su número
            de móvil cambia o es reasignado, usted acepta darse de baja o
            notificar a One Community con prontitud.
          </p>
          <p>
            Usted acepta no utilizar el programa de SMS para fines ilegales,
            abusivos o fraudulentos, o de manera que interfiera con su
            funcionamiento.
          </p>

          <Sub>10. Cambios a Estos Términos</Sub>
          <p>
            Podemos actualizar estos Términos y Condiciones de SMS a medida que
            cambien nuestras prácticas de mensajería, servicios u obligaciones
            legales. La fecha de &quot;Última actualización&quot; indicada
            arriba identifica la versión actual. Los cambios importantes se
            publicarán en esta página o se comunicarán según lo requiera la ley.
            Su participación continua en el programa de SMS después de una
            actualización constituye la aceptación de los términos revisados en
            la medida permitida por la ley.
          </p>

          <Sub>11. Contáctenos</Sub>
          <address className="not-italic space-y-1">
            <p className="font-semibold">
              JACOP Healthcare Services, Inc., doing business as{" "}
              {siteConfig.name}
            </p>
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.zip}
            </p>
            <p>Teléfono: {siteConfig.contact.phone}</p>
            <p>Correo electrónico: {siteConfig.contact.email}</p>
          </address>
        </div>
      </Section>
    </LegalDocument>
  );
}
