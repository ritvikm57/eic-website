"use client";

import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import type { Person } from "@/data/team";

type TeamProfileCardProps = {
  person: Person;
  className?: string;
  priority?: boolean;
  size?: "default" | "large";
  muted?: boolean;
};

export function TeamProfileCard({
  person,
  className,
  priority,
  size = "default",
  muted = false,
}: TeamProfileCardProps) {
  return (
    <article
      className={cn(
        "group relative mx-auto w-full overflow-hidden rounded-[1.5rem] bg-surface-elevated ring-1 ring-border/55",
        size === "large" ? "max-w-[22rem]" : "max-w-[18.5rem]",
        muted && "opacity-85",
        className,
      )}
    >
      <div className={cn("relative", size === "large" ? "aspect-[4/5]" : "aspect-[3/4]")}>
        <Image
          src={person.image ?? "/placeholders/portrait-stone.svg"}
          alt={person.name}
          fill
          priority={priority}
          sizes={
            size === "large"
              ? "(min-width: 1280px) 22rem, (min-width: 768px) 20rem, 100vw"
              : "(min-width: 1280px) 18.5rem, (min-width: 768px) 16rem, 100vw"
          }
          className={cn(
            "object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]",
            muted && "grayscale-[0.18] saturate-[0.82]",
          )}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_42%,rgba(0,0,0,0.72)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <div className="space-y-1 text-white">
            <div className="text-base font-semibold md:text-lg">{person.name}</div>
            <div className="text-sm text-white/74">{person.role}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
