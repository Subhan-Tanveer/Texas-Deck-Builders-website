"use client";

import { useState } from "react";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Phone,
  Loader2,
  PartyPopper,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import ServiceIcon from "@/components/ServiceIcon";

type FormData = {
  projectType: string;
  scope: string;
  material: string;
  timeline: string;
  location: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const EMPTY: FormData = {
  projectType: "",
  scope: "",
  material: "",
  timeline: "",
  location: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "Just exploring"];
const MATERIALS = ["Cedar", "Composite", "Exotic hardwood", "Not sure yet"];

const STEPS = ["Project", "Details", "Location", "Contact"] as const;

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  const set = (k: keyof FormData, v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validateStep = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (step === 0 && !data.projectType) e.projectType = "Pick a project type.";
    if (step === 2 && !data.location.trim())
      e.location = "Let us know the neighborhood or address.";
    if (step === 3) {
      if (!data.name.trim()) e.name = "Please enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        e.email = "Enter a valid email address.";
      if (data.phone.replace(/\D/g, "").length < 10)
        e.phone = "Enter a valid phone number.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validateStep()) setStep((s) => Math.min(STEPS.length - 1, s + 1));
  };
  const back = () => setStep((s) => Math.max(0, s - 1));

  const submit = async () => {
    if (!validateStep()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="rounded-3xl bg-linen p-10 text-center shadow-[var(--shadow-card)]">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-pine/15 text-pine">
          <PartyPopper size={30} />
        </span>
        <h3 className="mt-5 font-display text-3xl font-semibold text-forest">
          Thanks, {data.name.split(" ")[0] || "friend"}!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-bark/75">
          Your request is in. Duke personally reviews every quote and will reach
          out within 24 hours. Need to talk sooner?
        </p>
        <a
          href={SITE.phoneHref}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 font-semibold text-cream transition-transform hover:-translate-y-0.5"
        >
          <Phone size={18} /> Call {SITE.phone}
        </a>
      </div>
    );
  }

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <div className="rounded-3xl bg-linen p-6 shadow-[var(--shadow-card)] sm:p-9">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold transition-colors ${
                  i < step
                    ? "bg-pine text-cream"
                    : i === step
                      ? "bg-forest text-cream"
                      : "bg-bark/10 text-ash"
                }`}
              >
                {i < step ? <Check size={15} /> : i + 1}
              </span>
              <span
                className={`hidden text-sm font-medium sm:block ${
                  i === step ? "text-forest" : "text-ash"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-bark/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cedar to-amber transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step 0 — project type */}
      {step === 0 && (
        <fieldset>
          <legend className="font-display text-2xl font-semibold text-forest">
            What can we build for you?
          </legend>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SERVICES.map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => set("projectType", s.title)}
                className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 text-center transition-all ${
                  data.projectType === s.title
                    ? "border-cedar bg-cedar/10 text-forest"
                    : "border-bark/10 bg-cream text-bark/70 hover:border-cedar/50"
                }`}
              >
                <ServiceIcon name={s.icon} size={24} />
                <span className="text-sm font-medium">{s.title.replace(" & Restoration", "").replace("Custom ", "")}</span>
              </button>
            ))}
          </div>
          {errors.projectType && <Err msg={errors.projectType} />}
        </fieldset>
      )}

      {/* Step 1 — details */}
      {step === 1 && (
        <fieldset className="space-y-5">
          <legend className="font-display text-2xl font-semibold text-forest">
            Tell us a bit more.
          </legend>
          <Field label="Project scope / size (optional)">
            <input
              className="tdb-input"
              placeholder="e.g. ~600 sq ft with stairs and railing"
              value={data.scope}
              onChange={(e) => set("scope", e.target.value)}
            />
          </Field>
          <Field label="Material preference">
            <div className="flex flex-wrap gap-2">
              {MATERIALS.map((m) => (
                <Chip
                  key={m}
                  active={data.material === m}
                  onClick={() => set("material", m)}
                >
                  {m}
                </Chip>
              ))}
            </div>
          </Field>
          <Field label="Desired timeline">
            <div className="flex flex-wrap gap-2">
              {TIMELINES.map((t) => (
                <Chip
                  key={t}
                  active={data.timeline === t}
                  onClick={() => set("timeline", t)}
                >
                  {t}
                </Chip>
              ))}
            </div>
          </Field>
        </fieldset>
      )}

      {/* Step 2 — location */}
      {step === 2 && (
        <fieldset className="space-y-5">
          <legend className="font-display text-2xl font-semibold text-forest">
            Where&apos;s the project?
          </legend>
          <Field label="Neighborhood or address" error={errors.location}>
            <input
              className="tdb-input"
              placeholder="e.g. Circle C Ranch, or full address"
              value={data.location}
              onChange={(e) => set("location", e.target.value)}
            />
          </Field>
          <Field label="Anything else we should know? (optional)">
            <textarea
              className="tdb-input min-h-28 resize-y"
              placeholder="Share your vision, must-haves, or questions…"
              value={data.message}
              onChange={(e) => set("message", e.target.value)}
            />
          </Field>
        </fieldset>
      )}

      {/* Step 3 — contact */}
      {step === 3 && (
        <fieldset className="space-y-5">
          <legend className="font-display text-2xl font-semibold text-forest">
            Where should Duke send your quote?
          </legend>
          <Field label="Full name" error={errors.name}>
            <input
              className="tdb-input"
              autoComplete="name"
              value={data.name}
              onChange={(e) => set("name", e.target.value)}
            />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Email" error={errors.email}>
              <input
                className="tdb-input"
                type="email"
                autoComplete="email"
                value={data.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <input
                className="tdb-input"
                type="tel"
                autoComplete="tel"
                value={data.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
            </Field>
          </div>
          {status === "error" && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              Something went wrong sending your request. Please call{" "}
              {SITE.phone} and we&apos;ll take care of you.
            </p>
          )}
        </fieldset>
      )}

      {/* Nav buttons */}
      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-forest transition-colors hover:bg-bark/5"
          >
            <ArrowLeft size={18} /> Back
          </button>
        ) : (
          <span />
        )}

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={next}
            className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            Continue <ArrowRight size={18} />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-cedar to-amber px-7 py-3 font-semibold text-forest transition-transform hover:-translate-y-0.5 disabled:opacity-70"
          >
            {status === "sending" ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Sending…
              </>
            ) : (
              <>
                Get My Free Quote <ArrowRight size={18} />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------- small helpers ---------- */
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-forest">
        {label}
      </span>
      {children}
      {error && <Err msg={error} />}
    </label>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border-2 px-4 py-2 text-sm font-medium transition-all ${
        active
          ? "border-cedar bg-cedar/10 text-forest"
          : "border-bark/15 bg-cream text-bark/70 hover:border-cedar/50"
      }`}
    >
      {children}
    </button>
  );
}

function Err({ msg }: { msg: string }) {
  return <span className="mt-1.5 block text-sm text-red-600">{msg}</span>;
}
