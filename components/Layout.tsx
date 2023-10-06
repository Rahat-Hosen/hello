import TabBar from "./TabBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen w-screen flex-col">
      <div className="pointer-events-none fixed left-0 top-0 z-50 h-12 w-full bg-neutral-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-900" />
      <main className="mx-auto mb-14 w-full max-w-screen-sm flex-1 px-4 pb-8 pt-20 dark:text-white">
        {children}
      </main>
      <TabBar />
    </div>
  );
};

export default Layout;
