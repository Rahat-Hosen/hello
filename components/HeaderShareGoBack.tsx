import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeftIcon,
  CheckIcon,
  CopyIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/Tooltip";

type CopyLinkProps = {
  link: string;
};

const CopyLink: React.FC<CopyLinkProps> = ({ link }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(link);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className="inline-flex cursor-pointer rounded-full bg-neutral-50 p-2 transition hover:bg-neutral-100 dark:bg-neutral-950 dark:hover:bg-neutral-900"
            onClick={onCopy}
          >
            {hasCheckIcon ? (
              <CheckIcon className="h-4 w-4 text-black dark:text-white" />
            ) : (
              <CopyIcon className="h-4 w-4 text-black dark:text-white" />
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-neutral-100 p-2 transition hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-900">
          Copy link
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

type HeaderShareGoBackProps = {
  goBackHref: string;
  slug: string;
  label: string;
  tweetHref: string;
};

const HeaderShareGoBack: React.FC<HeaderShareGoBackProps> = ({
  goBackHref,
  slug,
  label,
  tweetHref,
}) => {
  const currentUrl = `https://julienthibeaut.xyz${slug}`;

  return (
    <div className="mb-12 flex items-center justify-between">
      <Link
        href={goBackHref}
        className="inline-flex items-center text-neutral-800 no-underline dark:text-neutral-200"
      >
        <ArrowLeftIcon className="mr-1 h-3 w-3" />
        <span className="text-sm">{label}</span>
      </Link>
      <div className="flex gap-2">
        <CopyLink link={currentUrl} />
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span
                  className="inline-flex cursor-pointer rounded-full bg-neutral-50 p-2 transition hover:bg-neutral-100 dark:bg-neutral-950 dark:hover:bg-neutral-900"
                  onClick={() => {
                    window.open(tweetHref, "_blank");
                  }}
                >
                  <TwitterLogoIcon className="h-4 w-4 text-black dark:text-white" />
                </span>
              </TooltipTrigger>
              <TooltipContent>Share on Twitter</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default HeaderShareGoBack;
