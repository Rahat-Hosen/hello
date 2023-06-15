import Button from "components/Button";
import { CardSpotlightEffect } from "components/lab/SpotlightEffect";
import Badge from "components/ui/Badge";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";

const PROJECTS_LIST = [
  {
    title: "ui.ibelick",
    description:
      "A unique collection of modern UI components and effects. Built with React and Tailwind CSS. I've built most of them for my blog. You can use them for free, copy/paste the code and customize them as you want.",
    links: {
      text: "Website",
      link: "https://ui.ibelick.com/",
    },
    tags: ["React", "Tailwind CSS", "TypeScript", "2023", "Open source", "UI"],
    emoji: "💫",
    image: "/projects/ui.ibelick_screen.webp",
    videoLink:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/AyPdr7RjlVIp3tdgMvFM/1fe19388-dcef-461d-9bcc-af6245b355fe.mp4?_a=ATO2BAA0",
  },
  {
    title: "Basyl",
    description:
      "An AI cooking assistant. Experiment with Open AI's GPT-3 to generate recipes and cooking instructions.",
    links: {
      text: "Website",
      link: "https://basyl.co/",
    },
    tags: ["AI", "React", "Next.js", "TypeScript", "Design", "2023"],
    emoji: "🌿",
    videoLink:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/mQkQBbIeT3Oa3oa1nTiH/1f7b0698-b2c8-4e6a-a309-1fdbf621c944.mp4?_a=ATO2BAA0",
  },
  {
    title: "Rapsodie",
    description:
      "A mobile game where you manage a rap music label. I developed the beta version of the app with React and Capacitor, then new features.",
    links: {
      text: "Website",
      link: "https://rapsodie.co/",
    },
    tags: ["React", "Capacitor", "TypeScript", "2022-2023"],
    emoji: "🎤",
  },
  {
    title: "Newfrenz",
    description:
      "Onboarding app for web3 concepts. Won the 1st prize of OpenSea x Replit Hackathon with it.",
    links: {
      text: "Website",
      link: "https://www.newfrenz.xyz/",
    },
    tags: ["Hackathon", "React", "Next.js", "web3", "2022"],
    emoji: "👋",
  },
  {
    title: "Hellocurator",
    description:
      "Concept app to explore digital art curation. Worked on front-end and product. Built with Next.js and web3 technologies.",
    links: {
      text: "Website",
      link: "https://hellocurator.xyz/",
    },
    tags: ["Project", "React", "Next.js", "web3", "TypeScript", "art", "2022"],
    emoji: "🎨",
  },
  {
    title: "Swile",
    description: "Helped building components for the new Swile website.",
    links: {
      text: "Website",
      link: "https://swile.co/",
    },
    tags: ["Freelance", "React", "TypeScript", "2022"],
    emoji: "💼",
  },
  {
    title: "uxcademy",
    description:
      "A website to learn UI/UX design through interactive quizzes. +1500 actives learners. Worked on the front-end and product. Built with Next.js",
    links: {
      text: "Website",
      link: "https://uxcademy.com/",
    },
    tags: ["Project", "React", "Next.js", "TypeScript", "design", "2021"],
    emoji: "🎓",
  },
  {
    title: "La Fourche",
    description:
      "Best online shop to buy organic food in France. Leading the front-end development, from Shopify to Next.js. Front-end architecture & implementation of the new branding",
    links: {
      text: "Website",
      link: "https://lafourche.fr/",
    },
    tags: ["React", "Next.js", "TypeScript", "Design system", "2020-2021"],
    emoji: "🥗",
  },
  {
    title: "madely",
    description:
      "Parisian video based event discovery app (available on iOS). Worked on front-end and product. Built with React Native and Expo.",
    links: {
      text: "Dribbble",
      link: "https://dribbble.com/shots/9683319-Madely-Event-Discovery-App",
    },
    tags: ["React Native", "Expo", "TypeScript", "2019"],
    emoji: "🎉",
    videoLink:
      "https://cdn.dribbble.com/users/675464/screenshots/9683319/media/9d0f045be5d73a441e3273fc2bf873c5.mp4",
  },
  {
    title: "Foncia R&D",
    description:
      "Worked on front-end development for the R&D team. Simplification of the product for one of the biggest real estate agency in France.",
    links: {
      text: "Website",
      link: "https://fr.foncia.com/",
    },
    tags: ["React", "Design system", "2018-2019"],
    emoji: "🏠",
  },
  {
    title: "bitcallz",
    description:
      "Crypto-prediction platform. Worked on fullstack development and product. Built with React and Node.js.",
    links: {
      text: "Dribbble",
      link: "https://dribbble.com/shots/9390744-Bitcallz-crypto-prediction-platform",
    },
    tags: ["Project", "React", "Node.js", "2017"],
    emoji: "📈",
    imageLink:
      "https://cdn.dribbble.com/users/675464/screenshots/9390744/media/7429bc8d60b2da96b4f4e34a1202258c.png",
  },
];

const Projects = () => {
  return (
    <>
      <NextSeo title="Projects" />
      <div className="prose dark:prose-dark">
        <h2 className="mt-12 text-base font-medium">Selected projects</h2>
        <p>
          Below is a showcase of various selected projects I've worked on over
          the years. These include both client work and personal projects.
        </p>
        <p>
          If you want to see what I'm currently working on, check out my{" "}
          <Link href="/">current projects</Link>
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-12 pr-4 md:pr-16">
        {PROJECTS_LIST.map((project) => {
          return (
            <div className="relative rounded-3xl bg-neutral-50 dark:bg-neutral-950">
              <div className="flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center">
                <div className="flex flex-col">
                  <h3 className="mb-1">{project.title}</h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project?.tags?.map((tag) => {
                      return <Badge key={tag}>{tag}</Badge>;
                    })}
                  </div>
                </div>
                <div className="flex items-center">
                  <Button
                    onClick={() => window.open(project.links.link, "_blank")}
                  >
                    {project.links.text}
                  </Button>
                </div>
              </div>
              <hr className="mx-auto w-[50%]" />
              <div className="flex px-14 py-8">
                {project.videoLink ? (
                  <video
                    src={project.videoLink}
                    autoPlay
                    loop
                    muted
                    className="h-80 w-full rounded-3xl object-cover"
                  />
                ) : (
                  <img
                    src={project.imageLink}
                    alt={project.title}
                    // width={896}
                    // height={747}
                    className="h-80 w-full rounded-3xl object-cover"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
