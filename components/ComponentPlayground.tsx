import { Key, cloneElement, useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

const ComponentPlayground: React.FC<{
  children: React.ReactElement;
  className?: string;
  hasReTrigger?: boolean;
  hasDarkMode?: boolean;
}> = ({ children, className, hasReTrigger, hasDarkMode }) => {
  const [key, setKey] = useState<Key>(Date.now());

  const reTrigger = () => {
    setKey(Date.now());
  };

  const containerClassName = `not-prose relative flex items-center justify-center rounded-xl border border-neutral-200 bg-neutral-950 px-4 py-12 dark:border-neutral-800 
  ${hasDarkMode ? "bg-white dark:bg-neutral-950" : ""}
  ${className ? className : ""}`;

  const reTriggerClassName = `absolute right-4 top-3 cursor-pointer ${
    hasDarkMode ? "text-neutral-900 dark:text-neutral-100" : "text-white"
  }`;

  return (
    <div className={containerClassName}>
      {hasReTrigger ? (
        <div className={reTriggerClassName} onClick={reTrigger}>
          <ReloadIcon />
        </div>
      ) : null}
      {hasReTrigger ? cloneElement(children, { key }) : children}
    </div>
  );
};

export default ComponentPlayground;
