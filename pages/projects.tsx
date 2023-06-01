import Button from "components/Button";
import { CardSpotlightEffect } from "components/lab/SpotlightEffect";

const PROJECTS_LIST = [
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
  },
];

const Projects = () => {
  return (
    <>
      <div className="prose dark:prose-dark">
        <h2 className="mt-12 text-base font-medium">Selected projects</h2>
        <p>
          Below is a showcase of various selected projects I've worked on over
          the years. These include both client work and personal projects.
          Please note that while I'm proud of all these projects, some of them
          are no longer actively maintained.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-4 pr-0 md:pr-16">
        {PROJECTS_LIST.map((project) => {
          return (
            <CardSpotlightEffect>
              <div className="relative flex items-center rounded-md border border-slate-300 bg-slate-300/5 p-6 dark:border-slate-700">
                <div>
                  <div className="flex h-14 w-14 select-none items-center justify-center rounded border border-slate-200 text-2xl dark:border-slate-800">
                    {project.emoji}
                  </div>
                </div>
                <div className="mx-8 flex flex-col">
                  <h3 className="mb-1">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project?.tags?.map((tag) => {
                      return (
                        <div className="rounded-md border border-slate-200 p-[2px] text-xs text-gray-500 dark:text-gray-400">
                          {tag}
                        </div>
                      );
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
            </CardSpotlightEffect>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
