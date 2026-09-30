"use client";

import { useEffect, useRef, useState } from "react";

export type Stat = {
  sequence: number[];
  label: string;
  pad?: number;
  suffix?: string;
};

const ramp = (from: number, to: number, step: number) => {
  const out: number[] = [];
  for (let v = from; v <= to; v += step) out.push(v);
  return out;
};

export const DEFAULT_STATS: Stat[] = [
  { sequence: ramp(20, 120, 20), label: "Client Worldwide" },
  { sequence: ramp(1, 10, 1), label: "Year of Practice", pad: 2 },
  { sequence: ramp(18, 98, 10), label: "Client Retention Rate" },
  { sequence: [10, 15, 18, 20], label: "Countries Served" },
];

export type StatsBarProps = {
  stats?: Stat[];
  className?: string;
  variant?: "solid" | "blur";
};

const STEP_MS = 120;

export function StatsBar({
  stats = DEFAULT_STATS,
  className = "",
  variant = "solid",
}: StatsBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  const durationMs =
    STEP_MS * (Math.max(...stats.map((s) => s.sequence.length), 2) - 1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      queueMicrotask(() => {
        if (!cancelled) setStarted(true);
      });
      return () => {
        cancelled = true;
      };
    }

    let inView = false;
    let scrolled =
      window.scrollY > 0 ||
      document.documentElement.scrollHeight <= window.innerHeight;

    function cleanup() {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    }

    function maybeStart() {
      if (inView && scrolled && !cancelled) {
        setStarted(true);
      }
    }

    function onScroll() {
      scrolled = true;
      maybeStart();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        inView = entries.some((e) => e.isIntersecting);
        maybeStart();
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    return cleanup;
  }, []);

  if (variant === "blur") {
    return (
      <div
        ref={ref}
        className={`w-full bg-black/20 backdrop-blur-xs sm:backdrop-blur-sm border-t border-white/15 ${className}`}
      >
        <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-3 sm:py-3.5 md:py-4">
          <dl className="grid grid-cols-4 gap-x-2 sm:gap-x-6 lg:gap-x-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative flex flex-col items-center justify-center px-1 text-center sm:px-2"
              >
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1/2 h-6 sm:h-7 md:h-8 w-px -translate-y-1/2 bg-white/20"
                  />
                )}
                <dt className="order-2 text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-semibold uppercase leading-tight tracking-[0.04em] sm:tracking-[0.06em] text-white/90 mt-1 sm:mt-1.5 max-w-[150px]">
                  {stat.label}
                </dt>
                <dd className="order-1 font-heading text-[20px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-bold leading-none text-white tabular-nums tracking-tight">
                  <StatValue stat={stat} run={started} durationMs={durationMs} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`mx-auto w-full max-w-[1028px] bg-maroon-deep px-2 py-3.5 sm:px-6 sm:py-6 md:px-8 md:py-8 ${className}`}
    >
      <dl className="grid grid-cols-4 gap-x-1 sm:gap-x-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="relative flex flex-col items-center justify-center gap-0.5 px-1 text-center sm:gap-2 sm:px-2"
          >
            {i > 0 && (
              <span
                aria-hidden="true"
                className="absolute left-0 top-1/2 h-6 sm:h-9 md:h-11 w-px -translate-y-1/2 bg-gold/50 sm:bg-gold"
              />
            )}
            <dt className="order-2 text-[8px] sm:text-[11px] md:text-[13px] lg:text-[15px] font-bold uppercase leading-tight tracking-[0.02em] text-white/90 sm:tracking-[0.04em]">
              {stat.label}
            </dt>
            <dd className="order-1 text-[20px] sm:text-[32px] md:text-[42px] lg:text-[52px] font-bold leading-tight text-white tabular-nums">
              <StatValue stat={stat} run={started} durationMs={durationMs} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function StatValue({
  stat,
  run,
  durationMs,
}: {
  stat: Stat;
  run: boolean;
  durationMs: number;
}) {
  const { sequence, pad = 0, suffix = "+" } = stat;
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!run || sequence.length < 2) return;

    let cancelled = false;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      queueMicrotask(() => {
        if (!cancelled) setStep(sequence.length - 1);
      });
      return () => {
        cancelled = true;
      };
    }

    const interval = durationMs / (sequence.length - 1);

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      if (!cancelled) setStep(i);
      if (i >= sequence.length - 1) clearInterval(id);
    }, interval);

    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [run, sequence, durationMs]);

  const value = sequence[Math.min(step, sequence.length - 1)];
  return (
    <>
      {String(value).padStart(pad, "0")}
      {suffix}
    </>
  );
}
