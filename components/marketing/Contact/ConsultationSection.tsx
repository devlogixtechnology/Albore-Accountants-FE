"use client";

import {
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Lock,
  Clock,
} from "lucide-react";
import { useState, useRef, type FormEvent } from "react";
import ScheduleCalendar from "./ScheduleCalendar";
import {
  contactHubData,
  consultationServices,
  formCopyData,
  contactPageIntroData,
  formValidationCopy,
} from "@/data/contact";
import consultationSectionData from "@/data/home/consultationSectionData";
import { MotionReveal } from "@/components/ui/motion";

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
    executiveName: "",
    entityName: "",
    workEmail: "",
    phone: "",
    practiceArea: "Statutory Audit & IFRS Assurance Mandate",
    scope: "",
    preferredDate: "",
    meetingMode: "Executive Office (Bahria Town HQ, Lahore)",
  });

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
  // RENDER: HOME VARIANT (Institutional Confidential Intake Layout)
  // Exact 100% fidelity match with Figma (media_1790771028468.png)
  // =========================================================
  const homeInputClass =
    "w-full bg-white text-text-heading text-xs sm:text-[13.5px] rounded-[4px] px-3.5 py-2.5 sm:py-3 placeholder:text-text-body/50 focus:outline-none focus:ring-2 focus:ring-accent shadow-xs transition-all border-0";
  const homeSelectClass =
    "w-full bg-white text-text-heading text-xs sm:text-[13.5px] rounded-[4px] px-3.5 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-accent shadow-xs transition-all border-0 cursor-pointer appearance-none pr-10";
  const homeLabelClass =
    "block text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.1em] text-white/95 mb-1.5 font-heading";

  return (
    <section
      aria-labelledby="institutional-intake-heading"
      className={`w-full font-body ${className}`}
    >
      {/* 1. Top Header Block (Clean White Background) */}
      <MotionReveal>
        <div className="w-full bg-white pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
          <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-left">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-maroon-hover mb-3 block font-heading">
              {consultationSectionData.eyebrow}
            </span>
            <h2
              id="institutional-intake-heading"
              className="mt-1 text-pretty font-heading text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-bold leading-[1.12] tracking-tight"
            >
              <span className="block text-text-heading">{consultationSectionData.headingPart1}</span>
              <span className="block text-accent">{consultationSectionData.headingPart2}</span>
            </h2>
          </div>
        </div>
      </MotionReveal>

      {/* 2. Main Intake Block (Deep Solid Maroon Background matching Figma) */}
      <div className="w-full bg-brand-primary-dark py-14 sm:py-16 lg:py-20 xl:py-24 text-white">
        <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10 xl:gap-14 w-full">
            {/* Left Column: Lead Paragraph + 3 White Trust Cards + Executive Desk Badge */}
            <MotionReveal delay={0.1} className="w-full lg:w-[45%] xl:w-[44%] 2xl:w-[43%] flex flex-col shrink-0">
              <p className="text-white/95 text-sm sm:text-base lg:text-[16px] leading-[1.7] font-normal mb-8 sm:mb-9 w-full">
                {consultationSectionData.subheading}
              </p>

              {/* 3 Crisp White Trust Cards - Full Width of Left Column */}
              <div className="space-y-3.5 sm:space-y-4 w-full">
                {consultationSectionData.trustCards.map((card) => {
                  const Icon =
                    card.iconName === "ShieldCheck"
                      ? CheckCircle2
                      : card.iconName === "Lock"
                      ? Lock
                      : Clock;
                  return (
                    <div
                      key={card.title}
                      className="w-full bg-white rounded-[6px] px-5 py-4 sm:px-6 sm:py-4.5 shadow-sm flex items-start gap-4 sm:gap-4.5 text-left transition-all duration-200 hover:shadow-md"
                    >
                      <Icon className="w-5 h-5 text-brand-primary-dark shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-[14px] sm:text-[15px] font-bold text-text-heading leading-snug">
                          {card.title}
                        </h4>
                        <p className="text-[12px] sm:text-[12.5px] text-text-body mt-1 leading-[1.5] font-normal">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Immediate Executive Desk (Exact match to Figma media_1790771448687.png) */}
              <div className="mt-8 sm:mt-9 flex items-center gap-3.5 select-none self-start">
                {/* Gold (#B08D57) Rounded Square Icon Box */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-accent flex items-center justify-center shrink-0 shadow-sm">
                  <PhoneCall
                    className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-brand-primary-dark stroke-[2.2]"
                    aria-hidden="true"
                  />
                </div>

                {/* Typography on Maroon Canvas */}
                <div className="flex flex-col text-left">
                  <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.14em] text-accent block leading-tight">
                    {consultationSectionData.executiveDesk.label}
                  </span>
                  <a
                    href={consultationSectionData.executiveDesk.phoneHref}
                    className="text-[14px] sm:text-[15px] font-bold text-white hover:text-accent transition-colors block leading-tight mt-1 tracking-tight"
                  >
                    {consultationSectionData.executiveDesk.phone}
                  </a>
                </div>
              </div>
            </MotionReveal>

            {/* Right Column: Confidential Engagement Request Form (Expanded to fill remaining width) */}
            <MotionReveal delay={0.2} className="w-full lg:flex-1 min-w-0">
              {homeFormState === "success" ? (
                <div className="rounded-lg bg-white/10 backdrop-blur-xs border border-white/15 p-8 sm:p-12 text-center text-white animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-5 border border-accent/40">
                    <CheckCircle2 className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Consultation Request Received
                  </h3>
                  <p className="mt-3 text-sm text-white/80 max-w-md mx-auto leading-relaxed">
                    Our senior partner dispatch desk has received your mandate details
                    and will initiate conflict checks within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setHomeFormData({
                        executiveName: "",
                        entityName: "",
                        workEmail: "",
                        phone: "",
                        practiceArea: "Statutory Audit & IFRS Assurance Mandate",
                        scope: "",
                        preferredDate: "",
                        meetingMode: "Executive Office (Bahria Town HQ, Lahore)",
                      });
                      setHomeFormState("idle");
                    }}
                    className="mt-6 inline-flex items-center justify-center px-6 py-2.5 rounded-[4px] border border-accent text-xs font-bold uppercase tracking-wider text-accent hover:bg-accent hover:text-white transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <div>
                  {/* Centered Form Header matching Figma */}
                  <div className="text-center mb-6 sm:mb-7">
                    <h3 className="text-2xl sm:text-[26px] lg:text-[28px] font-bold text-white tracking-tight font-heading">
                      Confidential Engagement Request
                    </h3>
                    <p className="text-xs sm:text-[13px] text-white/75 mt-1.5 font-normal max-w-lg mx-auto">
                      Please provide statutory entity details to accelerate conflicts clearance.
                    </p>
                  </div>

                  <form onSubmit={handleHomeSubmit} noValidate={false} className="space-y-3.5 sm:space-y-4">
                    {/* Row 1: Executive Name & Corporate Entity Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label htmlFor="home-executiveName" className={homeLabelClass}>
                          EXECUTIVE FULL NAME *
                        </label>
                        <input
                          id="home-executiveName"
                          name="executiveName"
                          type="text"
                          required
                          placeholder="e.g. Asad Qureshi"
                          value={homeFormData.executiveName}
                          onChange={handleHomeChange}
                          className={homeInputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="home-entityName" className={homeLabelClass}>
                          CORPORATE ENTITY NAME *
                        </label>
                        <input
                          id="home-entityName"
                          name="entityName"
                          type="text"
                          required
                          placeholder="e.g. Apex Industrial Holdings Ltd"
                          value={homeFormData.entityName}
                          onChange={handleHomeChange}
                          className={homeInputClass}
                        />
                      </div>
                    </div>

                    {/* Row 2: Official Work Email & Contact Telephone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label htmlFor="home-workEmail" className={homeLabelClass}>
                          OFFICIAL WORK EMAIL *
                        </label>
                        <input
                          id="home-workEmail"
                          name="workEmail"
                          type="email"
                          required
                          placeholder="cfo@corporate.com.pk"
                          value={homeFormData.workEmail}
                          onChange={handleHomeChange}
                          className={homeInputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="home-phone" className={homeLabelClass}>
                          CONTACT TELEPHONE *
                        </label>
                        <input
                          id="home-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+92 300 0000000"
                          value={homeFormData.phone}
                          onChange={handleHomeChange}
                          className={homeInputClass}
                        />
                      </div>
                    </div>

                    {/* Row 3: Primary Practice Area */}
                    <div>
                      <label htmlFor="home-practiceArea" className={homeLabelClass}>
                        PRIMARY PRACTICE AREA *
                      </label>
                      <div className="relative">
                        <select
                          id="home-practiceArea"
                          name="practiceArea"
                          required
                          value={homeFormData.practiceArea}
                          onChange={handleHomeChange}
                          className={homeSelectClass}
                        >
                          <option value="Statutory Audit & IFRS Assurance Mandate">
                            Statutory Audit & IFRS Assurance Mandate
                          </option>
                          <option value="Corporate Tax Strategy & International Compliance">
                            Corporate Tax Strategy & International Compliance
                          </option>
                          <option value="Cross-Border Advisory & Transaction Support">
                            Cross-Border Advisory & Transaction Support
                          </option>
                          <option value="Enterprise Bookkeeping & Fractional CFO">
                            Enterprise Bookkeeping & Fractional CFO
                          </option>
                          <option value="Corporate Secretarial & Regulatory Filings">
                            Corporate Secretarial & Regulatory Filings
                          </option>
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-body/60 pointer-events-none" />
                      </div>
                    </div>

                    {/* Row 4: Scope of Corporate Mandate */}
                    <div>
                      <label htmlFor="home-scope" className={homeLabelClass}>
                        SCOPE OF CORPORATE MANDATE
                      </label>
                      <textarea
                        id="home-scope"
                        name="scope"
                        rows={3}
                        placeholder="Brief outline of enterprise structure, audit requirements, or fiscal advisory deadlines..."
                        value={homeFormData.scope}
                        onChange={handleHomeChange}
                        className={`${homeInputClass} resize-none`}
                      />
                    </div>

                    {/* Row 5: Preferred Date & Preferred Meeting Mode */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label htmlFor="home-preferredDate" className={homeLabelClass}>
                          PREFERRED PARTNER DATE
                        </label>
                        <input
                          id="home-preferredDate"
                          name="preferredDate"
                          type="text"
                          onFocus={(e) => {
                            e.target.type = "date";
                          }}
                          onBlur={(e) => {
                            if (!e.target.value) e.target.type = "text";
                          }}
                          placeholder="mm/dd/yyyy"
                          value={homeFormData.preferredDate}
                          onChange={handleHomeChange}
                          className={homeInputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="home-meetingMode" className={homeLabelClass}>
                          PREFERRED MEETING MODE
                        </label>
                        <div className="relative">
                          <select
                            id="home-meetingMode"
                            name="meetingMode"
                            value={homeFormData.meetingMode}
                            onChange={handleHomeChange}
                            className={homeSelectClass}
                          >
                            <option value="Executive Office (Bahria Town HQ, Lahore)">
                              Executive Office (Bahria Town HQ, Lahore)
                            </option>
                            <option value="Virtual Video Conference (Zoom / Teams)">
                              Virtual Video Conference (Zoom / Teams)
                            </option>
                            <option value="Client Corporate Headquarters">
                              Client Corporate Headquarters
                            </option>
                          </select>
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-body/60 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Row 6: Submit Button (#B08D57 matching Figma) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={homeFormState === "submitting"}
                        className="w-full bg-accent hover:bg-gold-light active:bg-gold-light/95 text-white font-bold py-3.5 sm:py-4 px-6 rounded-[4px] shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm tracking-wide group disabled:opacity-75 active:scale-[0.995]"
                      >
                        <span>
                          {homeFormState === "submitting"
                            ? "Submitting Confidential Request..."
                            : "Submit Confidential Consultation Request"}
                        </span>
                        <span
                          className="text-sm leading-none group-hover:translate-x-0.5 transition-transform"
                          aria-hidden="true"
                        >
                          ▷
                        </span>
                      </button>
                    </div>

                    {/* Row 7: ICAP Disclaimer */}
                    <p className="text-[10.5px] sm:text-[11px] text-white/50 text-center tracking-normal pt-1 font-normal">
                      Under strict professional ethics of the Institute of Chartered Accountants of Pakistan (ICAP)
                    </p>
                  </form>
                </div>
              )}
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}