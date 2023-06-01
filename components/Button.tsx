import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="inline-flex items-center rounded-md border border-slate-300 bg-transparent px-4 py-2 text-base font-medium transition hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-500"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
