import React from "react";
import useTypingEffect from "./useTypingEffect";

const texts = [
  "This is a simple text typing effect in React",
  "This effect is created using React Hooks",
  "We can use this effect to create a typing effect for your portfolio",
  "We can also use this effect to create a typing effect for your resume",
  "or for your blog",
  "or for your landing page",
  "let's go",
];

type TextTypingEffectProps = {
  isTypeByLetter?: boolean;
  duration?: number;
};

export const TextTypingEffectWithTexts: React.FC<TextTypingEffectProps> = ({
  isTypeByLetter = false,
  duration = 200,
}) => {
  const [textIndex, setTextIndex] = React.useState(0);
  const textToShow = useTypingEffect(
    texts[textIndex],
    duration,
    isTypeByLetter
  );

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) =>
        prevIndex >= texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <span className="text-black dark:text-white" key={textIndex}>
      {textToShow}
    </span>
  );
};

const TIME_TO_FADE = 300;
const TIME_INTERVAL = 3000;
const TIME_PER_LETTER = 100;

export const TextTypingEffectWithTextsFadeOut = () => {
  const [textIndex, setTextIndex] = React.useState(0);
  const [fadeText, setFadeText] = React.useState(true);
  const [fadeCircle, setFadeCircle] = React.useState(true);
  const textToShow = useTypingEffect(texts[textIndex], TIME_PER_LETTER, false);

  const timeToTypeText = texts[textIndex].split(" ").length * TIME_PER_LETTER;

  React.useEffect(() => {
    const circleTimeout = setTimeout(() => {
      setFadeCircle(false);
    }, timeToTypeText + 1000);

    const textTimeout = setTimeout(() => {
      setFadeText(false);

      setTimeout(() => {
        setTextIndex((prevIndex) =>
          prevIndex >= texts.length - 1 ? 0 : prevIndex + 1
        );
        setFadeCircle(true);
        setFadeText(true);
      }, TIME_TO_FADE);
    }, TIME_INTERVAL);

    return () => {
      clearTimeout(circleTimeout);
      clearTimeout(textTimeout);
    };
  }, [textIndex]);

  return (
    <>
      <div
        className={`inline text-black duration-300 dark:text-white ${
          fadeText ? "opacity-1 translate-y-0" : "translate-y-2 opacity-0"
        }`}
        key={textIndex}
      >
        <span>
          {textToShow}
          <span
            className={`ml-2 inline-block h-3 w-3 rounded-full bg-black duration-300 dark:bg-white ${
              fadeCircle ? "" : "scale-0"
            }`}
          />{" "}
        </span>
      </div>
    </>
  );
};
