import React, { CSSProperties } from "react";

export const CardShootingStarBorderCSS = () => {
  return (
    <>
      <button>
        <span className="spark__container">
          <span className="spark" />
        </span>
        <span className="backdrop" />
        <span className="text">Shooting star border</span>
      </button>
      <style jsx>{`
        button {
          --transition: 0.25s;
          --spark: 3s;
          --bg: black;
          background: var(--bg);
          padding: 6px 18px;
          display: grid;
          border-radius: 9999px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 1000px 0 0 hsl(0 0% 20%) inset;
          transition: box-shadow var(--transition), background var(--transition),
            transform var(--transition);
        }

        button:hover .backdrop {
          background: rgb(20 20 20);
        }

        button:hover {
          transform: scale(1.05);
        }

        .spark {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
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
          opacity: 1;
          background: conic-gradient(
            from 0deg,
            transparent 0 340deg,
            white 360deg
          );
          transition: opacity var(--transition);
          animation: rotate var(--spark) linear infinite both;
        }

        .backdrop {
          position: absolute;
          inset: 1px;
          background: var(--bg);
          border-radius: 9999px;
          transition: background var(--transition) opacity var(--transition);
        }

        @keyframes rotate {
          to {
            transform: rotate(90deg);
          }
        }

        .text {
          z-index: 1;
          color: rgb(203 213 225);
        }
      `}</style>
    </>
  );
};

export const ShootingStarBorderTW = () => {
  return (
    <>
      <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
        <span>
          <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="backdrop absolute inset-[1px] rounded-full bg-black transition-colors duration-200 group-hover:bg-slate-800" />
        <span className="text z-10 text-[#cbd5e1]">Shooting star border</span>
      </button>
    </>
  );
};
