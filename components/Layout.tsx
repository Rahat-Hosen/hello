import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect, FC, useRef } from "react";
import { useRouter } from "next/router";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
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
    id: "extras",
  },
  // {
  //   id: "theme",
  // },
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
    <div className="fixed inset-x-0 bottom-0 z-20 mx-auto mb-4 h-12 w-full max-w-xl px-6 sm:h-16">
      <div className="flew-row relative mx-auto flex h-full w-full rounded-xl border border-neutral-400/20 bg-white/40 backdrop-blur-md dark:border-neutral-600/30 dark:bg-black/40 dark:text-white">
        <span
          className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-xl p-1 transition-all duration-300 sm:p-2"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        >
          <span className="h-full w-full rounded-xl bg-neutral-200 backdrop-blur-xl dark:bg-neutral-800" />
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

          if (tab.id === "extras") {
            return <DropdownExtras key={index} />;
          }

          return (
            <Link
              key={index}
              href={tab.href as string}
              ref={(el) => (tabsRef.current[index] = el)}
              className="font-base inline-flex flex-1 cursor-pointer items-center justify-center rounded-full text-center text-sm transition hover:text-black/80 dark:hover:text-white/80 sm:text-base"
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
    <div className={`relative flex min-h-screen w-screen flex-col`}>
      <div className="pointer-events-none fixed left-0 top-0 z-50 h-12 w-full bg-neutral-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-900" />
      <main className="mx-auto mb-14 w-full max-w-screen-sm flex-1 animate-main-content px-4 pb-8 pt-20 dark:text-white">
        {children}
      </main>
      <Tabs />
    </div>
  );
};

export default Layout;
