"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { PhoneIcon, CloseIcon } from "./icons";

/** Persistent call-to-action that floats above all page content. */
export default function FloatingCTA() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div className="floating-cta" aria-label="Call for ice machine service">
      <button
        type="button"
        className="fc-close"
        onClick={() => setClosed(true)}
        aria-label="Dismiss"
      >
        <CloseIcon />
      </button>
      <div className="fc-text">
        <span className="t1">Ice machine down?</span>
        <span className="t2">We answer 24/7</span>
      </div>
      <a className="fc-btn" href={`tel:${site.phone.tel}`}>
        <PhoneIcon />
        Call now
      </a>
    </div>
  );
}
