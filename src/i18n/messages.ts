import type { ExtraLocale } from "./languages";

/**
 * Translated UI copy for the optional languages (de, fr, zh, it, pt).
 *
 * Only the strings below are translated today; every other page falls back to
 * English. To translate more, add keys to `MessageKey` + each language here and
 * read them with `getMessage(locale, key)` / `useLocaleMessages()`.
 *
 * NOTE: these are machine-quality drafts. Have a native speaker (ideally one
 * familiar with healthcare wording) review them before enabling in production.
 */
export type HeroMessages = {
  badge: string;
  title: string;
  subtitle: string;
  legacy: string;
  requestCare: string;
  referPatient: string;
};

export type Messages = {
  skipToContent: string;
  changeLanguage: string;
  partialNotice: string;
  hero: HeroMessages;
  siteTagline: string;
  siteDescription: string;
};

export const MESSAGES: Record<ExtraLocale, Messages> = {
  de: {
    skipToContent: "Zum Hauptinhalt springen",
    changeLanguage: "Sprache ändern",
    partialNotice:
      "Diese Seite ist noch nicht vollständig auf Deutsch verfügbar. Der Rest des Inhalts erscheint auf Englisch.",
    siteTagline: "Qualifizierte Pflege und Betreuung zu Hause",
    siteDescription:
      "One Community Home Health bietet qualifizierte Krankenpflege, Physiotherapie und Alltagsunterstützung im Komfort Ihres Zuhauses.",
    hero: {
      badge: "NEHMEN JETZT ÜBERWEISUNGEN AN · DFW METROPLEX",
      title: "Wir helfen Ihnen, dort zu bleiben, wo Sie hingehören",
      subtitle:
        "Einfühlsame, professionelle häusliche Gesundheitspflege im Großraum Dallas-Fort Worth – individuelle Pflegepläne, abgestimmt mit Ihren Ärzten, dort erbracht, wo Sie sich am wohlsten fühlen: zu Hause.",
      legacy:
        "JACOP Healthcare Services, Inc., seit 2010 für Patienten da, firmiert jetzt unter One Community Home Health.",
      requestCare: "Pflege anfragen",
      referPatient: "Patienten überweisen",
    },
  },
  fr: {
    skipToContent: "Passer au contenu principal",
    changeLanguage: "Changer de langue",
    partialNotice:
      "Cette page n'est pas encore entièrement disponible en français. Le reste du contenu s'affiche en anglais.",
    siteTagline: "Soins infirmiers spécialisés et soins à domicile",
    siteDescription:
      "One Community Home Health propose des soins infirmiers spécialisés, de la kinésithérapie et une aide au quotidien dans le confort de votre domicile.",
    hero: {
      badge: "NOUS ACCEPTONS LES ORIENTATIONS · DFW METROPLEX",
      title: "Vous aider à rester là où vous êtes chez vous",
      subtitle:
        "Des soins de santé à domicile attentionnés et professionnels dans la région de Dallas-Fort Worth — des plans de soins individualisés, coordonnés avec vos médecins, dispensés là où vous êtes le plus à l'aise : chez vous.",
      legacy:
        "JACOP Healthcare Services, Inc., au service des patients depuis 2010, exerce désormais sous le nom One Community Home Health.",
      requestCare: "Demander des soins",
      referPatient: "Orienter un patient",
    },
  },
  zh: {
    skipToContent: "跳到主要内容",
    changeLanguage: "切换语言",
    partialNotice: "本页尚未完全提供中文版本，其余内容将以英文显示。",
    siteTagline: "专业护理与居家照护",
    siteDescription:
      "One Community Home Health 在您舒适的家中提供专业护理、物理治疗和日常生活协助。",
    hero: {
      badge: "现已接受转介 · 达拉斯-沃思堡都会区",
      title: "帮助您安心留在属于您的地方",
      subtitle:
        "我们在达拉斯-沃思堡都会区提供富有爱心、专业的居家医疗护理——量身定制的护理计划，与您的医生密切协调，在您最舒适的地方提供服务：家中。",
      legacy:
        "JACOP Healthcare Services, Inc. 自 2010 年起为患者服务，现以 One Community Home Health 的名称运营。",
      requestCare: "申请护理",
      referPatient: "转介患者",
    },
  },
  it: {
    skipToContent: "Vai al contenuto principale",
    changeLanguage: "Cambia lingua",
    partialNotice:
      "Questa pagina non è ancora disponibile interamente in italiano. Il resto dei contenuti appare in inglese.",
    siteTagline: "Assistenza infermieristica specializzata a domicilio",
    siteDescription:
      "One Community Home Health offre assistenza infermieristica specializzata, fisioterapia e supporto quotidiano nel comfort della vostra casa.",
    hero: {
      badge: "ACCETTIAMO SEGNALAZIONI · DFW METROPLEX",
      title: "Ti aiutiamo a restare dove ti senti a casa",
      subtitle:
        "Assistenza sanitaria domiciliare premurosa e professionale nell'area di Dallas-Fort Worth — piani di cura personalizzati, coordinati con i vostri medici, erogati dove vi sentite più a vostro agio: a casa.",
      legacy:
        "JACOP Healthcare Services, Inc., al servizio dei pazienti dal 2010, opera ora con il nome One Community Home Health.",
      requestCare: "Richiedi assistenza",
      referPatient: "Segnala un paziente",
    },
  },
  pt: {
    skipToContent: "Saltar para o conteúdo principal",
    changeLanguage: "Mudar de idioma",
    partialNotice:
      "Esta página ainda não está totalmente disponível em português. O restante do conteúdo aparece em inglês.",
    siteTagline: "Enfermagem especializada e cuidados em casa",
    siteDescription:
      "A One Community Home Health oferece enfermagem especializada, fisioterapia e apoio diário no conforto da sua casa.",
    hero: {
      badge: "ACEITAMOS ENCAMINHAMENTOS · DFW METROPLEX",
      title: "Ajudamos você a ficar onde você pertence",
      subtitle:
        "Cuidados de saúde domiciliares atenciosos e profissionais na região de Dallas-Fort Worth — planos de cuidado individualizados, coordenados com seus médicos, prestados onde você se sente mais à vontade: em casa.",
      legacy:
        "A JACOP Healthcare Services, Inc., atendendo pacientes desde 2010, agora opera como One Community Home Health.",
      requestCare: "Solicitar cuidados",
      referPatient: "Encaminhar um paciente",
    },
  },
};

export function getMessages(locale: string): Messages | null {
  return (MESSAGES as Record<string, Messages>)[locale] ?? null;
}
