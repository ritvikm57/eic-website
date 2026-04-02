export const ENTREPX_DATA = {
  NAV_ITEMS: [
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Why EntrepX", href: "#why" },
    { label: "Speakers", href: "#speakers" },
    { label: "Schedule", href: "#timeline" },
    { label: "What to Expect", href: "#events" },
  ] as const,
  GALLERY_SLIDES: [
    {
      id: "showcase-floor",
      title: "Startup showcase floor",
      meta: "EntrepX Gallery",
      caption:
        "Founder booths, student conversations, and public-facing startup energy across the EntrepX floor.",
    },
    {
      id: "keynote-stage",
      title: "Keynotes and panels",
      meta: "Stage Moments",
      caption:
        "Keynote addresses and Shark Tank style discussions that bring builders, mentors, and student audiences into the same room.",
    },
    {
      id: "networking-moment",
      title: "Networking and exchange",
      meta: "Founder Access",
      caption:
        "High tea, lunch, and informal exchanges where ideas move from stage energy into direct conversation.",
    },
  ] as const,
  SPEAKERS: [
    {
      id: "abhijit-vemuganti",
      name: "Abhijit Vemuganti",
      role: "Co-Founder, Swipe",
      image: "/images/events/swipe.jpeg",
    },
  ] as const,
  TIMELINE_DAYS: [
    {
      id: "march-6",
      label: "March 6",
      fullDate: "March 6, 2026",
      items: [
        {
          time: "Schedule",
          title: "Inauguration",
          body: "The formal opening that marks the beginning of EntrepX and sets the tone for the day ahead.",
        },
        {
          time: "Schedule",
          title: "Welcome Speeches",
          body: "Opening remarks that frame the purpose of the event and welcome participants, speakers, and guests.",
        },
        {
          time: "Schedule",
          title: "Keynote Address",
          body: "A central talk by an invited industry voice, bringing insight, perspective, and entrepreneurial context to campus.",
        },
        {
          time: "Schedule",
          title: "Inaugural Dance Program",
          body: "A cultural opening performance that adds ceremony and energy to the beginning of the event.",
        },
      ],
    },
    {
      id: "march-7",
      label: "March 7",
      fullDate: "March 7, 2026",
      items: [
        {
          time: "Schedule",
          title: "Shark Tank Special Panel Discussion",
          body: "A founder and mentor-led panel built around evaluation, debate, and high-energy entrepreneurial discussion.",
        },
        {
          time: "Schedule",
          title: "High Tea",
          body: "An informal break designed for conversation, movement, and interaction between students, founders, and guests.",
        },
        {
          time: "Schedule",
          title: "Startup Showcase Visit",
          body: "A public-facing walk through startup showcases and demo spaces where ideas and ventures become visible.",
        },
        {
          time: "Schedule",
          title: "Lunch",
          body: "A mid-event pause that keeps the day social, paced, and open to continued exchange.",
        },
      ],
    },
    {
      id: "march-8",
      label: "March 8",
      fullDate: "March 8, 2026",
      items: [
        {
          time: "Schedule",
          title: "Workshop / SPL",
          body: "Interactive sessions and Startup Premier League programming that move the event from observation into participation.",
        },
        {
          time: "Schedule",
          title: "Prize Distribution",
          body: "Recognition for standout participation, competition outcomes, and the strongest visible work of the event.",
        },
        {
          time: "Schedule",
          title: "Vote of Thanks",
          body: "A formal close that acknowledges speakers, organisers, partners, and participants.",
        },
        {
          time: "Schedule",
          title: "Startup Stand-up Comedy / Cultural Night",
          body: "A lighter cultural close that keeps the event memorable, social, and distinctly campus-facing.",
        },
      ],
    },
  ] as const,
  WHY_POINTS: [
    {
      title: "Practical Expertise",
      body: "Students gain direct exposure to founder journeys, operating realities, and entrepreneurial decision-making through keynote addresses, panels, and public discussion.",
    },
    {
      title: "Ecosystem Access",
      body: "EntrepX creates closer contact with founders, mentors, investors, and industry participants who shape the wider entrepreneurial ecosystem.",
    },
    {
      title: "Venture Creation",
      body: "The event encourages students to move from ideas into visible work through startup showcases, demo moments, and more serious entrepreneurial participation.",
    },
    {
      title: "Competitive Excellence",
      body: "Competition formats and public evaluation create a higher-performance environment that rewards clarity, confidence, and preparation.",
    },
    {
      title: "Curated Learning",
      body: "Workshops, SPL sessions, and moderated programming turn the day into a structured learning experience rather than a loose collection of talks.",
    },
    {
      title: "Visibility and Exposure",
      body: "EntrepX gives entrepreneurship a public stage on campus, helping students, ventures, and ideas become more visible across the university.",
    },
  ] as const,
  EVENT_POINTS: [
    {
      title: "Keynote Speeches from Industry Leaders",
      body: "Founders, mentors, and invited voices bring entrepreneurial perspective into the room through high-visibility keynote moments.",
    },
    {
      title: "Shark Tank Style Panel Discussion",
      body: "A more dynamic discussion format that combines critique, insight, and founder-facing conversation in a public setting.",
    },
    {
      title: "Startup Showcase & Demo Pitches",
      body: "Ventures and ideas become visible through showcase spaces, demos, and student-facing presentation moments.",
    },
    {
      title: "Networking with Founders & Mentors",
      body: "Students get closer access to people who have built, advised, invested, and operated within real entrepreneurial systems.",
    },
    {
      title: "Interactive Workshops & SPL Sessions",
      body: "Workshops and Startup Premier League programming create stronger participation beyond passive attendance.",
    },
    {
      title: "Prize Distribution & Recognition",
      body: "Strong work, competition outcomes, and visible effort are formally recognised as part of the event rhythm.",
    },
    {
      title: "Cultural Night & Stand-up Comedy",
      body: "The day closes with a lighter public-facing format that keeps the flagship experience social, memorable, and distinctly campus-based.",
    },
    {
      title: "High Tea & Networking Lunch",
      body: "Informal meal breaks create room for follow-up conversation, introductions, and founder-student exchange.",
    },
  ] as const,
} as const;
