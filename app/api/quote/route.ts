import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

type QuotePayload = {
  projectType?: string;
  scope?: string;
  material?: string;
  timeline?: string;
  location?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function esc(s = "") {
  return s.replace(/[<>&]/g, (c) =>
    c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&amp;"
  );
}

export async function POST(req: Request) {
  let body: QuotePayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Basic server-side validation.
  if (!body.name || !body.email || !body.phone) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const summary = `
    <h2 style="font-family:Georgia,serif;color:#14351f">New quote request — ${esc(
      body.name
    )}</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:6px 12px;color:#6a6357">Project</td><td style="padding:6px 12px"><b>${esc(
        body.projectType || "—"
      )}</b></td></tr>
      <tr><td style="padding:6px 12px;color:#6a6357">Scope</td><td style="padding:6px 12px">${esc(
        body.scope || "—"
      )}</td></tr>
      <tr><td style="padding:6px 12px;color:#6a6357">Material</td><td style="padding:6px 12px">${esc(
        body.material || "—"
      )}</td></tr>
      <tr><td style="padding:6px 12px;color:#6a6357">Timeline</td><td style="padding:6px 12px">${esc(
        body.timeline || "—"
      )}</td></tr>
      <tr><td style="padding:6px 12px;color:#6a6357">Location</td><td style="padding:6px 12px">${esc(
        body.location || "—"
      )}</td></tr>
      <tr><td style="padding:6px 12px;color:#6a6357">Email</td><td style="padding:6px 12px">${esc(
        body.email
      )}</td></tr>
      <tr><td style="padding:6px 12px;color:#6a6357">Phone</td><td style="padding:6px 12px">${esc(
        body.phone
      )}</td></tr>
      <tr><td style="padding:6px 12px;color:#6a6357">Message</td><td style="padding:6px 12px">${esc(
        body.message || "—"
      )}</td></tr>
    </table>
  `;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } =
    process.env;
  const to = process.env.QUOTE_TO_EMAIL || SITE.email;
  const from = process.env.QUOTE_FROM_EMAIL || SMTP_USER || SITE.email;

  // No SMTP configured → log & succeed so the form is testable in dev.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.info("[quote] SMTP not configured — request received:", body);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465),
      secure: SMTP_SECURE ? SMTP_SECURE === "true" : Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"${SITE.name} Website" <${from}>`,
      to,
      replyTo: body.email,
      subject: `New quote request: ${body.projectType || "Deck project"} — ${body.name}`,
      html: summary,
      text: `New quote request from ${body.name} (${body.email}, ${body.phone}). Project: ${body.projectType}. Location: ${body.location}. Message: ${body.message}`,
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[quote] send failed:", err);
    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    );
  }
}
