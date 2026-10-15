import type { CitySlug } from "@/src/constants/serviceArea";

/**
 * City landing-page copy (A4). Every city is written by hand: do NOT template
 * these with a swapped city name (duplicate content hurts rankings).
 *
 * REVIEW BEFORE LAUNCH (client to confirm):
 *  - `driveMin` are approximate typical drive times from the Grand Prairie
 *    office (3560 Quannah Dr), not measured.
 *  - `hospitals` are large hospitals located in or next to the city. They are
 *    listed as local context ("hospitals in and around X"), NOT as a claim that
 *    we hold referral/discharge relationships with them. Add or remove names to
 *    match the facilities we actually take discharges from.
 */
export type CityCopy = { p1: string; p2: string; p3: string };

export type CityContent = {
  driveMin: [number, number];
  /** City names (must exist in the service-area county lists). */
  neighbors: string[];
  hospitals: string[];
  en: CityCopy;
  es: CityCopy;
};

export const CITY_CONTENT: Record<CitySlug, CityContent> = {
  "grand-prairie": {
    driveMin: [5, 20],
    neighbors: ["Arlington", "Irving", "Mansfield", "Duncanville", "Cedar Hill", "Dallas"],
    hospitals: [
      "Texas Health Arlington Memorial Hospital",
      "Medical City Arlington",
      "Baylor Scott & White Medical Center – Irving",
      "Methodist Charlton Medical Center",
    ],
    en: {
      p1: "Grand Prairie is home. Our office sits at 3560 Quannah Drive, which puts most of the city within a short drive, from the Lake Ridge area in the south to the neighborhoods along Carrier Parkway and SH-360. Short travel times help visits start on schedule, and a care team based in town knows these streets.",
      p2: "Because Grand Prairie spans Dallas, Tarrant, and Ellis counties, patients here are often discharged from hospitals on either side of the city line. Large hospitals in the surrounding area include Texas Health Arlington Memorial, Medical City Arlington, Baylor Scott & White in Irving, and Methodist Charlton. Whichever hospital sends you home, we coordinate with your discharge planner and physician so your first visit happens promptly.",
      p3: "Home health care in Grand Prairie often means a senior recovering from joint replacement, an adult managing diabetes or heart failure, or a family arranging aide support so a parent can stay in their own house. Neighboring Arlington, Duncanville, Cedar Hill, and Mansfield are in our service area too, which helps when a relative lives nearby.",
    },
    es: {
      p1: "Grand Prairie es nuestro hogar. Nuestra oficina está en 3560 Quannah Drive, lo que deja a la mayor parte de la ciudad a poca distancia, desde la zona de Lake Ridge al sur hasta los vecindarios cercanos a Carrier Parkway y la SH-360. Los trayectos cortos ayudan a que las visitas comiencen a tiempo, y un equipo con base en la ciudad conoce estas calles.",
      p2: "Como Grand Prairie abarca los condados de Dallas, Tarrant y Ellis, los pacientes suelen recibir el alta de hospitales a ambos lados del límite de la ciudad. Entre los hospitales grandes de los alrededores están Texas Health Arlington Memorial, Medical City Arlington, Baylor Scott & White en Irving y Methodist Charlton. Sin importar qué hospital lo envíe a casa, coordinamos con su planificador de altas y su médico para que la primera visita ocurra pronto.",
      p3: "La atención médica en el hogar en Grand Prairie suele significar un adulto mayor que se recupera de un reemplazo de articulación, un adulto que controla diabetes o insuficiencia cardíaca, o una familia que organiza apoyo de asistentes para que un padre pueda seguir en su propia casa. Las vecinas Arlington, Duncanville, Cedar Hill y Mansfield también están en nuestra área de servicio, lo cual ayuda cuando un familiar vive cerca.",
    },
  },

  arlington: {
    driveMin: [10, 25],
    neighbors: ["Grand Prairie", "Mansfield", "Fort Worth", "Irving", "Dallas"],
    hospitals: ["Texas Health Arlington Memorial Hospital", "Medical City Arlington"],
    en: {
      p1: "Arlington is one of the closest cities to our Grand Prairie office, separated by little more than a stretch of SH-360 and I-30. We visit patients in older single-family neighborhoods near downtown and the University of Texas at Arlington, in newer subdivisions in the south, and in the many apartment communities and senior living residences across the city.",
      p2: "Arlington's two major hospitals, Texas Health Arlington Memorial and Medical City Arlington, send many patients home each week who need nursing, therapy, or wound care. When a discharge planner calls, we work to confirm intake quickly and schedule a start-of-care visit within the window your physician orders, rather than leaving a gap that risks readmission.",
      p3: "Arlington is a big, spread-out city and traffic around the entertainment district on event days is no secret. We plan visit routes with that in mind. Families in Mansfield, Grand Prairie, and the west side toward Fort Worth are in our service area too.",
    },
    es: {
      p1: "Arlington es una de las ciudades más cercanas a nuestra oficina de Grand Prairie, separadas apenas por un tramo de la SH-360 y la I-30. Visitamos a pacientes en vecindarios de casas unifamiliares cerca del centro y de la Universidad de Texas en Arlington, en urbanizaciones nuevas al sur y en las muchas comunidades de apartamentos y residencias para adultos mayores de la ciudad.",
      p2: "Los dos hospitales principales de Arlington, Texas Health Arlington Memorial y Medical City Arlington, envían a casa cada semana a muchos pacientes que necesitan enfermería, terapia o cuidado de heridas. Cuando un planificador de altas nos llama, trabajamos para confirmar la admisión con rapidez y programar la visita inicial dentro del plazo que indica su médico, sin dejar un vacío que aumente el riesgo de reingreso.",
      p3: "Arlington es una ciudad grande y extendida, y el tráfico cerca del distrito de entretenimiento en días de eventos es conocido. Planificamos las rutas de visita teniendo eso en cuenta. Las familias de Mansfield, Grand Prairie y del lado oeste hacia Fort Worth también están en nuestra área de servicio.",
    },
  },

  "fort-worth": {
    driveMin: [25, 45],
    neighbors: ["Arlington", "Benbrook", "Haltom City", "White Settlement", "Forest Hill", "Crowley"],
    hospitals: [
      "Texas Health Harris Methodist Hospital Fort Worth",
      "JPS Health Network",
      "Baylor Scott & White All Saints Medical Center",
      "Medical City Fort Worth",
      "Cook Children's Medical Center",
    ],
    en: {
      p1: "Fort Worth is the largest city in Tarrant County and spreads from the Cultural District and the Near Southside to the neighborhoods around TCU and Alliance in the far north. We serve patients across this territory, and because the drive from our Grand Prairie office is longer than in neighboring cities, we schedule Fort Worth visits in clusters so care stays reliable.",
      p2: "The city has one of the densest hospital clusters in North Texas, including Texas Health Harris Methodist, JPS Health Network, Baylor Scott & White All Saints, Medical City Fort Worth, and Cook Children's for pediatric patients. With so many discharge points, the key is a quick handoff: we work with the hospital case manager so a patient going home from the Medical District has nursing or therapy lined up before leaving.",
      p3: "In Fort Worth, home health care matters to veterans, to seniors who want to stay in a long-time home on the west or east side, and to parents of medically complex children. Nearby Benbrook, White Settlement, Haltom City, Forest Hill, and Crowley are part of the same coverage area, so a call from a smaller community on the edge of the city is just as welcome.",
    },
    es: {
      p1: "Fort Worth es la ciudad más grande del condado de Tarrant y se extiende desde el Distrito Cultural y el Near Southside hasta los vecindarios cercanos a TCU y Alliance en el extremo norte. Atendemos a pacientes en todo este territorio y, como el trayecto desde nuestra oficina de Grand Prairie es más largo que a las ciudades vecinas, agrupamos las visitas en Fort Worth para que la atención sea confiable.",
      p2: "La ciudad tiene una de las concentraciones de hospitales más densas del norte de Texas, entre ellos Texas Health Harris Methodist, JPS Health Network, Baylor Scott & White All Saints, Medical City Fort Worth y Cook Children's para pacientes pediátricos. Con tantos puntos de alta, lo clave es un traspaso rápido: trabajamos con el administrador de casos del hospital para que el paciente que regresa a casa desde el Distrito Médico tenga enfermería o terapia organizadas antes de salir.",
      p3: "En Fort Worth, la atención médica en el hogar es importante para veteranos, para adultos mayores que quieren seguir en una casa de toda la vida en el lado oeste o este, y para padres de niños con necesidades médicas complejas. Benbrook, White Settlement, Haltom City, Forest Hill y Crowley forman parte de la misma zona de cobertura, por lo que una llamada desde una comunidad más pequeña en las afueras de la ciudad es igual de bienvenida.",
    },
  },

  irving: {
    driveMin: [20, 30],
    neighbors: ["Grand Prairie", "Coppell", "Carrollton", "Farmers Branch", "Dallas"],
    hospitals: ["Baylor Scott & White Medical Center – Irving", "Medical City Las Colinas"],
    en: {
      p1: "Irving sits just north of Grand Prairie, an easy drive up from our office. We visit patients in the established neighborhoods of old Irving, the Las Colinas and Valley Ranch areas, and the apartment and senior communities close to the DFW Airport corridor, where a quiet, in-home recovery is a welcome contrast to a busy hospital.",
      p2: "Irving has two hospitals families recognize: Baylor Scott & White Medical Center – Irving on MacArthur Boulevard, and Medical City Las Colinas. Patients leaving either one often need skilled nursing, physical therapy, or medication management for the first few weeks at home, and we coordinate those orders directly with the discharging team and the patient's physician.",
      p3: "Irving is one of the most linguistically diverse cities in the region, and many patients and families here are more comfortable in Spanish. We offer free language assistance, and our website is fully available in Spanish. Neighboring Coppell, Carrollton, and Farmers Branch are also within our service area.",
    },
    es: {
      p1: "Irving está justo al norte de Grand Prairie, a poca distancia de nuestra oficina. Visitamos a pacientes en los vecindarios establecidos del viejo Irving, en las zonas de Las Colinas y Valley Ranch, y en las comunidades de apartamentos y de adultos mayores cercanas al corredor del aeropuerto DFW, donde una recuperación tranquila en casa es un buen contraste con un hospital ocupado.",
      p2: "Irving tiene dos hospitales que las familias reconocen: Baylor Scott & White Medical Center – Irving, en MacArthur Boulevard, y Medical City Las Colinas. Los pacientes que salen de cualquiera de ellos suelen necesitar enfermería especializada, fisioterapia o manejo de medicamentos durante las primeras semanas en casa, y coordinamos esas órdenes directamente con el equipo que da el alta y con el médico del paciente.",
      p3: "Irving es una de las ciudades con mayor diversidad lingüística de la región, y muchos pacientes y familias aquí se sienten más cómodos en español. Ofrecemos asistencia gratuita con el idioma y nuestro sitio web está disponible por completo en español. Las vecinas Coppell, Carrollton y Farmers Branch también están dentro de nuestra área de servicio.",
    },
  },

  dallas: {
    driveMin: [25, 40],
    neighbors: ["Irving", "Garland", "Mesquite", "Duncanville", "Cedar Hill", "Richardson"],
    hospitals: [
      "Parkland Memorial Hospital",
      "Baylor University Medical Center",
      "Texas Health Presbyterian Hospital Dallas",
      "Methodist Dallas Medical Center",
      "Medical City Dallas",
      "Methodist Charlton Medical Center",
    ],
    en: {
      p1: "Dallas is large and varied, from Oak Cliff and Pleasant Grove in the south to East Dallas, Lake Highlands, and the neighborhoods north of downtown. We provide skilled nursing, therapy, and aide services across the city, with a focus on arranging visits geographically so patients in far corners are not left waiting for an opening.",
      p2: "Dallas has some of the busiest hospitals in Texas. The Southwestern Medical District alone includes Parkland, and elsewhere in the city are Baylor University Medical Center, Texas Health Presbyterian, Methodist Dallas, Medical City Dallas, and Methodist Charlton in Oak Cliff. Patients discharged from large academic and trauma centers often have complex needs such as wounds, new medications, or equipment, and we work to match them with the right clinician before they leave.",
      p3: "Referrals in Dallas come from physicians, hospital case managers, and families, and we work with Medicare and Texas Medicaid managed-care plans such as STAR+PLUS. If you are in Dallas but not sure we reach your neighborhood, the number below will give you an answer in one call.",
    },
    es: {
      p1: "Dallas es grande y variada, desde Oak Cliff y Pleasant Grove en el sur hasta East Dallas, Lake Highlands y los vecindarios al norte del centro. Brindamos enfermería especializada, terapia y servicios de asistentes en toda la ciudad, organizando las visitas por zonas para que los pacientes en los extremos no tengan que esperar un espacio.",
      p2: "Dallas tiene algunos de los hospitales más concurridos de Texas. Solo el Distrito Médico Southwestern incluye Parkland, y en otras partes de la ciudad están Baylor University Medical Center, Texas Health Presbyterian, Methodist Dallas, Medical City Dallas y Methodist Charlton en Oak Cliff. Los pacientes que salen de grandes centros académicos y de trauma suelen tener necesidades complejas, como heridas, medicamentos nuevos o equipo, y trabajamos para asignarles al clínico correcto antes de que salgan.",
      p3: "En Dallas, los referidos vienen de médicos, administradores de casos de hospitales y familias, y trabajamos con Medicare y con planes administrados de Medicaid de Texas como STAR+PLUS. Si usted está en Dallas pero no sabe si llegamos a su vecindario, el número de abajo le dará una respuesta en una sola llamada.",
    },
  },

  mansfield: {
    driveMin: [20, 30],
    neighbors: ["Arlington", "Grand Prairie", "Burleson", "Midlothian"],
    hospitals: ["Methodist Mansfield Medical Center", "Texas Health Arlington Memorial Hospital"],
    en: {
      p1: "Mansfield is among the fastest-growing cities in the area, and it is home both to families who have lived here for decades and want to age in the same house, and to newer households caring for a parent who has moved in. It stretches across Tarrant, Johnson, and Ellis counties, and we serve the whole city from our Grand Prairie base.",
      p2: "Methodist Mansfield Medical Center is the hospital closest to many residents, and Arlington's Texas Health Arlington Memorial is a short drive north. For patients leaving either, we arrange skilled nursing, therapy, or post-surgical follow-up at home, which is particularly helpful for older residents who would otherwise face a car ride to outpatient therapy.",
      p3: "Nearby Burleson and Midlothian are part of our service area as well, and many families here have relatives spread across those communities. Calling once to confirm coverage for each address is easy, and we are glad to explain how Medicare, Medicaid, and private plans apply to home health care.",
    },
    es: {
      p1: "Mansfield es una de las ciudades de más rápido crecimiento de la zona, y es el hogar tanto de familias que viven aquí desde hace décadas y quieren envejecer en la misma casa como de hogares más nuevos que cuidan a un padre que se ha mudado con ellos. Se extiende por los condados de Tarrant, Johnson y Ellis, y atendemos toda la ciudad desde nuestra base en Grand Prairie.",
      p2: "Methodist Mansfield Medical Center es el hospital más cercano para muchos residentes, y Texas Health Arlington Memorial queda a poca distancia hacia el norte. Para los pacientes que salen de cualquiera de ellos, organizamos enfermería especializada, terapia o seguimiento posquirúrgico en casa, lo cual es especialmente útil para residentes mayores que de otro modo tendrían que viajar en auto a terapia ambulatoria.",
      p3: "Las cercanas Burleson y Midlothian también forman parte de nuestra área de servicio, y muchas familias aquí tienen parientes repartidos entre esas comunidades. Llamar una vez para confirmar la cobertura de cada dirección es fácil, y con gusto le explicamos cómo se aplican Medicare, Medicaid y los planes privados a la atención médica en el hogar.",
    },
  },

  desoto: {
    driveMin: [20, 30],
    neighbors: ["Duncanville", "Cedar Hill", "Lancaster", "Glenn Heights", "Dallas"],
    hospitals: ["Methodist Charlton Medical Center", "Parkland Memorial Hospital"],
    en: {
      p1: "DeSoto is a close-knit southern Dallas County city along I-35E and US-67, and many of its residents have lived in the same homes for decades. For them, staying put after a hospital stay, a fall, or a diagnosis is the whole point of home health care, and that is the kind of care our DeSoto team provides.",
      p2: "Residents of DeSoto commonly receive hospital care in southern Dallas County and the city of Dallas; Methodist Charlton in Oak Cliff and Parkland are two large options. We take referrals from wherever you were treated and set up nursing, therapy, or aide visits at your DeSoto address.",
      p3: "Many DeSoto residents are also family caregivers looking after a parent in Lancaster, Glenn Heights, or Duncanville. Those towns are in our service area too, so one agency can often cover every address in the family. Ask us about respite care if you are the one who needs a break.",
    },
    es: {
      p1: "DeSoto es una ciudad unida en el sur del condado de Dallas, a lo largo de la I-35E y la US-67, y muchos de sus residentes viven en las mismas casas desde hace décadas. Para ellos, quedarse en casa después de una hospitalización, una caída o un diagnóstico es precisamente el propósito de la atención médica en el hogar, y ese es el tipo de cuidado que brinda nuestro equipo en DeSoto.",
      p2: "Los residentes de DeSoto suelen recibir atención hospitalaria en el sur del condado de Dallas y en la ciudad de Dallas; Methodist Charlton en Oak Cliff y Parkland son dos opciones grandes. Aceptamos referidos de donde usted haya sido atendido y organizamos visitas de enfermería, terapia o asistentes en su dirección de DeSoto.",
      p3: "Muchos residentes de DeSoto también son cuidadores familiares que atienden a un padre en Lancaster, Glenn Heights o Duncanville. Esas ciudades también están en nuestra área de servicio, así que una sola agencia puede cubrir todas las direcciones de la familia. Pregúntenos por el cuidado de relevo si usted es quien necesita un descanso.",
    },
  },

  duncanville: {
    driveMin: [15, 25],
    neighbors: ["Cedar Hill", "DeSoto", "Grand Prairie", "Dallas", "Lancaster"],
    hospitals: ["Methodist Charlton Medical Center", "Baylor Scott & White Medical Center – Irving"],
    en: {
      p1: "Duncanville is small and compact, which works in our favor: it sits between Grand Prairie, Dallas, DeSoto, and Cedar Hill, so a nurse or therapist can often see several patients nearby in a single afternoon without long drives in between. Visits here are mostly to single-family neighborhoods and to apartment and senior living communities.",
      p2: "Methodist Charlton Medical Center is only minutes from Duncanville, and many residents use it for emergencies and surgery. After discharge, we can start skilled nursing, physical therapy, and occupational therapy at home, and we send progress notes back to the physician who ordered them. If your doctor is elsewhere in the metroplex, we work with that office as well.",
      p3: "Duncanville families often care for relatives who live a few exits away, so it helps that Cedar Hill, DeSoto, and Grand Prairie are all in the same service area. We can start with one family member and add services for another if needs change. Call us and we will confirm your address and the next steps.",
    },
    es: {
      p1: "Duncanville es pequeña y compacta, lo cual nos favorece: queda entre Grand Prairie, Dallas, DeSoto y Cedar Hill, así que una enfermera o terapeuta suele poder ver a varios pacientes cercanos en una sola tarde sin largos trayectos intermedios. Las visitas aquí son sobre todo a vecindarios de casas unifamiliares y a comunidades de apartamentos y de vida para adultos mayores.",
      p2: "Methodist Charlton Medical Center queda a solo minutos de Duncanville y muchos residentes lo usan para emergencias y cirugías. Después del alta, podemos iniciar enfermería especializada, fisioterapia y terapia ocupacional en casa, y enviamos notas de progreso al médico que las ordenó. Si su médico está en otra parte del área metropolitana, también trabajamos con ese consultorio.",
      p3: "Las familias de Duncanville suelen cuidar a parientes que viven a unas salidas de distancia, por lo que ayuda que Cedar Hill, DeSoto y Grand Prairie estén en la misma área de servicio. Podemos empezar con un familiar y agregar servicios para otro si cambian las necesidades. Llámenos y confirmaremos su dirección y los siguientes pasos.",
    },
  },

  "cedar-hill": {
    driveMin: [20, 30],
    neighbors: ["Duncanville", "DeSoto", "Grand Prairie", "Midlothian", "Glenn Heights"],
    hospitals: ["Methodist Charlton Medical Center", "Texas Health Arlington Memorial Hospital"],
    en: {
      p1: "Cedar Hill is known for its hills, Joe Pool Lake, and the trails of Cedar Hill State Park, and it is a place where many residents want to keep living independently. Our Cedar Hill care focuses on exactly that: rehabilitation after a surgery or fall, help with medications, and personal care that lets people stay in houses they have loved for years.",
      p2: "Because the city sits at the southern edge of Dallas County, hospital stays often happen in Dallas, Arlington, or elsewhere in the metroplex. Methodist Charlton and Texas Health Arlington Memorial are two nearby options. Wherever you were treated, send your referral or have your family call, and we will coordinate with the discharge team and your physician.",
      p3: "Cedar Hill's neighbors Duncanville, DeSoto, and Midlothian are all in our service area, as is Grand Prairie to the north. That helps families whose parents, adult children, and friends live across the Best Southwest area. If you are caring for someone and tired, ask about respite and companion care too.",
    },
    es: {
      p1: "Cedar Hill es conocida por sus colinas, el lago Joe Pool y los senderos del Parque Estatal Cedar Hill, y es un lugar donde muchos residentes quieren seguir viviendo con independencia. Nuestra atención en Cedar Hill se centra justamente en eso: rehabilitación después de una cirugía o una caída, ayuda con los medicamentos y cuidado personal que permite a las personas seguir en casas que han querido durante años.",
      p2: "Como la ciudad está en el borde sur del condado de Dallas, las hospitalizaciones suelen ocurrir en Dallas, Arlington u otras partes del área metropolitana. Methodist Charlton y Texas Health Arlington Memorial son dos opciones cercanas. Donde sea que lo hayan atendido, envíe su referido o pida a su familia que llame, y coordinaremos con el equipo de alta y su médico.",
      p3: "Las vecinas de Cedar Hill, Duncanville, DeSoto y Midlothian, están todas en nuestra área de servicio, al igual que Grand Prairie al norte. Eso ayuda a las familias cuyos padres, hijos adultos y amigos viven en toda la zona Best Southwest. Si cuida a alguien y está cansado, pregunte también por el cuidado de relevo y de compañía.",
    },
  },

  garland: {
    driveMin: [30, 45],
    neighbors: ["Richardson", "Rowlett", "Mesquite", "Sachse", "Dallas", "Wylie"],
    hospitals: ["Baylor Scott & White Medical Center – Garland", "Dallas Regional Medical Center"],
    en: {
      p1: "Garland is a large, established city in northeast Dallas County, with older neighborhoods around downtown and the square, newer homes toward Firewheel, and long stretches along Lake Ray Hubbard. We schedule Garland visits in blocks with nearby Rowlett and Sachse patients so our team spends more time with patients and less on the road.",
      p2: "Baylor Scott & White Medical Center – Garland is the hospital most residents think of first, and Dallas Regional Medical Center in neighboring Mesquite is also close. When patients go home from a stay there, we coordinate nursing, therapy, and aide visits with the hospital's discharge team so that wound care, new medications, or mobility exercises begin on schedule.",
      p3: "Many Garland families are caring for a parent while working full-time and are not sure what Medicare or Medicaid will cover. We are glad to walk through it. Richardson, Rowlett, Sachse, and Mesquite are all within our service area, so one call can cover care for several relatives.",
    },
    es: {
      p1: "Garland es una ciudad grande y establecida en el noreste del condado de Dallas, con vecindarios antiguos alrededor del centro y la plaza, casas más nuevas hacia Firewheel y largos tramos a lo largo del lago Ray Hubbard. Programamos las visitas en Garland en bloques con pacientes de las cercanas Rowlett y Sachse para que nuestro equipo pase más tiempo con los pacientes y menos en la carretera.",
      p2: "Baylor Scott & White Medical Center – Garland es el hospital en el que la mayoría de los residentes piensa primero, y Dallas Regional Medical Center en la vecina Mesquite también queda cerca. Cuando los pacientes regresan a casa después de una estadía allí, coordinamos visitas de enfermería, terapia y asistentes con el equipo de alta del hospital para que el cuidado de heridas, los medicamentos nuevos o los ejercicios de movilidad comiencen a tiempo.",
      p3: "Muchas familias de Garland cuidan a un padre mientras trabajan a tiempo completo y no saben qué cubrirán Medicare o Medicaid. Con gusto lo revisamos juntos. Richardson, Rowlett, Sachse y Mesquite están dentro de nuestra área de servicio, por lo que una sola llamada puede cubrir la atención de varios familiares.",
    },
  },

  mesquite: {
    driveMin: [30, 45],
    neighbors: ["Garland", "Balch Springs", "Seagoville", "Dallas", "Forney"],
    hospitals: ["Dallas Regional Medical Center", "Baylor Scott & White Medical Center – Garland"],
    en: {
      p1: "Mesquite sits on I-30 and I-635 east of Dallas, a longer drive from our office than the cities to our west, but still part of the community we serve. Mesquite is a mix of neighborhoods around the rodeo grounds and Town East, quieter residential streets, and apartment communities along the freeways.",
      p2: "Dallas Regional Medical Center is right in Mesquite, with Baylor Scott & White in nearby Garland as another option. If you or a family member is discharged from either one and needs nursing, therapy, or a home health aide, we will coordinate with the case manager and treating physician and set up your first visit at your Mesquite address.",
      p3: "Mesquite is also close to Balch Springs, Seagoville, and Forney, all of which are within our eight-county service area. Many older residents here prefer to avoid highway driving to outpatient therapy, which is one of the most practical reasons to choose a home-based provider. Call to confirm your address and ask about Medicare and Medicaid coverage.",
    },
    es: {
      p1: "Mesquite está sobre la I-30 y la I-635 al este de Dallas, un trayecto más largo desde nuestra oficina que las ciudades al oeste, pero igualmente parte de la comunidad que atendemos. Mesquite es una mezcla de vecindarios alrededor del Rodeo y Town East, calles residenciales más tranquilas y comunidades de apartamentos a lo largo de las autopistas.",
      p2: "Dallas Regional Medical Center está en la propia Mesquite, y Baylor Scott & White en la cercana Garland es otra opción. Si usted o un familiar recibe el alta de cualquiera de los dos y necesita enfermería, terapia o un asistente de salud en el hogar, coordinaremos con el administrador de casos y el médico tratante y programaremos la primera visita en su dirección de Mesquite.",
      p3: "Mesquite también queda cerca de Balch Springs, Seagoville y Forney, todas dentro de nuestra área de servicio de ocho condados. Muchos residentes mayores aquí prefieren evitar manejar por autopistas hasta la terapia ambulatoria, una de las razones más prácticas para elegir un proveedor a domicilio. Llame para confirmar su dirección y preguntar por la cobertura de Medicare y Medicaid.",
    },
  },

  plano: {
    driveMin: [45, 65],
    neighbors: ["Richardson", "Allen", "Frisco", "Murphy", "Garland", "Carrollton"],
    hospitals: [
      "Medical City Plano",
      "Texas Health Presbyterian Hospital Plano",
      "Baylor Scott & White Medical Center – Plano",
    ],
    en: {
      p1: "Plano is the largest city in Collin County and the farthest of our first twelve city pages from our Grand Prairie office. We serve it from our Grand Prairie base, and because the drive is longer we plan visits to Legacy, east Plano, and the neighborhoods near the Dallas North Tollway carefully rather than treating distance as a reason to delay.",
      p2: "Plano has three large hospitals: Medical City Plano, Texas Health Presbyterian Hospital Plano, and Baylor Scott & White Medical Center – Plano. Discharge planners at those hospitals handle a high volume of older adults and post-surgical patients, and what they need from a home health agency is a clear answer and a fast start of care. We aim to give both, including confirming insurance up front.",
      p3: "Plano families are often balancing a parent's care with demanding jobs and children. We schedule aide and therapy visits around the family's day where we can, and nearby Allen, Frisco, Murphy, and Richardson are within our service area as well. Call to confirm your Plano address and the services available there.",
    },
    es: {
      p1: "Plano es la ciudad más grande del condado de Collin y la más alejada de nuestra oficina de Grand Prairie entre las doce primeras páginas de ciudades. La atendemos desde nuestra base en Grand Prairie y, como el trayecto es más largo, planificamos con cuidado las visitas a Legacy, el este de Plano y los vecindarios cercanos al Dallas North Tollway en lugar de usar la distancia como motivo de demora.",
      p2: "Plano tiene tres hospitales grandes: Medical City Plano, Texas Health Presbyterian Hospital Plano y Baylor Scott & White Medical Center – Plano. Los planificadores de altas de esos hospitales atienden un gran volumen de adultos mayores y pacientes posquirúrgicos, y lo que necesitan de una agencia de atención médica en el hogar es una respuesta clara y un inicio de atención rápido. Buscamos ofrecer ambas cosas, incluida la confirmación del seguro desde el principio.",
      p3: "Las familias de Plano suelen equilibrar el cuidado de un padre con trabajos exigentes e hijos. Programamos las visitas de asistentes y de terapia según el día de la familia cuando es posible, y las cercanas Allen, Frisco, Murphy y Richardson también están dentro de nuestra área de servicio. Llame para confirmar su dirección en Plano y los servicios disponibles allí.",
    },
  },
};
