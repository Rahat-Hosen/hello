import { Highlight, PrismTheme } from "prism-react-renderer";

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

type CodeBlockProps = {
  code: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <Highlight language="tsx" code={code} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} overflow-auto rounded-[4px] p-4 text-[11px] dark:border dark:border-neutral-800`}
          style={{ ...style }}
        >
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
  );
};

export default CodeBlock;
