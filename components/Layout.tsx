import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect, FC } from "react";

const Layout: FC = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div className="flex min-h-screen w-screen flex-col dark:bg-black">
      <main className="flex-1 dark:text-white">{children}</main>
      <div className="fixed inset-x-0 bottom-0 mx-auto mb-4 h-16 w-full max-w-md px-6 ">
        <div className="flew-row mx-auto flex h-full w-full rounded-full border border-black/40 bg-white/30 backdrop-blur-sm dark:border-white dark:bg-black/30 dark:text-white">
          <Link
            href="/"
            className="my-auto mx-2 flex-1 cursor-pointer rounded-full p-3 text-center transition duration-200 hover:bg-gray-200/70 dark:hover:bg-gray-800/70"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="my-auto mx-2 flex-1 cursor-pointer rounded-full p-3 text-center transition duration-200 hover:bg-gray-200/70 dark:hover:bg-gray-800/70"
          >
            Blog
          </Link>
          <Link
            href="/now"
            className="my-auto mx-2 flex-1 cursor-pointer rounded-full p-3 text-center transition duration-200 hover:bg-gray-200/70 dark:hover:bg-gray-800/70"
          >
            Now
          </Link>
          <a
            onClick={switchTheme}
            className="my-auto mx-2 cursor-pointer rounded-full py-3 px-4 text-center transition duration-200 hover:bg-gray-200/70 dark:hover:bg-gray-800/70"
          >
            ●
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;
