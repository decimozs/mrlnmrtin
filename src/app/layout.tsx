import type { Metadata } from "next";
import "./globals.css";
import { NeueMontreal } from "../../public/font";
import { Nav } from "@/components/fragments";
import { seo } from "@/config";

const font = NeueMontreal;

export const metadata: Metadata = {
  ...seo,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-base p-4 text-white w-full h-screen ${font.className}`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
