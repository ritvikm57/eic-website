import * as React from "react";
import { cn } from "@/lib/utils";

type FullWidthSectionProps = React.ComponentPropsWithoutRef<"section"> & {
  children: React.ReactNode;
  atmosphere?: React.ReactNode;
  innerClassName?: string;
};

export function FullWidthSection({
  children,
  atmosphere,
  className,
  innerClassName,
  ...props
}: FullWidthSectionProps) {
  return (
    <section
      className={cn("relative left-1/2 w-screen -translate-x-1/2", className)}
      {...props}
    >
      {atmosphere}
      <div className={cn("section-frame px-5 md:px-8 lg:px-10", innerClassName)}>{children}</div>
    </section>
  );
}
