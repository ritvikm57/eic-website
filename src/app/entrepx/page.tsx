import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ImageSlider } from "@/components/editorial/ImageSlider";
import { SectionNav } from "@/components/editorial/SectionNav";
import { FullWidthSection } from "@/components/layout/FullWidthSection";
import { ENTREPX_DATA } from "@/data/entrepx";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why EntrepX", href: "#why" },
  { label: "Schedule", href: "#timeline" },
] as const;

const GALLERY_SLIDES = [
  {
    id: "entrepx-gallery-1",
    title: "EntrepX Inauguration — Cycling 2025",
    meta: "EntrepX Gallery",
    caption:
      "The event opened with a campus-wide cycling inauguration, setting the tone for energy, movement, and collective participation.",
    image: "/images/entrepx/p2.JPG",
  },
  {
    id: "entrepx-gallery-2",
    title: "Panel Discussions",
    meta: "Stage Moments",
    caption:
      "Interactive sessions bringing together founders, mentors, and students for open, high-value conversations on building and scaling ideas.",
    image: "/images/entrepx/p3.png",
  },
  {
    id: "entrepx-gallery-3",
    title: "Keynote Sessions",
    meta: "Stage Moments",
    caption:
      "Industry leaders and experienced founders sharing insights, journeys, and practical perspectives with the entire audience.",
    image: "/images/entrepx/p4.png",
  },
  {
    id: "entrepx-gallery-4",
    title: "Startup Shark Tank Pitching",
    meta: "Stage Moments",
    caption:
      "Student startups pitch their ideas in a high-intensity format, receiving feedback, critique, and recognition on a public stage.",
    image: "/images/entrepx/p5.png",
  },
] as const;

export default function EntrepxPage() {
  return (
    <div className="page-stack page-stack--flush">
      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-border/45">
          <div className="relative min-h-[620px] md:min-h-[680px]">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/images/entrepx/p1.JPG"
                alt=""
                fill
                aria-hidden="true"
                sizes="100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,0,0.46),rgba(0,0,0,0.14))]" />

            <div className="section-frame relative grid min-h-[620px] max-w-[80rem] items-center gap-14 px-6 pb-10 pt-24 md:min-h-[680px] md:px-10 md:pb-12 md:pt-28 lg:grid-cols-[1.02fr_0.98fr] lg:px-12">
              <div className="max-w-[42rem] space-y-7">
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/72">
                  EntrepX
                  <span className="h-1 w-1 rounded-full bg-white/48" />
                  Flagship Event
                </div>
                <h1 className="max-w-[10ch] text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-[5rem] lg:leading-[0.95]">
                  The flagship entrepreneurship platform at Mahindra University.
                </h1>
                <p className="max-w-[40rem] text-base leading-7 text-white/84 md:text-lg md:leading-8">
                  EntrepX is Mahindra University&apos;s flagship entrepreneurship experience,
                  bringing together founders, mentors, investors, industry experts, and student
                  innovators through keynote addresses, panel discussions, startup showcases,
                  workshops, and Startup Premier League sessions.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="https://forms.office.com/r/Bbj4A1H4Xr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-cta inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium"
                  >
                  Register Now
                </Link>
                <Link
                  href="#timeline"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/16 bg-white/6 px-5 text-sm font-medium text-white/88 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                  >
                  Explore Schedule <ArrowRight className="h-4 w-4" />
                </Link>
                </div>

                <div className="text-sm uppercase tracking-[0.18em] text-white/66">
                  Registrations open now
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <SectionNav items={NAV_ITEMS} />

      <ScrollReveal>
        <section id="about" className="section-stack">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="space-y-5">
              <div className="section-kicker">About EntrepX</div>
              <h2 className="max-w-[16ch] text-balance text-3xl font-semibold text-text md:text-4xl">
                The university&apos;s flagship entrepreneurship experience.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="max-w-[60ch] text-sm leading-7 text-muted">
                EntrepX is Mahindra University&apos;s flagship entrepreneurship experience. It
                brings founders, mentors, investors, industry experts, and student innovators into
                a shared space where entrepreneurial thinking becomes visible, public, and active
                on campus.
              </p>
              <p className="max-w-[60ch] text-sm leading-7 text-muted">
                Through keynote addresses, Shark Tank style panel discussions, startup showcases,
                workshops, Startup Premier League sessions, and networking formats, the event turns
                ideas into momentum and gives students clearer ways to see how innovation evolves
                into impact.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <FullWidthSection id="gallery" className="bg-surface/42 py-14">
          <ImageSlider slides={GALLERY_SLIDES} />
        </FullWidthSection>
      </ScrollReveal>

      <ScrollReveal>
        <section id="why" className="section-stack">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <div className="section-kicker">Why EntrepX?</div>
              <h2 className="max-w-[14ch] text-balance text-3xl font-semibold text-text md:text-4xl">
                Why the event matters beyond the day itself.
              </h2>
              <p className="max-w-[52ch] text-sm leading-7 text-muted">
                EntrepX is designed to create more than visibility. It gives students access,
                learning, competition, recognition, and stronger proximity to the people and
                systems that shape entrepreneurship in practice.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {ENTREPX_DATA.WHY_POINTS.map((item) => (
                <div key={item.title} className="border-l border-border/60 pl-5 md:pl-6">
                  <div className="text-base font-semibold text-text">{item.title}</div>
                  <p className="mt-3 max-w-[48ch] text-sm leading-7 text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* <ScrollReveal>
        <FullWidthSection id="speakers" className="bg-surface/34 py-16">
          <div className="section-stack gap-8">
            <div className="max-w-[42rem]">
              <div className="section-kicker">Past Speakers</div>
              <h2 className="mt-3 max-w-[13ch] text-balance text-3xl font-semibold text-text md:text-4xl">
                The voices that shape the room matter.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                EntrepX brings founder and operator perspectives directly into the event so
                students can hear how real ventures are built, scaled, and navigated.
              </p>
            </div>

            <SpeakerCarousel speakers={ENTREPX_DATA.SPEAKERS} />
          </div>
        </FullWidthSection>
      </ScrollReveal> */}

      {/* <ScrollReveal>
        <section id="timeline">
          <EntrepXTimeline days={ENTREPX_DATA.TIMELINE_DAYS} />
        </section>
      </ScrollReveal> */}

      <ScrollReveal>
        <FullWidthSection className="bg-surface/32 py-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[52ch]">
              <div className="text-xs uppercase tracking-[0.18em] text-muted">Final step</div>
              <div className="mt-3 text-2xl font-semibold text-text md:text-3xl">
                Register now, explore the schedule, and step into the event with context.
              </div>
              <p className="mt-3 max-w-[44ch] text-sm leading-7 text-muted">
                EntrepX works best when students arrive prepared to listen, ask, participate, and
                carry something back from the day.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://forms.office.com/r/Bbj4A1H4Xr"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-cta inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium"
              >
                Register Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-5 text-sm font-medium text-text/85 transition-colors hover:bg-surface-elevated hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60"
              >
                Contact / Enquire <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FullWidthSection>
      </ScrollReveal>
    </div>
  );
}
