import {
  DesktopIcon,
  LaptopIcon,
  MobileIcon,
  Component2Icon,
} from "@radix-ui/react-icons";
import { CardSpotlightEffect } from "components/lab/SpotlightEffect";
import SectionContact from "components/SectionContact";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ButtonOutline = () => {
  return (
    <button
      className="inline-flex items-center rounded-md border border-slate-300 bg-transparent px-4 py-2 text-base font-medium transition hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-500"
      onClick={() => {
        return window.open("mailto:julien.thibeaut@gmail.com");
      }}
    >
      Discuss your project
    </button>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <CardSpotlightEffect>
      <div className="relative rounded-md border border-slate-300 bg-slate-300/5 p-4 dark:border-slate-700">
        <div className="mb-3 flex items-center">
          <div className="rounded-md border border-slate-200 p-1 dark:bg-black">
            {icon}
          </div>
          <h2 className="ml-2 text-lg">{title}</h2>
        </div>
        <p className="mb-4 max-w-xl text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <ButtonOutline />
      </div>
    </CardSpotlightEffect>
  );
};

const HireMePage = () => {
  return (
    <div>
      <h1 className="mb-6 text-xl font-medium">Services</h1>
      <p className="mb-8">
        Hi, I'm Julien, a freelance front-end developer with years of
        experience. I love building and improving digital projects. Whether
        you're starting a new project or need to enhance an existing one, I'm
        here to help. Check out some of my work on my{" "}
        <Link href="/" className="font-medium underline">
          homepage.
        </Link>
      </p>
      <p className="mb-1 font-medium">My tech stack</p>
      <ul className="flex flex-wrap gap-x-6 text-gray-700 dark:text-gray-300">
        <li>React</li>
        <li>React Native</li>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>GraphQL</li>
        <li>Node.js</li>
        <li>Tailwind CSS</li>
        <li>And more...</li>
      </ul>
      <p className="mb-1 mt-10 font-medium">What I can do for you</p>
      <div className="flex flex-col gap-8">
        <ServiceCard
          icon={<LaptopIcon />}
          title="Website Development"
          description="Crafting high-quality, responsive websites tailored to your business needs. Leveraging modern technologies like React and Next.js, I build sites that are fast, SEO-friendly, and provide an exceptional user experience."
        />
        <ServiceCard
          icon={<DesktopIcon />}
          title="Web Application Development"
          description="Building robust and scalable web applications using the latest front-end technologies. With a strong focus on performance and usability, I use React, TypeScript, and other modern tools to create applications that meet your specific requirements and deliver value to your users."
        />
        <ServiceCard
          icon={<MobileIcon />}
          title="Mobile Application Development"
          description="Creating engaging mobile applications using React Native or ionic. Whether you need a standalone app or want to extend your web application to mobile, I can deliver a solution that provides a seamless user experience across devices."
        />
        <ServiceCard
          icon={<Component2Icon />}
          title="Design System Creation"
          description="Developing comprehensive design systems that ensure consistency across your digital products. This includes defining reusable components, styles, and UX patterns, making it easier to maintain and evolve your applications over time."
        />
        <div className="mb-4">
          <p className="mb-2">
            I can also help you with:{" "}
            <strong className="font-medium">landing page</strong>,{" "}
            <strong className="font-medium">e-commerce website</strong>,{" "}
            <strong className="font-medium">desktop application</strong>,{" "}
            <strong className="font-medium">performance optimization</strong>,{" "}
            <strong className="font-medium">code review</strong>,{" "}
            <strong className="font-medium">refactoring</strong>, and more. ✌️{" "}
          </p>
        </div>
        <SectionContact title="Contact" />
      </div>
    </div>
  );
};

export default HireMePage;
