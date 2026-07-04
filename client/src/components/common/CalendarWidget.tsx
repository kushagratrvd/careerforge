import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  // Convert Sunday=0 to Monday-based (Mon=0, Sun=6)
  return day === 0 ? 6 : day - 1;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

interface CalendarWidgetProps {
  /** Days with events/highlights (1-indexed) */
  highlightedDays?: number[];
}

export default function CalendarWidget({
  highlightedDays = [2, 11, 18],
}: CalendarWidgetProps) {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const daysInPrevMonth = getDaysInMonth(
    currentMonth === 0 ? currentYear - 1 : currentYear,
    currentMonth === 0 ? 11 : currentMonth - 1
  );

  const todayDate =
    today.getFullYear() === currentYear && today.getMonth() === currentMonth
      ? today.getDate()
      : null;

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  }

  // Build calendar grid
  const cells: { day: number; isCurrentMonth: boolean }[] = [];

  // Previous month trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, isCurrentMonth: false });
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, isCurrentMonth: true });
  }

  // Next month leading days
  const remaining = 7 - (cells.length % 7);
  if (remaining < 7) {
    for (let i = 1; i <= remaining; i++) {
      cells.push({ day: i, isCurrentMonth: false });
    }
  }

  return (
    <div className="bg-white p-6 rounded-3xl custom-shadow border border-slate-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          className="p-1 hover:bg-slate-50 rounded text-slate-400"
          onClick={prevMonth}
          aria-label="Previous month"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="font-bold">
          {MONTH_NAMES[currentMonth]} {currentYear}
        </h3>
        <button
          className="p-1 hover:bg-slate-50 rounded text-slate-400"
          onClick={nextMonth}
          aria-label="Next month"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 text-center text-[10px] text-slate-400 font-bold uppercase mb-4">
        {DAYS.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 text-center text-sm gap-y-3 font-medium">
        {cells.map((cell, idx) => {
          if (!cell.isCurrentMonth) {
            return (
              <span key={`pad-${idx}`} className="text-slate-300">
                {cell.day}
              </span>
            );
          }

          const isToday = cell.day === todayDate;
          const isHighlighted = highlightedDays.includes(cell.day);

          let className = "";
          if (isToday) {
            className =
              "bg-indigo-600 text-white rounded-lg p-1";
          } else if (isHighlighted) {
            className =
              "bg-indigo-50 text-indigo-600 rounded-lg p-1";
          }

          return (
            <span key={cell.day} className={className}>
              {cell.day}
            </span>
          );
        })}
      </div>
    </div>
  );
}
