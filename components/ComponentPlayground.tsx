const ComponentPlayground: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex items-center justify-center rounded-xl border border-slate-600/50 bg-slate-950 px-4 py-12">
      {children}
    </div>
  );
};

export default ComponentPlayground;
