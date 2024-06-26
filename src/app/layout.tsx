import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "../styles/globals.css";
import { NeueMontreal } from "../../public/font";
import { Footer, Nav } from "@/components/fragments";
import { seo } from "@/config";
import type { Viewport } from "next";

const font = NeueMontreal;

export const metadata: Metadata = {
  ...seo,
};

export const viewport: Viewport = {
  themeColor: "#000109",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body
        className={`bg-base p-4 text-white w-full h-screen ${font.className}`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
