import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import DropdownExtras from "./DropdownExtras";

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
    id: "blog",
    name: "Blog",
    href: "/blog",
  },
  {
    id: "lab",
    name: "Lab",
    href: "/lab",
  },
  {
    id: "extras",
  },
  {
    id: "theme",
  },
];

const TabBar = () => {
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
    <div className="fixed inset-x-0 bottom-0 z-20 mx-auto mb-4 flex h-14 px-6">
      <div className="relative mx-auto flex h-full items-center overflow-y-scroll rounded-[14px] border border-neutral-400/20 bg-white/40 backdrop-blur-md dark:border-neutral-600/30 dark:bg-black/40 dark:text-white sm:overflow-y-visible">
        <span
          className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-[6px] p-2 transition-all duration-300 sm:p-2"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        >
          <span className="h-full w-full rounded-[6px] bg-neutral-200 backdrop-blur-xl dark:bg-neutral-800" />
        </span>
        {allTabs.map((tab, index) => {
          if (tab.id === "theme") {
            return (
              <div key={index} className="flex items-center">
                <span className="h-8 border-[0.5px] border-neutral-950/10" />
                <span
                  className={`${
                    effect && "animate-vertical-bounce"
                  } mx-2 my-auto flex cursor-pointer select-none p-3`}
                  onClick={() => {
                    switchTheme();
                    setEffect(true);
                  }}
                  onAnimationEnd={() => setEffect(false)}
                >
                  {!isMounted ? null : theme === "light" ? (
                    <div className="h-4 w-4 rounded-sm bg-neutral-900" />
                  ) : (
                    <div className="h-4 w-4 rounded-sm bg-neutral-100" />
                  )}
                </span>
              </div>
            );
          }

          if (tab.id === "extras") {
            return <DropdownExtras key={index} />;
          }

          return (
            <Link
              key={index}
              href={tab.href as string}
              ref={(el) => (tabsRef.current[index] = el)}
              className="font-base inline-flex cursor-pointer items-center justify-center rounded-full px-4 text-center text-sm transition hover:text-black/80 dark:hover:text-white/80 sm:text-base"
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

export default TabBar;
