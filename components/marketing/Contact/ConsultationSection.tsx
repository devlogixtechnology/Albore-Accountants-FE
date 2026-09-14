'use client';

import { useState } from 'react';
import ConsultationForm from './ConsultationForm';
import ScheduleCalendar from './ScheduleCalendar';

export interface ConsultationSectionProps {
  /** "page" — full contact page (form + photo + calendar/time). "home" — compact homepage banner. */
  variant?: 'page' | 'home';
  className?: string;
}

const OFFICE_IMAGE =
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80';

const HOME_BENEFITS = [
  'No obligation, first consultation is free',
  'Response within 4 business hours',
  'Senior-partner oversight on every engagement',
];

export default function ConsultationSection({ variant = 'page', className = '' }: ConsultationSectionProps) {
  const [scheduled, setScheduled] = useState<{ date: Date | null; time: string | null }>({
    date: null,
    time: null,
  });

  const scheduledSummary =
    scheduled.date && scheduled.time
      ? `${scheduled.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} at ${scheduled.time}`
      : null;

  if (variant === 'home') {
    return (
      <section
        className={`bg-brand-primary px-6 py-14 sm:px-10 sm:py-16 ${className}`}
        aria-labelledby="book-consultation-heading"
      >
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Free Initial Consultation</p>
            <h2 id="book-consultation-heading" className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s Begin Your Financial Journey
            </h2>
            <p className="mt-4 text-white/80">
              Whether you need back-office support, audit-ready accounts, or strategic advisory, our team is ready
              to listen.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {HOME_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-white/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <ConsultationForm variant="promo" />
        </div>
      </section>
    );
  }

  return (
    <section className={`grid gap-10 lg:grid-cols-2 ${className}`} aria-labelledby="book-consultation-heading">
      <div>
        <h1 id="book-consultation-heading" className="font-heading text-3xl font-bold text-text-heading sm:text-4xl">
          Let&apos;s Talk About How We Can Help
        </h1>
        <p className="mt-4 max-w-md text-text-body">
          Share your requirements and our experts will get in touch with you to explore the best solutions for your
          business.
        </p>
        <ConsultationForm
          variant="page"
          className="mt-8"
          scheduledSummary={scheduledSummary}
          scheduledDate={scheduled.date}
          scheduledTime={scheduled.time}
        />
      </div>

      <div className="flex flex-col gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element -- external stock photo, avoids next.config remotePatterns setup */}
        <img
          src={OFFICE_IMAGE}
          alt="Albore Accountants office"
          className="h-64 w-full rounded-2xl object-cover sm:h-72"
        />
        <ScheduleCalendar onChange={(date, time) => setScheduled({ date, time })} />
      </div>
    </section>
  );
}
