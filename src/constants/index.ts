import { TArchiveProps, TNavProps, TProjectProps } from "@/types";

const navItems: Array<TNavProps> = [
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

const projectItems: Array<TProjectProps> = [
  {
    id: 1,
    title: "Predicting Carbon Monoxide Levels",
    href: "/",
    type: "Academic",
    tech: "python",
    description: "predictingcarbonmonoxidelevelsdesc",
  },
  {
    id: 2,
    title: "Verdant Vibes",
    href: "/",
    type: "Academic",
    tech: "java",
    description: "verdantvibesdesc",
  },
  {
    id: 3,
    title: "JMAA",
    href: "/",
    type: "Academic",
    tech: "java",
    description: "jmaadesc",
  },
  {
    id: 4,
    title: "Inspirify",
    href: "/",
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
    href: "/",
    type: "Academic",
    tech: "vb",
    description: "plpgclassroomdesc",
  },
  {
    id: 7,
    title: "Decimo AI",
    href: "/",
    type: "Personal",
    tech: "jsnode",
    description: "decimoaidesc",
  },
  {
    id: 8,
    title: "Pacman Clone",
    href: "/",
    type: "Academic",
    tech: "game",
    description: "pacmandesc",
  },
];

const archiveItems: Array<TArchiveProps> = [
  {
    title: "Speed Converter",
    href: "/",
    year: 2024,
  },
  {
    title: "Bunch Information System",
    href: "/",
    year: 2024,
  },
  {
    title: "Capital Guard",
    href: "/",
    year: 2024,
  },
  {
    title: "SWE-Notebook",
    href: "/",
    year: 2023,
  },
  {
    title: "Arsenals",
    href: "/",
    year: 2023,
  },
  {
    title: "ART CLI",
    href: "/",
    year: 2023,
  },
  {
    title: "V2 D7holic",
    href: "/",
    year: 2023,
  },
  {
    title: "V1 D7holic",
    href: "/",
    year: 2023,
  },

  {
    title: "Hoopz",
    href: "/",
    year: 2023,
  },
  {
    title: "La Cactus Club",
    href: "/",
    year: 2023,
  },
  {
    title: "Jumpforce",
    href: "/",
    year: 2023,
  },
  {
    title: "Artistic",
    href: "/",
    year: 2023,
  },
  {
    title: "Leafy",
    href: "/",
    year: 2022,
  },
];

export { navItems, projectItems, archiveItems };
