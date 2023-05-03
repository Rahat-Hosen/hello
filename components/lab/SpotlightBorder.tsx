import React, { useRef, useState } from "react";

export const InputSpotlightBorder = () => {
  const divRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <>
      <div className="relative w-80">
        <input
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          autoComplete="off"
          placeholder="Enter your email address"
          type="email"
          name="email"
          className="h-12 w-full cursor-default rounded-md border border-slate-800 bg-neutral-950 p-3.5 text-slate-100 transition-colors duration-500 placeholder:select-none  placeholder:text-neutral-500 focus:border-[#E47320] focus:outline-none"
        />
        <input
          ref={divRef}
          disabled
          style={{
            border: "1px solid rgb(228 115 32)",
            opacity,
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
          }}
          aria-hidden="true"
          className="border-[rgb(228 115 32)] pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none"
        />
      </div>
    </>
  );
};

export const CardSpotlightBorder = ({
  children,
  borderColor = "red",
  borderWidth = 1,
  percentSize = 30,
}: {
  children: React.ReactNode;
  borderColor: string;
  borderWidth: number;
  percentSize: number;
}) => {
  const divRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <>
      <div className="relative w-80">
        <div
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex h-48 w-full cursor-default items-center justify-center rounded-md border border-slate-800 bg-neutral-950 p-3.5 text-slate-100 transition-colors duration-500"
        >
          {children}
        </div>
        <div
          ref={divRef}
          style={{
            border: `${borderWidth}px solid ${borderColor}`,
            opacity,
            WebkitMaskImage: `radial-gradient(${percentSize}% 100px at ${position.x}px ${position.y}px, black 45%, transparent)`,
          }}
          aria-hidden="true"
          className={`border-[${borderColor}] pointer-events-none absolute left-0 top-0 z-10 h-48 w-full cursor-default rounded-md border bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none`}
        />
      </div>
    </>
  );
};
