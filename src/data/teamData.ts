import type { Person } from "@/data/team";

export type TeamCohort = {
  year: string;
  presidents: Person[];
};

export const TEAM_DATA: TeamCohort[] = [
  {
    year: "2024-25",
    presidents: [
      {
        id: "archive-president-01",
        name: "Shancy",
        role: "President",
        pillars: [],
        image: "/images/team/shancy.jpeg",
      },
      {
        id: "archive-president-02",
        name: "Vishwesh Palakuri",
        role: "President",
        pillars: [],
        image: "/images/team/vishwesh.jpeg",
      },
    ],
  },
  {
    year: "2023-24",
    presidents: [
      {
        id: "archive-president-03",
        name: "Previous President",
        role: "President",
        pillars: [],
        image: "/placeholders/portrait-stone.svg",
      },
    ],
  },
] as const;
