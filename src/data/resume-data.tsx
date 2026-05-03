import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Luca Müller",
  initials: "LM",
  location: "Heidelberg, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Heidelberg",
  about: "Full Stack Engineer",
  summary:
    "Fullstack software engineer with 5+ years of experience at SAP and in startup environments. Co-founded two ventures and shipped multiple web and mobile products end-to-end. Looking to combine technical depth and hands-on building experience to work on climate issues.",
  avatarUrl: "https://avatars.githubusercontent.com/u/49287189?v=4",
  // personalWebsiteUrl: "https://cuvar.dev",
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
      // {
      //   name: "X",
      //   url: "https://x.com/devluca__",
      //   icon: XIcon,
      //   hiddenOnPrint: true,
      // },
    ],
  },
  education: [
    {
      school: "Corporate State University Baden-Württemberg Karlsruhe",
      degree: "Bachelor's Degree in Computer Science",
      start: "Oct. 2020",
      end: "Sep. 2023",
    },
  ],
  work: [
    {
      company: "Sole Proprietorship",
      link: "https://truegoods.eu",
      badges: [],
      title: "Founder",
      start: "Sept. 2025",
      end: "present",
      description:
        "Built and launched two iOS apps independently: rumi for managing overthinking/decision paralysis, and quickie for ai-based meal planning. Covered the full stack — product, development, and go-to-market via social media.",
    },
    {
      company: "vaevo UG (haftungsbeschränkt)",
      link: "https://vaevo.de/",
      badges: ["In Liquidation"],
      title: "Co-Founder and Developer",
      start: "Mar. 2023",
      end: "present",
      description:
        "Co-founded a software agency building web products for SMBs. Responsible for the full cycle — scoping, architecture, development, and delivery — across multiple client products simultaneously. Built weinevo, a wine management and E-Label SaaS, from zero to paying customers.",
    },
    {
      company: "SAP SE",
      link: "https://sap.com",
      badges: [],
      title: "Developer",
      start: "Oct. 2023",
      end: "present",
      description:
        "Engineered UI components for the UI5 frontend framework used by enterprise applications globally. Specialized in metadata-driven component architecture, enabling declarative UI construction at scale - besides other broad framework contributions. Since Mar. 2026, focus shifted toward developing AI applications.",
    },
    {
      company: "StrongEducation UG (haftungsbeschränkt)",
      link: "",
      badges: ["In Liquidation"],
      title: "Co-Founder and Developer",
      start: "May 2021",
      end: "present",
      description:
        "Consultancy services for digitization in the education sector. Development of a training platform for schools and teachers for learning more about digitalization.",
    },
    {
      company: "DLRG Ortsgruppe Landau e.V.",
      link: "https://landau.dlrg.de",
      badges: [],
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
      end: "Sep. 2023",
      description:
        "Rotated across multiple departments at SAP, gaining hands-on experience in enterprise software development. Contributed to products and codebases throughout the program.",
    },
  ],
  skills: [
    { name: "React/Frontend Frameworks" },
    { name: "JS/TS" },
    { name: "Web Development" },
    { name: "Mobile Development" },
    { name: "Software Architecture", variant: "secondary" },
    { name: "UI/UX", variant: "secondary" },
    { name: "AI/LLMs", variant: "secondary" },
  ],
  projects: [
    {
      title: "gisa-tool",
      variant: "primary",
      techStack: [
        "Research Project",
        "Next.js",
        "Puppeteer",
        "Docker",
        "Bash",
      ],
      description:
        "Research tool for measuring and analyzing the CO₂ emissions of websites. Quantifies the environmental footprint of web infrastructure to inform greener development practices.",
      link: {
        label: "github.com",
        href: "https://github.com/cuvar/gisa-tool",
      },
    },
    {
      title: "weinevo",
      variant: "primary",
      techStack: [
        "Next.js",
        "tRPC",
        "RDBMS",
      ],
      description:
        "A wine management and E-Label software for wineries in Germany",
      link: {
        label: "weinevo.eu",
        href: "https://weinevo.eu/",
      },
    },
    {
      title: "rumi",
      variant: "primary",
      techStack: [
        "React Native",
        "Nest.js",
      ],
      description: "iOS App for managing overthinking and decision paralysis",
      link: {
        label: "getrumi.eu",
        href: "https://getrumi.eu/",
      },
    },
    {
      title: "truegoods",
      techStack: [
        "Side Project",
        "Next.js",
        "tRPC",
        "RDBMS",
      ],
      description: "Website for analyzing consumer products on their environmental impact, similar to european-alternatives.eu",
    },
    {
      title: "quickie",
      techStack: [
        "React Native",
        "Nest.js",
      ],
      description: "iOS App for quickly finding recipes and managing meal plans",
      link: {
        label: "quickieapp.eu",
        href: "https://quickieapp.eu/",
      },
    },
    {
      title: "TCA",
      techStack: ["OpenUI5", "PHP", "JavaScript", "RDBMS"],
      description:
        "A management and acquisition software for COVID-19 rapid tests covering 150k+ tests",
    },
    // {
    //   title: "panal",
    //   techStack: [
    //     "Side Project",
    //     "Next.js",
    //     "tRPC",
    //     "Redis",
    //   ],
    //   description: "A widget-based dashboard for better productivity",
    //   link: {
    //     label: "panal.dyme.one",
    //     href: "https://github.com/cuvar/panal",
    //   },
    // },
    // {
    //   title: "vocab",
    //   techStack: [
    //     "Side Project",
    //     "Next.js",
    //     "tRPC",
    //     "RDBMS",
    //   ],
    //   description: "A self-hosted flash cards app for learning new things",
    //   link: {
    //     label: "vocab.dyme.one",
    //     href: "https://github.com/cuvar/vocab",
    //   },
    // },
    // {
    //   title: "days-since-last-js-framework",
    //   techStack: [
    //     "Side Project",
    //     "Svelte",
    //     "Tailwind",
    //     "RDBMS",
    //   ],
    //   description:
    //     "A counter for the days since the latest JS framework release",
    //   link: {
    //     label: "dayssincelastjsframework.com",
    //     href: "https://dayssincelastjsframework.com/",
    //   },
    // },
    // {
    //   title: "swiper-action",
    //   techStack: ["Side Project", "React", "parcel"],
    //   description: "Simple react component for 'swipe-to-action'",
    //   link: {
    //     label: "github.com",
    //     href: "https://github.com/cuvar/swiper-action",
    //   },
    // },
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
    {
      name: "Fitness Trainer B-License",
      providerName: "OTL Akademie",
      issueDate: "May 2024",
    },
  ],
} as const;
