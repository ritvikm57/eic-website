export type EventMetaItem = {
  label: string;
  value: string;
};

export type EventPlaceholder = {
  label: string;
  title: string;
  caption: string;
  slots: readonly string[];
};

export type EventMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "slideshow";
      images: readonly { src: string; alt: string }[];
    };

export type EventArchiveItem = {
  id: string;
  title: string;
  meta: readonly EventMetaItem[];
  body: readonly string[];
  media?: EventMedia;
  placeholder: EventPlaceholder;
};

export const EVENTS_DATA: readonly EventArchiveItem[] = [
  {
    id: "spotlight",
    title: "Spotlight",
    meta: [],
    body: [
      "Spotlight was all about fun, energy, and engagement, bringing students together through a series of interactive mini-games. The event gave everyone a chance to unwind, bond, and test their knowledge in playful yet challenging ways.",
      "The first game, Spin the Wheel, had participants racing against the clock. After spinning, they had just 30 seconds to identify a logo or personality from a massive chart of 400 logos, combining speed with sharp observation. The second activity was the Cardboard Box Game, where players had to carefully stack sets of boxes by matching companies with their owners, type of company, and tagline, turning business trivia into an exciting hands-on challenge.",
      "The third highlight was Heads Up, a team-based guessing game where friends had to identify companies or related concepts within a minute, sparking plenty of laughter and quick thinking. To wrap up, students also expressed their creativity freely by doodling and sharing their thoughts on a large chart paper, leaving behind a colorful memory of the day.",
      "Spotlight truly lived up to its name, giving participants a chance to shine, connect, and celebrate the spirit of learning through fun.",
    ],
    media: {
      type: "image",
      src: "/images/events/spotlight.png",
      alt: "Students participating in Spotlight event activities",
    },
    placeholder: {
      label: "Event Photography",
      title: "Spotlight photo archive",
      caption: "Interactive games, fast rounds, and candid moments from the event floor.",
      slots: ["Spin the Wheel", "Cardboard Box Game", "Heads Up"],
    },
  },
  {
    id: "orientation",
    title: "Orientation",
    meta: [],
    body: [
      "The Orientation of EIC was designed to spark creativity and teamwork right from the start. Students divided themselves into teams of five and took part in an exciting game that combined strategy, innovation, and a bit of fun competition.",
      "The event began with an auction round, where teams bid on simple everyday items such as pens, books, and sticky notes. After securing their items, teams were given time to brainstorm and innovate, transforming these basic objects into imaginative new products. Each team then pitched their innovations to everyone, showcasing their creativity and persuasive skills.",
      "In the next stage, another auction was held, this time giving teams that missed out in the first round a chance to buy items, reinvent them, and present their ideas. The final twist came when the innovations were auctioned again, and the teams had to maximise their returns.",
      "The winners were decided based on the highest profit margin percentage, making it not only a test of creativity but also of business acumen. The Orientation successfully introduced students to EIC's spirit of innovation, strategy, and collaboration, setting the tone for the year ahead.",
    ],
    media: {
      type: "slideshow",
      images: [
        {
          src: "/images/events/orientaiton.png",
          alt: "Orientation event activity and student participation",
        },
      ],
    },
    placeholder: {
      label: "Event Photography",
      title: "Orientation photo archive",
      caption: "Auction rounds, reinvention pitches, and first-day team dynamics across the room.",
      slots: ["Auction round", "Product reinvention", "Pitch moment"],
    },
  },
  {
    id: "swipe-talk",
    title: "Swipe Talk",
    meta: [
      { label: "Speaker", value: "Abhijit Vemuganti" },
      { label: "Date", value: "21 January 2026" },
    ],
    body: [
      "The session featuring Abhijit Vemuganti offered an insightful glimpse into the journey of a successful entrepreneur in the fintech space. As the Co-Founder of Swipe, a Y-Combinator backed startup, he shared his experiences of building a company from the ground up, navigating uncertainties, and overcoming challenges along the way.",
      "He spoke candidly about the process of raising $2 million in seed funding, highlighting the importance of persistence, clarity of vision, and strong execution. The interaction was both informative and inspiring for aspiring entrepreneurs. The session concluded with an engaging rapid-fire round, where his quick, thoughtful, and often witty responses added a lively and personal touch to the discussion.",
    ],
    media: {
      type: "slideshow",
      images: [
        {
          src: "/images/events/swipe.jpeg",
          alt: "Swipe Talk speaker session with student audience",
        },
      ],
    },
    placeholder: {
      label: "Event Photography",
      title: "Swipe Talk photo archive",
      caption: "Founder session frames, audience interactions, and the rapid-fire close.",
      slots: ["Speaker session", "Audience Q&A", "Rapid-fire round"],
    },
  },
  {
    id: "bankruptcy-bureau",
    title: "Bankruptcy Bureau",
    meta: [{ label: "Date", value: "18 February 2026" }],
    body: [
      "The Bankruptcy Bureau was an engaging Mystery Rooms-style event that tested participants' analytical thinking and teamwork under pressure. The event began with a brief introduction, equipping teams with essential knowledge before they set off on their challenge.",
      "Participants navigated through multiple stages, uncovering hidden clues and moving from one location to another, each presenting a new round of puzzles to decode. As the difficulty increased, teams had to think critically, connect insights, and collaborate effectively to stay on track.",
      "The final stage required participants to compile their findings and submit their documents, simulating real-world decision-making. Overall, Bankruptcy Bureau offered a thrilling, immersive experience that blended strategy, problem-solving, and excitement.",
    ],
    media: {
      type: "image",
      src: "/images/events/bankruptcy.jpeg",
      alt: "Students participating in Spotlight event activities",
    },
    placeholder: {
      label: "Event Photography",
      title: "Bankruptcy Bureau photo archive",
      caption: "Puzzle stages, clue trails, and high-pressure team problem-solving.",
      slots: ["Clue discovery", "Stage transition", "Final submission"],
    },
  },
  {
    id: "the-executive-dilemma",
    title: "The Executive Dilemma",
    meta: [],
    body: [
      "The Executive Dilemma was an immersive simulation event that challenged participants to think like corporate leaders and make high-stakes decisions under pressure. The event began with a brief introduction, setting the context and familiarizing teams with the dynamics of real-world business scenarios.",
      "Participants were then presented with complex brand crises and strategic challenges that required careful analysis and quick decision-making. As the rounds progressed, the intensity increased, pushing teams to evaluate risks, defend their strategies, and adapt to evolving situations.",
      "Collaboration and effective communication played a key role as participants debated their approaches and worked towards impactful solutions. The final stage involved presenting and justifying their decisions, simulating real boardroom discussions. Overall, The Executive Dilemma provided a dynamic and engaging experience that blended strategy, leadership, and critical thinking.",
    ],
    media: {
      type: "slideshow",
      images: [
        {
          src: "/images/events/ED1.png",
          alt: "The Executive Dilemma simulation round in progress",
        },
        {
          src: "/images/events/executivedil.png",
          alt: "The Executive Dilemma team presentation and discussion",
        },
      ],
    },
    placeholder: {
      label: "Event Photography",
      title: "Executive Dilemma photo archive",
      caption: "Simulation rounds, crisis-response discussions, and final boardroom presentations.",
      slots: ["Scenario brief", "Team strategy", "Final decision room"],
    },
  },
] as const;
