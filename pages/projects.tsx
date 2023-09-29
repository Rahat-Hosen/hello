import Button from "components/ui/Button";
import Badge from "components/ui/Badge";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const PROJECTS_LIST = [
  {
    title: "logoshaper",
    description: "Logo design made simple for startup founders.",
    links: {
      text: "Website",
      link: "https://logoshaper.co",
    },
    tags: ["SaaS", "Founder", "WIP"],
    video: {
      link: "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/OPHIQMqCSAsn1998AgpB/39a443f2-a147-4e8f-aef6-d30d627a3a81.mp4?_a=ATO2BAA0",
      width: "w-full",
      height: "h-80",
    },
  },
  {
    title: "animation.ibelick",
    description:
      "A curated collection of animations crafted exclusively for Tailwind CSS.",
    links: {
      text: "Website",
      link: "https://animation.ibelick.com/",
    },
    tags: ["React", "Tailwind CSS", "TypeScript", "2023", "Open source", "UI"],
    image: {
      src: "https://raw.githubusercontent.com/ibelick/animation/main/public/cover.webp",
      width: "w-full",
    },
  },
  {
    title: "bg.ibelick",
    description:
      "A collection of modern background patterns. Built with React and Tailwind CSS.",
    links: {
      text: "Website",
      link: "https://bg.ibelick.com/",
    },
    tags: ["React", "Tailwind CSS", "TypeScript", "2023", "Open source", "UI"],
    emoji: "💫",
    video: {
      link: "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/OmwskRVDNrY7w9mjfnWA/032a8b93-a8b1-4da4-b903-1aea1e9e0d54.mp4?_a=ATO2BAA0",
      width: "w-full",
      height: "h-80",
    },
  },
  {
    title: "ui.ibelick",
    description:
      "A collection of modern UI components and effects built for React and Tailwind CSS.",
    links: {
      text: "Website",
      link: "https://ui.ibelick.com/",
    },
    tags: ["React", "Tailwind CSS", "TypeScript", "2023", "Open source", "UI"],
    emoji: "💫",
    video: {
      link: "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/AyPdr7RjlVIp3tdgMvFM/1fe19388-dcef-461d-9bcc-af6245b355fe.mp4?_a=ATO2BAA0",
      width: "w-full",
      height: "h-80",
    },
  },
];

const Projects = () => {
  return (
    <>
      <NextSeo title="Projects" />
      <div>
        <h1 className="h1">Selected projects</h1>
      </div>
      <div className="mt-20 flex flex-col gap-64">
        {PROJECTS_LIST.map((project) => {
          return (
            <div
              className="flex w-full flex-col items-center"
              key={project.title}
            >
              <a
                href={project.links.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-105"
              >
                {project.video ? (
                  <video
                    src={project.video.link}
                    autoPlay
                    loop
                    muted
                    className={`mx-auto rounded-md object-contain ${project.video.width}`}
                  />
                ) : (
                  <Image
                    src={project.image!.src!}
                    alt={project.title}
                    width={949}
                    height={900}
                    className="w-full rounded-md object-contain"
                  />
                )}
              </a>
              <div className="mt-8 max-w-sm text-center">
                <a
                  className="text-base"
                  href={project.links.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {project.description}
                </a>
              </div>
            </div>
          );
        })}
        <div className=" pb-12">
          <span className="inline-block">
            More on{" "}
            <a
              href="https://read.cv/ibelick"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Read.CV
            </a>
          </span>
          <ArrowTopRightIcon className="inline-block h-4 w-4" />
        </div>
      </div>
    </>
  );
};

export default Projects;
