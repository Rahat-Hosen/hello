type BadgeProps = {
  children: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <div className="rounded-md border border-slate-200 p-[2px] text-xs text-gray-500 dark:border-slate-800 dark:text-gray-400">
      {children}
    </div>
  );
};

export default Badge;
