import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect, FC, useRef } from "react";

let allTabs = [
  {
    id: "home",
    name: "Home",
    href: "/",
  },
  {
    id: "blog",
    name: "Blog",
    href: "/blog",
  },
  {
    id: "now",
    name: "Now",
    href: "/now",
  },
  {
    id: "theme",
  },
];

const Tabs = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const tabsRef = useRef<(HTMLElement | null)[]>([]);

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
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
    <div className="fixed inset-x-0 bottom-0 mx-auto mb-4 h-16 w-full max-w-md px-6 ">
      <div className="flew-row relative mx-auto flex h-full w-full rounded-full border border-black/40 bg-white/30 backdrop-blur-sm dark:border-white dark:bg-black/30 dark:text-white">
        <span
          className="absolute top-0 bottom-0 -z-10 flex overflow-hidden rounded-full p-2 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        >
          <span className="h-full w-full rounded-full bg-gray-200/70 dark:bg-gray-800/70" />
        </span>
        {allTabs.map((tab, index) => {
          if (tab.id === "theme") {
            return (
              <a className="my-auto mx-2 flex cursor-pointer rounded-full p-3 text-center ">
                <span
                  className="select-none transition duration-200 hover:text-yellow-500 dark:hover:text-yellow-400"
                  onClick={switchTheme}
                >
                  ●
                </span>
              </a>
            );
          }

          return (
            <Link
              href={tab.href as string}
              ref={(el) => (tabsRef.current[index] = el)}
              className="my-auto mx-2 flex-1 cursor-pointer rounded-full text-center transition hover:text-black/80 dark:hover:text-white/80"
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
    <div className="flex min-h-screen w-screen flex-col dark:bg-black">
      <main className="flex-1 dark:text-white">{children}</main>
      <Tabs />
    </div>
  );
};

export default Layout;
