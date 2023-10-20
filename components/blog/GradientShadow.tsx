import React from "react";

export const CardGradientShadow = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-80 blur-lg" />
      <div className="relative flex h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300">
        Gradient shadow
      </div>
    </div>
  );
};

export const CardGradientShadowCSS = () => {
  return (
    <>
      <div className="parent">
        <div className="gradient-shadow"></div>
        <div className="content">Gradient shadow</div>
      </div>
      <style jsx>{`
        .parent {
          position: relative;
        }

        .gradient-shadow {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
          bottom: -0.5rem;
          left: -0.5rem;
          background: linear-gradient(to right, #ca8a04, #ea580c, #dc2626);
          border-radius: 0.5rem;
          opacity: 0.8;
          filter: blur(20px);
        }

        .content {
          position: relative;
          display: flex;
          height: 16rem;
          width: 16rem;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          background-color: #0f172a;
          color: #cbd5e1;
        }
      `}</style>
    </>
  );
};

export const CardGradientShadowWithAnimation = () => {
  return (
    <>
      <div className="parent">
        <div className="gradient-shadow"></div>
        <div className="content">Hover me!</div>
      </div>
      <style jsx>{`
        .parent {
          position: relative;
        }

        .gradient-shadow {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
          bottom: -0.5rem;
          left: -0.5rem;
          background: linear-gradient(to right, #8ab1ff, #a855f7, #ffb6ff);
          border-radius: 0.5rem;
          opacity: 0.8;
          filter: blur(20px);
          opacity: 0.5;
          transition: opacity 0.5s ease-in-out;
        }

        .parent:hover .gradient-shadow {
          opacity: 0.8;
        }

        .content {
          position: relative;
          display: flex;
          height: 16rem;
          width: 16rem;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          background-color: #0f172a;
          color: #cbd5e1;
        }
      `}</style>
    </>
  );
};
