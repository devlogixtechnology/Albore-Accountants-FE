"use client";

import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { useState, useEffect, useRef, type FormEvent } from "react";
import ScheduleCalendar from "./ScheduleCalendar";
import {
  contactHubData,
  countryCodes,
  consultationRegions,
  consultationServices,
  formCopyData,
  contactPageIntroData,
  formValidationCopy,
} from "@/data/contact";

export interface ConsultationSectionProps {
  variant?: "page" | "home";
  className?: string;
}

export default function ConsultationSection({
  variant = "home",
  className = "",
}: ConsultationSectionProps) {
  // =========================================================
  // HOME VARIANT STATE & LOGIC
  // =========================================================
  const [homeFormState, setHomeFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [homeFormData, setHomeFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+92",
    phone: "",
    companyName: "",
    website: "",
    region: "",
    service: "",
    briefing: "",
  });

  useEffect(() => {
    if (variant !== "home") return;
    const detectUserRegion = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) return;
        const data = await response.json();
        const detectedCountry = countryCodes.find((c) => c.code === data.country_code);
        if (detectedCountry) {
          setHomeFormData((prev) => ({
            ...prev,
            countryCode: detectedCountry.dial,
          }));
        }
      } catch {
        // Silently fall back to default dial code (+92)
      }
    };
    detectUserRegion();
  }, [variant]);

  const handleHomeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setHomeFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleHomeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHomeFormState("submitting");
    setTimeout(() => {
      setHomeFormState("success");
    }, 600);
  };

  // =========================================================
  // PAGE VARIANT STATE & LOGIC (Full Consultation Booking)
  // =========================================================
  const [pageValues, setPageValues] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [scheduled, setScheduled] = useState<{ date: Date | null; time: string | null }>({
    date: null,
    time: null,
  });
  const [calendarResetKey, setCalendarResetKey] = useState(0);
  const [pageFieldErrors, setPageFieldErrors] = useState<Record<string, string>>({});
  const [dateTimeError, setDateTimeError] = useState<string | null>(null);
  const [pageStatus, setPageStatus] = useState<"idle" | "submitting" | "submitted">("idle");

  const pageFieldRefs = useRef<Record<string, HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>>({});

  const scheduledSummary =
    scheduled.date && scheduled.time
      ? `${scheduled.date.toLocaleDateString(undefined, { month: "short", day: "numeric" })} at ${scheduled.time}`
      : null;

  const updatePageValue = (key: string, val: string) => {
    setPageValues((prev) => ({ ...prev, [key]: val }));
    if (pageFieldErrors[key]) {
      setPageFieldErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const handlePageSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!pageValues.fullName.trim()) {
      errors.fullName = formValidationCopy.errors.fullNameRequired;
    } else if (pageValues.fullName.trim().length < 2) {
      errors.fullName = formValidationCopy.errors.fullNameShort;
    }

    if (!pageValues.email.trim()) {
      errors.email = formValidationCopy.errors.emailRequired;
    } else if (!formValidationCopy.patterns.email.test(pageValues.email)) {
      errors.email = formValidationCopy.errors.emailInvalid;
    }

    if (!pageValues.company.trim()) {
      errors.company = formValidationCopy.errors.companyRequired;
    }

    if (!pageValues.phone.trim()) {
      errors.phone = formValidationCopy.errors.phoneRequired;
    } else if (!formValidationCopy.patterns.phone.test(pageValues.phone)) {
      errors.phone = formValidationCopy.errors.phoneInvalid;
    }

    if (!pageValues.service) {
      errors.service = formValidationCopy.errors.serviceRequired;
    }

    const hasDateAndTime = Boolean(scheduled.date && scheduled.time);
    setDateTimeError(hasDateAndTime ? null : formValidationCopy.errors.dateTimeRequired);
    setPageFieldErrors(errors);

    const firstInvalidKey = Object.keys(errors)[0];
    if (firstInvalidKey && pageFieldRefs.current[firstInvalidKey]) {
      pageFieldRefs.current[firstInvalidKey]?.focus();
      return;
    }

    if (!hasDateAndTime || Object.keys(errors).length > 0) {
      return;
    }

    setPageStatus("submitting");
    setTimeout(() => {
      setPageStatus("submitted");
    }, 600);
  };

  const handlePageReset = () => {
    setPageValues({
      fullName: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
    setScheduled({ date: null, time: null });
    setCalendarResetKey((k) => k + 1);
    setPageFieldErrors({});
    setDateTimeError(null);
    setPageStatus("idle");
  };

  // =========================================================
  // RENDER: PAGE VARIANT
  // =========================================================
  if (variant === "page") {
    const pageInputClass =
      "w-full rounded-none border-0 border-b border-text-body/25 bg-transparent px-0 py-2.5 text-sm text-text-heading placeholder:text-text-body/40 outline-none transition-colors focus:border-brand-primary";
    const pageLabelClass = "mb-1 block text-sm font-normal text-text-body/60";
    const fieldErrorClass = "mt-1 text-xs font-medium text-red-600";

    return (
      <section
        className={`flex flex-col gap-10 px-6 py-12 sm:px-10 lg:px-16 ${className}`}
        aria-labelledby="book-consultation-heading"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left Intro & Direct Contact Channels */}
            <div>
              <h1
                id="book-consultation-heading"
                className="font-heading text-3xl font-bold text-text-heading sm:text-4xl"
              >
                {contactPageIntroData.titlePrefix}
              </h1>
              <p className="mt-4 max-w-md text-text-body">
                {contactPageIntroData.description}
              </p>

              <ul className="mt-8 flex flex-col gap-4">
                <li className="flex items-center gap-3 text-sm text-text-body">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary-dark">
                    <Phone className="h-4 w-4 text-white" />
                  </span>
                  <a href={contactHubData.phone.href} className="hover:text-brand-primary">
                    {contactHubData.phone.value}
                  </a>
                </li>

                <li className="flex items-center gap-3 text-sm text-text-body">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary-dark">
                    <Mail className="h-4 w-4 text-white" />
                  </span>
                  <a href={contactHubData.email.href} className="hover:text-brand-primary">
                    {contactHubData.email.value}
                  </a>
                </li>

                <li className="flex items-center gap-3 text-sm text-text-body">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary-dark">
                    <MapPin className="h-4 w-4 text-white" />
                  </span>
                  {contactHubData.hq.value}
                </li>

                <li className="flex items-center gap-3 text-sm text-text-body">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary-dark">
                    <ShieldCheck className="h-4 w-4 text-white" />
                  </span>
                  {contactHubData.certifications}
                </li>
              </ul>
            </div>

            {/* Right Form */}
            <div>
              {pageStatus === "submitted" ? (
                <div className="flex flex-col items-start gap-3 rounded-2xl bg-surface-muted p-6 sm:p-8">
                  <div className="w-12 h-12 bg-accent/15 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text-heading">
                    {formCopyData.successState.title}
                  </h3>
                  <p className="text-text-body">
                    {formCopyData.successState.message}
                    {scheduledSummary ? ` ${formValidationCopy.prefixes.selectedSlot}: ${scheduledSummary}.` : ""}
                  </p>
                  <button
                    type="button"
                    onClick={handlePageReset}
                    className="mt-3 inline-flex h-10 items-center justify-center rounded-lg border border-brand-primary px-5 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
                  >
                    {formCopyData.actions.reset}
                  </button>
                </div>
              ) : (
                <form id="consultation-page-form" onSubmit={handlePageSubmit} noValidate className="flex flex-col gap-5">
                  <div className="flex flex-col gap-5">
                    <div>
                      <label htmlFor="page-fullName" className={pageLabelClass}>
                        {formCopyData.fields.fullName} *
                      </label>
                      <input
                        id="page-fullName"
                        ref={(el) => { pageFieldRefs.current.fullName = el; }}
                        className={`${pageInputClass} ${pageFieldErrors.fullName ? "border-red-500" : ""}`}
                        value={pageValues.fullName}
                        onChange={(e) => updatePageValue("fullName", e.target.value)}
                      />
                      {pageFieldErrors.fullName && (
                        <p className={fieldErrorClass} role="alert">
                          {pageFieldErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="page-email" className={pageLabelClass}>
                        {formCopyData.fields.email} *
                      </label>
                      <input
                        id="page-email"
                        type="email"
                        ref={(el) => { pageFieldRefs.current.email = el; }}
                        className={`${pageInputClass} ${pageFieldErrors.email ? "border-red-500" : ""}`}
                        value={pageValues.email}
                        onChange={(e) => updatePageValue("email", e.target.value)}
                      />
                      {pageFieldErrors.email && (
                        <p className={fieldErrorClass} role="alert">
                          {pageFieldErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="page-company" className={pageLabelClass}>
                        {formCopyData.fields.company} *
                      </label>
                      <input
                        id="page-company"
                        ref={(el) => { pageFieldRefs.current.company = el; }}
                        className={`${pageInputClass} ${pageFieldErrors.company ? "border-red-500" : ""}`}
                        value={pageValues.company}
                        onChange={(e) => updatePageValue("company", e.target.value)}
                      />
                      {pageFieldErrors.company && (
                        <p className={fieldErrorClass} role="alert">
                          {pageFieldErrors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="page-phone" className={pageLabelClass}>
                        {formCopyData.fields.phone} *
                      </label>
                      <input
                        id="page-phone"
                        type="tel"
                        ref={(el) => { pageFieldRefs.current.phone = el; }}
                        className={`${pageInputClass} ${pageFieldErrors.phone ? "border-red-500" : ""}`}
                        value={pageValues.phone}
                        onChange={(e) => updatePageValue("phone", e.target.value)}
                      />
                      {pageFieldErrors.phone && (
                        <p className={fieldErrorClass} role="alert">
                          {pageFieldErrors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="page-service" className={pageLabelClass}>
                        {formCopyData.fields.service} *
                      </label>
                      <select
                        id="page-service"
                        ref={(el) => { pageFieldRefs.current.service = el; }}
                        className={`${pageInputClass} ${pageFieldErrors.service ? "border-red-500" : ""} ${pageValues.service ? "" : "text-text-body/50"}`}
                        value={pageValues.service}
                        onChange={(e) => updatePageValue("service", e.target.value)}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {consultationServices.map(({ value, label }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                      {pageFieldErrors.service && (
                        <p className={fieldErrorClass} role="alert">
                          {pageFieldErrors.service}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="page-message" className={pageLabelClass}>
                        {formCopyData.fields.message}
                      </label>
                      <textarea
                        id="page-message"
                        rows={4}
                        ref={(el) => { pageFieldRefs.current.message = el; }}
                        className={`${pageInputClass} resize-none`}
                        value={pageValues.message}
                        onChange={(e) => updatePageValue("message", e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Interactive Scheduling Calendar */}
          {pageStatus !== "submitted" && (
            <div className="flex flex-col gap-6 pt-4 border-t border-border/20">
              <ScheduleCalendar
                key={calendarResetKey}
                layout="row"
                onChange={(date, time) => {
                  setScheduled({ date, time });
                  setDateTimeError(null);
                }}
              />

              {scheduledSummary && (
                <p className="text-center text-sm font-semibold text-accent">
                  {formValidationCopy.prefixes.selectedSlot}: {scheduledSummary}
                </p>
              )}

              {dateTimeError && (
                <p className="text-center text-sm font-medium text-red-600" role="alert">
                  {dateTimeError}
                </p>
              )}

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  form="consultation-page-form"
                  disabled={pageStatus === "submitting"}
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-10 text-sm font-semibold uppercase tracking-wider text-text-inverse transition-colors hover:bg-gold-light disabled:opacity-60 cursor-pointer"
                >
                  {pageStatus === "submitting" ? formCopyData.actions.submitting : formCopyData.actions.submit}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // =========================================================
  // RENDER: HOME VARIANT (Edge-to-Edge Split Sovereign Layout)
  // =========================================================
  return (
    <section
      aria-labelledby="interface-heading"
      className={`relative z-20 w-full font-body ${className}`}
    >
      <h2 id="interface-heading" className="sr-only">
        Contact Form for Corporate Tax, Audit, and Advisory Consultations
      </h2>

      <div className="w-full flex flex-col lg:flex-row border-t border-border/20">
        {/* LEFT COLUMN: Deep Maroon Sovereign Panel */}
        <div className="w-full lg:w-2/5 xl:w-[38%] bg-brand-primary-dark text-white p-8 sm:p-12 md:p-14 lg:p-16 xl:p-20 2xl:pl-28 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-white/5">
          <div
            className="absolute inset-0 opacity-[0.05]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(#b08d57 1px, transparent 1px), linear-gradient(90deg, #b08d57 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            <span className="block text-xs font-bold text-accent uppercase tracking-[0.3em] mb-6">
              {contactHubData.badge}
            </span>

            <h3 className="text-3xl sm:text-4xl font-bold leading-tight mb-8 text-white font-heading">
              {contactHubData.titleLine1} <br />
              <span className="text-accent">{contactHubData.titleAccent}</span>
            </h3>

            <div className="space-y-8">
              {/* Electronic Mail */}
              <a
                href={contactHubData.email.href}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <Mail className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">
                    {contactHubData.email.label}
                  </h5>
                  <p className="text-slate-400 text-sm group-hover:text-accent transition-colors">
                    {contactHubData.email.value}
                  </p>
                </div>
              </a>

              {/* Global HQ */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <MapPin className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">
                    {contactHubData.hq.label}
                  </h5>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {contactHubData.hq.value}
                  </p>
                </div>
              </div>

              {/* Secure Line */}
              <a
                href={contactHubData.phone.href}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <Phone className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">
                    {contactHubData.phone.label}
                  </h5>
                  <p className="text-slate-400 text-sm group-hover:text-accent transition-colors">
                    {contactHubData.phone.value}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Modern White Form */}
        <div className="w-full lg:w-3/5 xl:w-[62%] bg-white p-8 sm:p-12 md:p-14 lg:p-16 xl:p-20 2xl:pr-28 flex flex-col justify-center">
          {homeFormState === "success" ? (
            <div className="text-center py-16 animate-in fade-in duration-500 max-w-xl mx-auto">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                {formCopyData.successState.title}
              </h3>
              <p className="mt-3 text-slate-600 text-sm md:text-base max-w-md mx-auto">
                {formCopyData.successState.message}
              </p>
              <button
                type="button"
                onClick={() => setHomeFormState("idle")}
                className="mt-8 text-sm text-accent font-bold uppercase tracking-widest border-b border-accent pb-1 cursor-pointer hover:text-brand-primary transition-colors"
              >
                {formCopyData.actions.reset}
              </button>
            </div>
          ) : (
            <div className="w-full max-w-3xl mx-auto lg:mx-0">
              <div className="mb-8 pb-6 border-b border-slate-100">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 border-l-4 border-accent pl-4 font-heading">
                  {formCopyData.sectionHeading}
                </h3>
              </div>

              <form onSubmit={handleHomeSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      name="fullName"
                      type="text"
                      required
                      placeholder=" "
                      value={homeFormData.fullName}
                      onChange={handleHomeChange}
                      className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-accent focus:outline-none transition-colors"
                    />
                    <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none">
                      {formCopyData.fields.fullName}
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder=" "
                      value={homeFormData.email}
                      onChange={handleHomeChange}
                      className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-accent focus:outline-none transition-colors"
                    />
                    <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none">
                      {formCopyData.fields.email}
                    </label>
                  </div>
                </div>

                {/* PHONE & REGION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-end gap-2">
                    <div className="relative w-28 shrink-0">
                      <select
                        name="countryCode"
                        value={homeFormData.countryCode}
                        onChange={handleHomeChange}
                        className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-accent focus:outline-none text-xs md:text-sm appearance-none cursor-pointer truncate pr-4"
                      >
                        {countryCodes.map((c) => (
                          <option key={c.code} value={c.dial}>
                            {c.code} ({c.dial})
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-0 top-4 w-3 h-3 text-slate-400 pointer-events-none" />
                    </div>

                    <div className="relative group flex-1">
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder=" "
                        value={homeFormData.phone}
                        onChange={handleHomeChange}
                        className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-accent focus:outline-none transition-colors"
                      />
                      <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none">
                        {formCopyData.fields.phone}
                      </label>
                    </div>
                  </div>

                  <div className="relative group">
                    <select
                      name="region"
                      required
                      value={homeFormData.region}
                      onChange={handleHomeChange}
                      className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-accent focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="hidden"></option>
                      {consultationRegions.map((region) => (
                        <option key={region.value} value={region.value}>
                          {region.label}
                        </option>
                      ))}
                    </select>
                    <label
                      className={`absolute left-0 text-sm pointer-events-none transition-all ${
                        homeFormData.region
                          ? "-top-4 text-xs text-accent"
                          : "top-3 text-slate-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent"
                      }`}
                    >
                      {formCopyData.fields.region}
                    </label>
                    <ChevronDown className="absolute right-0 top-4 w-3 h-3 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Company Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      name="companyName"
                      type="text"
                      required
                      placeholder=" "
                      value={homeFormData.companyName}
                      onChange={handleHomeChange}
                      className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-accent focus:outline-none transition-colors"
                    />
                    <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none">
                      {formCopyData.fields.companyName}
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      name="website"
                      type="url"
                      placeholder=" "
                      value={homeFormData.website}
                      onChange={handleHomeChange}
                      className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-accent focus:outline-none transition-colors"
                    />
                    <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none">
                      {formCopyData.fields.website}
                    </label>
                  </div>
                </div>

                {/* Services */}
                <div className="relative group">
                  <select
                    name="service"
                    required
                    value={homeFormData.service}
                    onChange={handleHomeChange}
                    className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-accent focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="hidden"></option>
                    {consultationServices.map((svc) => (
                      <option key={svc.value} value={svc.value}>
                        {svc.label}
                      </option>
                    ))}
                  </select>
                  <label
                    className={`absolute left-0 text-sm pointer-events-none transition-all ${
                      homeFormData.service
                        ? "-top-4 text-xs text-accent"
                        : "top-3 text-slate-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent"
                    }`}
                  >
                    {formCopyData.fields.service}
                  </label>
                  <ChevronDown className="absolute right-0 top-4 w-3 h-3 text-slate-400 pointer-events-none" />
                </div>

                {/* Briefing */}
                <div className="relative group">
                  <textarea
                    name="briefing"
                    required
                    rows={4}
                    placeholder=" "
                    value={homeFormData.briefing}
                    onChange={handleHomeChange}
                    className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-accent focus:outline-none resize-none"
                  />
                  <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none">
                    {formCopyData.fields.briefing}
                  </label>
                </div>

                {/* Submit Action Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={homeFormState === "submitting"}
                    className="group w-full md:w-auto px-10 py-5 rounded-none flex items-center justify-center gap-4 transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer bg-brand-primary-dark text-white hover:bg-accent font-button text-sm font-bold uppercase tracking-wider active:scale-95"
                  >
                    {homeFormState === "submitting" ? formCopyData.actions.submitting : formCopyData.actions.submit}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
