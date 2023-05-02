import { useTheme } from "next-themes";
import React, { CSSProperties, useEffect, useRef } from "react";

export const AnimatedGradientBorderTheme = () => {
  const { theme, setTheme } = useTheme();
  const [background, setBackground] = React.useState<string | null>(null);
  const [border, setBorder] = React.useState<string | null>(null);
  const [boxShadow, setBoxShadow] = React.useState<string | null>(null);

  // to change the background color on first render and when theme changes
  useEffect(() => {
    const isLight = theme === "light";

    const newBackground = `linear-gradient(${
      isLight ? "#fff , #fff" : "#000, #000"
    }) padding-box`;
    const newBorder = `linear-gradient(
                  var(--angle),
                  ${
                    isLight
                      ? `rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)`
                      : `rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.2)`
                  }
                )
                border-box;`;
    const newBoxShadow = `0px 2px 20px ${
      isLight ? `rgba(0, 0, 0, 0.1)` : `rgba(255, 255, 255, 0.1)`
    }`;

    setBackground(newBackground);
    setBorder(newBorder);
    setBoxShadow(newBoxShadow);
  }, [theme]);

  return (
    <>
      <div
        className="box"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <span>Trigger theme</span>
      </div>
      <style jsx>
        {`
          .box {
            user-select: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200px;
            width: 200px;
            border: 1px solid #0000;
            border-radius: 12px;
            background: ${background}, ${border};
            animation: 5s rotate linear infinite;
            box-shadow: ${boxShadow};
          }

          .box:active > span {
            transition: 0.1s scale ease-in-out;
            scale: 0.95;
          }

          @keyframes rotate {
            to {
              --angle: 360deg;
            }
          }

          @property --angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }
        `}
      </style>
    </>
  );
};

export const AnimatedGradientBorder: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <div className="box">{children}</div>
      <style jsx>
        {`
          .box {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 12px;
            height: 400px;
            width: 400px;
            border: 1px solid #0000;
            border-radius: 12px;
            background: linear-gradient(#06021d, #06021d) padding-box,
              linear-gradient(var(--angle), #070707, #687aff) border-box;
            animation: 8s rotate linear infinite;
          }

          @keyframes rotate {
            to {
              --angle: 360deg;
            }
          }

          @property --angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }
        `}
      </style>
    </>
  );
};

export const AnimatedGradientBorderTW: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <div
      ref={boxRef}
      style={
        {
          "--angle": "0deg",
          "--border-color": "linear-gradient(var(--angle), #070707, #687aff)",
          "--bg-color": "linear-gradient(#131219, #131219)",
        } as CSSProperties
      }
      className="flex h-[400px] w-[400px] items-center justify-center rounded-lg border-2 border-[#0000] p-3 [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
    >
      {children}
    </div>
  );
};
