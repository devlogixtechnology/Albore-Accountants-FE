'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { consultationServices, formCopyData, formValidationCopy } from '@/data/Contact/contact';

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
  className?: string;
  id?: string;
  hideSubmit?: boolean;
  scheduledSummary?: string | null;
  scheduledDate?: Date | null;
  scheduledTime?: string | null;
  onSubmit?: (values: ConsultationFormValues) => void;
}

// Basic client-side format checks — not exhaustive validation, just catches
// obviously malformed input before it reaches the backend.
const { patterns, errors: validationErrors, placeholders } = formValidationCopy;

type FieldName = 'fullName' | 'email' | 'company' | 'phone' | 'service' | 'message';

type FieldErrors = Partial<Record<FieldName, string>>;

// Order matters here — this is the order the browser would normally
// walk through the form to find the first invalid field.
const FIELD_ORDER: FieldName[] = ['fullName', 'email', 'company', 'phone', 'service', 'message'];

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

// Returns an error message for a single field, or undefined if it's valid.
function validateField(key: FieldName, values: ConsultationFormValues): string | undefined {
  switch (key) {
    case 'fullName':
      if (!values.fullName.trim()) return validationErrors.fullNameRequired;
      if (values.fullName.trim().length < 2) return validationErrors.fullNameShort;
      return undefined;
    case 'email':
      if (!values.email.trim()) return validationErrors.emailRequired;
      if (!patterns.email.test(values.email.trim())) return validationErrors.emailInvalid;
      return undefined;
    case 'company':
      if (!values.company.trim()) return validationErrors.companyRequired;
      return undefined;
    case 'phone':
      if (!values.phone.trim()) return validationErrors.phoneRequired;
      if (!patterns.phone.test(values.phone.trim())) return validationErrors.phoneInvalid;
      return undefined;
    case 'service':
      if (!values.service) return validationErrors.serviceRequired;
      return undefined;
    case 'message':
      if (!values.message.trim()) return validationErrors.messageRequired;
      return undefined;
    default:
      return undefined;
  }
}

export default function ConsultationForm({
  className = '',
  id,
  hideSubmit = false,
  scheduledSummary,
  scheduledDate,
  scheduledTime,
  onSubmit,
}: ConsultationFormProps) {
  const [values, setValues] = useState<ConsultationFormValues>(initialValues);
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const [dateTimeError, setDateTimeError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // Refs to each input so we can manually focus + scroll to the first
  // invalid one on submit (native behavior is gone because of noValidate).
  const fieldRefs = useRef<Partial<Record<FieldName, HTMLElement | null>>>({});

  function update<K extends keyof ConsultationFormValues>(key: K, value: ConsultationFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (dateTimeError) setDateTimeError(null);

    // Re-validate this field live so the red message clears/updates as the user types.
    if (key === 'fullName' || key === 'email' || key === 'company' || key === 'phone' || key === 'service' || key === 'message') {
      setFieldErrors((prev) => ({
        ...prev,
        [key]: validateField(key, { ...values, [key]: value }),
      }));
    }
  }

  // Auto-clear date/time error jab dono values mojood ho jayein
  useEffect(() => {
    const effectiveDate = formatDateValue(scheduledDate);
    const effectiveTime = scheduledTime ?? '';

    if (effectiveDate && effectiveTime && dateTimeError) {
      setDateTimeError(null);
    }
  }, [scheduledDate, scheduledTime, dateTimeError]);

  function focusFirstInvalidField(errors: FieldErrors) {
    const firstErrorKey = FIELD_ORDER.find((key) => errors[key]);
    if (!firstErrorKey) return;

    const el = fieldRefs.current[firstErrorKey];
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Slight delay so the scroll has started before focus jumps the viewport again.
    window.setTimeout(() => el.focus(), 300);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Date/time comes from the sibling ScheduleCalendar, not from this form.
    const effectiveDate = formatDateValue(scheduledDate);
    const effectiveTime = scheduledTime ?? '';
    const hasDateAndTime = Boolean(effectiveDate && effectiveTime);

    const nextFieldErrors: FieldErrors = {
      fullName: validateField('fullName', values),
      email: validateField('email', values),
      company: validateField('company', values),
      phone: validateField('phone', values),
      service: validateField('service', values),
      message: validateField('message', values),
    };

    setFieldErrors(nextFieldErrors);
    setDateTimeError(hasDateAndTime ? null : validationErrors.dateTimeRequired);

    const hasFieldErrors = Object.values(nextFieldErrors).some(Boolean);
    if (!hasDateAndTime || hasFieldErrors) {
      // Prioritize jumping to an invalid field over the date/time error,
      // matching what the browser used to do first.
      if (hasFieldErrors) {
        focusFirstInvalidField(nextFieldErrors);
      }
      return;
    }

    onSubmit?.({ ...values, date: effectiveDate, time: effectiveTime });
    setStatus('submitted');
  }

  function handleCancel() {
    setValues(initialValues);
    setDateTimeError(null);
    setFieldErrors({});
    setStatus('idle');
  }

  const pageInputClass =
    'w-full rounded-none border-0 border-b border-text-body/25 bg-transparent px-0 py-2.5 text-sm text-text-heading placeholder:text-text-body/40 outline-none transition-colors focus:border-brand-primary';

  const pageInputErrorClass = 'border-red-500 focus:border-red-500';

  const pageLabelClass = 'mb-1 block text-sm font-normal text-text-body/60';

  const errorClass = 'mt-3 text-sm font-medium text-red-600';
  const fieldErrorClass = 'mt-1 text-xs font-medium text-red-600';

  if (status === 'submitted') {
    return (
      <div className={`flex flex-col items-start gap-3 rounded-2xl bg-surface-muted p-6 sm:p-8 ${className}`}>
        <h3 className="font-heading text-xl font-bold text-text-heading">
          {formCopyData.successState.title}
        </h3>
        <p className="text-text-body">
          {formCopyData.successState.message}
          {scheduledSummary ? ` ${formValidationCopy.prefixes.selectedSlot}: ${scheduledSummary}.` : ''}
        </p>
        <button
          type="button"
          onClick={handleCancel}
          className="mt-2 inline-flex h-10 items-center justify-center rounded-lg border border-brand-primary px-5 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
        >
          {formCopyData.actions.reset}
        </button>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} noValidate className={`flex flex-col gap-5 ${className}`}>
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="page-fullName" className={pageLabelClass}>
            {formCopyData.fields.fullName} *
          </label>
          <input
            id="page-fullName"
            ref={(el) => { fieldRefs.current.fullName = el; }}
            aria-invalid={Boolean(fieldErrors.fullName)}
            className={`${pageInputClass} ${fieldErrors.fullName ? pageInputErrorClass : ''}`}
            value={values.fullName}
            onChange={(e) => update('fullName', e.target.value)}
          />
          {fieldErrors.fullName && (
            <p className={fieldErrorClass} role="alert">
              {fieldErrors.fullName}
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
            ref={(el) => { fieldRefs.current.email = el; }}
            aria-invalid={Boolean(fieldErrors.email)}
            className={`${pageInputClass} ${fieldErrors.email ? pageInputErrorClass : ''}`}
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
          <label htmlFor="page-company" className={pageLabelClass}>
            {formCopyData.fields.company} *
          </label>
          <input
            id="page-company"
            ref={(el) => { fieldRefs.current.company = el; }}
            aria-invalid={Boolean(fieldErrors.company)}
            className={`${pageInputClass} ${fieldErrors.company ? pageInputErrorClass : ''}`}
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
          />
          {fieldErrors.company && (
            <p className={fieldErrorClass} role="alert">
              {fieldErrors.company}
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
            ref={(el) => { fieldRefs.current.phone = el; }}
            aria-invalid={Boolean(fieldErrors.phone)}
            className={`${pageInputClass} ${fieldErrors.phone ? pageInputErrorClass : ''}`}
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
          {fieldErrors.phone && (
            <p className={fieldErrorClass} role="alert">
              {fieldErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="page-service" className={pageLabelClass}>
            {formCopyData.fields.service} *
          </label>
          <select
            id="page-service"
            ref={(el) => { fieldRefs.current.service = el; }}
            aria-invalid={Boolean(fieldErrors.service)}
            className={`${pageInputClass} ${fieldErrors.service ? pageInputErrorClass : ''} ${values.service ? '' : 'text-text-body/50'}`}
            value={values.service}
            onChange={(e) => update('service', e.target.value)}
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
          {fieldErrors.service && (
            <p className={fieldErrorClass} role="alert">
              {fieldErrors.service}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="page-message" className={pageLabelClass}>
            {formCopyData.fields.message}
          </label>
          <textarea
            id="page-message"
            rows={5}
            ref={(el) => { fieldRefs.current.message = el; }}
            aria-invalid={Boolean(fieldErrors.message)}
            className={`${pageInputClass} resize-none ${fieldErrors.message ? pageInputErrorClass : ''}`}
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
          />
          {fieldErrors.message && (
            <p className={fieldErrorClass} role="alert">
              {fieldErrors.message}
            </p>
          )}
        </div>
      </div>

      {scheduledSummary && (
        <p className="mt-4 text-sm font-medium text-brand-primary">
          {formValidationCopy.prefixes.selectedSlot}: {scheduledSummary}
        </p>
      )}

      {!hideSubmit && (
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="inline-flex h-11 items-center justify-center rounded-sm border border-brand-primary-dark bg-accent/20 px-6 text-sm font-semibold text-brand-primary-dark transition-colors hover:bg-accent/30"
          >
            Cancel submission
          </button>
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-sm bg-brand-primary-dark px-6 text-sm font-semibold text-text-inverse transition-colors hover:bg-brand-primary"
          >
            {formCopyData.actions.submit}
          </button>
        </div>
      )}

      {dateTimeError && (
        <p className={errorClass} role="alert">
          {dateTimeError}
        </p>
      )}
    </form>
  );
}