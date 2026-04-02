import * as React from "react";
import { cn } from "@/lib/utils";

type PageIntroProps = {
  kicker: string;
  title: string;
  description: string;
  meta?: React.ReactNode;
  className?: string;
};

export function PageIntro({
  kicker,
  title,
  description,
  meta,
  className,
}: PageIntroProps) {
  return (
    <section className={cn("section-stack gap-8", className)}>
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <div className="section-stack gap-5">
          <div className="section-kicker">{kicker}</div>
          <h1 className="max-w-[12ch] text-balance text-4xl font-semibold text-text md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="section-copy">{description}</p>
        </div>
        {meta ? meta : null}
      </div>
    </section>
  );
}
