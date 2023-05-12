const ComponentPlayground: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`not-prose flex items-center justify-center rounded-xl border border-slate-600/50 bg-slate-950 px-4 py-12 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default ComponentPlayground;
