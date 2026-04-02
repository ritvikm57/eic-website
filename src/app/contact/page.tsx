import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { EicMark } from "@/components/brand/EicMark";
import { FullWidthSection } from "@/components/layout/FullWidthSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="page-stack relative">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
        <div className="absolute left-1/2 top-[34rem] h-[36rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-74 blur-[150px] bg-[radial-gradient(circle,rgba(236,145,155,0.24)_0%,rgba(255,176,132,0.18)_28%,rgba(255,214,150,0.1)_52%,transparent_74%)] dark:opacity-60 dark:bg-[radial-gradient(circle,rgba(214,110,150,0.14)_0%,rgba(255,144,96,0.12)_30%,rgba(232,190,120,0.06)_54%,transparent_76%)]" />
      </div>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
          <div className="section-frame relative max-w-[80rem] px-4 sm:px-5 md:px-10 lg:px-12">
            <section className="section-stack gap-6">
              <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
                <div className="section-stack gap-4">
                  <h1 className="max-w-[12ch] text-balance text-[2.2rem] font-semibold leading-[1] text-text md:text-5xl lg:text-6xl">
                    Start a conversation with EIC.
                  </h1>
                  <p className="section-copy">
                    Whether you want to reach out directly or bring an early-stage idea forward, the
                    contact page should feel clear, useful, and easy to act on.
                  </p>
                </div>
                <div className="meta-strip">
                  <div className="meta-item">
                    <div className="meta-label">Email</div>
                    <div className="meta-value">For collaborations, invitations, and general communication.</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-label">Ideas</div>
                    <div className="meta-value">For early concepts, rough problem statements, and student proposals.</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-label">Response flow</div>
                    <div className="meta-value">Messages should reach the relevant student lead, organizer, or platform owner.</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <FullWidthSection className="py-10 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="flex h-full flex-col">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
                  <EicMark size="sm" subtle />
                  Contact
                </div>
                <h2 className="max-w-[12ch] text-3xl font-semibold text-text md:text-4xl">
                  Send a Mail
                </h2>
                <p className="max-w-[52ch] text-sm leading-7 text-muted">
                  Reach out directly for queries, collaborations, or general communication.
                </p>
              </div>
              <div className="mt-6 flex items-start pt-1 lg:mt-auto">
                <a
                  href="mailto:eic@mahindrauniversity.edu.in"
                  className="accent-cta inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium"
                >
                  Send a Mail
                </a>
              </div>
            </div>

            <div className="flex h-full flex-col lg:pl-8">
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-[0.18em] text-muted">Build with EIC</div>
                <h2 className="max-w-[12ch] text-3xl font-semibold text-text md:text-4xl">
                  Submit Your Idea
                </h2>
                <p className="max-w-[52ch] text-sm leading-7 text-muted">
                  Have an idea you want to build? Share it with us and we&apos;ll help you take it
                  forward.
                </p>
              </div>
              <div className="mt-6 space-y-3 pt-1 lg:mt-auto">
                <a
                  href="https://tally.so/r/kdWyZo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-cta inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium"
                >
                  Submit Your Idea
                </a>
              </div>
            </div>
          </div>
        </FullWidthSection>
      </ScrollReveal>

      <ScrollReveal>
        <FullWidthSection className="py-10 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="grid gap-4">
              <div className="border-t border-border/70 pt-6 md:pt-8">
                <div className="text-xl font-semibold text-text">Contact details</div>
                <p className="mt-3 max-w-[48ch] text-sm leading-6 text-muted">
                  Reach out directly for collaborations, invitations, campus partnerships, or general
                  queries related to EIC.
                </p>
                <div className="mt-6 grid gap-4">
                  <InfoCard icon={MapPin} title="Location" body="AIC Mahindra University, e-Hub Foundation Technology Center, TECH MAHINDRA, Mahindra University, Hyderabad" />
                  <InfoCard icon={Mail} title="Email" body="eic@mahindrauniversity.edu.in" />
                  <InfoCard icon={Phone} title="Phone" body="+91 84128 73562" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
              <div className="border-t border-border/70 pt-6">
                <div className="text-xl font-semibold text-text">What happens next</div>
                <p className="mt-3 text-sm leading-6 text-muted">
                  If the message is about joining, collaborating, or hosting something with EIC, the
                  relevant student lead or organizing team should be able to follow up with the next
                  step.
                </p>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <Link className="text-text/80 hover:text-text" href="/events">
                    Explore events
                  </Link>
                  <Link className="text-text/80 hover:text-text" href="/team">
                    Meet the team
                  </Link>
                </div>
              </div>

              <div className="border-t border-border/70 pt-6">
                <div className="text-xl font-semibold text-text">Campus presence</div>
                <p className="mt-3 text-sm leading-6 text-muted">
                  EIC is intended to feel accessible, student-led, and easy to approach whether you
                  are visiting for a build session, a founder talk, or a partnership conversation.
                </p>
                <div className="mt-4 text-sm text-muted">
                  AIC Mahindra University, e-Hub Foundation Technology Center, TECH MAHINDRA,
                  Mahindra University, Hyderabad
                </div>
              </div>
            </div>
          </div>
        </FullWidthSection>
      </ScrollReveal>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[1.4rem] border border-border/30 bg-background/6 p-5">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border/40 bg-background/12">
          <Icon className="h-4 w-4 text-accent" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-text">{title}</div>
          <div className="mt-1 text-sm leading-6 text-muted">{body}</div>
        </div>
      </div>
    </div>
  );
}
