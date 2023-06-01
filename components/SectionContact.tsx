type SectionContactProps = {
  title?: string;
};

const SectionContact: React.FC<SectionContactProps> = ({ title }) => {
  return (
    <>
      <h2 className="mb-5 font-medium">{title || "Connect"}</h2>
      <ul className="w-full max-w-xs">
        <li className="mb-2 flex">
          <span className="t pr-4 text-gray-600 dark:text-slate-300">
            Twitter{" "}
          </span>
          <a
            href="https://twitter.com/Ibelick"
            target="_blank"
            className="text-black transition hover:opacity-80 dark:text-white"
          >
            @ibelick ↗
          </a>
        </li>
        <li className="mb-2 flex">
          <span className="t pr-4 text-gray-600 dark:text-slate-300">
            GitHub
          </span>
          <a
            href="https://github.com/ibelick"
            target="_blank"
            className="text-black transition hover:opacity-80 dark:text-white"
          >
            @ibelick ↗
          </a>
        </li>
        <li className="mb-2 flex">
          <span className="t pr-4 text-gray-600 dark:text-slate-300">
            Read.CV{" "}
          </span>
          <a
            href="https://read.cv/ibelick"
            target="_blank"
            className="text-black transition hover:opacity-80 dark:text-white"
          >
            @ibelick ↗
          </a>
        </li>
        <li className="mb-2 flex">
          <span className="t pr-4 text-gray-600 dark:text-slate-300">
            Email{" "}
          </span>
          <a
            href="mailto:julien.thibeaut@gmail.com"
            target="_blank"
            className="text-black transition hover:opacity-80 dark:text-white"
          >
            julien.thibeaut[at]gmail.com
          </a>
        </li>
      </ul>
    </>
  );
};

export default SectionContact;
