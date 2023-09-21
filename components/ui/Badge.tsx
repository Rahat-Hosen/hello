type BadgeProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

const Badge: React.FC<BadgeProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  const cnVariant = {
    primary:
      "border-neutral-200 dark:border-neutral-800 bg-white text-neutral-900 dark:bg-black dark:text-neutral-100",
    secondary:
      "border-neutral-200 dark:border-neutral-800 bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100",
  };

  return (
    <div
      className={`inline-flex cursor-pointer rounded-md border  p-[2px] text-xs  ${cnVariant[variant]}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Badge;
