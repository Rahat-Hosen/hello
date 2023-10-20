import LabCard from "components/LabCard";
import { LabMetadata, components, metada } from "data/lab";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import CodeBlock from "components/CodeBlock";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";

type LabPage = {
  component: LabMetadata;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const currentComponent = metada.find(
    (component) => component.slug === context.params?.id
  );

  const filePath = path.join(
    process.cwd(),
    "components",
    "lab",
    `ButtonShadowSpotlight.tsx`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const component = {
    ...currentComponent,
    code: fileContent,
  };

  return {
    props: {
      component,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const components = metada;

  const paths = components.map((component) => ({
    params: { id: component.slug },
  }));

  return { paths, fallback: false };
};

const LabPage: React.FC<LabPage> = ({ component }) => {
  const Comp = components[component.slug as keyof typeof components];

  return (
    <div className="relative">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center text-sm text-neutral-800 dark:text-neutral-200">
          <ArrowLeftIcon className="mr-1 h-3 w-3" />
          <span className="text-sm">back</span>
        </div>
        <div className="flex items-center text-sm text-neutral-800 dark:text-neutral-200">
          <span className="text-sm">next</span>
          <ArrowRightIcon className="ml-1 h-3 w-3" />
        </div>
      </div>

      <h1 className="h1 mb-2">{component.title}</h1>
      <p className="paragraph mb-6">{component.description}</p>
      {component.sources && (
        <div className="mb-4 text-sm">
          <h5 className="mb-1 text-neutral-600">Sources / Inspirations:</h5>
          <ul className="list-inside text-neutral-600">
            {component.sources.map((source, index) => (
              <li key={index}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  {source.name} <ArrowTopRightIcon className="ml-1 h-2 w-2 " />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mb-10">
        <LabCard variant={component.theme}>
          <Comp />
        </LabCard>
      </div>
      <div>
        <CodeBlock code={component.code} />
      </div>
    </div>
  );
};

export default LabPage;
