import LabCard from "components/LabCard";

import { NextSeo } from "next-seo";
import { components, metada } from "data/lab";

const LabIndexPage = () => {
  return (
    <>
      <NextSeo
        title="Lab"
        description="Experimental UI elements and components. Mostly built with React and Tailwind CSS."
      />
      <div className="flex flex-col gap-16">
        {metada.map((component) => {
          const Comp = components[component.slug as keyof typeof components];

          return (
            <LabCard
              key={component.slug}
              slug={component.slug}
              variant={component.theme}
            >
              <Comp />
            </LabCard>
          );
        })}
      </div>
    </>
  );
};

export default LabIndexPage;
