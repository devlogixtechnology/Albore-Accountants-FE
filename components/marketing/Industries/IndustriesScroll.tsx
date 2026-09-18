'use client';

import { useEffect, useRef, useState } from 'react';

const MIN_FILL_PERCENT = 17; 

export function ScrollFillLine() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [fillPercent, setFillPercent] = useState(MIN_FILL_PERCENT);

    useEffect(() => {
        function handleScroll() {
            const el = containerRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const viewportCenter = window.innerHeight * 0.5;
            const scrolledPast = viewportCenter - rect.top;
            const percent = Math.min(100, Math.max(MIN_FILL_PERCENT, (scrolledPast / rect.height) * 100));
            setFillPercent(percent);
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-brand-primary-dark/15 md:block"
        >
            <div
                className="w-full bg-brand-primary-dark"
                style={{ height: `${fillPercent}%` }}
            />
        </div>
    );
}

