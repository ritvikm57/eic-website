"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TimelineItem = {
  time: string;
  title: string;
  body: string;
};

type TimelineDay = {
  id: string;
  label: string;
  fullDate: string;
  items: readonly TimelineItem[];
};

export function EntrepXTimeline({ days }: { days: readonly TimelineDay[] }) {
  const defaultDay = days.find((day) => day.id === "march-8")?.id ?? days[0]?.id ?? "";
  const [activeDay, setActiveDay] = React.useState(defaultDay);
  const currentDay = days.find((day) => day.id === activeDay) ?? days[0];

  if (!currentDay) return null;

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/8 bg-[linear-gradient(180deg,oklch(0.16_0.012_285),oklch(0.14_0.012_280)_100%)] py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,205,142,0.08),transparent_20%),radial-gradient(circle_at_82%_28%,rgba(158,130,196,0.08),transparent_24%),radial-gradient(circle_at_50%_74%,rgba(0,0,0,0.24),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
      <div className="section-frame relative px-5 md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:gap-10">
          <div
            role="tablist"
            aria-label="EntrepX timeline dates"
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {days.map((day) => {
              const active = day.id === activeDay;
              return (
                <button
                  key={day.id}
                  id={`${day.id}-tab`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls={`${day.id}-panel`}
                  onClick={() => setActiveDay(day.id)}
                  className={cn(
                    "inline-flex h-11 items-center rounded-full border px-5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(214,173,96,0.34)]",
                    active
                      ? "border-[rgba(214,173,96,0.46)] bg-[linear-gradient(180deg,rgba(168,124,46,0.28),rgba(120,86,28,0.22))] text-[rgba(245,227,186,0.96)]"
                      : "border-white/10 bg-white/[0.03] text-white/68 hover:border-white/16 hover:text-white/84",
                  )}
                >
                  {day.label}
                </button>
              );
            })}
          </div>

          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-[rgba(214,173,96,0.76)]">
              Active Date
            </div>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[rgba(244,236,220,0.96)] md:text-4xl">
              {currentDay.fullDate}
            </h3>
          </div>

          <div
            id={`${currentDay.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${currentDay.id}-tab`}
            className="w-full"
          >
            <div className="relative mx-auto max-w-6xl">
              <div className="absolute bottom-0 left-[1.05rem] top-0 w-px bg-[linear-gradient(180deg,rgba(214,173,96,0.14),rgba(214,173,96,0.64),rgba(214,173,96,0.14))] md:left-1/2 md:-translate-x-1/2" />
              <div className="grid gap-10 md:gap-14">
                {currentDay.items.map((item, index) => (
                  <article
                    key={`${currentDay.id}-${item.time}-${item.title}`}
                    className="relative grid items-start gap-4 md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] md:gap-8"
                  >
                    <div
                      className={cn(
                        "pl-10 md:pl-0",
                        index % 2 === 0 ? "md:text-right" : "md:col-start-3",
                      )}
                    >
                      <TimelineCard item={item} align={index % 2 === 0 ? "right" : "left"} />
                    </div>

                    <div className="absolute left-0 top-8 flex items-center md:static md:justify-center">
                      <span className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(214,173,96,0.5)] bg-[rgba(27,22,19,0.98)]">
                        <span className="h-3.5 w-3.5 rounded-full bg-[rgba(214,173,96,0.92)]" />
                      </span>
                    </div>

                    <div className={cn("hidden md:block", index % 2 === 0 && "md:col-start-3")} />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  item,
  align,
}: {
  item: TimelineItem;
  align: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(35,31,29,0.96),rgba(24,21,20,0.98))] px-5 py-5 md:px-6 md:py-6",
        align === "right" && "md:ml-auto",
      )}
    >
      <div className="text-[11px] uppercase tracking-[0.22em] text-[rgba(214,173,96,0.82)]">
        {item.time}
      </div>
      <h4 className="mt-3 text-xl font-semibold tracking-tight text-[rgba(245,241,234,0.96)] md:text-2xl">
        {item.title}
      </h4>
      <p className="mt-3 text-sm leading-7 text-white/66 md:text-[0.95rem]">{item.body}</p>
    </div>
  );
}
