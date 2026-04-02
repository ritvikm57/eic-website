"use client";

import Image from "next/image";
import Link from "next/link";
import { EicMark } from "@/components/brand/EicMark";
import { EicFlow } from "@/components/editorial/EicFlow";
import { FaqList } from "@/components/editorial/FaqList";
import { FullWidthSection } from "@/components/layout/FullWidthSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/editorial/SectionHeading";
import { HeroSection } from "@/components/sections/hero-section";
import { MagneticCTA } from "@/components/ui/MagneticCTA";

const WHO_WE_ARE_POINTS = [
  {
    title: "Official and student-driven",
    body: "EIC Mahindra University is the official Entrepreneurship Cell of Mahindra University and a student-driven, non-profit organization committed to fostering entrepreneurship on campus.",
  },
  {
    title: "A bridge between ideas and execution",
    body: "We create a visible platform where students can move from curiosity to experimentation, and from early thinking to more grounded forms of action.",
  },
  {
    title: "Built for future innovators",
    body: "EIC helps students develop the mindset, skillset, and toolset needed to become builders, leaders, and changemakers who can create meaningful impact.",
  },
] as const;

const EXPERIENCE_FORMATS = [
  "Hackathons",
  "Speaker sessions",
  "Business simulation games",
  "Panel discussions",
  "Seminars",
  "Networking events",
  "Industrial visits",
] as const;

const JOURNEY_FLOW = [
  {
    title: "Exposure",
    body: "Students encounter ideas, founders, and startup thinking across campus.",
  },
  {
    title: "Experimentation",
    body: "Early concepts get tested through collaboration, feedback, and practical work.",
  },
  {
    title: "Momentum",
    body: "The strongest work gains visibility, continuity, and room to grow.",
  },
] as const;

const JOURNEY_STEPS = [
  {
    title: "Discover",
    body: "Explore real-world problems, startup stories, and emerging ideas through talks, hackathons, and peer discussions. This is where curiosity turns into intent.",
  },
  {
    title: "Build",
    body: "Turn ideas into action through hands-on sessions, team collaboration, and rapid prototyping. Experiment, fail fast, and iterate.",
  },
  {
    title: "Review",
    body: "Get feedback from mentors, peers, and experienced builders. Refine your ideas through critique, validation, and iteration.",
  },
  {
    title: "Showcase",
    body: "Present your work through demo days, Eureka evenings, and public platforms. Gain visibility, confidence, and recognition.",
  },
  {
    title: "Grow",
    body: "The strongest ideas evolve into ventures, collaborations, and long-term opportunities within the ecosystem.",
  },
] as const;

const PILLARS = [
  {
    title: "Action over discussion",
    body: "Students test ideas, not just talk about them.",
  },
  {
    title: "Collaboration across disciplines",
    body: "Engineering, design, and business work together.",
  },
  {
    title: "Public visibility",
    body: "Work is shared, reviewed, and seen on campus.",
  },
  {
    title: "Continuous momentum",
    body: "Students return, build, and grow over time.",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "How can I join?",
    answer:
      "You can join EIC by participating in events, responding to recruitment calls, or reaching out directly through the contact page to express interest.",
  },
  {
    question: "Do I need a startup idea?",
    answer:
      "No. Students can enter with a startup idea, an early problem statement, or simply curiosity about entrepreneurship and innovation.",
  },
  {
    question: "Are first-years allowed?",
    answer:
      "Yes. First-year students are welcome to attend sessions, participate in activities, and become part of the community from the start of their campus journey.",
  },
  {
    question: "Is it open to all branches?",
    answer:
      "Yes. EIC is open across branches and disciplines because meaningful entrepreneurial work benefits from technical, creative, and operational perspectives together.",
  },
  {
    question: "Are events open and free to attend?",
    answer:
      "Yes, most EIC events are open and free unless a specific collaboration or format states otherwise in advance.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="page-stack page-stack--flush relative">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_14%_18%,rgba(236,160,155,0.12),transparent_24%),radial-gradient(circle_at_86%_20%,rgba(170,146,212,0.1),transparent_28%),radial-gradient(circle_at_48%_14%,rgba(255,186,140,0.06),transparent_22%)] dark:bg-[radial-gradient(circle_at_14%_18%,rgba(198,118,132,0.06),transparent_24%),radial-gradient(circle_at_86%_20%,rgba(126,104,184,0.06),transparent_28%),radial-gradient(circle_at_48%_14%,rgba(218,148,104,0.03),transparent_22%)]" />

      <HeroSection />

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
          <div className="pointer-events-none absolute -inset-x-24 -inset-y-28 bg-[radial-gradient(circle_at_18%_20%,rgba(236,170,132,0.05),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(222,196,176,0.03),transparent_30%)] opacity-35 blur-[160px] dark:bg-[radial-gradient(circle_at_18%_20%,rgba(214,136,90,0.018),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(168,136,116,0.012),transparent_30%)]" />
          <div className="section-frame relative px-4 sm:px-5 md:px-8 lg:px-10">
            <div className="section-stack">
              <SectionHeading
                label="Who We Are"
                title="A student-driven platform for entrepreneurial thinking, practical work, and campus-wide momentum."
                subtitle="EIC Mahindra University is the official Entrepreneurship Cell of Mahindra University: a non-profit student platform built to foster entrepreneurship on campus and bridge the gap between ideas and execution."
              />
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="space-y-5">
                  {WHO_WE_ARE_POINTS.map((item) => (
                    <div key={item.title} className="border-t border-border/65 pt-5">
                      <div className="text-lg font-semibold text-text">{item.title}</div>
                      <p className="mt-2 max-w-[50ch] text-sm leading-7 text-muted">{item.body}</p>
                    </div>
                  ))}
                </div>
                <figure className="relative overflow-hidden rounded-2xl border border-border/40 dark:border-white/10">
                  <div className="relative aspect-[4/3] min-h-[320px] w-full">
                    <Image
                      src="/images/about/p2.jpg"
                      alt="Students and activity representing the EIC platform on campus"
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.18)_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(44,28,18,0.06),transparent_42%,rgba(22,18,16,0.08)_100%)]" />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-stack items-center text-center">
          <div className="w-full max-w-[56rem] rounded-[2rem] bg-surface/52 px-5 py-7 sm:px-7 md:px-12 md:py-14">
            <div className="text-xs uppercase tracking-[0.18em] text-muted">Core statement</div>
            <p className="mx-auto mt-5 max-w-[30ch] text-lg font-medium leading-8 text-text/94 sm:text-xl sm:leading-9 md:text-[1.55rem] md:leading-10">
              Entrepreneurship goes beyond starting a business. It is about identifying
              challenges, thinking creatively, and building meaningful solutions that create
              impact.
            </p>
            <p className="mx-auto mt-5 max-w-[42ch] text-sm leading-7 text-muted">
              EIC gives that mindset a visible place on campus by making innovation more
              collaborative, practical, and reachable.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <FullWidthSection
          className="overflow-hidden py-12 md:py-16"
          atmosphere={
            <div className="pointer-events-none absolute -inset-x-28 -inset-y-28 bg-[radial-gradient(circle_at_78%_34%,rgba(223,165,122,0.05),transparent_24%),radial-gradient(circle_at_22%_78%,rgba(212,182,154,0.03),transparent_30%)] opacity-35 blur-[160px] dark:bg-[radial-gradient(circle_at_78%_34%,rgba(192,126,88,0.016),transparent_24%),radial-gradient(circle_at_22%_78%,rgba(148,114,96,0.01),transparent_30%)]" />
          }
        >
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="space-y-5">
              <SectionHeading
                label="What We Do"
                title="We create opportunities for students to experience the entrepreneurial journey firsthand."
                subtitle="The work is less about presenting entrepreneurship as an idea and more about making it something students can step into, test, and participate in directly."
              />
              <p className="max-w-[56ch] text-sm leading-7 text-muted">
                At EIC, we create opportunities for students to explore and experience the
                entrepreneurial journey firsthand. Through a diverse range of initiatives such as
                hackathons, speaker sessions, business simulation games, panel discussions,
                seminars, networking events, and industrial visits, we introduce students to the
                many facets of the startup and business ecosystem.
              </p>
              <p className="max-w-[56ch] text-sm leading-7 text-muted">
                Through every event and initiative, our mission remains the same: to cultivate an
                entrepreneurial culture at Mahindra University and help students transform ideas
                into action.
              </p>
            </div>

            <div className="grid gap-8">
              <figure className="relative overflow-hidden rounded-2xl border border-border/40 dark:border-white/10">
                <div className="relative aspect-[4/3] min-h-[320px] w-full">
                  <Image
                    src="/images/about/p3.jpg"
                    alt="Students participating in EIC sessions and activities"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.18)_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(44,28,18,0.06),transparent_42%,rgba(22,18,16,0.08)_100%)]" />
                </div>
              </figure>
              <div className="grid gap-3 sm:grid-cols-2">
                {EXPERIENCE_FORMATS.map((item, index) => (
                  <div
                    key={item}
                    className={
                      index === 0
                        ? "border-t border-border/60 pt-4 sm:col-span-2"
                        : "border-t border-border/60 pt-4"
                    }
                  >
                    <div className="text-base font-semibold text-text">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FullWidthSection>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 border-y border-border/45 bg-[linear-gradient(135deg,oklch(0.2_0.018_292),oklch(0.25_0.026_320)_42%,oklch(0.31_0.05_28)_100%)] py-10 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_82%_26%,rgba(255,191,131,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.01),rgba(0,0,0,0.26)_100%)]" />
          <div className="section-frame relative px-5 md:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-end">
              <div className="space-y-4 md:space-y-5">
                <div className="text-xs uppercase tracking-[0.18em] text-white/72">
                  Flagship Event
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  ENTREPX
                </h2>
                <p className="max-w-[44ch] text-sm leading-7 text-white/84">
                  One of the university&apos;s most prominent entrepreneurship platforms, bringing
                  together founders, investors, industry experts, and aspiring entrepreneurs.
                </p>
              </div>

              <div className="space-y-4 md:space-y-5 lg:justify-self-end lg:text-right">
                <p className="max-w-[42ch] text-sm leading-7 text-white/88 md:text-base md:leading-8 lg:ml-auto">
                  With speaker series, startup showcases, business idea competitions, and
                  interactive networking sessions, ENTREPX serves as a space for learning,
                  collaboration, and inspiration.
                </p>
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/72">
                  Happening next week
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <MagneticCTA href="/entrepx" className="accent-cta">
                    Explore ENTREPX
                  </MagneticCTA>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-surface/28 py-10 md:py-16">
          <div className="section-frame px-5 md:px-8 lg:px-10">
            <div className="grid gap-8 md:gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div className="section-stack gap-3 md:gap-4 lg:sticky lg:top-24">
                <SectionHeading
                  label="From Curiosity to Creation"
                  title="A structured journey for student founders."
                  subtitle="At EIC, we do not just inspire ideas. We help students build, test, and launch them through a structured journey designed for student founders."
                />
                <p className="max-w-[48ch] text-sm leading-7 text-muted">
                  The path is not rigid, but it gives students a real sequence: discover what
                  matters, build with intent, review honestly, showcase publicly, and let the
                  strongest work keep growing.
                </p>
                <EicFlow steps={JOURNEY_FLOW} className="max-w-[35rem] pt-0.5 md:pt-1" />
              </div>

              <div className="relative">
  <div className="absolute bottom-2 left-[0.5625rem] top-3 w-px bg-border/60" />
  <div className="grid gap-0">
    {JOURNEY_STEPS.map((step, index) => (
      <article
        key={step.title}
        className={index === 0 ? "relative" : "relative border-t border-border/55"}
      >
        <div className="grid grid-cols-[1.125rem_minmax(0,1fr)] gap-x-5 py-5 md:gap-x-6 md:py-6">
          <div className="relative mt-[0.90rem] flex justify-center">
            <span className="block h-4 w-4 rounded-full border border-border/75 bg-background" />
            <span className="absolute top-[0.3125rem] h-1.5 w-1.5 rounded-full bg-text/78" />
          </div>

          <div>
            <h3 className="text-[1.6rem] font-semibold leading-[1.08] tracking-tight text-text md:text-[1.95rem]">
              {step.title}
            </h3>
            <p className="mt-3 max-w-[50ch] text-sm leading-7 text-muted">
              {step.body}
            </p>
          </div>
        </div>
      </article>
    ))}
  </div>
</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* <ScrollReveal>
        <section className="section-stack">
          <SectionHeading
            label="The Four Principles"
            title="Built on four principles"
            subtitle="A quieter definition of the platform through structure, discipline, and the kind of student culture it is trying to sustain."
          />
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 hidden border-b border-border/45 xl:block" />
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-12">
              {PILLARS.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="group relative min-h-[16rem] border-l border-border/55 pl-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-text/20"
                >
                  <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted/78 transition-colors duration-200 group-hover:text-muted">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                  <h3 className="mt-5 max-w-[12ch] text-xl font-semibold tracking-tight text-text">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 max-w-[24ch] text-sm leading-7 text-muted">
                    {pillar.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal> */}

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-surface/44 py-10 md:py-14">
          <div className="section-frame px-5 md:px-8 lg:px-10">
            <div className="grid gap-10 border-y border-border/45 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
                  <EicMark size="sm" subtle />
                  Pitch Your Idea
                </div>
                <h2 className="max-w-[13ch] text-3xl font-semibold text-text md:text-4xl">
                  You do not need a finished idea. You just need to start.
                </h2>
                <p className="max-w-[52ch] text-sm leading-7 text-muted">
                  Students can approach EIC with an early concept, a rough problem statement, or a
                  question they want to explore more seriously.
                </p>
              </div>
              <div className="space-y-6 pt-1 lg:pl-10 lg:pt-16">
                <div className="grid gap-5">
                  <div className="border-l border-border/65 pl-4 md:pl-5">
                    <div className="text-sm font-semibold text-text">Early-stage ideas are enough</div>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      The first step can simply be bringing something unfinished into conversation.
                    </p>
                  </div>
                  <div className="border-l border-border/65 pl-4 md:pl-5">
                    <div className="text-sm font-semibold text-text">Questions are welcome too</div>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      A challenge worth solving can be as valuable a starting point as a polished
                      pitch.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <MagneticCTA href="/contact" className="accent-cta">
                    Pitch to EIC
                  </MagneticCTA>
                  <Link
                    href="/events"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background/40 px-5 text-sm font-medium text-text/85 transition-colors hover:bg-surface-elevated hover:text-text"
                  >
                    See What&apos;s Happening
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <FullWidthSection
          className="overflow-hidden py-12 md:py-16"
          innerClassName="relative"
          atmosphere={
            <div className="pointer-events-none absolute -inset-x-24 -inset-y-28 bg-[radial-gradient(circle_at_82%_24%,rgba(224,150,108,0.05),transparent_24%),radial-gradient(circle_at_18%_82%,rgba(217,184,158,0.03),transparent_30%)] opacity-35 blur-[160px] dark:bg-[radial-gradient(circle_at_82%_24%,rgba(205,120,88,0.016),transparent_24%),radial-gradient(circle_at_18%_82%,rgba(146,112,94,0.01),transparent_30%)]" />
          }
        >
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeading
              label="FAQ"
              title="Common questions from students."
              subtitle="A quieter guidance section for students who want to understand how EIC works before stepping in."
            />
            <FaqList items={FAQ_ITEMS} className="max-w-[52rem]" />
          </div>
        </FullWidthSection>
      </ScrollReveal>
    </div>
  );
}
