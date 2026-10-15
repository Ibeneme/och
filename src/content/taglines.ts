/**
 * Language assistance taglines (ACA Section 1557).
 *
 * Languages = English + the 15 non-English languages most commonly spoken by
 * people with limited English proficiency in Texas, in descending order:
 * Spanish, Vietnamese, Chinese, Korean, Arabic, Urdu, Tagalog, French, Hindi,
 * Persian (Farsi), German, Gujarati, Russian, Japanese, Laotian.
 *
 * Wording follows the standard HHS tagline model:
 *   "ATTENTION: If you speak [language], language assistance services, free of
 *    charge, are available to you. Call [number] (TTY: 711)."
 *
 * BEFORE GO-LIVE: have each translation checked against HHS's published
 * translations (hhs.gov > Section 1557 > Translated Resources) and, ideally,
 * by a qualified native speaker. `lang` is a BCP 47 tag used for the `lang`
 * attribute; `dir` is set for right-to-left scripts.
 */
export type Tagline = {
  lang: string;
  /** Language name written in that language (shown above the tagline). */
  name: string;
  text: string | null;
  dir?: "rtl";
};

const PHONE = "972-325-1598";

export const TAGLINES: Tagline[] = [
  {
    lang: "en",
    name: "English",
    text: `Attention: If you speak English, language assistance services, free of charge, are available to you. Call ${PHONE} (TTY: 711).`,
  },
  {
    lang: "es",
    name: "Español",
    text: `Atención: Si habla español, tiene a su disposición servicios gratuitos de asistencia lingüística. Llame al ${PHONE} (TTY: 711).`,
  },
  {
    lang: "vi",
    name: "Tiếng Việt",
    text: `CHÚ Ý: Nếu bạn nói Tiếng Việt, có các dịch vụ hỗ trợ ngôn ngữ miễn phí dành cho bạn. Gọi số ${PHONE} (TTY: 711).`,
  },
  {
    lang: "zh-Hant",
    name: "繁體中文",
    text: `注意：如果您使用繁體中文，您可以免費獲得語言援助服務。請致電 ${PHONE}（TTY：711）。`,
  },
  {
    lang: "ko",
    name: "한국어",
    text: `주의: 한국어를 사용하시는 경우, 언어 지원 서비스를 무료로 이용하실 수 있습니다. ${PHONE} (TTY: 711)번으로 전화해 주십시오.`,
  },
  {
    lang: "ar",
    name: "العربية",
    dir: "rtl",
    text: `ملحوظة: إذا كنت تتحدث العربية، فإن خدمات المساعدة اللغوية المجانية متاحة لك. اتصل برقم ${PHONE} (رقم هاتف الصم والبكم: 711).`,
  },
  {
    lang: "ur",
    name: "اردو",
    dir: "rtl",
    text: `خبردار: اگر آپ اردو بولتے ہیں، تو آپ کو زبان کی مدد کی خدمات مفت میں دستیاب ہیں۔ ${PHONE} (TTY: 711) پر کال کریں۔`,
  },
  {
    lang: "tl",
    name: "Tagalog",
    text: `PAUNAWA: Kung nagsasalita ka ng Tagalog, maaari kang gumamit ng mga serbisyo ng tulong sa wika nang walang bayad. Tumawag sa ${PHONE} (TTY: 711).`,
  },
  {
    lang: "fr",
    name: "Français",
    text: `ATTENTION : Si vous parlez français, des services d'aide linguistique vous sont proposés gratuitement. Appelez le ${PHONE} (TTY : 711).`,
  },
  {
    lang: "hi",
    name: "हिन्दी",
    text: `ध्यान दें: यदि आप हिंदी बोलते हैं तो आपके लिए मुफ्त में भाषा सहायता सेवाएं उपलब्ध हैं। ${PHONE} (TTY: 711) पर कॉल करें।`,
  },
  {
    lang: "fa",
    name: "فارسی",
    dir: "rtl",
    text: `توجه: اگر به زبان فارسی گفتگو می کنید، تسهیلات زبانی بصورت رایگان در اختیار شما می باشد. با ${PHONE} (TTY: 711) تماس بگیرید.`,
  },
  {
    lang: "de",
    name: "Deutsch",
    text: `ACHTUNG: Wenn Sie Deutsch sprechen, stehen Ihnen kostenlose sprachliche Hilfsdienstleistungen zur Verfügung. Rufnummer: ${PHONE} (TTY: 711).`,
  },
  {
    lang: "gu",
    name: "ગુજરાતી",
    text: `સુચના: જો તમે ગુજરાતી બોલતા હો, તો નિ:શુલ્ક ભાષા સહાય સેવાઓ તમારા માટે ઉપલબ્ધ છે. ફોન કરો ${PHONE} (TTY: 711).`,
  },
  {
    lang: "ru",
    name: "Русский",
    text: `ВНИМАНИЕ: Если вы говорите на русском языке, то вам доступны бесплатные услуги перевода. Звоните ${PHONE} (телетайп: 711).`,
  },
  {
    lang: "ja",
    name: "日本語",
    text: `注意事項：日本語を話される場合、無料の言語支援をご利用いただけます。${PHONE}（TTY：711）まで、お電話にてご連絡ください。`,
  },
  {
    lang: "lo",
    name: "ລາວ",
    text: `ໂປດຊາບ: ຖ້າວ່າ ທ່ານເວົ້າພາສາ ລາວ, ການບໍລິການຊ່ວຍເຫຼືອດ້ານພາສາ, ໂດຍບໍ່ເສັຍຄ່າ, ແມ່ນມີພ້ອມໃຫ້ທ່ານ. ໂທຣ ${PHONE} (TTY: 711).`,
  },
];

export const taglinesPendingCount = () =>
  TAGLINES.length < 16 || TAGLINES.some((t) => !t.text) ? 1 : 0;
