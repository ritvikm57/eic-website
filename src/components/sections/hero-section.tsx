import Link from "next/link";
import Image from "next/image";
import { StaggerHeading } from "@/components/motion/StaggerHeading";

export function HeroSection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-border/45">
      <div className="relative min-h-[500px] md:min-h-[620px] lg:min-h-[700px]">
        <div className="absolute inset-0">
          <Image
            src="/images/about/p1.png"
            alt=""
            fill
            aria-hidden="true"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_35%,rgba(0,0,0,0.2)_65%,rgba(0,0,0,0.05)_100%)]" />

        <div className="section-frame relative flex min-h-[500px] max-w-[80rem] items-center px-4 pb-10 pt-[calc(var(--nav-offset-mobile)+2rem)] sm:px-5 md:min-h-[620px] md:px-10 md:pb-16 md:pt-[calc(var(--nav-offset-desktop)+3rem)] lg:min-h-[700px] lg:px-12 lg:pb-20 lg:pt-[calc(var(--nav-offset-desktop)+3.75rem)]">
          <div className="max-w-[19rem] space-y-3.5 sm:max-w-[24rem] md:max-w-[580px] md:space-y-4">
            <StaggerHeading
              as="h1"
              className="max-w-[9ch] text-balance text-[2.2rem] font-semibold leading-[0.96] tracking-tight text-white sm:text-[2.5rem] md:text-[3.7rem] lg:text-[4.4rem] lg:leading-[0.94]"
              text={"This is\nwhere ideas\nbecome action."}
            />

            <p className="mt-4 max-w-[20rem] text-sm leading-6 text-white/80 sm:max-w-[24rem] md:max-w-[440px] md:text-base md:leading-7">
              Mahindra University&apos;s Entrepreneurship Cell for students who want to test ideas,
              work seriously, and start early.
            </p>

            <Link
              href="/events"
              className="mt-5 inline-flex text-sm font-medium text-white/88 underline-offset-4 transition hover:underline md:mt-6"
            >
              Explore Events &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
