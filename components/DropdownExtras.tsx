import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const items = [
  { label: "Monthly Playlists", href: "/monthly-playlists" },
  { label: "Twitter", to: "https://twitter.com/Ibelick" },
  { label: "GitHub", to: "https://github.com/ibelick" },
  { label: "Read.CV", to: "https://read.cv/ibelick" },
];

const DropdownExtras = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label="Extras"
          className="font-base my-auto cursor-pointer px-4 text-center text-sm outline-none transition hover:text-black/80 dark:hover:text-white/80 sm:text-base"
        >
          More
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-30 flex min-w-[200px] animate-slideUpAndFade flex-col rounded-lg border border-neutral-400/20 bg-white/90 py-1 backdrop-blur-sm will-change-[opacity,transform] dark:border-neutral-600/30 dark:bg-black/90 dark:text-white"
          sideOffset={24}
        >
          {items.map((item) => (
            <DropdownMenu.Item asChild key={item.label}>
              {item?.href ? (
                <Link
                  href={`/${item.href}`}
                  className="mx-1 inline-flex rounded-[4px] p-1.5 text-sm outline-none  transition hover:bg-neutral-400/20 dark:hover:bg-neutral-400/20"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 inline-flex items-center rounded-[4px] p-1.5 text-sm outline-none transition hover:bg-neutral-400/20 dark:hover:bg-neutral-400/20"
                >
                  <span>{item.label}</span>
                  <ArrowTopRightIcon className="ml-1 inline-block h-2.5 w-2.5" />
                </a>
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownExtras;
