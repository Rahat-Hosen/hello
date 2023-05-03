import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect, FC, useRef } from "react";
import { useRouter } from "next/router";

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
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const router = useRouter();

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
    <div className="fixed inset-x-0 bottom-0 mx-auto mb-4 h-16 w-full max-w-md px-6 ">
      <div className="flew-row relative mx-auto flex h-full w-full rounded-full border border-black/40 bg-white/30 backdrop-blur-sm dark:border-white dark:bg-black/30 dark:text-white">
        <span
          className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-full p-2 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        >
          <span className="h-full w-full rounded-full bg-gray-200/70 dark:bg-gray-800/70" />
        </span>
        {allTabs.map((tab, index) => {
          if (tab.id === "theme") {
            return (
              <span
                key={index}
                className="font-5xl mx-2 my-auto flex cursor-pointer select-none rounded-full p-3 text-center transition duration-200 hover:text-yellow-500 dark:hover:text-yellow-400"
                onClick={switchTheme}
              >
                ●
              </span>
            );
          }

          return (
            <Link
              key={index}
              href={tab.href as string}
              ref={(el) => (tabsRef.current[index] = el)}
              className="mx-2 my-auto flex-1 cursor-pointer rounded-full text-center transition hover:text-black/80 dark:hover:text-white/80"
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
      <main className="mx-auto mb-14 w-full max-w-screen-md flex-1 px-4 py-12 dark:text-white">
        {children}
      </main>
      <Tabs />
    </div>
  );
};

export default Layout;
