export const AnimatedTextGradient = () => {
  return (
    <>
      <span>hello, animated text gradient</span>
      <style jsx>{`
        span {
          background: radial-gradient(
            circle at 100%,
            #6653f5,
            #6653f5 50%,
            #c7d2fe 75%,
            #6653f5 75%
          );
          font-weight: 600;
          background-size: 200% auto;
          color: #000;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: animatedTextGradient 1s linear infinite;
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
