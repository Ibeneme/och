"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* Shared HIPAA Jotform "Request Care" embed (E4): used on /request-care,
   the Contact page, and the bottom of every city page.
   - ?source_page=<this page's path> is appended to the src.
   - Each submission is counted as an analytics event; no form answers are sent. */

const FORM_ID = "262855342857165";
const IFRAME_ID = `JotFormIFrame-${FORM_ID}`;

export default function RequestCareEmbed({ sourcePage }: { sourcePage?: string }) {
  const pathname = usePathname();
  const path = sourcePage ?? pathname ?? "";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      const w = window as unknown as {
        jotformEmbedHandler?: (selector: string, base: string) => void;
      };
      w.jotformEmbedHandler?.(
        `iframe[id='${IFRAME_ID}']`,
        "https://form.jotform.com/"
      );
    };

    const onMessage = (event: MessageEvent) => {
      if (
        event.origin.includes("jotform.com") &&
        typeof event.data === "string" &&
        event.data.includes("action=submissionCompleted")
      ) {
        const w = window as unknown as {
          gtag?: (...args: unknown[]) => void;
        };
        // Count only; never send form answers.
        w.gtag?.("event", "request_care_form_submitted", {
          event_category: "Conversion",
          non_interaction: false,
        });
      }
    };
    window.addEventListener("message", onMessage);
    return () => {
      script.parentNode?.removeChild(script);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <iframe
      id={IFRAME_ID}
      title="Request Care"
      onLoad={() => window.parent.scrollTo(0, 0)}
      allowTransparency={true}
      allow="geolocation; microphone; camera; fullscreen; payment"
      src={`https://form.jotform.com/${FORM_ID}?source_page=${path}`}
      frameBorder="0"
      style={{ minWidth: "100%", maxWidth: "100%", height: "690px", border: "none" }}
      scrolling="no"
    />
  );
}
