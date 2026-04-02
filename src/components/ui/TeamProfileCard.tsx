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
  const auraVariant = getAuraVariant(person.id);

  return (
    <div
      className={cn(
        "relative mx-auto w-full",
        size === "large" ? "max-w-[22rem]" : "max-w-[18.5rem]",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -inset-x-6 -inset-y-8 rounded-[2rem] opacity-78 blur-3xl",
          CARD_AURA_CLASSES[auraVariant],
        )}
        aria-hidden="true"
      />

      <article className="group relative w-full overflow-hidden rounded-[1.5rem] bg-surface-elevated ring-1 ring-border/55">
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
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
          <div
            className={
              muted
                ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.01)_0%,rgba(0,0,0,0)_52%,rgba(0,0,0,0.56)_100%)]"
                : "absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_42%,rgba(0,0,0,0.72)_100%)]"
            }
          />

          <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
            <div className="space-y-1 text-white">
              <div className="text-base font-semibold md:text-lg">{person.name}</div>
              <div className="text-sm text-white/74">{person.role}</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

const CARD_AURA_CLASSES = [
  "bg-[radial-gradient(circle_at_80%_78%,rgba(222,214,198,0.32),rgba(196,188,176,0.14)_38%,transparent_68%)] dark:bg-[radial-gradient(circle_at_80%_78%,rgba(166,156,142,0.14),rgba(132,124,116,0.08)_38%,transparent_68%)]",
  "bg-[radial-gradient(circle_at_22%_24%,rgba(210,198,222,0.24),rgba(205,197,188,0.12)_40%,transparent_68%)] dark:bg-[radial-gradient(circle_at_22%_24%,rgba(142,132,164,0.12),rgba(120,116,110,0.08)_40%,transparent_68%)]",
  "bg-[radial-gradient(circle_at_76%_28%,rgba(224,214,202,0.26),rgba(214,206,192,0.12)_36%,transparent_66%)] dark:bg-[radial-gradient(circle_at_76%_28%,rgba(154,146,136,0.12),rgba(126,120,114,0.08)_36%,transparent_66%)]",
  "bg-[radial-gradient(circle_at_28%_76%,rgba(216,206,188,0.28),rgba(190,184,178,0.12)_38%,transparent_68%)] dark:bg-[radial-gradient(circle_at_28%_76%,rgba(146,138,128,0.12),rgba(122,116,112,0.08)_38%,transparent_68%)]",
] as const;

function getAuraVariant(personId: string) {
  let sum = 0;

  for (let index = 0; index < personId.length; index += 1) {
    sum += personId.charCodeAt(index);
  }

  return sum % CARD_AURA_CLASSES.length;
}
