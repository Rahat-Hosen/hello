import LabCard from "components/LabCard";
import { components, metada } from "data/lab";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import CodeBlock from "components/CodeBlock";

type LabPage = {
  component: typeof metada[0];
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
  const Comp = components[component.slug] as React.FC;

  return (
    <div>
      <h1 className="h1 mb-8">{component.title}</h1>
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
