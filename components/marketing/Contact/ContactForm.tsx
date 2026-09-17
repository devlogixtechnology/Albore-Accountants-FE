'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import ConsultationForm from './ConsultationForm';
import ScheduleCalendar from './ScheduleCalendar';
import { contactHubData, contactPageIntroData, formCopyData } from '@/data/Contact/contact';

export interface ConsultationSectionProps {
  className?: string;
}

const CONSULTATION_FORM_ID = 'consultation-page-form';

export default function ConsultationSection({ className = '' }: ConsultationSectionProps) {
  const [scheduled, setScheduled] = useState<{ date: Date | null; time: string | null }>({
    date: null,
    time: null,
  });

  // Bumping this forces ScheduleCalendar to remount, which clears its
  // internal selected date/time back to a fresh state after a submit.
  const [calendarResetKey, setCalendarResetKey] = useState(0);

  const scheduledSummary =
    scheduled.date && scheduled.time
      ? `${scheduled.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} at ${scheduled.time}`
      : null;

  function handleFormSubmit() {
    setScheduled({ date: null, time: null });
    setCalendarResetKey((key) => key + 1);
  }

  return (
    <section
      className={`flex flex-col gap-10 px-6 py-12 sm:px-10 lg:px-16 ${className}`}
      aria-labelledby="book-consultation-heading"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h1 id="book-consultation-heading" className="font-heading text-3xl font-bold text-text-heading sm:text-4xl">
              {contactPageIntroData.titlePrefix}
            </h1>
            <p className="mt-4 max-w-md text-text-body">{contactPageIntroData.description}</p>

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

          <ConsultationForm
            id={CONSULTATION_FORM_ID}
            hideSubmit
            scheduledSummary={scheduledSummary}
            scheduledDate={scheduled.date}
            scheduledTime={scheduled.time}
            onSubmit={handleFormSubmit}
          />
        </div>

        <ScheduleCalendar
          key={calendarResetKey}
          layout="row"
          onChange={(date, time) => setScheduled({ date, time })}
        />

        <div className="flex justify-center">
          <button
            type="submit"
            form={CONSULTATION_FORM_ID}
            className="inline-flex h-12 items-center justify-center rounded-lg bg-gold-light px-10 text-sm font-semibold uppercase tracking-wider text-text-inverse transition-colors hover:bg-gold"
          >
            {formCopyData.actions.submit}
          </button>
        </div>
      </div>
    </section>
  );
}
