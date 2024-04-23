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
  },
  {
    id: 2,
    title: "Verdant Vibes",
    href: "/",
    type: "Academic",
    tech: "java",
  },
  {
    id: 3,
    title: "JMAA",
    href: "/",
    type: "Academic",
    tech: "java",
  },
  {
    id: 4,
    title: "Inspirify",
    href: "/",
    type: "Personal",
    tech: "goc",
  },
  {
    id: 5,
    title: "Crochet by Sogonidk",
    href: "/",
    type: "Comission",
    tech: "fullstack",
  },
  {
    id: 6,
    title: "PLP Google Classroom",
    href: "/",
    type: "Academic",
    tech: "vb",
  },
  {
    id: 7,
    title: "Decimo AI",
    href: "/",
    type: "Personal",
    tech: "jsnode",
  },
  {
    id: 8,
    title: "Pacman Clone",
    href: "/",
    type: "Academic",
    tech: "game",
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
