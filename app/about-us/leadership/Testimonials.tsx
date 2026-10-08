"use client";

import { useState } from "react";
import { useLanguage } from "@/src/context/LanguageContext";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

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

export default function TestimonialsComponent() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
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
    <section className="relative py-24 bg-[#FBF8F2] text-[#3A4657] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C89B3C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECDC] text-[#0A2140] font-semibold text-xs tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
            {isSpanish
              ? "Testimonios de Familias"
              : "Family Stories & Experiences"}
          </div>
          <h2 className="ohh-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A2140] tracking-tight">
            {isSpanish
              ? "Lo que dicen las familias a las que servimos"
              : "Trusted voices from the families we serve"}
          </h2>
        </div>

        {/* Featured Interactive Spotlight Card (Shadowless Flat Border Design) */}
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 sm:p-12 border border-[#EFE8D8] relative flex flex-col justify-between">
          <div className="absolute top-8 right-8 text-[#C89B3C]/20">
            <Quote size={80} strokeWidth={1} />
          </div>

          <div className="space-y-6 relative z-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#F3ECDC] text-[#0A2140] text-xs font-bold uppercase tracking-wider">
              {isSpanish
                ? activeTestimonial.categoryEs
                : activeTestimonial.category}
            </span>

            <p className="ohh-serif text-lg sm:text-xl lg:text-2xl text-[#0A2140] leading-relaxed italic">
              &ldquo;
              {isSpanish ? activeTestimonial.quoteEs : activeTestimonial.quote}
              &rdquo;
            </p>
          </div>

          <div className="pt-8 mt-8 border-t border-[#F0EBDD] flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
            <div>
              <h4 className="ohh-serif font-bold text-[#0A2140] text-lg">
                {activeTestimonial.author}
              </h4>
              <p className="text-xs text-[#8A7B5C] font-medium mt-0.5">
                {isSpanish
                  ? activeTestimonial.detailsEs
                  : activeTestimonial.details}
              </p>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label={
                  isSpanish ? "Testimonio anterior" : "Previous testimonial"
                }
                className="w-11 h-11 rounded-full bg-[#FBF8F2] hover:bg-[#0A2140] hover:text-[#E4B95A] text-[#0A2140] flex items-center justify-center transition-colors border border-[#EFE8D8]"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-xs font-bold text-[#8A7B5C]">
                {currentIndex + 1} / {seedTestimonials.length}
              </span>
              <button
                onClick={handleNext}
                aria-label={
                  isSpanish ? "Siguiente testimonio" : "Next testimonial"
                }
                className="w-11 h-11 rounded-full bg-[#FBF8F2] hover:bg-[#0A2140] hover:text-[#E4B95A] text-[#0A2140] flex items-center justify-center transition-colors border border-[#EFE8D8]"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
