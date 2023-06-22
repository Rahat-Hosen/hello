export const TextSlidingCSS = () => {
  return (
    <>
      <h1>
        Dive Into{" "}
        <span className="slider">
          <span className="slider__word">Ideas</span>
          <span className="slider__word">Tech</span>
          <span className="slider__word">Art</span>
        </span>
      </h1>
      <style jsx>{`
        h1 {
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          color: #a3a3a3;
          font-weight: 500;
        }

        .slider {
          position: relative;
          height: 1em;
          width: 70px;
          overflow: hidden;
          margin-left: 6px;
        }

        .slider__word {
          font-weight: 500;
          position: absolute;
          width: 100%;
          height: 100%;
          line-height: 1em;
          transform: translateY(100%);
          animation: slide 2.5s linear infinite;
          color: #f5f5f5;
        }

        .slider__word:nth-child(2) {
          animation-delay: 0.83s;
        }

        .slider__word:nth-child(3) {
          animation-delay: 1.67s;
        }

        @keyframes slide {
          0% {
            transform: translateY(100%);
            opacity: 0.1;
          }
          15% {
            transform: translateY(0);
            opacity: 1;
          }
          30% {
            transform: translateY(0);
            opacity: 1;
          }
          45% {
            transform: translateY(-100%);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0.1;
          }
        }
      `}</style>
    </>
  );
};

export const TextSlidingTW = () => {
  return (
    <h1 className="flex items-center text-6xl font-medium text-neutral-400">
      Dive Into{" "}
      <span className="relative ml-3 h-[1em] w-36 overflow-hidden">
        <span className="animate-slide absolute h-full w-full -translate-y-full leading-none text-white">
          Ideas
        </span>
        <span className="animate-slide absolute h-full w-full -translate-y-full leading-none text-white [animation-delay:0.83s]">
          Tech
        </span>
        <span className="animate-slide absolute h-full w-full -translate-y-full leading-none text-white [animation-delay:1.83s]">
          Art
        </span>
      </span>
    </h1>
  );
};
