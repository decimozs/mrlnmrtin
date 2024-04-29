import { TArchiveProps, TNavProps, TProjectProps } from "@/types";

const navItems: TNavProps[] = [
  {
    title: "Index",
    href: "/",
  },
  {
    title: "Projects",
    href: "/showcase",
  },
  {
    title: "Github",
    href: "https://github.com/decimozs",
  },
];

const projectItems: TProjectProps[] = [
  {
    id: 1,
    title: "Predicting Carbon Monoxide Levels",
    href: "https://github.com/decimozs/predicting-carbon-monoxide-levels",
    type: "Academic",
    tech: "python",
    description: "predictingcarbonmonoxidelevelsdesc",
  },
  {
    id: 2,
    title: "Verdant Vibes",
    href: "https://github.com/decimozs/verdant-vibes",
    type: "Academic",
    tech: "java",
    description: "verdantvibesdesc",
  },
  {
    id: 3,
    title: "JMAA",
    href: "https://github.com/decimozs/jmaa",
    type: "Academic",
    tech: "java",
    description: "jmaadesc",
  },
  {
    id: 4,
    title: "Inspirify",
    href: "https://github.com/decimozs/inspirify",
    type: "Personal",
    tech: "goc",
    description: "inspirifydesc",
  },
  {
    id: 5,
    title: "Crochet by Sogonidk",
    href: "/",
    type: "Comission",
    tech: "fullstack",
    description: "crochetdesc",
  },
  {
    id: 6,
    title: "PLP Google Classroom",
    href: "https://github.com/decimozs/plp-university-portal",
    type: "Academic",
    tech: "vb",
    description: "plpgclassroomdesc",
  },
  {
    id: 7,
    title: "Decimo AI",
    href: "https://github.com/decimozs/decimo-ai",
    type: "Personal",
    tech: "jsnode",
    description: "decimoaidesc",
  },
  {
    id: 8,
    title: "Pacman Clone",
    href: "https://github.com/decimozs/pacman-clone",
    type: "Academic",
    tech: "game",
    description: "pacmandesc",
  },
];

const archiveItems: TArchiveProps[] = [
  {
    title: "Speed Converter",
    href: "https://github.com/decimozs/speed-converter",
    year: 2024,
  },
  {
    title: "Bunch Information System",
    href: "https://github.com/decimozs/bunch-information-system",
    year: 2024,
  },
  {
    title: "Capital Guard",
    href: "https://github.com/decimozs/capital-guard",
    year: 2024,
  },
  {
    title: "SWE-Notebook",
    href: "https://github.com/decimozs/swe-notebook",
    year: 2023,
  },
  {
    title: "Arsenals",
    href: "https://github.com/decimozs/arsenals",
    year: 2023,
  },
  {
    title: "ART CLI",
    href: "https://github.com/decimozs/art-cli",
    year: 2023,
  },
  {
    title: "V2 D7holic",
    href: "https://github.com/decimozs/v2-d7holic",
    year: 2023,
  },
  {
    title: "V1 D7holic",
    href: "https://github.com/decimozs/v1-d7holic",
    year: 2023,
  },

  {
    title: "Hoopz",
    href: "https://github.com/decimozs/hoopz-blogsite",
    year: 2023,
  },
  {
    title: "La Cactus Club",
    href: "https://github.com/decimozs/la-cactus-club",
    year: 2023,
  },
  {
    title: "Jumpforce",
    href: "https://github.com/decimozs/jumpforce",
    year: 2023,
  },
  {
    title: "Artistic",
    href: "https://github.com/decimozs/artistics-landing-page",
    year: 2023,
  },
  {
    title: "Leafy",
    href: "https://github.com/decimozs/leafy",
    year: 2022,
  },
];

export { navItems, projectItems, archiveItems };
