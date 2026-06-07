"use client";
import { useEffect } from "react";

interface Props {
  calLink?: string;
}

export default function CalEmbed({ calLink }: Props) {
  const link = calLink ?? process.env.NEXT_PUBLIC_CAL_LINK!;

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {}; cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", { origin: "https://cal.com" });
      Cal("inline", {
        elementOrSelector: "#cal-booking",
        calLink: "${link}",
        layout: "month_view"
      });
    `;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, [link]);

  return (
    <div
      id="cal-booking"
      style={{
        width: "100%",
        minHeight: "600px",
        border: "1px solid var(--color-parchment-300)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
      }}
    />
  );
}
