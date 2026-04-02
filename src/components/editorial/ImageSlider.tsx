"use client";

import Image from "next/image";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  id: string;
  title: string;
  meta: string;
  caption: string;
  image?: string;
};

export function ImageSlider({ slides }: { slides: readonly Slide[] }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const next = React.useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, [slides.length]);

  const previous = React.useCallback(() => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }, [slides.length]);

  React.useEffect(() => {
    const timer = window.setInterval(next, 4200);
    return () => window.clearInterval(timer);
  }, [next]);

  return (
    <div className="grid gap-4">
      <div className="overflow-hidden rounded-[1.5rem]">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <article key={slide.id} className="min-w-full">
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,oklch(0.22_0.014_288),oklch(0.26_0.02_18)_42%,oklch(0.3_0.035_34)_100%)] md:min-h-[420px]">
                {slide.image ? (
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    aria-hidden="true"
                    sizes="(min-width: 768px) 100vw, 100vw"
                    className="object-cover"
                  />
                ) : null}
                <div className="absolute inset-x-6 top-6 text-[11px] uppercase tracking-[0.18em] text-white/66">
                  {slide.meta}
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,244,236,0.12),transparent_22%),radial-gradient(circle_at_78%_30%,rgba(255,194,132,0.1),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.01),rgba(0,0,0,0.3)_100%)]" />
                <div className="absolute inset-x-6 bottom-6">
                  <div className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {slide.title}
                  </div>
                  <p className="mt-2 max-w-[30ch] text-sm leading-7 text-white/76">{slide.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to ${slide.title}`}
              onClick={() => setActiveIndex(index)}
              className={
                index === activeIndex
                  ? "h-2.5 w-7 rounded-full bg-text transition-all"
                  : "h-2.5 w-2.5 rounded-full bg-border transition-all hover:bg-text/40"
              }
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous slide"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-black/16 text-white/84 transition-colors hover:bg-black/24"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-black/16 text-white/84 transition-colors hover:bg-black/24"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
