'use client';

import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TIME_SLOTS } from '@/data/Contact/contact';

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];


interface Cell {
  day: number;
  inMonth: boolean;
}

export interface ScheduleCalendarProps {
  className?: string;
  theme?: 'light' | 'dark';
  layout?: 'stacked' | 'row';
  onChange?: (date: Date | null, time: string | null) => void;
}

export default function ScheduleCalendar({
  className = '',
  theme = 'light',
  layout = 'stacked',
  onChange,
}: ScheduleCalendarProps) {
  const today = useMemo(() => new Date(), []);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const [selectedDate, setSelectedDate] = useState<number | null>(
    today.getDate(),
  );

  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const isDark = theme === 'dark';

  const isPastDate = (day: number) => {
    const cellDate = new Date(viewYear, viewMonth, day);
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return cellDate < todayMidnight;
  };

  const isAtCurrentMonth =
    viewYear === today.getFullYear() && viewMonth === today.getMonth();

  const cells = useMemo<Cell[]>(() => {
    const firstWeekday = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

    const result: Cell[] = [];

    for (let i = firstWeekday - 1; i >= 0; i--) {
      result.push({
        day: daysInPrevMonth - i,
        inMonth: false,
      });
    }

    for (let d = 1; d <= daysInMonth; d++) {
      result.push({
        day: d,
        inMonth: true,
      });
    }

    let nextDay = 1;

    while (result.length % 7 !== 0) {
      result.push({
        day: nextDay++,
        inMonth: false,
      });
    }

    return result;
  }, [viewMonth, viewYear]);

  const isToday = (day: number) =>
    day === today.getDate() &&
    viewMonth === today.getMonth() &&
    viewYear === today.getFullYear();

  function selectDate(day: number) {
    setSelectedDate(day);
    onChange?.(new Date(viewYear, viewMonth, day), selectedTime);
  }

  function selectTime(time: string) {
    setSelectedTime(time);
    onChange?.(
      selectedDate ? new Date(viewYear, viewMonth, selectedDate) : null,
      time,
    );
  }

  function changeMonth(delta: number) {
    let month = viewMonth + delta;
    let year = viewYear;

    if (month < 0) {
      month = 11;
      year -= 1;
    } else if (month > 11) {
      month = 0;
      year += 1;
    }

    setViewMonth(month);
    setViewYear(year);
    setSelectedDate(null);
  }

  /*
   * ==========================================================
   * GLOBAL DESIGN SYSTEM STYLES
   * ==========================================================
   */

  const cardClass = isDark
    ? 'rounded-[20px] bg-white/10 p-5'
    : 'rounded-[20px] bg-surface-muted p-5';

  const headingClass = `
    mb-5
    text-center
    font-heading
    text-[22px]
    font-semibold
    ${isDark ? 'text-text-inverse' : 'text-text-heading'}
  `;

  const navButtonClass = `
    flex
    h-8
    w-8
    items-center
    justify-center
    rounded-full
    transition-colors
    ${isDark
      ? 'text-text-inverse hover:bg-white/10'
      : 'text-text-heading hover:bg-white/60'
    }
  `;

  const selectClass = `
    h-7
    w-full
    rounded-md
    border-0
    bg-surface
    px-2
    text-xs
    font-body
    font-medium
    text-text-heading
    outline-none
  `;

  const weekdayClass = `
    grid
    grid-cols-7
    text-center
    text-[10px]
    font-body
    font-semibold
    ${isDark ? 'text-text-accent' : 'text-brand-primary'}
  `;

  const wrapperClass =
    layout === 'row'
      ? 'grid grid-cols-1 gap-6 sm:grid-cols-2'
      : 'flex flex-col gap-8';

  /*
   * ==========================================================
   * RENDER
   * ==========================================================
   */

  return (
    <div className={className}>
      <div className={wrapperClass}>

        {/* ================= DATE CARD ================= */}

        <div className={cardClass}>

          <h3 className={headingClass}>
            Select date
          </h3>

          {/* Inner calendar panel - REVERTED TO p-3 */}
          <div
            className={`
              rounded-[15px]
              border
              p-3
              ${isDark
                ? 'border-white/20 bg-white/10'
                : 'border-brand-primary/60 bg-accent/30'
              }
            `}
          >

            {/* Month / Year Navigation - STAYS AT THE EDGE */}
            <div className="mb-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => changeMonth(-1)}
                aria-label="Previous month"
                disabled={isAtCurrentMonth}
                className={`${navButtonClass} ${isAtCurrentMonth ? 'cursor-not-allowed opacity-30 hover:bg-transparent' : ''}`}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex flex-1 gap-2">
                <select
                  value={viewMonth}
                  onChange={(e) => setViewMonth(Number(e.target.value))}
                  aria-label="Month"
                  className={selectClass}
                >
                  {MONTHS.map((month, index) => (
                    <option key={month} value={index}>
                      {month}
                    </option>
                  ))}
                </select>

                <select
                  value={viewYear}
                  onChange={(e) => setViewYear(Number(e.target.value))}
                  aria-label="Year"
                  className={selectClass}
                >
                  {[viewYear - 1, viewYear, viewYear + 1].map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={() => changeMonth(1)}
                aria-label="Next month"
                className={navButtonClass}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

           
            <div className={`${weekdayClass} mb-1 px-20`}>
              {WEEKDAYS.map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>

            
            <div className="grid grid-cols-7 gap-y-0 px-20">
              {cells.map((cell, index) => {
                const selected = cell.inMonth && selectedDate === cell.day;
                const todayCell = cell.inMonth && isToday(cell.day) && !selected;
                const past = cell.inMonth && isPastDate(cell.day);

                return (
                  <button
                    type="button"
                    key={index}
                    disabled={!cell.inMonth || past}
                    onClick={() => cell.inMonth && !past && selectDate(cell.day)}
                    className={[
                      `
                        mx-auto
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-md
                        font-body
                        text-xs
                        transition-all
                      `,
                      !cell.inMonth
                        ? isDark
                          ? 'cursor-default text-white/25'
                          : 'cursor-default text-text-body/30'
                        : '',
                      past
                        ? isDark
                          ? 'cursor-not-allowed text-white/25'
                          : 'cursor-not-allowed text-text-body/30'
                        : '',
                      cell.inMonth && !selected && !past
                        ? isDark
                          ? 'text-text-inverse hover:bg-white/10'
                          : 'text-text-heading hover:bg-white/30'
                        : '',
                      selected
                        ? isDark
                          ? 'bg-accent text-brand-primary-dark'
                          : 'bg-brand-primary-dark text-text-inverse'
                        : '',
                      todayCell
                        ? isDark
                          ? 'bg-white/20'
                          : 'bg-accent'
                        : '',
                    ].join(' ')}
                  >
                    {cell.day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>


        {/* ================= TIME CARD ================= */}

        <div className={cardClass}>
          <h3 className={headingClass}>Select Time</h3>

          <div className="grid grid-cols-3 gap-5">
            {TIME_SLOTS.map((time) => {
              const selected = selectedTime === time;

              return (
                <button
                  type="button"
                  key={time}
                  onClick={() => selectTime(time)}
                  className={[
                    `
                      flex
                      h-12
                      items-center
                      justify-center
                      rounded-lg
                      border
                      px-3
                      font-body
                      text-xs
                      font-medium
                      transition-all
                    `,
                    selected
                      ? 'border-brand-primary bg-accent text-text-inverse'
                      : 'border-brand-primary/60 bg-surface text-text-heading hover:border-brand-primary hover:bg-surface-muted',
                  ].join(' ')}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Selected value */}
      <p
        className={`
          mt-4
          text-center
          font-body
          text-sm
          font-medium
          ${
            selectedDate && selectedTime
              ? isDark
                ? 'text-text-accent'
                : 'text-brand-primary'
              : isDark
                ? 'text-white/60'
                : 'text-text-body/70'
          }
        `}
        aria-live="polite"
      >
      </p>

    </div>
  );
}