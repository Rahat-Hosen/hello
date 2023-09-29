import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const DropdownExtras = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label="Extras"
          className="font-base my-auto flex-1 cursor-pointer rounded-full text-center text-sm outline-none transition hover:text-black/80 dark:hover:text-white/80 sm:text-base"
        >
          Extras
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-30 flex min-w-[200px] animate-slideUpAndFade flex-col rounded-xl border border-neutral-400/20 bg-white/40 p-3 backdrop-blur-2xl will-change-[opacity,transform] dark:border-neutral-600/30 dark:bg-black/40 dark:text-white"
          sideOffset={24}
        >
          <DropdownMenu.Item asChild>
            <Link
              href="/monthly-playlists"
              className="text-md inline-flex rounded-md px-2 py-1 text-sm outline-none transition hover:bg-neutral-400/20 dark:hover:bg-neutral-400/20 sm:text-base"
            >
              Monthly Playlists
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link
              href="/time-tracker"
              className="text-md inline-flex rounded-md px-2 py-1 text-sm outline-none transition hover:bg-neutral-400/20 dark:hover:bg-neutral-400/20 sm:text-base"
            >
              Time Tracker
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownExtras;
