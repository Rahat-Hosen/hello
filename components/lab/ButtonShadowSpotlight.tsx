import React, { useRef, useState } from "react";

export const ButtonShadowSpotlight = () => {
  const divRef = useRef<HTMLButtonElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0.5);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    <button
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative inline-flex h-7 justify-center rounded-[4px] border bg-white px-3 py-1.5 text-[11px] text-[#1A1A1A]"
    >
      <div className="absolute inset-1 -z-10 rounded-lg bg-gradient-to-b from-[rgb(199,210,254)] to-[#8678f9] opacity-75 blur transition-all duration-500 group-hover:-inset-1 " />
      <div
        className="pointer-events-none absolute inset-[-12px] -z-10 rounded-[4px] blur transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(120px circle at ${position.x}px ${position.y}px, rgba(199, 210, 254,1), transparent 40%)`,
        }}
      />
      Get notified
    </button>
  );
};
