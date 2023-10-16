export const LightEffectDiv = () => {
  return (
    <>
      <div className="light" />
      <style jsx>{`
        .light {
          background-color: #ffde00cc;
          filter: blur(47px);
          flex: none;
          height: 909px;
          left: 319px;
          position: absolute;
          top: -127px;
          width: 16px;
          transform: rotate(45deg);
        }
      `}</style>
    </>
  );
};

export const LightEffectDivs = () => {
  return (
    <>
      <div className="light-1" />
      <div className="light-2" />
      <div className="light-3" />
      <style jsx>{`
        .light-1 {
          background-color: #ffde00cc;
          filter: blur(47px);
          flex: none;
          height: 909px;
          left: 319px;
          position: absolute;
          top: -127px;
          width: 16px;
          transform: rotate(45deg);
        }

        .light-2 {
          background-color: #ffde00cc;
          filter: blur(47px);
          flex: none;
          height: 909px;
          left: 100px;
          position: absolute;
          top: -127px;
          width: 16px;
          transform: rotate(45deg);
        }

        .light-3 {
          background-color: #ffde00cc;
          filter: blur(40px);
          flex: none;
          height: 909px;
          left: 200px;
          position: absolute;
          top: -127px;
          width: 16px;
          transform: rotate(45deg);
        }
      `}</style>
    </>
  );
};

export const LightEffectDivsWithText = () => {
  return (
    <>
      <div className="relative">
        <div className="light-1" />
        <div className="light-2" />
        <div className="light-3" />
        <div className="ml-4">
          <h2 className="mt-20 text-neutral-300">
            Turn your images into a source of actionable insights. Ask
            questions, get answers, make informed decisions{" "}
            <span className="text-[#ffde00cc]">faster than ever.</span>
          </h2>
        </div>
      </div>
      <style jsx>{`
        .light-1 {
          background-color: #ffde00cc;
          filter: blur(47px);
          flex: none;
          height: 909px;
          left: 319px;
          position: absolute;
          top: -127px;
          width: 16px;
          transform: rotate(45deg);
        }

        .light-2 {
          background-color: #ffde00cc;
          filter: blur(47px);
          flex: none;
          height: 909px;
          left: 100px;
          position: absolute;
          top: -127px;
          width: 16px;
          transform: rotate(45deg);
        }

        .light-3 {
          background-color: #ffde00cc;
          filter: blur(40px);
          flex: none;
          height: 909px;
          left: 200px;
          position: absolute;
          top: -127px;
          width: 16px;
          transform: rotate(45deg);
        }
      `}</style>
    </>
  );
};
