import { useTheme } from "next-themes";
import React, { useEffect } from "react";

export const ShinyMovingCardBorder = () => {
  const { theme } = useTheme();
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
      <div className="box" />
      <style jsx>
        {`
          .box {
            height: 200px;
            width: 200px;
            border: 3px solid #0000;
            border-radius: 12px;
            background: ${background}, ${border};
            animation: 4s rotate linear infinite;
            box-shadow: ${boxShadow};
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
