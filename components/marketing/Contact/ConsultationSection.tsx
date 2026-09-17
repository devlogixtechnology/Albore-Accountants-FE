"use client";

import { Mail, MapPin, Phone, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import {
  contactHubData,
  countryCodes,
  consultationRegions,
  consultationServices,
  formCopyData,
} from "@/data/contactData";

export interface ConsultationSectionProps {
  variant?: "page" | "home";
  className?: string;
}

export default function ConsultationSection({
  className = "",
}: ConsultationSectionProps) {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+92", // Fallback Default (PK)
    phone: "",
    companyName: "",
    website: "",
    region: "",
    service: "",
    briefing: "",
  });

  // ---------------------------------------------------------
  // Auto-Detect Region (Country dial code)
  // ---------------------------------------------------------
  useEffect(() => {
    const detectUserRegion = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        const detectedCountry = countryCodes.find((c) => c.code === data.country_code);

        if (detectedCountry) {
          setFormData((prev) => ({
            ...prev,
            countryCode: detectedCountry.dial,
          }));
        }
      } catch {
        console.warn("Auto-detect failed, using default coordinates.");
      }
    };

    detectUserRegion();
  }, []);
  // ---------------------------------------------------------

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Pure frontend state handling (no backend route required)
    setTimeout(() => {
      setFormState("success");
    }, 600);
  };

  return (
    <section
      aria-labelledby="interface-heading"
      className={`relative z-20 w-full font-body ${className}`}
    >
      {/* SEO FIX: Hidden H2 for semantic page outline */}
      <h2 id="interface-heading" className="sr-only">
        Contact Form for Corporate Tax, Audit, and Advisory Consultations
      </h2>

      {/* Full-width Split Interface (Edge-to-Edge from left wall to right wall) */}
      <div className="w-full flex flex-col lg:flex-row border-t border-border/20">
        {/* LEFT COLUMN: Deep Maroon Sovereign Panel */}
        <div className="w-full lg:w-2/5 xl:w-[38%] bg-brand-primary-dark text-white p-8 sm:p-12 md:p-14 lg:p-16 xl:p-20 2xl:pl-28 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-white/5">
          {/* Subtle gold grid overlay */}
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
          {formState === "success" ? (
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
                onClick={() => setFormState("idle")}
                className="mt-8 text-sm text-accent font-bold uppercase tracking-widest border-b border-accent pb-1 cursor-pointer hover:text-brand-primary transition-colors"
              >
                {formCopyData.actions.reset}
              </button>
            </div>
          ) : (
            <div className="w-full max-w-3xl mx-auto lg:mx-0">
              {/* Clean Section Header (No Job/Internship Toggle) */}
              <div className="mb-8 pb-6 border-b border-slate-100">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 border-l-4 border-accent pl-4 font-heading">
                  {formCopyData.sectionHeading}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      name="fullName"
                      type="text"
                      required
                      placeholder=" "
                      value={formData.fullName}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                    {/* Country Dial Code Dropdown (Gulf & Pakistan Only) */}
                    <div className="relative w-28 shrink-0">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
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
                      value={formData.region}
                      onChange={handleChange}
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
                        formData.region
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
                      value={formData.companyName}
                      onChange={handleChange}
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
                      value={formData.website}
                      onChange={handleChange}
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
                    value={formData.service}
                    onChange={handleChange}
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
                      formData.service
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
                    value={formData.briefing}
                    onChange={handleChange}
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
                    disabled={formState === "submitting"}
                    className="group w-full md:w-auto px-10 py-5 rounded-none flex items-center justify-center gap-4 transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer bg-brand-primary-dark text-white hover:bg-accent font-button text-sm font-bold uppercase tracking-wider active:scale-95"
                  >
                    {formState === "submitting" ? formCopyData.actions.submitting : formCopyData.actions.submit}
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
