import { CSSProperties } from "react";

export const AnimatedTextGradient = () => {
  return (
    <>
      <span>hello, animated text gradient</span>
      <style jsx>{`
        span {
          background: radial-gradient(
            circle at 100%,
            #b2a8fd,
            #8678f9 50%,
            #c7d2fe 75%,
            #9a8dfd 75%
          );
          font-weight: 600;
          background-size: 200% auto;
          color: #000;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: animatedTextGradient 1.5s linear infinite;
        }

        @keyframes animatedTextGradient {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </>
  );
};

export const AnimatedTextGradientTW: React.FC = () => {
  return (
    <>
      <span className="animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
        hello, animated text gradient
      </span>
    </>
  );
};
