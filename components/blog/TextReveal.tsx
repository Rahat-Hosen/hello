export const TextRevealCSS = () => {
  const text = "Text Reveal Animation 💫";

  return (
    <>
      <h1>
        {text.match(/./gu)!.map((char, index) => (
          <span
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <style jsx>{`
        h1 {
          overflow: hidden;
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.2;
          color: white;
        }

        span {
          display: inline-block;
          animation: reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
          animation-fill-mode: backwards;
        }

        @keyframes reveal {
          0% {
            transform: translate(0, 100%);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </>
  );
};

export const TextRevealTW = () => {
  const text = "Text Reveal Animation 💫";

  return (
    <>
      <h1 className="overflow-hidden text-base text-white">
        {text.match(/./gu)!.map((char, index) => (
          <span
            className="inline-block animate-text-reveal [animation-fill-mode:backwards]"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </>
  );
};
