'use client';

import { useState, type FormEvent } from 'react';
import { siteConfig } from '@/config/site';

export interface ConsultationFormValues {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  time: string;
}

export interface ConsultationFormProps {
  variant?: 'page' | 'compact' | 'promo';
  className?: string;
  scheduledSummary?: string | null;
  /** Raw selected date from ScheduleCalendar (page/compact variants only — promo has its own date input). */
  scheduledDate?: Date | null;
  /** Raw selected time from ScheduleCalendar (page/compact variants only — promo has its own time input). */
  scheduledTime?: string | null;
  onSubmit?: (values: ConsultationFormValues) => void;
}

// Basic client-side format checks — not exhaustive validation, just catches
// obviously malformed input before it reaches the backend.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9\s-]{7,15}$/;

function formatDateValue(date?: Date | null): string {
  if (!date) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const initialValues: ConsultationFormValues = {
  fullName: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  message: '',
  date: '',
  time: '',
};

// Exact time slots requested for the homepage promo variant
const TIME_SLOTS = [
  '10:00 am',
  '10:30 am',
  '11:00 am',
  '11:30 am',
  '12:00 pm',
  '12:30 pm',
  '2:00 pm',
  '2:30 pm',
  '3:00 pm',
];

export default function ConsultationForm({
  variant = 'page',
  className = '',
  scheduledSummary,
  scheduledDate,
  scheduledTime,
  onSubmit,
}: ConsultationFormProps) {
  const [values, setValues] = useState<ConsultationFormValues>(initialValues);
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const [dateTimeError, setDateTimeError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; phone?: string }>({});
  const todayISO = formatDateValue(new Date());
  const isCompact = variant === 'compact';
  const isPromo = variant === 'promo';
  const onDark = isCompact || isPromo;

  function update<K extends keyof ConsultationFormValues>(key: K, value: ConsultationFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (dateTimeError) setDateTimeError(null);
    if (key === 'email' && fieldErrors.email) {
      setFieldErrors((prev) => ({ ...prev, email: undefined }));
    } else if (key === 'phone' && fieldErrors.phone) {
      setFieldErrors((prev) => ({ ...prev, phone: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Promo variant has its own date/time inputs already inside `values`.
    // Page/compact variants get date/time from the sibling ScheduleCalendar,
    // so pull those in here instead of leaving values.date/values.time empty.
    const effectiveDate = isPromo ? values.date : formatDateValue(scheduledDate);
    const effectiveTime = isPromo ? values.time : scheduledTime ?? '';

    const hasDateAndTime = Boolean(effectiveDate && effectiveTime);
    const emailValid = EMAIL_PATTERN.test(values.email.trim());
    const phoneValid = PHONE_PATTERN.test(values.phone.trim());

    setFieldErrors({
      email: emailValid ? undefined : 'Enter a valid email address.',
      phone: phoneValid ? undefined : 'Enter a valid phone number.',
    });
    setDateTimeError(hasDateAndTime ? null : 'Please pick a date and time before booking.');

    if (!hasDateAndTime || !emailValid || !phoneValid) return;

    onSubmit?.({ ...values, date: effectiveDate, time: effectiveTime });
    setStatus('submitted');
  }

  function handleCancel() {
    setValues(initialValues);
    setDateTimeError(null);
    setFieldErrors({});
    setStatus('idle');
  }

  // Base classes for inputs (used by compact variant - HOMEPAGE BANNER)
  const inputClass =
    'w-full rounded-lg border border-brand-primary/15 bg-white px-4 py-3 text-sm text-text-body placeholder:text-text-body/50 outline-none transition-colors focus:border-brand-primary';
  
  // Specific classes for the "promo" variant (HOMEPAGE CARD) to match Image 1 exactly
  const promoInputClass =
    'w-full rounded-none border border-brand-primary/15 bg-white px-4 py-3 text-sm text-text-body placeholder:text-text-body/50 outline-none transition-colors focus:border-brand-primary';

  // Specific classes for the "page" variant (CONTACT PAGE) to match the target UI exactly
  const pageInputClass =
    'w-full rounded-none border border-brand-primary-dark bg-surface px-4 py-3 text-sm text-text-body placeholder:text-text-body/50 outline-none transition-colors focus:border-accent';
  
  const labelClass = `mb-2 block text-sm font-semibold ${onDark ? 'text-white/90' : 'text-text-heading'}`;
  const pageLabelClass = `mb-2 block text-sm font-bold text-text-heading`;
  
  const srOnlyLabelClass = 'sr-only';
  const errorClass = `mt-3 text-sm font-medium ${onDark ? 'text-accent' : 'text-red-600'}`;
  const fieldErrorClass = `mt-1 text-xs font-medium ${onDark ? 'text-accent' : 'text-red-600'}`;

  if (status === 'submitted') {
    return (
      <div
        className={`flex flex-col items-start gap-3 rounded-2xl p-6 sm:p-8 ${
          onDark ? 'bg-white/10' : 'bg-surface-muted'
        } ${className}`}
      >
        <h3 className={`font-heading text-xl font-bold ${onDark ? 'text-white' : 'text-text-heading'}`}>
          Thanks, {values.fullName.split(' ')[0] || 'there'}!
        </h3>
        <p className={onDark ? 'text-white/80' : 'text-text-body'}>
          We&apos;ve received your request{scheduledSummary ? ` for ${scheduledSummary}` : ''}. A partner will reach
          out shortly to confirm.
        </p>
        <button
          type="button"
          onClick={handleCancel}
          className={
            onDark
              ? 'mt-2 inline-flex h-10 items-center justify-center rounded-lg border border-white/40 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10'
              : 'mt-2 inline-flex h-10 items-center justify-center rounded-lg border border-brand-primary px-5 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white'
          }
        >
          Submit another request
        </button>
      </div>
    );
  }

  if (isPromo) {
    return (
      <form onSubmit={handleSubmit} className={className}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="promo-fullName" className={srOnlyLabelClass}>
              Name *
            </label>
            <input
              id="promo-fullName"
              required
              className={promoInputClass}
              placeholder="Name*"
              value={values.fullName}
              onChange={(e) => update('fullName', e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="promo-company" className={srOnlyLabelClass}>
              Business/Company Name *
            </label>
            <input
              id="promo-company"
              required
              className={promoInputClass}
              placeholder="Business/Company Name*"
              value={values.company}
              onChange={(e) => update('company', e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="promo-email" className={srOnlyLabelClass}>
              Email Address *
            </label>
            <input
              id="promo-email"
              type="email"
              required
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              aria-invalid={Boolean(fieldErrors.email)}
              className={promoInputClass}
              placeholder="Email Address*"
              value={values.email}
              onChange={(e) => update('email', e.target.value)}
            />
            {fieldErrors.email && (
              <p className={fieldErrorClass} role="alert">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="promo-phone" className={srOnlyLabelClass}>
              Contact Number *
            </label>
            <input
              id="promo-phone"
              type="tel"
              required
              pattern="\+?[0-9\s-]{7,15}"
              aria-invalid={Boolean(fieldErrors.phone)}
              className={promoInputClass}
              placeholder="+92**************"
              value={values.phone}
              onChange={(e) => update('phone', e.target.value)}
            />
            {fieldErrors.phone && (
              <p className={fieldErrorClass} role="alert">
                {fieldErrors.phone}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="promo-service" className={srOnlyLabelClass}>
              Services of Interest *
            </label>
            <select
              id="promo-service"
              required
              className={`${promoInputClass} ${values.service ? '' : 'text-text-body/50'}`}
              value={values.service}
              onChange={(e) => update('service', e.target.value)}
            >
              <option value="" disabled>
                Service of Interest*
              </option>
              {siteConfig.footer.services.map(({ label }) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          

                    {/* Textarea Wrapper - Left Side */}
          <div className="sm:col-span-1 flex flex-col">
            <label htmlFor="promo-message" className={srOnlyLabelClass}>
              Describe your project *
            </label>
            <textarea
              id="promo-message"
              required
              className={`${promoInputClass} flex-1 min-h-[150px] resize-none`} // min-height barha di taake right side stretch ho sake
              placeholder="Describe Your Project*"
              value={values.message}
              onChange={(e) => update('message', e.target.value)}
            />
          </div>

          {/* Right Side Column - Grid rows-2 ensures equal height for both fields */}
          <div className="sm:col-span-1 grid grid-rows-2 gap-4 h-full">
            
            {/* DATE - h-full fills its half */}
            <div className="relative h-full">
              <label htmlFor="promo-date" className={srOnlyLabelClass}>
                Select Date
              </label>
              <input
                id="promo-date"
                type="date"
                required
                min={todayISO}
                className={`${promoInputClass} h-full ${values.date ? '' : 'text-transparent'}`}
                value={values.date}
                onChange={(e) => update('date', e.target.value)}
              />
              {!values.date && (
                <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-text-body/50">
                  Select Date
                </div>
              )}
            </div>

            {/* TIME - h-full fills its half */}
            <div className="h-full">
              <label htmlFor="promo-time" className={srOnlyLabelClass}>
                Select Time Slot
              </label>
              <select
                id="promo-time"
                required
                className={`${promoInputClass} h-full ${values.time ? '' : 'text-text-body/50'}`}
                value={values.time}
                onChange={(e) => update('time', e.target.value)}
              >
                <option value="" disabled>
                  Select Time Slot
                </option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        <button
          type="submit"
          className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-none bg-accent text-sm font-semibold text-text-heading transition-colors hover:bg-accent/90"
        >
          Book Consultation
        </button>
        {dateTimeError && (
          <p className={errorClass} role="alert">
            {dateTimeError}
          </p>
        )}
      </form>
    );
  }

  // --- PAGE VARIANT (CONTACT PAGE UI ONLY) ---
  return (
    <form
      onSubmit={handleSubmit}
      className={`${isCompact ? '' : 'rounded-none border border-brand-primary-dark bg-surface-muted p-6 sm:p-8'} ${className}`}
    >
      <div className={isCompact ? 'grid grid-cols-1 gap-5 sm:grid-cols-2' : 'flex flex-col gap-5'}>
        <div>
          <label htmlFor={`${variant}-fullName`} className={isCompact ? labelClass : pageLabelClass}>
            Full Name *
          </label>
          <input
            id={`${variant}-fullName`}
            required
            className={isCompact ? inputClass : pageInputClass}
            placeholder="Full Name"
            value={values.fullName}
            onChange={(e) => update('fullName', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor={`${variant}-email`} className={isCompact ? labelClass : pageLabelClass}>
            Working Email *
          </label>
          <input
            id={`${variant}-email`}
            type="email"
            required
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
            aria-invalid={Boolean(fieldErrors.email)}
            className={isCompact ? inputClass : pageInputClass}
            placeholder="Working Email"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
          />
          {fieldErrors.email && (
            <p className={fieldErrorClass} role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${variant}-company`} className={isCompact ? labelClass : pageLabelClass}>
            Business/Company Name *
          </label>
          <input
            id={`${variant}-company`}
            required
            className={isCompact ? inputClass : pageInputClass}
            placeholder="Business/Company Name"
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor={`${variant}-phone`} className={isCompact ? labelClass : pageLabelClass}>
            Contact Number *
          </label>
          <input
            id={`${variant}-phone`}
            type="tel"
            required
            pattern="\+?[0-9\s-]{7,15}"
            aria-invalid={Boolean(fieldErrors.phone)}
            className={isCompact ? inputClass : pageInputClass}
            placeholder="Contact Number"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
          {fieldErrors.phone && (
            <p className={fieldErrorClass} role="alert">
              {fieldErrors.phone}
            </p>
          )}
        </div>

        <div className={isCompact ? 'sm:col-span-2' : undefined}>
          <label htmlFor={`${variant}-service`} className={isCompact ? labelClass : pageLabelClass}>
            Services of Interest *
          </label>
          <select
            id={`${variant}-service`}
            required
            className={`${isCompact ? inputClass : pageInputClass} ${values.service ? '' : 'text-text-body/50'}`}
            value={values.service}
            onChange={(e) => update('service', e.target.value)}
          >
            <option value="" disabled>
              Select a Service
            </option>
            {siteConfig.footer.services.map(({ label }) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {!isCompact && (
          <div>
            <label htmlFor={`${variant}-message`} className={pageLabelClass}>
              Describe your project
            </label>
            <textarea
              id={`${variant}-message`}
              required
              rows={5}
              className={`${pageInputClass} resize-none`}
              placeholder="Please share your project requirements."
              value={values.message}
              onChange={(e) => update('message', e.target.value)}
            />
          </div>
        )}
      </div>

      {scheduledSummary && (
        <p className={`mt-4 text-sm font-medium ${isCompact ? 'text-accent' : 'text-brand-primary'}`}>
          Selected slot: {scheduledSummary}
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={handleCancel}
          className={
            isCompact
              ? 'inline-flex h-11 items-center justify-center rounded-lg border border-white/40 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10'
              : 'inline-flex h-11 items-center justify-center rounded-sm border border-brand-primary-dark bg-accent/20 px-6 text-sm font-semibold text-brand-primary-dark transition-colors hover:bg-accent/30'
          }
        >
          Cancel submission
        </button>
        <button
          type="submit"
          className={
            isCompact
              ? 'inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-brand-primary-dark transition-colors hover:bg-accent/90'
              : 'inline-flex h-11 items-center justify-center rounded-sm bg-brand-primary-dark px-6 text-sm font-semibold text-text-inverse transition-colors hover:bg-brand-primary'
          }
        >
          Book Consultation
        </button>
      </div>

      {dateTimeError && (
        <p className={errorClass} role="alert">
          {dateTimeError}
        </p>
      )}
    </form>
  );
}