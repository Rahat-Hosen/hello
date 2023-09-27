import { cloneElement, useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

interface ComponentPlaygroundProps {
  children: React.ReactElement;
  className?: string;
  hasReTrigger?: boolean;
  hasDarkMode?: boolean;
}

const ComponentPlayground: React.FC<ComponentPlaygroundProps> = ({
  children,
  className,
  hasReTrigger,
  hasDarkMode,
}) => {
  const [reTriggerKey, setReTriggerKey] = useState<number>(Date.now());

  const reTrigger = () => {
    setReTriggerKey(Date.now());
  };

  const baseClasses =
    "not-prose relative flex items-center justify-center rounded-xl border px-4 py-12";
  const darkModeClasses = hasDarkMode
    ? "bg-neutral-100 dark:bg-neutral-900"
    : "";
  const reTriggerClasses = hasDarkMode
    ? "text-neutral-900 dark:text-neutral-100"
    : "text-white";

  const containerClasses = `${baseClasses} ${
    hasDarkMode
      ? "border-neutral-200 dark:border-neutral-800"
      : "border-neutral-200"
  } ${darkModeClasses} ${className || ""}`;

  return (
    <div className={containerClasses}>
      {hasReTrigger && (
        <div
          className={`absolute right-4 top-3 cursor-pointer ${reTriggerClasses}`}
          onClick={reTrigger}
        >
          <ReloadIcon />
        </div>
      )}
      {hasReTrigger ? cloneElement(children, { key: reTriggerKey }) : children}
    </div>
  );
};

export default ComponentPlayground;
