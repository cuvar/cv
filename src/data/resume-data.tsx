import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import {
  ConsultlyLogo,
  JarockiMeLogo,
  Minimal,
  MonitoLogo,
} from "@/images/logos";

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
    social: [
      {
        name: "GitHub",
        url: "https://github.com/cuvar",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/luca-mueller01/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/devluca__",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Corporate State University Baden-Württemberg Karlsruhe",
      degree: "Bachelor's Degree in Computer Science",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "vaevo UG (haftungsbeschränkt)",
      link: "https://vaevo.de/",
      badges: ["Remote"],
      title: "Co-Founder and Developer",
      // logo: JojoMobileLogo,
      start: "2023",
      end: "present",
      description:
        "Designed and developed websites and web applications for small and medium-sized businesses in the main sectors of gastronomy and winery.",
    },
    {
      company: "SAP SE",
      link: "https://sap.com",
      badges: [],
      title: "Developer Advocate",
      // logo: ParabolLogo,
      start: "2021",
      end: "present",
      description:
        'My work comprises the maintenance and improvement of UI components for the UI5 frontend framework. I specialized in the development of so-called "SmartControls" and metadata-driven components that are used to create UI using metadata.',
    },
    {
      company: "DLRG Ortsgruppe Landau e.V",
      link: "https://landau.dlrg.de",
      badges: ["Remote"],
      title: "Fullstack Software Engineer",
      start: "2021",
      end: "2023",
      description:
        "Build and led the development of a software for tracking COVID-19 rapid tests using UI5 and PHP. Tracked a total of 150,000 tests and saved a total of estimated 100+ Excel files.",
    },
    {
      company: "SAP SE",
      link: "https://sap.com",
      badges: [],
      title: "Vocational Training Student",
      // logo: ParabolLogo,
      start: "2020",
      end: "2023",
      description:
        "I worked as student in various departments of the company and helped improve technologies and products, e.g. implemented a prototype of a Web Component for a Table Control (SAPUI5)",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Svelte",
    "Node.js",
    "GoLang",
    "PHP",
    "Java",
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
      ],
      description: "A widget-based dashboard for better productivity",
      logo: ConsultlyLogo,
      link: {
        label: "panal.dyme.one",
        href: "https://panal.dyme.one/",
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
      ],
      description: "A simple self-host vocabulary app for learning new words",
      logo: MonitoLogo,
      link: {
        label: "vocab.dyme.one",
        href: "https://vocab.dyme.one/",
      },
    },
    {
      title: "swiper-action",
      techStack: ["Side Project", "React", "parcel"],
      description: "Simple react component for 'swipe-to-action'",
      logo: JarockiMeLogo,
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
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/cuvar/gisa-tool",
      },
    },
  ],
} as const;
