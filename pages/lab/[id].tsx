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
import Link from "next/link";
import HeaderShareGoBack from "components/HeaderShareGoBack";

type LabPage = {
  component: LabMetadata;
  pastComponent: LabMetadata | null;
  nextComponent: LabMetadata | null;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const currentComponent = metada.find(
    (component) => component.slug === context.params?.id
  );

  const pastComponent = metada.find(
    (component) =>
      currentComponent &&
      metada.indexOf(component) === metada.indexOf(currentComponent) - 1
  );

  const nextComponent = metada.find(
    (component) =>
      currentComponent &&
      metada.indexOf(component) === metada.indexOf(currentComponent) + 1
  );

  if (!currentComponent) {
    return {
      notFound: true,
    };
  }

  const filePath = path.join(
    process.cwd(),
    "components",
    "lab",
    `${currentComponent.name}.tsx`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const component = {
    ...currentComponent,
    code: fileContent,
  };

  return {
    props: {
      component,
      pastComponent: pastComponent || null,
      nextComponent: nextComponent || null,
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

const LabPage: React.FC<LabPage> = ({
  component,
  pastComponent,
  nextComponent,
}) => {
  const Comp = components[component.slug as keyof typeof components];

  return (
    <div className="relative">
      <HeaderShareGoBack
        slug={`/lab/${component.slug}`}
        label="back to all components"
        tweetHref={`https://twitter.com/intent/tweet?text=${component.title}&url=https://julienthibeaut.xyz/lab/${component.slug}`}
      />

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

      <div className="my-10 flex items-center justify-between">
        {pastComponent ? (
          <Link href={`/lab/${pastComponent?.slug}`}>
            <div className="flex items-center text-sm text-neutral-800 dark:text-neutral-200">
              <ArrowLeftIcon className="mr-1 h-3 w-3" />
              <span className="text-sm">{pastComponent?.name}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {nextComponent ? (
          <Link href={`/lab/${nextComponent?.slug}`}>
            <div className="flex items-center text-sm text-neutral-800 dark:text-neutral-200">
              <span className="text-sm">{nextComponent?.name}</span>
              <ArrowRightIcon className="ml-1 h-3 w-3" />
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default LabPage;
