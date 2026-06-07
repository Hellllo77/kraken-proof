"use client";
import { useEffect } from "react";

const CENTRAL_URL  = process.env.NEXT_PUBLIC_CENTRAL_FEEDBACK_URL!;
const PROJECT_ID   = process.env.NEXT_PUBLIC_FEEDBACK_PROJECT_ID!;

export default function FeedbackWidget() {
  useEffect(() => {
    // Register project (idempotent — safe to call on every mount)
    void fetch(`${CENTRAL_URL}/api/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: PROJECT_ID, label: "Kraken Interactive" }),
    }).catch(() => {});

    const script = document.createElement("script");
    script.src = `${CENTRAL_URL}/widget.js`;
    script.dataset.projectId = PROJECT_ID;
    script.dataset.mode = "open";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return null;
}
