export type Tagline = { lang: string; name: string; text: string | null };

export const TAGLINES: Tagline[] = [

  {
    lang: "en",
    name: "English",
    text: "Attention: If you speak English, language assistance services, free of charge, are available to you. Call 972-325-1598 (TTY: 711).",
  },
  {
    lang: "es",
    name: "Español",
    text: "Atención: Si habla español, tiene a su disposición servicios gratuitos de asistencia lingüística. Llame al 972-325-1598 (TTY: 711).",
  },
];

export const taglinesPendingCount = () =>
  TAGLINES.length < 1 || TAGLINES.some((t) => !t.text) ? 1 : 0;