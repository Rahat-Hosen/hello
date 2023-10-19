import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ButtonShadowSpotlight } from "components/lab/ButtonShadowSpotlight";
import { CardShineEffectTW2 } from "components/lab/ShineEffect";
import { ShootingStarBorderTW } from "components/lab/ShootingStarBorder";
import { InputSpotlightBorder } from "components/lab/SpotlightBorder";
import { CardSpotlightEffectTW } from "components/lab/SpotlightEffect";
import { TextTypingEffectWithTextsFadeOut } from "components/lab/TextTypingEffect";
import { cn } from "lib/utils";
import { NextSeo } from "next-seo";
import Link from "next/link";

type LabCardProps = {
  children: React.ReactNode;
  slug: string;
  variant?: "light" | "dark" | "system";
};

const LabCard = ({ children, slug, variant = "light" }: LabCardProps) => {
  const containerVariantCn = {
    light: "bg-white",
    dark: "bg-neutral-900 border dark:border-neutral-800",
    system:
      "bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800",
  }[variant];

  const arrowVariantCn = {
    light: "text-neutral-900",
    dark: "text-neutral-100",
    system: "text-neutral-900 dark:text-neutral-100",
  }[variant];

  return (
    <div
      className={cn(
        containerVariantCn,
        `relative z-0 flex h-full min-h-[240px] items-center justify-center rounded-[4px] p-10`
      )}
    >
      <Link href={`/lab/${slug}`}>
        <div className="absolute right-4 top-3 cursor-pointer">
          <ArrowRightIcon className={cn(arrowVariantCn, `h-4 w-4`)} />
        </div>
      </Link>
      {children}
    </div>
  );
};

const Lab = () => {
  return (
    <>
      <NextSeo
        title="Lab"
        description="Experimental UI elements and components. Mostly built with React and Tailwind CSS."
      />
      <div className="flex flex-col gap-16">
        <LabCard slug="input-spotlight-border" variant="system">
          <ButtonShadowSpotlight />
        </LabCard>
        <LabCard slug="input-spotlight-border" variant="dark">
          <InputSpotlightBorder />
        </LabCard>
        <LabCard slug="card-spotlight" variant="light">
          <CardSpotlightEffectTW />
        </LabCard>
        <LabCard slug="card-shine" variant="light">
          <CardShineEffectTW2 />
        </LabCard>
        <LabCard slug="text-typing-effect" variant="system">
          <TextTypingEffectWithTextsFadeOut />
        </LabCard>
        <LabCard slug="shooting-star-border" variant="dark">
          <ShootingStarBorderTW />
        </LabCard>
      </div>
    </>
  );
};

export default Lab;
