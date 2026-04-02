"use client";

import Image from "next/image";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { EVENTS_DATA, type EventArchiveItem, type EventPlaceholder } from "@/data/events";

export default function EventsPage() {
  return (
    <div className="page-stack page-stack--flush relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[36rem] blur-[120px] bg-[radial-gradient(circle_at_78%_12%,rgba(255,140,110,0.16),transparent_44%),radial-gradient(circle_at_20%_18%,rgba(156,128,190,0.1),transparent_42%)] dark:bg-[radial-gradient(circle_at_78%_12%,rgba(255,110,80,0.12),transparent_44%),radial-gradient(circle_at_20%_18%,rgba(108,96,170,0.08),transparent_42%)]" />
        <div className="absolute inset-x-0 top-[22rem] h-[74rem] blur-[140px] bg-[radial-gradient(circle_at_18%_22%,rgba(236,140,150,0.14),transparent_30%),radial-gradient(circle_at_82%_36%,rgba(255,155,102,0.14),transparent_34%),radial-gradient(circle_at_52%_68%,rgba(134,120,198,0.07),transparent_36%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(214,110,150,0.12),transparent_30%),radial-gradient(circle_at_82%_36%,rgba(255,120,80,0.12),transparent_34%),radial-gradient(circle_at_52%_68%,rgba(104,92,168,0.05),transparent_36%)]" />
      </div>
      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <Image
              src="/images/events/team.png"
              alt=""
              fill
              aria-hidden="true"
              sizes="100vw"
              className="h-full w-full object-cover object-center opacity-52 blur-[1px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/56 to-black/14 dark:from-black/88 dark:via-black/62 dark:to-black/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,0,0,0.32),transparent_52%)] dark:bg-[radial-gradient(circle_at_20%_40%,rgba(0,0,0,0.42),transparent_52%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/12 via-transparent to-black/10 dark:from-black/22 dark:to-black/16" />
            <div className="absolute inset-0 blur-[120px] bg-[radial-gradient(circle_at_78%_18%,rgba(255,140,110,0.16),transparent_26%),radial-gradient(circle_at_88%_56%,rgba(236,140,150,0.12),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(238,176,126,0.12),transparent_28%)] dark:bg-[radial-gradient(circle_at_78%_18%,rgba(255,110,80,0.13),transparent_26%),radial-gradient(circle_at_88%_56%,rgba(214,110,150,0.1),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(238,156,106,0.1),transparent_28%)]" />
          </div>
          <div className="section-frame relative z-10 flex min-h-[500px] items-end px-5 pb-14 pt-28 sm:px-6 md:min-h-[620px] md:px-8 md:pb-20 md:pt-32 lg:min-h-[680px] lg:px-10 lg:pb-24 lg:pt-36">
            <div className="section-stack gap-5">
              <h1 className="max-w-[12ch] text-balance text-[2.5rem] font-semibold leading-[1] text-white md:text-5xl lg:text-6xl">
                Moments that shaped the EIC calendar.
              </h1>
              <p className="max-w-[64ch] text-base leading-7 text-white md:text-lg md:leading-8">
              Stay updated with hackathons, speaker sessions, competitions, and networking opportunities happening across campus.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {EVENTS_DATA.map((event, index) => (
        <ScrollReveal key={event.id}>
          <section className="relative left-1/2 w-screen -translate-x-1/2">
            <div
              className={
                index % 2 === 0
                  ? "pointer-events-none absolute -left-28 -right-28 -top-20 -bottom-20 blur-[120px] bg-[radial-gradient(circle_at_78%_50%,rgba(255,140,110,0.16),transparent_62%),radial-gradient(circle_at_88%_34%,rgba(255,186,120,0.1),transparent_56%),radial-gradient(circle_at_64%_60%,rgba(138,118,198,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_78%_50%,rgba(255,110,80,0.12),transparent_62%),radial-gradient(circle_at_88%_34%,rgba(238,156,106,0.09),transparent_56%),radial-gradient(circle_at_64%_60%,rgba(103,94,170,0.05),transparent_60%)]"
                  : "pointer-events-none absolute -left-28 -right-28 -top-20 -bottom-20 blur-[120px] bg-[radial-gradient(circle_at_22%_50%,rgba(236,145,155,0.14),transparent_62%),radial-gradient(circle_at_12%_36%,rgba(255,155,102,0.11),transparent_56%),radial-gradient(circle_at_36%_60%,rgba(138,118,198,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_22%_50%,rgba(214,110,150,0.12),transparent_62%),radial-gradient(circle_at_12%_36%,rgba(255,120,80,0.1),transparent_56%),radial-gradient(circle_at_36%_60%,rgba(103,94,170,0.05),transparent_60%)]"
              }
            />
            <div
              className={
                index % 2 === 0
                  ? "section-frame relative z-10 grid gap-6 px-4 sm:px-5 md:gap-8 md:px-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center lg:px-10"
                  : "section-frame relative z-10 grid gap-6 px-4 sm:px-5 md:gap-8 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-10"
              }
            >
              <div className={index % 2 === 0 ? "space-y-6" : "space-y-6 lg:order-2"}>
              <div className="border-t border-border/65 pt-6">
                <div className="text-xs uppercase tracking-[0.18em] text-muted">
                  Event {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text md:text-4xl">
                  {event.title}
                </h2>
              </div>

              {event.meta.length > 0 ? (
                <div className="meta-strip">
                  {event.meta.map((item) => (
                    <div key={`${event.id}-${item.label}`} className="meta-item">
                      <div className="meta-label">{item.label}</div>
                      <div className="meta-value">{item.value}</div>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="space-y-5">
                {event.body.map((paragraph) => (
                  <p key={paragraph} className="max-w-[62ch] text-sm leading-7 text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
              </div>

              <div className={index % 2 === 0 ? "lg:self-center" : "lg:order-1 lg:self-center"}>
                <EventMediaCard event={event} />
              </div>
            </div>
          </section>
        </ScrollReveal>
      ))}
    </div>
  );
}

function EventMediaCard({ event }: { event: EventArchiveItem }) {
  if (!event.media) {
    return <EventImagePlaceholder placeholder={event.placeholder} />;
  }

  if (event.media.type === "image") {
    return <EventImageCard src={event.media.src} alt={event.media.alt} />;
  }

  if (event.media.images.length <= 1) {
    const [image] = event.media.images;

    return image ? <EventImageCard src={image.src} alt={image.alt} /> : <EventImagePlaceholder placeholder={event.placeholder} />;
  }

  return <EventSlideshow images={event.media.images} />;
}

function EventImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-border/60 bg-surface/62">
      <div className="relative min-h-[240px] md:min-h-[360px]">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.06)_40%,rgba(0,0,0,0.18)_100%)]" />
      </div>
    </div>
  );
}

function EventSlideshow({
  images,
}: {
  images: readonly { src: string; alt: string }[];
}) {
  const [index, setIndex] = React.useState(0);

  const goPrev = React.useCallback(() => {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }, [images.length]);

  const goNext = React.useCallback(() => {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }, [images.length]);

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-border/60 bg-surface/62">
      <div className="relative min-h-[240px] md:min-h-[360px]">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={
              imageIndex === index
                ? "absolute inset-0 opacity-100 transition-opacity duration-500"
                : "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.06)_40%,rgba(0,0,0,0.18)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 md:p-5">
          <div className="flex items-center gap-2">
            {images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Go to slide ${imageIndex + 1}`}
                onClick={() => setIndex(imageIndex)}
                className={
                  imageIndex === index
                    ? "h-2 w-6 rounded-full bg-white/88 transition-all"
                    : "h-2 w-2 rounded-full bg-white/45 transition-all hover:bg-white/65"
                }
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-black/18 text-white/88 backdrop-blur-sm transition-colors hover:bg-black/28"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-black/18 text-white/88 backdrop-blur-sm transition-colors hover:bg-black/28"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventImagePlaceholder({
  placeholder,
}: {
  placeholder: EventPlaceholder;
}) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-border/60 bg-surface/62">
      <div className="relative min-h-[240px] border-b border-border/55 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02)_42%,rgba(0,0,0,0.14)_100%)] p-5 md:min-h-[360px] md:p-8">
        <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_50%_0%,rgba(233,226,214,0.64),transparent_72%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(154,143,129,0.16),transparent_74%)]" />
        <div className="relative">
          <div className="text-xs uppercase tracking-[0.18em] text-muted">{placeholder.label}</div>
          <div className="mt-3 text-2xl font-semibold tracking-tight text-text md:text-3xl">
            {placeholder.title}
          </div>
          <p className="mt-3 max-w-[34ch] text-sm leading-7 text-muted">{placeholder.caption}</p>
        </div>

        <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
        {placeholder.slots.map((slot: string) => (
            <div
              key={slot}
              className="flex min-h-[112px] items-end rounded-[1.2rem] border border-border/50 bg-background/46 p-4"
            >
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted">Photo Slot</div>
                <div className="mt-2 text-sm font-medium text-text">{slot}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
