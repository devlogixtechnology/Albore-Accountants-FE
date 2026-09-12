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

const STEP_MS = 120;

export function StatsBar({
  stats = DEFAULT_STATS,
  className = "",
}: {
  stats?: Stat[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  const durationMs =
    STEP_MS * (Math.max(...stats.map((s) => s.sequence.length), 2) - 1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setStarted(true);
      return;
    }

    let inView = false;
    let scrolled =
      window.scrollY > 0 ||
      document.documentElement.scrollHeight <= window.innerHeight;

    function cleanup() {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    }

    function maybeStart() {
      if (inView && scrolled) {
        setStarted(true);
        cleanup();
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
      { threshold: 0.5 },
    );

    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    return cleanup;
  }, []);

  return (
    <div
      ref={ref}
      className={`mx-auto w-full max-w-[1028px] bg-maroon-deep px-4 py-7 sm:px-8 sm:py-8 ${className}`}
    >
      <dl className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-y-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="relative flex flex-col items-center gap-1.5 px-1 text-center sm:gap-2 sm:px-2"
          >
            {i > 0 && (
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1/2 h-11 w-px -translate-y-1/2 bg-gold ${
                  i === 2 ? "hidden sm:block" : ""
                }`}
              />
            )}
            <dt className="order-2 text-[11px] font-bold uppercase leading-tight tracking-[0.04em] text-white sm:text-[13px] lg:text-[15px]">
              {stat.label}
            </dt>
            <dd className="order-1 text-[34px] font-bold leading-none text-white tabular-nums sm:text-[42px] lg:text-[52px]">
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

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(sequence.length - 1);
      return;
    }

    const interval = durationMs / (sequence.length - 1);

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setStep(i);
      if (i >= sequence.length - 1) clearInterval(id);
    }, interval);
    return () => clearInterval(id);
  }, [run, sequence, durationMs]);

  const value = sequence[Math.min(step, sequence.length - 1)];
  return (
    <>
      {String(value).padStart(pad, "0")}
      {suffix}
    </>
  );
}
