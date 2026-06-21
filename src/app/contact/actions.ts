"use server";

import { redirect } from "next/navigation";

/**
 * Handles contact-form submissions.
 *
 * TODO: wire up real delivery. Recommended options on Vercel:
 *   - Resend (https://resend.com) via the `resend` npm package, or
 *   - an email/CRM webhook, or
 *   - store leads in a database (e.g. Neon Postgres from the Vercel Marketplace).
 * For now we validate, log to the server, and redirect to a thank-you state.
 */
export async function submitContact(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || (!phone && !email)) {
    redirect("/contact?error=1");
  }

  // TODO: replace with real email/lead delivery.
  console.log("[contact] new lead:", { name, phone, email, message });

  redirect("/contact?sent=1");
}
