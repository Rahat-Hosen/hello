import { GlobeIcon } from "@radix-ui/react-icons";
import React from "react";

export const CardShineEffectTW = () => {
  return (
    <div className="relative max-w-md overflow-hidden rounded-xl border border-slate-900 bg-zinc-950 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
      <span className="mb-4 inline-flex items-center justify-center rounded-md bg-blue-600 p-2 shadow-lg">
        <svg
          className="h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        />
      </span>
      <h3 className="mb-2 font-medium tracking-tight text-white">Hello!</h3>
      <p className="text-sm text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
        obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil
        quod quibusdam expedita nemo.
      </p>
    </div>
  );
};

export const CardShineEffectCSS: React.FC<{
  shineDeg?: number;
}> = ({ shineDeg }) => {
  return (
    <>
      <div className="card-shine-effect">
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          />
        </span>
        <h3 className="title">Hello!</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
          obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil
          quod quibusdam expedita nemo.
        </p>
      </div>
      <style jsx>{`
        .card-shine-effect {
          --shine-deg: ${shineDeg}deg;
          position: relative;
          overflow: hidden;
          border-radius: 0.875rem;
          border: 1px solid rgb(15 23 42);
          background-color: rgb(9 9 11);
          padding: 4rem 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          max-width: 28rem;

          background-repeat: no-repeat;
          background-position: -100% 0, 0 0;
          background-image: linear-gradient(
            var(--shine-deg),
            transparent 20%,
            transparent 40%,
            rgb(68, 68, 68, 0.2) 50%,
            rgb(68, 68, 68, 0.2) 55%,
            transparent 70%,
            transparent 100%
          );
          background-size: 250% 250%, 100% 100%;
          transition: background-position 0s ease;
        }

        .card-shine-effect:hover {
          background-position: 200%0, 0 0;
          transition-duration: 1.5s;
        }

        .icon {
          margin-bottom: 1rem;
          display: inline-flex;
        }

        .icon > svg {
          border-radius: 0.375rem;
          width: 40px;
          height: 40px;
          display: inline-flex;
          background: #2563eb;
        }

        .title {
          font-size: 16px;
          margin-bottom: 0.5rem;
          color: #fff;
        }

        .description {
          font-size: 14px;
          color: rgb(148 163 184);
        }
      `}</style>
    </>
  );
};

export const CardShineEffectTW2 = () => {
  return (
    <div className="relative max-w-xs overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.8)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat p-8 shadow-2xl  hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
      <div className="mb-4">
        <GlobeIcon className="h-8 w-8 text-neutral-400" />
      </div>
      <h3 className="mb-2 font-medium tracking-tight text-neutral-100">
        Global Connectivity
      </h3>
      <p className="text-sm text-neutral-400">
        Illuminate your online presence with our enhanced global connectivity
        options.
      </p>
    </div>
  );
};
