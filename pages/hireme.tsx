import {
  DesktopIcon,
  LaptopIcon,
  MobileIcon,
  Component2Icon,
} from "@radix-ui/react-icons";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="rounded-md border border-slate-300 bg-slate-300/5 p-4 dark:border-slate-700">
      <div className="mb-1 flex items-center">
        <div className="rounded-md border border-slate-200 bg-white p-1 dark:bg-black">
          {icon}
        </div>
        <h2 className="ml-2 text-lg">{title}</h2>
      </div>
      <p className="max-w-xl text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

const HireMePage = () => {
  return (
    <div>
      <h1 className="mb-1 text-xl font-medium">Hire me</h1>
      <p>I have several years of experience working on front-end projects.</p>
      <p>You can check my stack</p>
      <p>
        I can help you build your next product, improve your existing product,
        or help you with your next project. Here is a list of project types I
        can help you with:
      </p>

      <div className="mt-10 flex flex-col gap-8">
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
          icon={<Component2Icon />}
          title="Design System Creation"
          description="Developing comprehensive design systems that ensure consistency across your digital products. This includes defining reusable components, styles, and UX patterns, making it easier to maintain and evolve your applications over time."
        />
        <ServiceCard
          icon={<MobileIcon />}
          title="Mobile Application Development"
          description="Creating engaging mobile applications using React Native or ionic. Whether you need a standalone app or want to extend your web application to mobile, I can deliver a solution that provides a seamless user experience across devices."
        />
        <div className="mb-4">
          <p className="mb-2">
            I can also help you with:{" "}
            <strong className="font-medium">landing page</strong>,{" "}
            <strong className="font-medium">e-commerce website</strong>,{" "}
            <strong className="font-medium">desktop application</strong>,{" "}
            <strong className="font-medium">performance optimization</strong>,{" "}
            <strong className="font-medium">code review</strong>,{" "}
            <strong className="font-medium">refactoring</strong>, and more.{" "}
          </p>
          <p>
            Also, if you need help for design or backend, I can refer you to
            some of my friends who are experts in these fields.
          </p>
        </div>
        <div>Let's chat!</div>
      </div>
    </div>
  );
};

export default HireMePage;
