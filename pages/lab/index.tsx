import LabCard from "components/LabCard";
import { ButtonShadowSpotlight } from "components/lab/ButtonShadowSpotlight";
import { CardShineEffectTW2 } from "components/lab/ShineEffect";
import { ShootingStarBorderTW } from "components/lab/ShootingStarBorder";
import { InputSpotlightBorder } from "components/lab/SpotlightBorder";
import { CardSpotlightEffectTW } from "components/lab/SpotlightEffect";
import { TextTypingEffectWithTextsFadeOut } from "components/lab/TextTypingEffect";
import { NextSeo } from "next-seo";

const LabIndexPage = () => {
  return (
    <>
      <NextSeo
        title="Lab"
        description="Experimental UI elements and components. Mostly built with React and Tailwind CSS."
      />
      <div className="flex flex-col gap-16">
        <LabCard slug="button-shadow-spotlight" variant="system">
          <ButtonShadowSpotlight />
        </LabCard>
        <LabCard slug="text-typing-effect" variant="system">
          <TextTypingEffectWithTextsFadeOut />
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
        <LabCard slug="shooting-star-border" variant="dark">
          <ShootingStarBorderTW />
        </LabCard>
      </div>
    </>
  );
};

export default LabIndexPage;
