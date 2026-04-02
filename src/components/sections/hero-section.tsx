import Link from "next/link";
import Image from "next/image";
import { StaggerHeading } from "@/components/motion/StaggerHeading";

export function HeroSection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-border/45">
      <div className="relative min-h-[620px] md:min-h-[700px]">
        <div className="absolute inset-0">
          <Image
            src="/images/about/p1.jpeg"
            alt=""
            fill
            aria-hidden="true"
            sizes="100vw"
            className="scale-[1.03] object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_35%,rgba(0,0,0,0.2)_65%,rgba(0,0,0,0.05)_100%)]" />

        <div className="section-frame relative min-h-[620px] max-w-[80rem] px-6 md:min-h-[700px] md:px-10 lg:px-12">
          <div className="absolute left-[6%] top-[29%] max-w-[580px] space-y-4 md:left-[7%] md:space-y-4.5 lg:left-[8%]">
            <StaggerHeading
              as="h1"
              className="max-w-[9ch] text-balance text-[2.75rem] font-semibold tracking-tight text-white md:text-[3.7rem] lg:text-[4.4rem] lg:leading-[0.94]"
              text={"This is\nwhere ideas\nbecome action."}
            />

            <p className="mt-4 max-w-[440px] text-sm leading-7 text-white/80 md:text-base">
              Mahindra University&apos;s Entrepreneurship Cell for students who want to test ideas,
              work seriously, and start early.
            </p>

            <Link
              href="/events"
              className="mt-6 inline-flex text-sm font-medium text-white/88 underline-offset-4 transition hover:underline"
            >
              Explore Events &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
