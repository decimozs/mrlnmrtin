import { type Metadata } from "next";

export const URLS = process.env.URL_SITE;
export const title = "Marlon Martin";
export const description =
  "I'm a creative developer and a student, building innovative products within the digital space.";

export const seo: Metadata = {
  title,
  description,
  alternates: {
    canonical: URLS,
    languages: {
      "en-US": "/en-US",
    },
  },
  applicationName: title,
  appleWebApp: {
    capable: true,
    title,
    statusBarStyle: "default",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  creator: title,
  authors: [{ name: title, url: URLS }],
  openGraph: {
    url: URLS,
    title,
    description,
    images: "/opengraph-image.png",
    type: "website",
    siteName: title,
  },
  formatDetection: {
    telephone: false,
  },
  keywords: [
    "Marlon",
    "Martin",
    "Decimo",
    "Dez",
    title,
    `${title} Software Developer`,
    `${title} Back-End Developer`,
    `${title} Full Stack Developer`,
    `${title} Web Developer`,
    `${title} React Developer`,
    `${title} Typescript Developer`,
  ],
};
