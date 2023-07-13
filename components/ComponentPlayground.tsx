import { Key, cloneElement, useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

const ComponentPlayground: React.FC<{
  children: React.ReactElement;
  className?: string;
  hasReTrigger?: boolean;
}> = ({ children, className, hasReTrigger }) => {
  const [key, setKey] = useState<Key>(Date.now());

  const reTrigger = () => {
    setKey(Date.now());
  };

  return (
    <div
      className={`not-prose relative flex items-center justify-center rounded-xl border border-neutral-200 bg-neutral-950 px-4 py-12 dark:border-neutral-800 ${
        className ? className : ""
      }`}
    >
      {hasReTrigger ? (
        <div
          className="absolute right-4 top-3 cursor-pointer text-white"
          onClick={reTrigger}
        >
          <ReloadIcon />
        </div>
      ) : null}
      {hasReTrigger ? cloneElement(children, { key }) : children}
    </div>
  );
};

export default ComponentPlayground;
