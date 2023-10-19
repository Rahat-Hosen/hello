import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const items = [
  { label: "Monthly Playlists", href: "/monthly-playlists" },
  // { label: "Time Tracker", href: "/time-tracker" },
];

const DropdownExtras = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label="Extras"
          className="font-base my-auto cursor-pointer rounded-full px-4 text-center text-sm outline-none transition hover:text-black/80 dark:hover:text-white/80 sm:text-base"
        >
          Extras
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-30 flex min-w-[200px] animate-slideUpAndFade flex-col rounded-lg border border-neutral-400/20 bg-white/40 py-1 backdrop-blur-2xl will-change-[opacity,transform] dark:border-neutral-600/30 dark:bg-black/40 dark:text-white"
          sideOffset={24}
        >
          {items.map((item) => (
            <DropdownMenu.Item asChild key={item.href}>
              <Link
                href={`/${item.href}`}
                className="dark:hover:bg-neutral-400/20text-sm mx-1 inline-flex rounded-[4px] p-1.5 text-sm  outline-none transition hover:bg-neutral-400/20"
              >
                {item.label}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownExtras;
