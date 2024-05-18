import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Luca Müller",
  initials: "LM",
  location: "Walldorf, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Walldorf",
  about: "Full Stack Engineer",
  summary:
    "I'm an aspiring fullstack software engineer with a passion for the web and a love for developing user-facing applications. I find joy in creating helpful products that enhance user experiences. Currently, I'm contributing to the UI5 framework at SAP. I am enthusiastic about learning and exploring new technologies and fields, with a big interest in software architecture. Always driven by curiosity, I love staying on the cutting edge of software development trends. Hence, I actively seek opportunities to deepen my understanding and contribute to the design of systems and technologies.",
  avatarUrl: "https://avatars.githubusercontent.com/u/49287189?v=4",
  personalWebsiteUrl: "https://cuvar.dev",
  contact: {
    email: "luca@cuvar.dev",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/cuvar",
        icon: GitHubIcon,
        hiddenOnPrint: false,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/luca-mueller01/",
        icon: LinkedInIcon,
        hiddenOnPrint: false,
      },
      {
        name: "X",
        url: "https://x.com/devluca__",
        icon: XIcon,
        hiddenOnPrint: true,
      },
    ],
  },
  education: [
    {
      school: "Corporate State University Baden-Württemberg Karlsruhe",
      degree: "Bachelor's Degree in Computer Science (1.5)",
      start: "Oct. 2020",
      end: "Sep. 2023",
    },
  ],
  work: [
    {
      company: "vaevo UG (haftungsbeschränkt)",
      link: "https://vaevo.de/",
      badges: ["Remote"],
      title: "Co-Founder and Developer",
      start: "Mar. 2023",
      end: "present",
      description:
        "Designed and developed websites and web applications for small and medium-sized businesses in the main sectors of gastronomy and winery.",
    },
    {
      company: "SAP SE",
      link: "https://sap.com",
      badges: [],
      title: "Developer",
      start: "Oct. 2023",
      end: "present",
      description:
        'My work comprises the maintenance and improvement of UI components for the UI5 frontend framework. I specialized in the development of so-called "SmartControls" and metadata-driven components that are used to create UI using metadata.',
    },
    {
      company: "StrongEducation UG (haftungsbeschränkt) (in liquidation)",
      link: "",
      badges: ["Remote"],
      title: "Co-Founder and Developer",
      start: "May 2021",
      end: "present",
      description:
        "Consultancy services for digitization in the education sector. Development of a training platform for schools and teachers for learning more about digitalization.",
    },
    {
      company: "DLRG Ortsgruppe Landau e.V.",
      link: "https://landau.dlrg.de",
      badges: ["Remote"],
      title: "Fullstack Software Engineer",
      start: "Mar. 2021",
      end: "Jun. 2023",
      description:
        "Build and led the development of a software for tracking COVID-19 rapid tests using UI5 and PHP. Tracked a total of 150,000 tests and saved a total of estimated 100+ Excel files.",
    },
    {
      company: "SAP SE",
      link: "https://sap.com",
      badges: [],
      title: "Vocational Training Student",
      start: "Sep. 2020",
      end: "Oct. 2023",
      description:
        "I worked as student in various departments of the company and helped improve technologies and products, e.g. implemented a prototype of a Web Component for a Table Control (SAPUI5)",
    },
  ],
  skills: [
    { name: "TypeScript" },
    { name: "React/Next.js" },
    { name: "Svelte" },
    { name: "Node.js" },
    { name: "Go" },
    { name: "Git", variant: "secondary" },
    { name: "Web development", variant: "secondary" },
    { name: "UI/UX", variant: "secondary" },
    { name: "Agile / SCRUM", variant: "secondary" },
    { name: "Project planning", variant: "secondary" }, // personal projects, my life
    // { PERSONAL },
    { name: "Goal-orientation", variant: null }, // my life, personal projects, MVP
    { name: "Adaptability / Flexibility", variant: null }, // new environments, intrinsic need for new environments, // TODO
    { name: "Growth mindset", variant: null }, // constant learning, reading, new technologies and concepts,
    { name: "Team spirit", variant: null }, // constant learning, reading, new technologies and concepts,
    // { SOCIAL },
    { name: "Empathy", variant: null }, // Compromise-oriented
    // { METHODICAL },
    { name: "Decisiveness", variant: null },
    { name: "Organization", variant: null }, // my life, panal as personal project for solving this issue, work with todo lists my whole life
    { name: "Analytical thinking", variant: null }, // personal projects, tech decisions,
  ],
  projects: [
    {
      title: "panal",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind",
        "tRPC",
        "NextAuth",
        "Redis",
      ],
      description: "A widget-based dashboard for better productivity",
      link: {
        label: "panal.dyme.one",
        href: "https://panal.dyme.one/",
      },
    },
    {
      title: "weinevo",
      techStack: [
        "TypeScript",
        "Next.js",
        "Tailwind",
        "tRPC",
        "NextAuth",
        "Relational DB",
      ],
      description:
        "A wine management and E-Label software for wineries in Germany",
      link: {
        label: "weinevo.eu",
        href: "https://weinevo.eu/",
      },
    },
    {
      title: "vocab",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind",
        "tRPC",
        "NextAuth",
        "Relational DB",
      ],
      description: "A self-hosted flash cards app for learning new things",
      link: {
        label: "vocab.dyme.one",
        href: "https://vocab.dyme.one/",
      },
    },
    {
      title: "TCA",
      techStack: ["OpenUI5", "PHP", "JavaScript", "Relational DB"],
      description:
        "A management and acquisition software for COVID-19 rapid tests covering 150k tests",
    },
    {
      title: "days-since-last-js-framework",
      techStack: [
        "Side Project",
        "TypeScript",
        "Svelte",
        "Tailwind",
        "Relational DB",
      ],
      description:
        "A counter for the days since the latest JS framework release",
      link: {
        label: "dayssincelastjsframework.com",
        href: "https://dayssincelastjsframework.com/",
      },
    },
    {
      title: "swiper-action",
      techStack: ["Side Project", "React", "parcel"],
      description: "Simple react component for 'swipe-to-action'",
      link: {
        label: "github.com",
        href: "https://github.com/cuvar/swiper-action",
      },
    },
    {
      title: "gisa-tool",
      techStack: [
        "Research Project",
        "TypeScript",
        "Next.js",
        "Tailwind",
        "Puppeteer",
        "Docker",
        "Bash",
      ],
      description: "Research tool for analyzing the emissions of a website",
      link: {
        label: "github.com",
        href: "https://github.com/cuvar/gisa-tool",
      },
    },
  ],
  certification: [
    {
      name: "Google Cloud Platform Fundamentals",
      providerName: "Cloud Academy",
      issueDate: "Oct. 2021",
    },
    {
      name: "Business English Certificate Higher C1",
      providerName: "Cambridge English Language Assessment",
      issueDate: "May 2023",
    },
  ],
} as const;
