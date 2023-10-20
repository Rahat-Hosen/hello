import { Highlight, PrismTheme } from "prism-react-renderer";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const theme: PrismTheme = {
  plain: {
    color: "#e5e5e5",
    backgroundColor: "#171717",
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "#fafafa",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#f5f5f5",
      },
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "#e5e5e5",
      },
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "#f5f5f5",
      },
    },
    {
      types: ["constant"],
      style: {
        color: "#a3a3a3",
      },
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "#f5f5f5",
      },
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "#fafafa",
      },
    },
    {
      types: ["selector"],
      style: {
        color: "#f5f5f5",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#a3a3a3",
      },
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "#e5e5e5",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#f5f5f5",
      },
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#fafafa",
      },
    },
    {
      types: ["function"],
      style: {
        color: "#a3a3a3",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#e5e5e5",
      },
    },
    {
      types: ["char"],
      style: {
        color: "#fafafa",
      },
    },
  ],
};

type CopyCode = {
  code: string;
};

const CopyCode: React.FC<CopyCode> = ({ code }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <button
      className="cursor-pointer rounded-md border border-neutral-900 bg-neutral-800 p-1.5 transition hover:bg-neutral-700"
      onClick={onCopy}
    >
      {hasCheckIcon ? (
        <CheckIcon className="h-3 w-3 text-neutral-50" />
      ) : (
        <CopyIcon className="h-3 w-3 text-neutral-50" />
      )}
    </button>
  );
};

type CodeBlockProps = {
  code: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <div>
      <Highlight language="tsx" code={code} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} relative overflow-auto rounded-[4px] p-4 text-[11px] dark:border dark:border-neutral-800`}
            style={{ ...style }}
          >
            <div className="absolute right-3 top-3">
              <CopyCode code={code} />
            </div>
            {tokens.slice(0, -1).map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
