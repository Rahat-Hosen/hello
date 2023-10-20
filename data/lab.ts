import { ButtonShadowSpotlight } from "components/lab/ButtonShadowSpotlight";
import { TextTypingEffectWithTextsFadeOut } from "components/lab/TextTypingEffectFadeOut";
import { InputBorderSpotlight } from "components/lab/InputBorderSpotlight";
import { CardSpotlight } from "components/lab/CardSpotlight";
import { CardShine } from "components/lab/CardShine";
import { ButtonShootingStarBorder } from "components/lab/ButtonShootingStarBorder";

export type LabMetadata = {
  title: string;
  description: string;
  slug: string;
  theme: "system" | "dark" | "light";
  code: string;
  name: string;
  datePublished: string;
  sources?: {
    name: string;
    url: string;
  }[];
};

export const metada = [
  {
    title: "Button Shadow Spotlight",
    slug: "button-shadow-spotlight",
    name: "ButtonShadowSpotlight",
    theme: "system",
    datePublished: "2023-09-01",
  },
  {
    title: "Text Typing Effect ",
    slug: "text-typing-effect",
    name: "TextTypingEffectFadeOut",
    theme: "system",
    datePublished: "2023-09-01",
  },
  {
    title: "Input Border Spotlight",
    slug: "input-border-spotlight",
    name: "InputBorderSpotlight",
    theme: "dark",
    datePublished: "2023-09-01",
  },
  {
    title: "Card Spotlight",
    slug: "card-spotlight",
    name: "CardSpotlight",
    theme: "light",
    datePublished: "2023-09-01",
  },
  {
    title: "Card Shine",
    slug: "card-shine",
    name: "CardShine",
    theme: "light",
    datePublished: "2023-09-01",
  },
  {
    title: "Button Shooting Star Border",
    slug: "button-shooting-star-border",
    name: "ButtonShootingStarBorder",
    theme: "dark",
    datePublished: "2023-09-01",
  },
] as const;

export const components = {
  "button-shadow-spotlight": ButtonShadowSpotlight,
  "text-typing-effect": TextTypingEffectWithTextsFadeOut,
  "input-border-spotlight": InputBorderSpotlight,
  "card-spotlight": CardSpotlight,
  "card-shine": CardShine,
  "button-shooting-star-border": ButtonShootingStarBorder,
};
