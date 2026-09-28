"use client";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, type FormEvent } from "react";
import {
  contactHubData,
  countryCodes,
  consultationRegions,
  consultationServices,
  formCopyData,
  contactPageIntroData,
  contactHeroData,
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
  // HOME VARIANT STATE & LOGIC (unchanged)
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
  // RENDER: HOME VARIANT (unchanged)
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
              <a
                href={contactHubData.email.href}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <Mail className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">{contactHubData.email.label}</h5>
                  <p className="text-slate-400 text-sm group-hover:text-accent transition-colors">
                    {contactHubData.email.value}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <MapPin className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">{contactHubData.hq.label}</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">{contactHubData.hq.value}</p>
                </div>
              </div>

              <a href={contactHubData.phone.href} className="flex items-start gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <Phone className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">{contactHubData.phone.label}</h5>
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
                      className={`absolute left-0 text-sm pointer-events-none transition-all ${homeFormData.region
                        ? "-top-4 text-xs text-accent"
                        : "top-3 text-slate-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent"
                        }`}
                    >
                      {formCopyData.fields.region}
                    </label>
                    <ChevronDown className="absolute right-0 top-4 w-3 h-3 text-slate-400 pointer-events-none" />
                  </div>
                </div>

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
                    className={`absolute left-0 text-sm pointer-events-none transition-all ${homeFormData.service
                      ? "-top-4 text-xs text-accent"
                      : "top-3 text-slate-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent"
                      }`}
                  >
                    {formCopyData.fields.service}
                  </label>
                  <ChevronDown className="absolute right-0 top-4 w-3 h-3 text-slate-400 pointer-events-none" />
                </div>

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