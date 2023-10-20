export const ButtonMetallic = () => {
  return (
    <>
      <button className="metallic-button">Download</button>
      <style jsx>{`
        .metallic-button {
          font-size: 14px;
          padding: 6px 16px;
          font-weight: 500;
          border: none;
          outline: none;
          color: #000;
          background: linear-gradient(
            45deg,
            #999 5%,
            #fff 10%,
            #ccc 30%,
            #ddd 50%,
            #ccc 70%,
            #fff 80%,
            #999 95%
          );
          text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        .metallic-button:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
};

export const ButtonMetallic2 = () => {
  return (
    <>
      <div className="metallic-button">Download</div>
      <style jsx>{`
        .metallic-button {
          font-size: 14px;
          padding: 6px 16px;
          font-weight: 500;
          border: none;
          outline: none;
          color: #000;
          background: linear-gradient(to bottom, #dbdbdb, #f9f9f9, #dbdbdb);
          text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        .metallic-button:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
};

export const ButtonMetallicGold = () => {
  return (
    <>
      <div className="metallic-button">Download</div>
      <style jsx>{`
        .metallic-button {
          font-size: 14px;
          padding: 6px 16px;
          font-weight: 500;
          border: none;
          outline: none;
          color: #000;
          background: linear-gradient(
            45deg,
            #d4af37 5%,
            #debc5b 10%,
            #e7c97c 30%,
            #efd69d 50%,
            #e7c97c 70%,
            #debc5b 80%,
            #d4af37 95%
          );
          text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        .metallic-button:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
};

export const ButtonMetallicBlue = () => {
  return (
    <>
      <div className="metallic-button">Download</div>
      <style jsx>{`
        .metallic-button {
          font-size: 14px;
          padding: 6px 16px;
          font-weight: 500;
          border: none;
          outline: none;
          color: #000;
          background: linear-gradient(
            45deg,
            #1e90ff 5%,
            #00bfff 10%,
            #87cefa 30%,
            #87ceeb 50%,
            #87cefa 70%,
            #00bfff 80%,
            #1e90ff 95%
          );
          text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        .metallic-button:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
};

export const CardMetallicShine = () => {
  return (
    <>
      <div className="card-shine-effect-metal"></div>
      <style jsx>{`
        .card-shine-effect-metal {
          --shine-deg: 45deg;
          position: relative;
          overflow: hidden;
          border-radius: 0.875rem;
          padding: 4rem 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          width: 200px;
          height: 180px;
          background: linear-gradient(to bottom, #dbdbdb, #f9f9f9, #dbdbdb);
        }

        .card-shine-effect-metal:after {
          content: "";
          top: 0;
          transform: translateX(100%) rotate(var(--shine-deg));
          width: 300%;
          height: 300%;
          position: absolute;
          z-index: 1;
          background: linear-gradient(
            30deg,
            transparent 20%,
            transparent 40%,
            rgb(255, 255, 255, 0.4) 50%,
            rgb(255, 255, 255, 0.4) 55%,
            transparent 70%,
            transparent 100%
          );
          transition: transform 2s ease-in;
          transform: translateX(100%) rotate(var(--shine-deg));
        }

        .card-shine-effect-metal:hover:after {
          animation: shine 1s infinite ease-in;
        }

        @-webkit-keyframes shine {
          0% {
            transform: translateX(100%) rotate(var(--shine-deg));
          }
          100% {
            transform: translateX(-100%) rotate(var(--shine-deg));
          }
        }
      `}</style>
    </>
  );
};
