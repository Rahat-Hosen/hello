import React, { useRef, useState } from "react";

export const SpotlightBorder = () => {
  const divRef = useRef<HTMLInputElement>(null);
  const [angle, setAngle] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const rad = Math.atan2(deltaY, deltaX);
    const deg = rad * (180 / Math.PI);
    setAngle(deg);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  console.log("angle", angle);

  return (
    <>
      <label className="relative block w-56">
        <input
          ref={divRef}
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Enter your email address"
          type="email"
          name="email"
          className="border-gradient h-12 w-full cursor-default rounded-md border-transparent bg-black p-3.5 text-white transition-colors placeholder:select-none  focus:outline-none xl:text-sm"
        />
      </label>
      <style jsx>{`
        .border-gradient {
          content: "";
          border: 1px solid #0000;
          border-radius: 12px;
          background: linear-gradient(#131219, #131219) padding-box,
            linear-gradient(
                ${angle}deg,
                ${isFocused ? "#687aff" : "#131219"},
                #687aff
              )
              border-box;
          opacity: ${isFocused ? 1 : 0.5};
          transition: opacity 0.5s ease-in-out, background 0.5s ease-in-out;
          z-index: 1;
        }
      `}</style>
    </>
  );
};

/* .spotlight__border {
          opacity: var(--opacity);
          --opacity: 0;
          --radius-y: 30px;
          --radius-x: 30%;
          -webkit-mask-image: radial-gradient(
            var(--radius-x) var(--radius-y) at 510px -52px,
            black 45%,
            transparent
          );
          color: #fff;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 0.15s;
        } */
