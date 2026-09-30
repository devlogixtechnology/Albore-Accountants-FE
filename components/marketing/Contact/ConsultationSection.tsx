"use client";

import {
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Send,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Lock,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, type FormEvent } from "react";
import {
  contactHubData,
  consultationServices,
  formCopyData,
  contactPageIntroData,
  contactHeroData,
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
  // PAGE VARIANT STATE & LOGIC (Contact Us page — no calendar)
  // =========================================================
  const [pageValues, setPageValues] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [pageFieldErrors, setPageFieldErrors] = useState<Record<string, string>>({});
  const [pageStatus, setPageStatus] = useState<"idle" | "submitting" | "submitted">("idle");

  const pageFieldRefs = useRef<
    Record<string, HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>
  >({});

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

    if (!pageValues.phone.trim()) {
      errors.phone = formValidationCopy.errors.phoneRequired;
    } else if (!formValidationCopy.patterns.phone.test(pageValues.phone)) {
      errors.phone = formValidationCopy.errors.phoneInvalid;
    }

    if (!pageValues.company.trim()) {
      errors.company = formValidationCopy.errors.companyRequired;
    }

    if (!pageValues.service) {
      errors.service = formValidationCopy.errors.serviceRequired;
    }

    if (!pageValues.message.trim()) {
      errors.message = formValidationCopy.errors.messageRequired;
    }

    setPageFieldErrors(errors);

    // Focus the first invalid field in visual (form) order
    const order = ["fullName", "email", "phone", "company", "service", "message"];
    const firstInvalidKey = order.find((key) => errors[key]);
    if (firstInvalidKey) {
      pageFieldRefs.current[firstInvalidKey]?.focus();
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
    setPageFieldErrors({});
    setPageStatus("idle");
  };

  // =========================================================
  // RENDER: PAGE VARIANT
  // =========================================================
  if (variant === "page") {
    const inputBase =
      "w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-text-heading shadow-md placeholder:text-text-body/40 outline-none transition-shadow focus:ring-2 focus:ring-brand-primary/40";
    const inputClass = (key: string) =>
      `${inputBase} ${pageFieldErrors[key] ? "ring-1 ring-red-500" : ""}`;
    const labelClass = "mb-1.5 block text-sm font-normal text-text-heading";
    const errorClass = "mt-1.5 text-xs font-medium text-red-600";

    const contactItems = [
      { Icon: Phone, text: contactHubData.phone.value, href: contactHubData.phone.href },
      { Icon: Send, text: contactHubData.email.value, href: contactHubData.email.href },
      { Icon: MapPin, text: contactHubData.hq.value },
      { Icon: ShieldCheck, text: contactHubData.certifications },
    ];

    const { subheading: heroSubheading, image: heroImage } = contactHeroData;
    const heroHeading = contactPageIntroData.heading;

    return (
      <div className={className}>
        {/* ---------- Hero banner ---------- */}
        <section className="relative isolate overflow-hidden min-h-[500px] flex items-center">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes={heroImage.sizes}
            className="object-cover"
          />

          {/* Darker on mobile because the text sits over the photo */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" aria-hidden="true" />

          <div className="relative w-full px-6 py-16 sm:px-10 lg:px-[5vw]">
            <div className="md:ml-[46%]">
              <h1 className="font-heading text-4xl font-bold text-brand-primary sm:text-5xl">
                {heroHeading}
              </h1>
              <p className="mt-4 max-w-xl text-text-inverse/85">
                {heroSubheading}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Contact details ---------- */}
        <section
          className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 min-[2560px]:max-w-[2000px] min-[3840px]:max-w-[2600px]"
          aria-labelledby="contact-details-heading"
        >
          <div className="text-left">
            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-brand-primary-dark">
              {contactPageIntroData.badge}
            </span>

            <h2
              id="contact-details-heading"
              className="mt-3 font-heading text-3xl font-bold text-text-heading sm:text-4xl"
            >
              {contactPageIntroData.heading}
            </h2>

            <p className="mt-4 max-w-2xl text-text-body">
              {contactPageIntroData.intro}
            </p>

            <p className="mt-4 max-w-2xl text-text-body">
              {contactPageIntroData.followUp}
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {contactItems.map(({ Icon, text, href }) => (
                <li key={text} className="flex items-center gap-3 text-base text-text-body">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary-dark">
                    <Icon className="h-4 w-4 text-white" aria-hidden="true" />
                  </span>
                  {href ? (
                    <a href={href} className="hover:text-brand-primary">
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Booking card ---------- */}
        <section className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 min-[2560px]:max-w-[2000px] min-[3840px]:max-w-[2600px]">
          <div className="mx-auto w-full max-w-5xl rounded-lg bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.14)] sm:p-12">
            <h2 className="text-center font-heading text-3xl font-bold text-text-heading sm:text-4xl">
              {formCopyData.pageHeading}
            </h2>

            {pageStatus === "submitted" ? (
              <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 py-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
                  <CheckCircle2 className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-text-heading">
                  {formCopyData.successState.title}
                </h3>
                <p className="text-text-body">{formCopyData.successState.message}</p>
                <button
                  type="button"
                  onClick={handlePageReset}
                  className="mt-3 inline-flex h-10 items-center justify-center rounded-md border border-brand-primary px-5 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white cursor-pointer"
                >
                  {formCopyData.actions.reset}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handlePageSubmit}
                noValidate
                className="mx-auto mt-8 flex max-w-3xl flex-col gap-5"
              >
                <div>
                  <label htmlFor="page-fullName" className={labelClass}>
                    {formCopyData.pageFields.fullName}*
                  </label>
                  <input
                    id="page-fullName"
                    autoComplete="name"
                    placeholder={formCopyData.pageFields.fullName + "*"}
                    ref={(el) => { pageFieldRefs.current.fullName = el; }}
                    className={inputClass("fullName")}
                    value={pageValues.fullName}
                    onChange={(e) => updatePageValue("fullName", e.target.value)}
                    aria-invalid={Boolean(pageFieldErrors.fullName)}
                  />
                  {pageFieldErrors.fullName && (
                    <p className={errorClass} role="alert">{pageFieldErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="page-email" className={labelClass}>
                    {formCopyData.pageFields.email}*
                  </label>
                  <input
                    id="page-email"
                    type="email"
                    autoComplete="email"
                    placeholder={formCopyData.pageFields.email + "*"}
                    ref={(el) => { pageFieldRefs.current.email = el; }}
                    className={inputClass("email")}
                    value={pageValues.email}
                    onChange={(e) => updatePageValue("email", e.target.value)}
                    aria-invalid={Boolean(pageFieldErrors.email)}
                  />
                  {pageFieldErrors.email && (
                    <p className={errorClass} role="alert">{pageFieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="page-phone" className={labelClass}>
                    {formCopyData.pageFields.phone}*
                  </label>
                  <input
                    id="page-phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder={formCopyData.pageFields.phonePlaceholder}
                    ref={(el) => { pageFieldRefs.current.phone = el; }}
                    className={inputClass("phone")}
                    value={pageValues.phone}
                    onChange={(e) => updatePageValue("phone", e.target.value)}
                    aria-invalid={Boolean(pageFieldErrors.phone)}
                  />
                  {pageFieldErrors.phone && (
                    <p className={errorClass} role="alert">{pageFieldErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="page-company" className={labelClass}>
                    {formCopyData.pageFields.company}*
                  </label>
                  <input
                    id="page-company"
                    autoComplete="organization"
                    placeholder={formCopyData.pageFields.company + "*"}
                    ref={(el) => { pageFieldRefs.current.company = el; }}
                    className={inputClass("company")}
                    value={pageValues.company}
                    onChange={(e) => updatePageValue("company", e.target.value)}
                    aria-invalid={Boolean(pageFieldErrors.company)}
                  />
                  {pageFieldErrors.company && (
                    <p className={errorClass} role="alert">{pageFieldErrors.company}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="page-service" className={labelClass}>
                    {formCopyData.pageFields.service}*
                  </label>
                  <div className="relative">
                    <select
                      id="page-service"
                      ref={(el) => { pageFieldRefs.current.service = el; }}
                      className={`${inputClass("service")} appearance-none cursor-pointer pr-10 ${pageValues.service ? "" : "text-text-body/40"}`}
                      value={pageValues.service}
                      onChange={(e) => updatePageValue("service", e.target.value)}
                      aria-invalid={Boolean(pageFieldErrors.service)}
                    >
                      <option value="" disabled>
                        {formCopyData.pageFields.service}*
                      </option>
                      {consultationServices.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-body/50"
                      aria-hidden="true"
                    />
                  </div>
                  {pageFieldErrors.service && (
                    <p className={errorClass} role="alert">{pageFieldErrors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="page-message" className={labelClass}>
                    {formCopyData.pageFields.message}*
                  </label>
                  <textarea
                    id="page-message"
                    rows={5}
                    placeholder={formCopyData.pageFields.message}
                    ref={(el) => { pageFieldRefs.current.message = el; }}
                    className={`${inputClass("message")} resize-y`}
                    value={pageValues.message}
                    onChange={(e) => updatePageValue("message", e.target.value)}
                    aria-invalid={Boolean(pageFieldErrors.message)}
                  />
                  {pageFieldErrors.message && (
                    <p className={errorClass} role="alert">{pageFieldErrors.message}</p>
                  )}
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    disabled={pageStatus === "submitting"}
                    className="inline-flex h-11 items-center justify-center rounded-md bg-brand-primary-dark px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-primary disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                  >
                    {pageStatus === "submitting"
                      ? formCopyData.actions.submitting
                      : formCopyData.actions.pageSubmit}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ---------- Back to home ---------- */}
        <section className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 min-[2560px]:max-w-[2000px] min-[3840px]:max-w-[2600px]">
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-12 text-sm font-semibold text-white transition-colors hover:bg-gold-light"
            >
              {formCopyData.actions.backHome}
            </Link>
          </div>
        </section>
      </div>
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