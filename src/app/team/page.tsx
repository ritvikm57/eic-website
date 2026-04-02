"use client";

import * as React from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PageLeadImage } from "@/components/editorial/PageLeadImage";
import { SectionHeading } from "@/components/editorial/SectionHeading";
import { TeamProfileCard } from "@/components/ui/TeamProfileCard";
import {
  type Person,
  presidents,
  teamLeads,
  functions,
  memberToProfile,
} from "@/data/team";
import { TEAM_DATA } from "@/data/teamData";

export default function TeamPage() {
  const archiveTeams = TEAM_DATA;
  const [archiveYear, setArchiveYear] = React.useState<string>(archiveTeams[0]?.year ?? "");
  const archiveTeam = archiveTeams.find((team) => team.year === archiveYear);
  const leadershipMembers = teamLeads.filter((member) => member.role !== "OC Member");
  const ocMembers = teamLeads.filter((member) => member.role === "OC Member");

  const archivedPresidents: Person[] = (archiveTeam?.presidents ?? []).map(personToProfile);

  return (
    <div className="page-stack page-stack--flush">

      <ScrollReveal>
        <PageLeadImage
          className="[&>div:first-child]:min-h-[260px] [&>div:first-child]:md:min-h-[340px] [&>div:first-child]:lg:min-h-[360px]"
          title="Team"
          meta="Current Cohort"
          tone="neutral"
          image="/images/team/team.jpeg"
          caption="The students shaping EIC through leadership, function ownership, and the day-to-day systems that hold the platform together."
        />
      </ScrollReveal>
      
      <ScrollReveal>
        <section className="section-stack gap-3 lg:gap-4">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-7">
            <div className="section-stack gap-2.5">
              <h1 className="max-w-[12ch] text-balance text-4xl font-semibold text-text md:text-5xl lg:text-6xl">
                The people building EIC.
              </h1>
              <p className="section-copy">
                A student-led structure shaped through presidents, the wider team, and continuity
                across cohorts.
              </p>
            </div>
            <div className="meta-strip">
              <div className="meta-item">
                <div className="meta-label">Leadership</div>
                <div className="meta-value">
                  {presidents.length + teamLeads.length} current leaders and organising members
                  shaping EIC’s direction and execution.
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Functions</div>
                <div className="meta-value">
                  {functions.length} paired functional groups across events, marketing, design,
                  content, logistics, finance, tech, and PR.
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Archive</div>
                <div className="meta-value">
                  Presidential continuity preserved across earlier EIC cohorts.
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>


      <ScrollReveal>
        <section id="presidents" className="section-stack">
          <SectionHeading
            label="Presidents"
            title="Direction, continuity, and public voice."
            subtitle="The presidents hold the broader line of the platform: how it is positioned, how it operates, and what kind of student culture it tries to build."
          />
          <div className="grid gap-6 border-t border-border/65 pt-6 md:grid-cols-2 xl:gap-8">
            {presidents.map((president, index) => (
              <TeamProfileCard
                key={president.id}
                person={president}
                size="large"
                priority={index < 2}
                className="justify-self-center"
              />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="team" className="section-stack">
          <SectionHeading
            label="Team"
            title="The wider team holding the platform together."
            subtitle="A single current-team layer with a small leadership/support block first, followed by the paired functional groups shaping EIC’s day-to-day work."
          />
          <div className="space-y-10 border-t border-border/65 pt-6">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {leadershipMembers.map((member) => (
                <TeamProfileCard
                  key={member.id}
                  person={member}
                  className="justify-self-center"
                />
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {functions.map((fn) => (
                <section key={fn.id} className="space-y-4">
                  <div className="border-t border-border/45 pt-4">
                    <div className="text-lg font-semibold tracking-tight text-text">{fn.name}</div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {fn.members.map((member) => (
                      <TeamProfileCard
                        key={`${fn.id}-${member.role}-${member.name}`}
                        person={memberToProfile(fn.name, member)}
                        className="justify-self-center"
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {ocMembers.map((member) => (
                <TeamProfileCard
                  key={member.id}
                  person={member}
                  className="justify-self-center"
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-stack mt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              label="Archive"
              title="Previous presidents"
              subtitle="Presidential continuity across earlier EIC cohorts."
            />
            <label className="grid gap-2 md:w-[220px]">
              <span className="text-xs uppercase tracking-[0.18em] text-muted">Archive Year</span>
              <select
                value={archiveYear}
                onChange={(event) => setArchiveYear(event.target.value)}
                className="h-11 rounded-full border border-border bg-surface px-4 text-sm text-text outline-none transition-colors focus-visible:ring-2 focus-visible:ring-glow/40"
                aria-label="Select archived EIC team year"
              >
                {archiveTeams.map((team) => (
                  <option key={team.year} value={team.year}>
                    {team.year}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {archiveTeam ? (
            <div
              className={
                archivedPresidents.length === 1
                  ? "flex justify-center border-t border-border/65 pt-6"
                  : "grid gap-6 border-t border-border/65 pt-6 md:grid-cols-2"
              }
            >
              {archivedPresidents.map((president) => (
                <TeamProfileCard
                  key={president.id}
                  person={president}
                  muted
                  className={archivedPresidents.length === 1 ? "" : "justify-self-center"}
                />
              ))}
            </div>
          ) : null}
        </section>
      </ScrollReveal>
    </div>
  );
}

function personToProfile(person: Person): Person {
  return {
    ...person,
    pillars: person.pillars ?? [],
  };
}
