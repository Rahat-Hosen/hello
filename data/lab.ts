import { ButtonShadowSpotlight } from "components/blog/ButtonShadowSpotlight";

export type LabMetadata = {
  title: string;
  description: string;
  slug: string;
  theme: "system" | "dark" | "light";
  code: string;
  sources?: {
    name: string;
    url: string;
  }[];
};

export const metada = [
  {
    title: "Button Shadow Spotlight",
    description: "A button with a shadow spotlight effect.",
    slug: "button-shadow-spotlight",
    theme: "system",
    // sources: [
    //   {
    //     name: "CodePen",
    //     url: "https://codepen.io/brunodhr/pen/GRjQWYX",
    //   },
    // ],
  },
];

export const components = {
  "button-shadow-spotlight": ButtonShadowSpotlight,
};
