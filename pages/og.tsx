import React from "react";

const OGPage = () => {
  return (
    <div style={{ height: "630px", width: "1200px", position: "relative" }}>
      <img
        alt="Vercel"
        width={1200}
        height={630}
        src={"/og/blueskybg.jpg"}
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute bottom-0 right-0 h-[80%] w-[90%] rounded-tl-2xl bg-gray-900/80 shadow-2xl backdrop-blur-xl">
        <div className="absolute top-0 left-0 flex w-full space-x-2 rounded-tl-2xl border-b border-gray-700/50 bg-slate-800/70 py-[10px] px-4 ">
          <div className="h-3 w-3 rounded-full bg-[#FE5F57]"></div>
          <div className="h-3 w-3 rounded-full bg-[#FFBC2E]"></div>
          <div className="h-3 w-3 rounded-full bg-[#28C840]"></div>
        </div>
        <div className="flex h-full w-full flex-col justify-end p-10 text-white">
          <h2 className="break-word font-sans text-8xl font-black">
            Creating Bento Grid Layouts
          </h2>
          <div className="mt-6 flex whitespace-nowrap text-gray-400">
            <div className="flex">
              <img
                alt="Author"
                src={`https://github.com/ibelick.png`}
                className="object-cove mr-2 h-8 w-8 rounded-full"
              />
              <div className="mt-1">@ibelick</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OGPage;
