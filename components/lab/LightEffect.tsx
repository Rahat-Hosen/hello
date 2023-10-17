export const LightEffectDivWithoutBlur = () => {
  return (
    <>
      <div className="light" />
      <style jsx>{`
        .light {
          background: #ffde00cc;
          flex: none;
          height: 700px;
          left: 320px;
          position: absolute;
          top: -175px;
          width: 16px;
          transform: rotate(306deg);
        }
      `}</style>
    </>
  );
};

export const LightEffectDiv = () => {
  return (
    <>
      <div className="light" />
      <style jsx>{`
        .light {
          background-color: #ffde00cc;
          filter: blur(47px);
          flex: none;
          height: 700px;
          left: 320px;
          position: absolute;
          top: -175px;
          width: 16px;
          transform: rotate(306deg);
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
          height: 700px;
          left: 420px;
          position: absolute;
          top: -175px;
          width: 16px;
          transform: rotate(306deg);
        }

        .light-2 {
          background-color: #ffde00cc;
          filter: blur(47px);
          flex: none;
          height: 700px;
          left: 520px;
          position: absolute;
          top: -175px;
          width: 16px;
          transform: rotate(306deg);
        }

        .light-3 {
          background-color: #ffde00cc;
          filter: blur(47px);
          flex: none;
          height: 700px;
          left: 319px;
          position: absolute;
          top: -175px;
          width: 16px;
          transform: rotate(306deg);
        }
      `}</style>
    </>
  );
};

export const LightEffectDivsWithText = () => {
  return (
    <>
      <div className="relative flex h-full items-center justify-center">
        <div className="light-1" />
        <div className="light-2" />
        <div className="light-3" />
        <div className="z-10 text-center">
          <h2 className="mb-2 text-center text-2xl font-semibold">
            Ask your image
          </h2>
          <div className="text">
            <span>Turn your images into a source of actionable insights.</span>
          </div>
          <button className="mt-4 w-auto rounded-lg bg-yellow-600 px-3 py-1 text-sm text-neutral-950">
            Get notified
          </button>
        </div>
      </div>
      <style jsx>{`
        .light-1 {
          background-color: #ffde00cc;
          filter: blur(47px);
          flex: none;
          height: 400px;
          left: 0px;
          position: absolute;
          top: -200px;
          width: 16px;
          transform: rotate(306deg);
        }

        .light-2 {
          background-color: #ffde00cc;
          filter: blur(47px);
          flex: none;
          height: 400px;
          left: 20px;
          position: absolute;
          top: -200px;
          width: 16px;
          transform: rotate(306deg);
        }

        .light-3 {
          background-color: #ffde00cc;
          filter: blur(47px);
          flex: none;
          height: 400px;
          left: 0px;
          position: absolute;
          top: -300px;
          width: 42px;
          transform: rotate(306deg);
        }

        .text {
          max-width: 420px;
          margin: 0 auto;
          text-align: center;
        }

        .text > h2 {
          font-weight: 300;
          font-size: 16px;
          color: #e1e1e1d6;
        }

        .highlight {
          background-image: linear-gradient(to top left, #ffde00cc, #797979);
          background-clip: text;

          color: transparent;
        }
      `}</style>
    </>
  );
};

export const LightEffectWithGradient = () => {
  return (
    <>
      <div className="light" />
      <style jsx>{`
        .light {
          background: linear-gradient(to bottom, #003608, #ffffff);
          filter: blur(58px);
          flex: none;
          height: 200px;
          left: 50%;
          position: absolute;
          top: 0;
          width: 100%;
          transform: rotate(0deg);
        }
      `}</style>
    </>
  );
};
