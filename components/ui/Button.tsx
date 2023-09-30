import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="inline-flex h-9 items-center rounded-md border border-neutral-300 bg-transparent px-4 py-2 text-sm font-medium outline-none transition hover:border-neutral-500 focus:ring-blue-500 focus-visible:outline-none focus-visible:ring-1 dark:border-neutral-700 dark:hover:border-neutral-500"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
