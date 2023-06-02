import {
  FigmaLogoIcon,
  FramerLogoIcon,
  SketchLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  VercelLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const LOGOS = [
  <FigmaLogoIcon width={24} height={24} className="text-slate-800" />,
  <FramerLogoIcon width={24} height={24} className="text-slate-800" />,
  <SketchLogoIcon width={24} height={24} className=" text-slate-800" />,
  <TwitterLogoIcon width={24} height={24} className="text-slate-800" />,
  <GitHubLogoIcon width={24} height={24} className="text-slate-800" />,
  <VercelLogoIcon width={24} height={24} className="text-slate-800" />,
  <NotionLogoIcon width={24} height={24} className="text-slate-800" />,
  <DiscordLogoIcon width={24} height={24} className="text-slate-800" />,
  <InstagramLogoIcon width={24} height={24} className="text-slate-800" />,
  <LinkedInLogoIcon width={24} height={24} className="text-slate-800" />,
];

export const InfiniteSliderTW = () => {
  return (
    <>
      <div className="relative m-auto w-[500px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="slide-track flex w-[calc(125px*10)]">
          {LOGOS.map((logo) => (
            <div className="slide flex w-[125px] items-center justify-center">
              {logo}
            </div>
          ))}
          {LOGOS.map((logo) => (
            <div className="slide flex w-[125px] items-center justify-center">
              {logo}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes infiniteSlider {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-125px * 5));
          }
        }

        .slide-track {
          animation: infiniteSlider 20s linear infinite;
        }
      `}</style>
    </>
  );
};
