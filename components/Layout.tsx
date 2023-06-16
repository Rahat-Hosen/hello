import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect, FC, useRef } from "react";
import { useRouter } from "next/router";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

let allTabs = [
  {
    id: "home",
    name: "Home",
    href: "/",
  },
  {
    id: "projects",
    name: "Projects",
    href: "/projects",
  },
  {
    id: "services",
    name: "Services",
    href: "/services",
  },
  {
    id: "blog",
    name: "Blog",
    href: "/blog",
  },
  {
    id: "theme",
  },
];

const Tabs = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const router = useRouter();
  const [effect, setEffect] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const path = window.location.pathname;
    const currentPath = path.split("/")[1];
    const currentTab = allTabs.findIndex(
      (tab) => tab.href === `/${currentPath}`
    );
    setActiveTabIndex(currentTab);
  }, [router.pathname]);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-20 mx-auto mb-4 h-12 w-full max-w-lg px-6 sm:h-16">
      <div className="flew-row relative mx-auto flex h-full w-full rounded-full border border-neutral-400/50 bg-white/30 backdrop-blur-sm dark:border-neutral-600/50 dark:bg-black/30 dark:text-white">
        <span
          className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-full p-1 transition-all duration-300 sm:p-2"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        >
          <span className="h-full w-full rounded-full bg-gray-200/70 dark:bg-gray-800/70" />
        </span>
        {allTabs.map((tab, index) => {
          if (tab.id === "theme") {
            return (
              <span
                key={index}
                className={`${
                  effect && "animate-wiggle"
                } mx-2 my-auto flex cursor-pointer select-none p-3`}
                onClick={() => {
                  switchTheme();
                  setEffect(true);
                }}
                onAnimationEnd={() => setEffect(false)}
              >
                {!isMounted ? null : theme === "light" ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </span>
            );
          }

          return (
            <Link
              key={index}
              href={tab.href as string}
              ref={(el) => (tabsRef.current[index] = el)}
              className="my-auto flex-1 cursor-pointer rounded-full text-center text-sm transition hover:text-black/80 dark:hover:text-white/80 sm:text-base"
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const Layout: FC = ({ children }) => {
  return (
    <div className="relative flex min-h-screen w-screen flex-col dark:bg-black/30">
      <main className="mx-auto mb-14 w-full max-w-screen-md flex-1 animate-main-content px-4 py-12 dark:text-white">
        {children}
      </main>
      <Tabs />
    </div>
  );
};

export default Layout;
