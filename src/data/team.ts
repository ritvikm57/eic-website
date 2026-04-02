export type Person = {
  id: string;
  name: string;
  role: string;
  domain?: string;
  pillars: string[];
  image?: string;
  contribution?: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
  order?: number;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image?: string;
};

export type TeamFunction = {
  id: string;
  name: string;
  members: TeamMember[];
};

export const presidents: Person[] = [
  {
    id: "president-01",
    name: "Shrivatsh",
    role: "President",
    pillars: ["Strategy", "Direction", "Continuity"],
    image: "/images/team/shrivatsh.JPG",
    contribution: "Shapes platform direction and continuity across the cell.",
    order: 1,
  },
  {
    id: "president-02",
    name: "Chirag",
    role: "President",
    pillars: ["Execution", "Partnerships", "Culture"],
    image: "/images/team/chirag.JPG",
    contribution: "Leads public positioning, execution, and broader coordination.",
    order: 2,
  },
] as const;

export const teamLeads: Person[] = [
  {
    id: "team-01",
    name: "Tanishq",
    role: "Vice President",
    domain: "Leadership",
    pillars: ["Coordination", "Execution"],
    image: "/images/team/tanishq.JPG",
    contribution: "Supports overall planning and cross-team execution.",
    order: 1,
  },
  {
    id: "team-02",
    name: "Shanmukha Priya",
    role: "Vice President",
    domain: "Leadership",
    pillars: ["Coordination", "Culture"],
    image: "/images/team/shunmuka.png",
    contribution: "Supports continuity, planning, and student-facing coordination.",
    order: 2,
  },
  {
    id: "team-03",
    name: "Ritvik",
    role: "Secretary",
    domain: "Leadership",
    pillars: ["Operations", "Documentation"],
    image: "/images/team/ritvik.JPG",
    contribution: "Supports documentation, process, and day-to-day continuity.",
    order: 3,
  },
  {
    id: "team-20",
    name: "Kaulini",
    role: "OC Member",
    domain: "Operations",
    pillars: ["Support", "Coordination"],
    image: "/images/team/kaulini.png",
    contribution: "Supports organising, coordination, and on-ground execution.",
    order: 20,
  },
  {
    id: "team-21",
    name: "Ali",
    role: "OC Member",
    domain: "Operations",
    pillars: ["Support", "Coordination"],
    image: "/images/team/ali.png",
    contribution: "Supports organising, coordination, and student-facing delivery.",
    order: 21,
  },
] as const;

export const functions: TeamFunction[] = [
  {
    id: "function-events",
    name: "Events",
    members: [
      { id: "events-head", name: "Aniket", role: "Head", image: "/images/team/aniket.JPG" },
      {
        id: "events-vice-head",
        name: "Kamakshi",
        role: "Vice Head",
        image: "/images/team/kamakshi.JPG",
      },
    ],
  },
  {
    id: "function-marketing",
    name: "Marketing",
    members: [
      { id: "marketing-head", name: "Palak", role: "Head", image: "/images/team/palak.JPG" },
      { id: "marketing-vice-head", name: "Sahithi", role: "Vice Head", image: "/images/team/sahithi.JPG" },
    ],
  },
  {
    id: "function-design-media",
    name: "Design and Media",
    members: [
      {
        id: "design-head",
        name: "Tanishka",
        role: "Head",
        image: "/images/team/tanishka.JPG",
      },
      {
        id: "design-vice-head",
        name: "Jahnavi",
        role: "Vice Head",
        image: "/images/team/jjhanvi.png",
      },
    ],
  },
  {
    id: "function-content-social",
    name: "Content and Social Media",
    members: [
      { id: "content-head", name: "Bhavya", role: "Head", image: "/images/team/bhavya.JPG" },
      {
        id: "content-vice-head",
        name: "Sai Ganesh (SAGA)",
        role: "Vice Head",
        image: "/images/team/ganesh.JPG",
      },
    ],
  },
  {
    id: "function-logistics",
    name: "Logistics",
    members: [
      { id: "logistics-head", name: "Shriya", role: "Head", image: "/images/team/shriya.JPG" },
      { id: "logistics-vice-head", name: "Thanishka", role: "Vice Head", image: "/images/team/thanishka.png" },
    ],
  },
  {
    id: "function-finance",
    name: "Finance",
    members: [
      {
        id: "finance-co-head-1",
        name: "Sai Arjun",
        role: "Co-Head",
        image: "/images/team/arjun.JPG",
      },
      {
        id: "finance-co-head-2",
        name: "Krishna",
        role: "Co-Head",
        image: "/images/team/krishna.JPG",
      },
    ],
  },
  {
    id: "function-tech",
    name: "Tech",
    members: [
      { id: "tech-head", name: "Charvi", role: "Head", image: "/images/team/charvi.JPG" },
      {
        id: "tech-vice-head",
        name: "Srilaasya",
        role: "Vice Head",
        image: "/images/team/srilaasya.JPG",
      },
    ],
  },
  {
    id: "function-pr",
    name: "PR",
    members: [
      {
        id: "pr-head",
        name: "Ashmith",
        role: "Head",
        image: "/images/team/ashmith.jpeg",
      },
      {
        id: "pr-vice-head",
        name: "Sruti",
        role: "Vice Head",
        image: "/images/team/sruthi.png",
      },
    ],
  },
] as const;

export function memberToProfile(functionName: string, member: TeamMember): Person {
  return {
    id: `${functionName}-${member.id}`.toLowerCase().replace(/\s+/g, "-"),
    name: member.name,
    role:
      member.role === "Head" ||
      member.role === "Vice Head" ||
      member.role === "Co-Head"
        ? `${functionName} ${member.role}`
        : member.role,
    domain: functionName,
    pillars: [],
    image: member.image,
    contribution: `${functionName} team`,
  };
}
