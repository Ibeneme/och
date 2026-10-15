import type { Locale } from "@/src/i18n/config";

type Copy = { title: string; description: string };

export type PageSeo = {
  /** English path (no prefix). Spanish is derived as /es + path. */
  path: string;
  priority: number;
  en: Copy;
  es: Copy;
  /** Title already carries the brand: skip the " | One Community Home Health" suffix. */
  absoluteTitle?: boolean;
  /** Keep out of search results and the sitemap. */
  noindex?: boolean;
  /** Duplicate content: point the canonical at another page's path. */
  canonicalPath?: string;
  /** Page is a 404 in production until its legal text is complete. */
  gated?: "nondiscrimination" | "accessibility";
};

/**
 * Every page's SEO copy in both languages.
 * Add a page here and it automatically gets: <title>, description, canonical,
 * hreflang alternates, Open Graph/Twitter tags AND a sitemap entry (en + es).
 */
export const PAGES = {
  home: {
    path: "/",
    priority: 1,
    en: {
      title: "One Community Home Health | Skilled Nursing & In-Home Care",
      description:
        "One Community Home Health delivers skilled nursing, physical therapy, and daily assistance at home, so patients can recover and live well in familiar surroundings.",
    },
    es: {
      title: "One Community Home Health | Enfermería Especializada y Cuidado en el Hogar",
      description:
        "One Community Home Health ofrece enfermería especializada, fisioterapia y asistencia diaria en casa para que los pacientes se recuperen en un entorno familiar.",
    },
  },
  aboutUs: {
    path: "/about-us",
    priority: 0.7,
    en: {
      title: "About Us",
      description:
        "Learn about One Community Home Health, our core values, and our commitment to compassionate, patient-centered home health care.",
    },
    es: {
      title: "Sobre Nosotros",
      description:
        "Conozca One Community Home Health, nuestros valores fundamentales y nuestro compromiso con una atención médica a domicilio compasiva y centrada en el paciente.",
    },
  },
  leadership: {
    path: "/about-us/leadership",
    priority: 0.6,
    en: {
      title: "Leadership & Our Story",
      description:
        "Meet the leadership behind One Community Home Health, formerly JACOP Healthcare Services, Inc., serving patients since 2010.",
    },
    es: {
      title: "Liderazgo y Nuestra Historia",
      description:
        "Conozca al equipo directivo de One Community Home Health, antes JACOP Healthcare Services, Inc., al servicio de nuestros pacientes desde 2010.",
    },
  },
  whoWeServe: {
    path: "/who-we-serve",
    priority: 0.8,
    en: {
      title: "Who We Serve",
      description:
        "Home health care for seniors, adults with disabilities, children, veterans, and patients recovering from surgery, illness, or injury.",
    },
    es: {
      title: "A Quién Servimos",
      description:
        "Atención médica a domicilio para adultos mayores, adultos con discapacidades, niños, veteranos y pacientes que se recuperan de una cirugía, enfermedad o lesión.",
    },
  },
  insurance: {
    path: "/insurance-payment-options",
    priority: 0.8,
    en: {
      title: "Insurance & Payment Options",
      description:
        "See the insurance plans and payment options accepted by One Community Home Health, and how to verify your coverage for home care.",
    },
    es: {
      title: "Seguros y Opciones de Pago",
      description:
        "Consulte los planes de seguro y las opciones de pago que acepta One Community Home Health, y cómo verificar su cobertura de atención en el hogar.",
    },
  },
  referrals: {
    path: "/referrals",
    priority: 0.8,
    en: {
      title: "Referrals for Physicians & Care Partners",
      description:
        "Refer a patient to One Community Home Health. Hospitals, physicians, and care partners can send home health referrals quickly and easily.",
    },
    es: {
      title: "Referidos para Médicos y Socios de Atención",
      description:
        "Refiera un paciente a One Community Home Health. Hospitales, médicos y socios de atención pueden enviar referidos de atención domiciliaria de forma rápida y sencilla.",
    },
  },
  contact: {
    path: "/contact",
    priority: 0.9,
    en: {
      title: "Contact Us",
      description:
        "Contact One Community Home Health to request care, make a referral, or ask about services, coverage, and getting started.",
    },
    es: {
      title: "Contáctenos",
      description:
        "Comuníquese con One Community Home Health para solicitar atención, hacer un referido o preguntar sobre servicios, cobertura y cómo comenzar.",
    },
  },
  requestCare: {
    path: "/request-care",
    priority: 0.5,
    canonicalPath: "/contact", // same form as /contact
    en: {
      title: "Request Care",
      description:
        "Request home health care from One Community Home Health using our secure, HIPAA-compliant form, or call us to get started.",
    },
    es: {
      title: "Solicitar Atención",
      description:
        "Solicite atención médica a domicilio con One Community Home Health mediante nuestro formulario seguro que cumple con HIPAA, o llámenos para comenzar.",
    },
  },
  careers: {
    path: "/careers",
    priority: 0.6,
    en: {
      title: "Careers",
      description:
        "Join the One Community Home Health team. Explore nursing, therapy, and caregiver opportunities and help care for patients at home.",
    },
    es: {
      title: "Empleos",
      description:
        "Únase al equipo de One Community Home Health. Explore oportunidades en enfermería, terapia y cuidado, y ayude a atender a pacientes en casa.",
    },
  },
  cnaApplication: {
    path: "/careers/cna-home-health-aide-application",
    priority: 0.6,
    en: {
      title: "CNA & Home Health Aide Application",
      description:
        "Apply to join our CNA and home health aide talent network at One Community Home Health and help deliver compassionate care at home.",
    },
    es: {
      title: "Solicitud para CNA y Asistente de Salud en el Hogar",
      description:
        "Solicite unirse a nuestra red de talento de CNA y asistentes de salud en el hogar en One Community Home Health y ayude a brindar atención compasiva en casa.",
    },
  },
  employeeResources: {
    path: "/employee-resources",
    priority: 0.4,
    en: {
      title: "Employee Resources",
      description:
        "Forms, policies, and helpful resources for One Community Home Health team members.",
    },
    es: {
      title: "Recursos para Empleados",
      description:
        "Formularios, políticas y recursos útiles para los miembros del equipo de One Community Home Health.",
    },
  },
  evv: {
    path: "/employee-resources/evv",
    priority: 0.3,
    en: {
      title: "EVV Clock-In Help",
      description:
        "Step-by-step help for caregivers using Electronic Visit Verification (EVV) to clock in and out of visits with One Community Home Health.",
    },
    es: {
      title: "Ayuda para Registrar Entrada con EVV",
      description:
        "Ayuda paso a paso para cuidadores que usan la Verificación Electrónica de Visitas (EVV) para registrar su entrada y salida con One Community Home Health.",
    },
  },
  resources: {
    path: "/resources",
    priority: 0.6,
    en: {
      title: "Patient & Family Resources",
      description:
        "Helpful information and resources for patients and families receiving home health care from One Community Home Health.",
    },
    es: {
      title: "Recursos para Pacientes y Familias",
      description:
        "Información y recursos útiles para pacientes y familias que reciben atención médica a domicilio de One Community Home Health.",
    },
  },
  rides: {
    path: "/resources/rides-to-medical-appointments",
    priority: 0.5,
    en: {
      title: "How to Get a Ride to Medical Appointments in Texas",
      description:
        "Learn how Texas Medicaid Medical Transportation Program (MTP) can provide free rides to doctor visits, and how to book one.",
    },
    es: {
      title: "Cómo Obtener Transporte a Citas Médicas en Texas",
      description:
        "Descubra cómo el Programa de Transporte Médico (MTP) de Medicaid de Texas puede ofrecer viajes gratuitos a citas médicas y cómo reservar uno.",
    },
  },
  skilledNursing: {
    path: "/services/skilled-nursing",
    priority: 0.9,
    en: {
      title: "Skilled Nursing at Home",
      description:
        "Registered nurses provide skilled nursing at home, including assessments, medication oversight, and ongoing clinical care.",
    },
    es: {
      title: "Enfermería Especializada en Casa",
      description:
        "Enfermeras registradas brindan enfermería especializada en casa, incluidas evaluaciones, supervisión de medicamentos y atención clínica continua.",
    },
  },
  physicalTherapy: {
    path: "/services/physical-therapy",
    priority: 0.9,
    en: {
      title: "In-Home Physical Therapy",
      description:
        "Licensed physical therapists help you regain strength, mobility, and balance at home after surgery, injury, or illness.",
    },
    es: {
      title: "Fisioterapia en el Hogar",
      description:
        "Fisioterapeutas con licencia le ayudan a recuperar fuerza, movilidad y equilibrio en casa después de una cirugía, lesión o enfermedad.",
    },
  },
  occupationalTherapy: {
    path: "/services/occupational-therapy",
    priority: 0.9,
    en: {
      title: "In-Home Occupational Therapy",
      description:
        "Occupational therapy at home to help you rebuild independence in daily activities like bathing, dressing, and meal preparation.",
    },
    es: {
      title: "Terapia Ocupacional en el Hogar",
      description:
        "Terapia ocupacional en casa para ayudarle a recuperar la independencia en actividades diarias como bañarse, vestirse y preparar comidas.",
    },
  },
  speechTherapy: {
    path: "/services/speech-therapy",
    priority: 0.9,
    en: {
      title: "In-Home Speech Therapy",
      description:
        "Speech-language therapy at home for communication, swallowing, and cognitive challenges after stroke, illness, or injury.",
    },
    es: {
      title: "Terapia del Habla en el Hogar",
      description:
        "Terapia del habla y lenguaje en casa para dificultades de comunicación, deglución y cognición después de un derrame cerebral, enfermedad o lesión.",
    },
  },
  homeHealthAide: {
    path: "/services/home-health-aide",
    priority: 0.9,
    en: {
      title: "Home Health Aide Services",
      description:
        "Home health aides assist with personal care, bathing, and daily routines so patients stay safe and comfortable at home.",
    },
    es: {
      title: "Servicios de Asistente de Salud en el Hogar",
      description:
        "Los asistentes de salud en el hogar ayudan con el cuidado personal, el baño y las rutinas diarias para que los pacientes estén seguros y cómodos en casa.",
    },
  },
  medicalSocial: {
    path: "/services/medical-social-services",
    priority: 0.8,
    en: {
      title: "Medical Social Services",
      description:
        "Medical social workers connect patients and families with community resources, emotional support, and long-term care planning.",
    },
    es: {
      title: "Servicios Sociales Médicos",
      description:
        "Los trabajadores sociales médicos conectan a pacientes y familias con recursos comunitarios, apoyo emocional y planificación de cuidados a largo plazo.",
    },
  },
  woundCare: {
    path: "/services/wound-care",
    priority: 0.8,
    en: {
      title: "In-Home Wound Care",
      description:
        "Skilled wound care at home to support healing, prevent infection, and manage surgical, pressure, and chronic wounds.",
    },
    es: {
      title: "Cuidado de Heridas en el Hogar",
      description:
        "Cuidado especializado de heridas en casa para favorecer la cicatrización, prevenir infecciones y tratar heridas quirúrgicas, por presión y crónicas.",
    },
  },
  postSurgical: {
    path: "/services/post-surgical-care",
    priority: 0.8,
    en: {
      title: "Post-Surgical Care at Home",
      description:
        "Recover comfortably at home with post-surgical nursing, therapy, and follow-up support after your hospital stay.",
    },
    es: {
      title: "Cuidado Posquirúrgico en Casa",
      description:
        "Recupérese cómodamente en casa con enfermería, terapia y seguimiento posquirúrgico después de su estadía en el hospital.",
    },
  },
  chronicDisease: {
    path: "/services/chronic-disease-management",
    priority: 0.8,
    en: {
      title: "Chronic Disease Management",
      description:
        "In-home support for chronic conditions such as diabetes, heart disease, and COPD, with monitoring, education, and care coordination.",
    },
    es: {
      title: "Manejo de Enfermedades Crónicas",
      description:
        "Apoyo en casa para afecciones crónicas como diabetes, enfermedades del corazón y EPOC, con monitoreo, educación y coordinación de la atención.",
    },
  },
  medicationManagement: {
    path: "/services/medication-management",
    priority: 0.8,
    en: {
      title: "Medication Management at Home",
      description:
        "Nurse-led medication management to help patients take the right medications correctly and safely at home.",
    },
    es: {
      title: "Manejo de Medicamentos en Casa",
      description:
        "Manejo de medicamentos dirigido por enfermeras para que los pacientes tomen los medicamentos correctos de forma adecuada y segura en casa.",
    },
  },
  fallPrevention: {
    path: "/services/fall-prevention",
    priority: 0.8,
    en: {
      title: "Fall Prevention Program",
      description:
        "Home safety assessments, strength and balance work, and caregiver education to reduce fall risk for seniors.",
    },
    es: {
      title: "Programa de Prevención de Caídas",
      description:
        "Evaluaciones de seguridad del hogar, ejercicios de fuerza y equilibrio, y educación para cuidadores para reducir el riesgo de caídas en adultos mayores.",
    },
  },
  pediatric: {
    path: "/services/pediatric-services",
    priority: 0.8,
    en: {
      title: "Pediatric Home Health Services",
      description:
        "Compassionate in-home nursing and therapy for children, with family-centered support to help every child thrive.",
    },
    es: {
      title: "Servicios Pediátricos a Domicilio",
      description:
        "Enfermería y terapia compasivas en casa para niños, con apoyo centrado en la familia para ayudar a cada niño a prosperar.",
    },
  },
  adultsWithDisabilities: {
    path: "/services/adults-with-disabilities",
    priority: 0.8,
    en: {
      title: "Care for Adults with Disabilities",
      description:
        "Personalized in-home care and support that helps adults with disabilities live independently with dignity.",
    },
    es: {
      title: "Cuidado para Adultos con Discapacidades",
      description:
        "Atención y apoyo personalizados en casa que ayudan a los adultos con discapacidades a vivir de forma independiente y con dignidad.",
    },
  },
  veteranCare: {
    path: "/services/veteran-care",
    priority: 0.8,
    en: {
      title: "Veteran Home Care",
      description:
        "Respectful in-home nursing, therapy, and daily support for veterans, tailored to their service-related and everyday health needs.",
    },
    es: {
      title: "Cuidado en el Hogar para Veteranos",
      description:
        "Enfermería, terapia y apoyo diario respetuosos en casa para veteranos, adaptados a sus necesidades de salud relacionadas con el servicio y cotidianas.",
    },
  },
  aidAndAttendance: {
    path: "/services/veteran-care/aid-and-attendance",
    priority: 0.7,
    en: {
      title: "VA Aid & Attendance Benefit for Home Care",
      description:
        "Learn how the VA Aid and Attendance benefit can help veterans and surviving spouses pay for in-home care, and how to get started.",
    },
    es: {
      title: "Beneficio de Ayuda y Asistencia del VA para Cuidado en Casa",
      description:
        "Conozca cómo el beneficio de Ayuda y Asistencia del VA puede ayudar a veteranos y cónyuges sobrevivientes a pagar el cuidado en el hogar, y cómo comenzar.",
    },
  },
  companionCare: {
    path: "/services/companion-care",
    priority: 0.7,
    en: {
      title: "Companion Care at Home",
      description:
        "Friendly companionship, conversation, and everyday help that keeps seniors engaged, safe, and connected at home.",
    },
    es: {
      title: "Cuidado de Acompañamiento en Casa",
      description:
        "Compañía amable, conversación y ayuda cotidiana que mantienen a los adultos mayores activos, seguros y conectados en casa.",
    },
  },
  respiteCare: {
    path: "/services/respite-care",
    priority: 0.7,
    en: {
      title: "Respite Care for Families",
      description:
        "Respite care that gives family caregivers a break while a trained professional looks after their loved one at home.",
    },
    es: {
      title: "Cuidado de Relevo para Familias",
      description:
        "Cuidado de relevo que da un descanso a los cuidadores familiares mientras un profesional capacitado atiende a su ser querido en casa.",
    },
  },
  dailyLifestyle: {
    path: "/services/daily-lifestyle-support",
    priority: 0.7,
    en: {
      title: "Daily Lifestyle Support",
      description:
        "Help with daily routines, meals, errands, and household tasks so you can keep living independently at home.",
    },
    es: {
      title: "Apoyo para la Vida Diaria",
      description:
        "Ayuda con rutinas diarias, comidas, mandados y tareas del hogar para que pueda seguir viviendo de forma independiente en casa.",
    },
  },
  personalAttendant: {
    path: "/services/personal-attendant-services",
    priority: 0.7,
    en: {
      title: "Personal Attendant Services at Home",
      description:
        "Personal attendant services at home: help with bathing, dressing, meals, and daily activities so you or a loved one can stay independent.",
    },
    es: {
      title: "Servicios de Asistencia Personal en el Hogar",
      description:
        "Servicios de asistencia personal en casa: ayuda con el baño, el vestido, las comidas y las actividades diarias para mantener la independencia suya o de un ser querido.",
    },
  },
  getPaidToCare: {
    path: "/services/get-paid-to-care-for-a-loved-one",
    priority: 0.7,
    en: {
      title: "Get Paid to Care for a Loved One",
      description:
        "Family members, friends, and neighbors may be able to get paid to care for a loved one at home. We handle hiring paperwork, training, and payroll.",
    },
    es: {
      title: "Reciba un Pago por Cuidar a un Ser Querido",
      description:
        "Familiares, amigos y vecinos pueden recibir un pago por cuidar a un ser querido en casa. Nos encargamos del papeleo de contratación, la capacitación y la nómina.",
    },
  },
  serviceArea: {
    path: "/service-area",
    priority: 0.8,
    en: {
      title: "Service Area: 8 North Texas Counties",
      description:
        "One Community Home Health serves Tarrant, Dallas, Collin, Denton, Ellis, Johnson, Kaufman, and Rockwall counties. Find your city and confirm coverage.",
    },
    es: {
      title: "Área de Servicio: 8 Condados del Norte de Texas",
      description:
        "One Community Home Health atiende los condados de Tarrant, Dallas, Collin, Denton, Ellis, Johnson, Kaufman y Rockwall. Encuentre su ciudad y confirme la cobertura.",
    },
  },
  cityGrandPrairie: {
    path: "/home-health-care/grand-prairie",
    priority: 0.7,
    absoluteTitle: true,
    en: {
      title: "Home Health Care in Grand Prairie, TX | One Community Home Health",
      description:
        "Medicare-certified skilled nursing, physical therapy, and home health aide services in Grand Prairie, Texas. Call (972) 325-1598.",
    },
    es: {
      title: "Atención Médica en el Hogar en Grand Prairie, TX | One Community Home Health",
      description:
        "Enfermería especializada, fisioterapia y asistentes de salud en el hogar certificados por Medicare en Grand Prairie, Texas. Llame al (972) 325-1598.",
    },
  },
  cityArlington: {
    path: "/home-health-care/arlington",
    priority: 0.7,
    absoluteTitle: true,
    en: {
      title: "Home Health Care in Arlington, TX | One Community Home Health",
      description:
        "Medicare-certified skilled nursing, physical therapy, and home health aide services in Arlington, Texas. Call (972) 325-1598.",
    },
    es: {
      title: "Atención Médica en el Hogar en Arlington, TX | One Community Home Health",
      description:
        "Enfermería especializada, fisioterapia y asistentes de salud en el hogar certificados por Medicare en Arlington, Texas. Llame al (972) 325-1598.",
    },
  },
  cityFortWorth: {
    path: "/home-health-care/fort-worth",
    priority: 0.7,
    absoluteTitle: true,
    en: {
      title: "Home Health Care in Fort Worth, TX | One Community Home Health",
      description:
        "Medicare-certified skilled nursing, physical therapy, and home health aide services in Fort Worth, Texas. Call (972) 325-1598.",
    },
    es: {
      title: "Atención Médica en el Hogar en Fort Worth, TX | One Community Home Health",
      description:
        "Enfermería especializada, fisioterapia y asistentes de salud en el hogar certificados por Medicare en Fort Worth, Texas. Llame al (972) 325-1598.",
    },
  },
  cityIrving: {
    path: "/home-health-care/irving",
    priority: 0.7,
    absoluteTitle: true,
    en: {
      title: "Home Health Care in Irving, TX | One Community Home Health",
      description:
        "Medicare-certified skilled nursing, physical therapy, and home health aide services in Irving, Texas. Call (972) 325-1598.",
    },
    es: {
      title: "Atención Médica en el Hogar en Irving, TX | One Community Home Health",
      description:
        "Enfermería especializada, fisioterapia y asistentes de salud en el hogar certificados por Medicare en Irving, Texas. Llame al (972) 325-1598.",
    },
  },
  cityDallas: {
    path: "/home-health-care/dallas",
    priority: 0.7,
    absoluteTitle: true,
    en: {
      title: "Home Health Care in Dallas, TX | One Community Home Health",
      description:
        "Medicare-certified skilled nursing, physical therapy, and home health aide services in Dallas, Texas. Call (972) 325-1598.",
    },
    es: {
      title: "Atención Médica en el Hogar en Dallas, TX | One Community Home Health",
      description:
        "Enfermería especializada, fisioterapia y asistentes de salud en el hogar certificados por Medicare en Dallas, Texas. Llame al (972) 325-1598.",
    },
  },
  cityMansfield: {
    path: "/home-health-care/mansfield",
    priority: 0.7,
    absoluteTitle: true,
    en: {
      title: "Home Health Care in Mansfield, TX | One Community Home Health",
      description:
        "Medicare-certified skilled nursing, physical therapy, and home health aide services in Mansfield, Texas. Call (972) 325-1598.",
    },
    es: {
      title: "Atención Médica en el Hogar en Mansfield, TX | One Community Home Health",
      description:
        "Enfermería especializada, fisioterapia y asistentes de salud en el hogar certificados por Medicare en Mansfield, Texas. Llame al (972) 325-1598.",
    },
  },
  cityDesoto: {
    path: "/home-health-care/desoto",
    priority: 0.7,
    absoluteTitle: true,
    en: {
      title: "Home Health Care in DeSoto, TX | One Community Home Health",
      description:
        "Medicare-certified skilled nursing, physical therapy, and home health aide services in DeSoto, Texas. Call (972) 325-1598.",
    },
    es: {
      title: "Atención Médica en el Hogar en DeSoto, TX | One Community Home Health",
      description:
        "Enfermería especializada, fisioterapia y asistentes de salud en el hogar certificados por Medicare en DeSoto, Texas. Llame al (972) 325-1598.",
    },
  },
  cityDuncanville: {
    path: "/home-health-care/duncanville",
    priority: 0.7,
    absoluteTitle: true,
    en: {
      title: "Home Health Care in Duncanville, TX | One Community Home Health",
      description:
        "Medicare-certified skilled nursing, physical therapy, and home health aide services in Duncanville, Texas. Call (972) 325-1598.",
    },
    es: {
      title: "Atención Médica en el Hogar en Duncanville, TX | One Community Home Health",
      description:
        "Enfermería especializada, fisioterapia y asistentes de salud en el hogar certificados por Medicare en Duncanville, Texas. Llame al (972) 325-1598.",
    },
  },
  cityCedarHill: {
    path: "/home-health-care/cedar-hill",
    priority: 0.7,
    absoluteTitle: true,
    en: {
      title: "Home Health Care in Cedar Hill, TX | One Community Home Health",
      description:
        "Medicare-certified skilled nursing, physical therapy, and home health aide services in Cedar Hill, Texas. Call (972) 325-1598.",
    },
    es: {
      title: "Atención Médica en el Hogar en Cedar Hill, TX | One Community Home Health",
      description:
        "Enfermería especializada, fisioterapia y asistentes de salud en el hogar certificados por Medicare en Cedar Hill, Texas. Llame al (972) 325-1598.",
    },
  },
  cityGarland: {
    path: "/home-health-care/garland",
    priority: 0.7,
    absoluteTitle: true,
    en: {
      title: "Home Health Care in Garland, TX | One Community Home Health",
      description:
        "Medicare-certified skilled nursing, physical therapy, and home health aide services in Garland, Texas. Call (972) 325-1598.",
    },
    es: {
      title: "Atención Médica en el Hogar en Garland, TX | One Community Home Health",
      description:
        "Enfermería especializada, fisioterapia y asistentes de salud en el hogar certificados por Medicare en Garland, Texas. Llame al (972) 325-1598.",
    },
  },
  cityMesquite: {
    path: "/home-health-care/mesquite",
    priority: 0.7,
    absoluteTitle: true,
    en: {
      title: "Home Health Care in Mesquite, TX | One Community Home Health",
      description:
        "Medicare-certified skilled nursing, physical therapy, and home health aide services in Mesquite, Texas. Call (972) 325-1598.",
    },
    es: {
      title: "Atención Médica en el Hogar en Mesquite, TX | One Community Home Health",
      description:
        "Enfermería especializada, fisioterapia y asistentes de salud en el hogar certificados por Medicare en Mesquite, Texas. Llame al (972) 325-1598.",
    },
  },
  cityPlano: {
    path: "/home-health-care/plano",
    priority: 0.7,
    absoluteTitle: true,
    en: {
      title: "Home Health Care in Plano, TX | One Community Home Health",
      description:
        "Medicare-certified skilled nursing, physical therapy, and home health aide services in Plano, Texas. Call (972) 325-1598.",
    },
    es: {
      title: "Atención Médica en el Hogar en Plano, TX | One Community Home Health",
      description:
        "Enfermería especializada, fisioterapia y asistentes de salud en el hogar certificados por Medicare en Plano, Texas. Llame al (972) 325-1598.",
    },
  },
  privacy: {
    path: "/privacy-policy",
    priority: 0.3,
    en: {
      title: "Privacy Policy",
      description:
        "Privacy Policy for One Community Home Health explaining information collection and data protection practices.",
    },
    es: {
      title: "Política de Privacidad",
      description:
        "Política de privacidad de One Community Home Health que explica la recopilación de información y las prácticas de protección de datos.",
    },
  },
  terms: {
    path: "/terms-of-service",
    priority: 0.3,
    en: {
      title: "Terms of Service",
      description:
        "Terms governing the use of the One Community Home Health website, including our SMS Terms and Conditions.",
    },
    es: {
      title: "Términos de Servicio",
      description:
        "Términos que rigen el uso del sitio web de One Community Home Health, incluidos nuestros Términos y Condiciones de SMS.",
    },
  },
  nondiscrimination: {
    path: "/nondiscrimination",
    priority: 0.3,
    gated: "nondiscrimination",
    en: {
      title: "Nondiscrimination and Language Assistance",
      description:
        "One Community Home Health does not discriminate, and provides free language assistance and auxiliary aids to patients who need them.",
    },
    es: {
      title: "No Discriminación y Asistencia con el Idioma",
      description:
        "One Community Home Health no discrimina y ofrece asistencia gratuita con el idioma y ayudas auxiliares a los pacientes que las necesitan.",
    },
  },
  accessibility: {
    path: "/accessibility",
    priority: 0.3,
    gated: "accessibility",
    en: {
      title: "Accessibility",
      description:
        "One Community Home Health's commitment to an accessible website, the standard we are working toward, and how to reach us if you need help.",
    },
    es: {
      title: "Accesibilidad",
      description:
        "El compromiso de One Community Home Health con un sitio web accesible, el estándar que buscamos cumplir y cómo comunicarse con nosotros si necesita ayuda.",
    },
  },
  noticeOfPrivacyPractices: {
    path: "/notice-of-privacy-practices",
    priority: 0.1,
    noindex: true,
    en: {
      title: "Notice of Privacy Practices (Print Version)",
      description:
        "Printable version of the Notice of Privacy Practices for One Community Home Health.",
    },
    es: {
      title: "Aviso de Prácticas de Privacidad (Versión para Imprimir)",
      description:
        "Versión imprimible del Aviso de Prácticas de Privacidad de One Community Home Health.",
    },
  },
} as const satisfies Record<string, PageSeo>;

export type PageKey = keyof typeof PAGES;

export function getCopy(key: PageKey, locale: Locale): Copy {
  return PAGES[key][locale];
}
