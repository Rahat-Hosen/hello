import Link from "next/link";
import NewWindowIcon from "../components/NewWindowIcon";
import AccordionMenu from "../components/AccordionMenu";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <section>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          julien.thibeaut[at]gmail.com
        </p>
        <p>
          Hello! 👋 I’m Julien, a passionate software developer with a focus on
          front-end development.
        </p>{" "}
        <p className="mt-4">
          <span className="underline">Specialties:</span> JavaScript, React,
          React Native, Next.js, TypeScript
        </p>
        <details className="prose -mx-0 mt-12 dark:prose-dark" open>
          <summary className="cursor-pointer font-semibold">About me</summary>
          <p>
            I have been building UIs with <strong>React since 2016</strong>. My
            main work is focused on building UIs, creating component libraries,
            design systems, and front-end architecture. I love being part of the
            design process, working with designers to create stunning screens,
            and optimizing the user experience.
          </p>
          <p>
            Based in Paris, I'm open to remote collaboration. Some random
            interests: plants, climate change, cooking, digital art, exploring
            technologies, documentaries, and rap music.{" "}
          </p>
          <p>
            I also like to create a{" "}
            <Link href={"/monthly-playlists"}>playlist per month</Link>, and I
            need to <Link href={"/blog"}>write more</Link>. This website serves
            as my digital garden, I will try to keep it updated with my latest
            projects/experiments and thoughts.
          </p>
        </details>
        <details className="prose -mx-0 mt-12 dark:prose-dark" open>
          <summary className="cursor-pointer font-semibold">
            Selected projects
          </summary>
          <ul className="items flex max-w-xs list-none flex-col justify-between divide-y pl-0">
            <li className="m-0 mt-5 py-2 pl-0">
              <AccordionProject
                title="rapsodie"
                date={2022}
                description="A mobile game where you manage a rap music label. Developed the beta version of the app with React and Capacitor."
                links={[
                  {
                    text: "Website",
                    link: "https://rapsodie.co/",
                  },
                  {
                    text: "App Store",
                    link: "https://apps.apple.com/fr/app/rapsodie-ton-label-de-rap/id1572281230",
                  },
                  {
                    text: "Play Store",
                    link: "https://play.google.com/store/apps/details?id=com.rapsodiedata.app&hl=fr&gl=US",
                  },
                ]}
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="newfrenz"
                date={2022}
                description="Onboarding app for web3 concepts. Won the 1st prize of OpenSea
                x Replit Hackathon with it."
                links={[
                  {
                    text: "Website",
                    link: "https://www.newfrenz.xyz/",
                  },
                ]}
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="hellocurator"
                date={2022}
                description="Concept app to explore digital art curation. Worked on front-end and product. Built with Next.js and web3 technologies."
                links={[
                  {
                    text: "Website",
                    link: "https://hellocurator.xyz/",
                  },
                  {
                    text: "Article",
                    link: "https://mirror.xyz/hellocurator.eth/ejbQtqckavjt1aS7kScgXq8qkIMobov0kbT9P2eW9FE",
                  },
                ]}
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="playgrounds"
                date={2022}
                description="Community of builders who experiment building decentralized
                applications."
                links={[
                  {
                    text: "Website",
                    link: "https://playgrounds.wtf/",
                  },
                ]}
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="swile"
                date={2021}
                description="Helped building components for the new Swile website."
                links={[
                  {
                    text: "Website",
                    link: "https://swile.co/",
                  },
                ]}
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="uxcademy"
                date={2021}
                description="A website to learn UI/UX design through interactive quizzes. +1500 actives learners. Worked on the front-end and product. Built with Next.js"
                links={[
                  {
                    text: "Website",
                    link: "https://uxcademy.com/",
                  },
                ]}
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="lafourche"
                date={2021}
                description="Worked on front-end architecture & implementation of the new branding."
                links={[
                  {
                    text: "Website",
                    link: "https://lafourche.fr/",
                  },
                ]}
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="lafourche"
                date={2020}
                description="Best online shop to buy organic food in France. Leading the front-end development, from Shopify to Next.js."
                links={[
                  {
                    text: "Website",
                    link: "https://lafourche.fr/",
                  },
                ]}
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="madely"
                date={2019}
                description="Parisian video based event discovery app (available on iOS). Worked on front-end and product. Built with React Native and Expo."
                links={[
                  {
                    text: "Dribbble",
                    link: "https://dribbble.com/shots/9683319-Madely-Event-Discovery-App",
                  },
                ]}
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="Foncia R&D"
                date={2018}
                description="Worked on front-end development for the R&D team. Simplification of the product for one of the biggest real estate agency in France."
                links={[
                  {
                    text: "Website",
                    link: "https://fr.foncia.com/",
                  },
                ]}
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="bitcallz"
                date={2017}
                description="Crypto-prediction platform. Worked on fullstack development and product. Built with React and Node.js."
                links={[
                  {
                    text: "Dribbble",
                    link: "https://dribbble.com/shots/9390744-Bitcallz-crypto-prediction-platform",
                  },
                ]}
              />
            </li>
          </ul>
          <p>
            You can see what I'm doing <Link href="/now">now</Link>.
          </p>
        </details>
        <div className="mt-12">
          <p className="mb-2">Also available on</p>
          <ul className="list-none p-0">
            <li className="mb-2 cursor-pointer underline decoration-gray-500 underline-offset-4">
              <a href="https://twitter.com/Ibelick" target="_blank">
                Twitter ↗
              </a>
            </li>
            <li className="mb-2 cursor-pointer underline decoration-gray-500 underline-offset-4">
              <a href="https://github.com/ibelick" target="_blank">
                GitHub ↗
              </a>
            </li>
            <li className="mb-2 cursor-pointer underline decoration-gray-500 underline-offset-4">
              <a href="https://read.cv/ibelick" target="_blank">
                Read.CV ↗
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

const AccordionProject: React.FC<{
  title: string;
  date: number | string;
  description: string;

  links?: { text: string; link: string }[];
}> = ({ title, date, description, links }) => {
  return (
    <AccordionMenu
      title={
        <div className="flex w-full cursor-pointer justify-between">
          <div>{title}</div>
          <span>{date}</span>
        </div>
      }
    >
      <div className="mb-1 mt-2 text-sm font-light text-neutral-500">
        {description}
      </div>
      <div>
        {links?.map(({ text, link }, index) => (
          <Fragment key={index}>
            <a
              className="inline-flex text-sm font-light text-neutral-900 no-underline hover:underline"
              href={link}
              target="_blank"
            >
              {text}
              <span className="ml-0.5">
                <NewWindowIcon />
              </span>
            </a>
            {links.length - 1 === index ? null : <span className="mx-2"></span>}
          </Fragment>
        ))}
      </div>
    </AccordionMenu>
  );
};
