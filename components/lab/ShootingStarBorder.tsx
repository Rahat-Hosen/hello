import React from "react";

export const CardShootingStarBorderCSS = () => {
  return (
    <>
      <button>
        <span className="spark__container">
          <span className="spark" />
        </span>
        <span className="backdrop" />
        <span className="text">Shim Shimmer</span>
      </button>
      <style jsx>{`
        button {
          --transition: 0.25s;
          --spark: 1.8s;
          --speed: 1.2s;
          --cut: 0.1em;
          --active: 0;
          --bg: radial-gradient(
              40% 50% at center 100%,
              hsl(270 0% 72% / 0.05),
              transparent
            ),
            radial-gradient(
              80% 100% at center 120%,
              hsl(260 0% 70% / 0.1),
              transparent
            ),
            hsl(260 0% 12%);
          background: var(--bg);
          font-size: 2rem;
          font-weight: 500;
          border: 0;
          cursor: pointer;
          padding: 0.9em 1.3em;
          display: grid;
          place-items: center;
          white-space: nowrap;
          border-radius: 100px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0.05em 0 0 hsl(260 0% 50%) inset,
            0 -0.05em 0 0 hsl(260 0% 0%) inset;
          transition: box-shadow var(--transition), background var(--transition);
        }

        label {
          color: hsl(0 0% 98%);
          position: absolute;
          top: 4rem;
          left: 1rem;
        }
        [type="checkbox"] {
          position: absolute;
          top: 4rem;
          left: 7rem;
          translate: 0 25%;
          accent-color: hsl(280 80% 50%);
        }

        .spark {
          position: absolute;
          inset: 0;
          border-radius: 100px;
          rotate: 0deg;
          overflow: hidden;
          mask: linear-gradient(white, transparent 50%);
          animation: flip calc(var(--spark) * 2) infinite steps(2, end);
        }

        @keyframes flip {
          to {
            rotate: 360deg;
          }
        }

        .spark:before {
          content: "";
          position: absolute;
          width: 200%;
          aspect-ratio: 1;
          inset: 0 auto auto 50%;
          z-index: -1;
          translate: -50% -15%;
          rotate: 0;
          transform: rotate(-90deg);
          opacity: calc((var(--active)) + 0.4);
          opacity: 1;
          background: conic-gradient(
            from 0deg,
            transparent 0 340deg,
            white 360deg
          );
          transition: opacity var(--transition);
          animation: rotate var(--spark) linear infinite both;
        }

        .spark:after {
          content: "";
          position: absolute;
          inset: var(--cut);
          border-radius: 100px;
        }

        .backdrop {
          position: absolute;
          inset: var(--cut);
          background: var(--bg);
          border-radius: 100px;
          transition: background var(--transition) opacity var(--transition);
        }

        @keyframes rotate {
          to {
            transform: rotate(90deg);
          }
        }

        button:is(:hover, :focus-visible) ~ :is(.bodydrop, .particle-pen) {
          --active: 1;
        }

        button:is(:hover, :focus-visible) {
          --active: 1;
        }

        .text {
          z-index: 1;
          color: rgb(203 213 225);
        }
      `}</style>
    </>
  );
};
