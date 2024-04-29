import localFont from "next/font/local";

export const NeueMontreal = localFont({
  src: [
    {
      path: "./NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./NeueMontreal-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
  ],
});
