import localFont from "next/font/local";

export const NeueMontreal = localFont({
  src: [
    {
      path: "./NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./NeueMontreal-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
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
    {
      path: "./NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
