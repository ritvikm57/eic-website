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
  const extendedSlides = React.useMemo(
    () => (slides.length > 0 ? [...slides, slides[0]] : slides),
    [slides]
  );

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = React.useState(true);

  const next = React.useCallback(() => {
    if (slides.length <= 1) return;
    setIsTransitionEnabled(true);
    setActiveIndex((current) => current + 1);
  }, [slides.length]);

  const previous = React.useCallback(() => {
    if (slides.length <= 1) return;

    if (activeIndex === 0) {
      setIsTransitionEnabled(false);
      setActiveIndex(slides.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
          setActiveIndex(slides.length - 1);
        });
      });

      return;
    }

    setIsTransitionEnabled(true);
    setActiveIndex((current) => current - 1);
  }, [activeIndex, slides.length]);

  React.useEffect(() => {
    if (slides.length <= 1) return;

    const timer = window.setInterval(() => {
      next();
    }, 4200);

    return () => window.clearInterval(timer);
  }, [next, slides.length]);

  const handleTransitionEnd = React.useCallback(() => {
    if (activeIndex === slides.length) {
      setIsTransitionEnabled(false);
      setActiveIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
      });
    }
  }, [activeIndex, slides.length]);

  const visibleIndex = activeIndex === slides.length ? 0 : activeIndex;

  return (
    <div className="grid gap-4">
      <div className="overflow-hidden rounded-[1.5rem]">
        <div
          className={
            isTransitionEnabled
              ? "flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              : "flex"
          }
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => (
            <article key={`${slide.id}-${index}`} className="min-w-full">
              <div className="group relative min-h-[220px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,oklch(0.22_0.014_288),oklch(0.26_0.02_18)_42%,oklch(0.3_0.035_34)_100%)] sm:min-h-[280px] md:min-h-[420px]">
                {slide.image ? (
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    aria-hidden="true"
                    sizes="(min-width: 768px) 100vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
                  />
                ) : null}

                <div className="absolute inset-x-3 top-3 z-10 text-[11px] uppercase tracking-[0.18em] text-white/66 md:inset-x-6 md:top-6">
                  {slide.meta}
                </div>

                {/* Base atmosphere */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,244,236,0.12),transparent_22%),radial-gradient(circle_at_78%_30%,rgba(255,194,132,0.1),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.01),rgba(0,0,0,0.32)_100%)]" />

                {/* Hover emphasis overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.42),rgba(0,0,0,0.14)_34%,transparent_68%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-3 bottom-3 z-10 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:inset-x-6 md:bottom-6">
                  <div className="text-xl font-semibold tracking-tight text-white md:text-3xl">
                    {slide.title}
                  </div>
                  <p className="mt-2 max-w-[28ch] text-sm leading-6 text-white/88 md:max-w-[30ch] md:leading-7">
                    {slide.caption}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to ${slide.title}`}
              onClick={() => {
                setIsTransitionEnabled(true);
                setActiveIndex(index);
              }}
              className={
                index === visibleIndex
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
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/12 bg-black/16 text-white/84 transition-colors hover:bg-black/24 md:h-8 md:w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/12 bg-black/16 text-white/84 transition-colors hover:bg-black/24 md:h-8 md:w-8"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
