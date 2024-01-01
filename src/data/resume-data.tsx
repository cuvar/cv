import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import {
  ClevertechLogo,
  ConsultlyLogo,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Luca Müller",
  initials: "LM",
  location: "Walldorf, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Walldorf",
  about: "Full Stack Engineer",
  summary:
    "I'm an aspiring fullstack software engineer with a passion for the web and a love for developing user-facing applications. I find joy in creating helpful products that enhance user experiences. I'm currently contributing to the innovative field at SAP, specializing in the UI5 framework. I am enthusiastic about learning and exploring new technologies and fields, with a big interest in software architecture. Always driven by curiosity, I love staying on the cutting edge of software development trends. Hence, I actively seek opportunities to deepen my understanding and contribute to the design of systems and technologies.",
  avatarUrl: "https://avatars.githubusercontent.com/u/49287189?v=4",
  personalWebsiteUrl: "https://cuvar.dev",
  contact: {
    email: "luca@cuvar.dev",
    tel: "+491714904116",
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
      school: "Wrocław University of Technology",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
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
