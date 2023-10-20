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
  },
  {
    title: "Text Typing Effect ",
    slug: "text-typing-effect",
    name: "TextTypingEffectFadeOut",
    theme: "system",
  },
  {
    title: "Input Border Spotlight",
    slug: "input-border-spotlight",
    name: "InputBorderSpotlight",
    theme: "dark",
  },
  {
    title: "Card Spotlight",
    slug: "card-spotlight",
    name: "CardSpotlight",
    theme: "light",
  },
  {
    title: "Card Shine",
    slug: "card-shine",
    name: "CardShine",
    theme: "light",
  },
  {
    title: "Button Shooting Star Border",
    slug: "button-shooting-star-border",
    name: "ButtonShootingStarBorder",
    theme: "dark",
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
