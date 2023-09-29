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
          className="z-30 min-w-[220px] animate-slideUpAndFade rounded-xl border border-neutral-400/20 bg-white/40 p-3 backdrop-blur-2xl will-change-[opacity,transform] dark:border-neutral-600/30 dark:bg-black/40 dark:text-white"
          sideOffset={24}
        >
          <DropdownMenu.Item asChild>
            <Link
              href="/monthly-playlists"
              className="text-md inline-flex w-full rounded-md px-2 py-1 text-sm outline-none transition hover:bg-neutral-100 dark:hover:bg-neutral-600 sm:text-base"
            >
              Monthly Playlists
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownExtras;
