type SectionContactProps = {
  title?: string;
};

const SectionContact: React.FC<SectionContactProps> = ({ title }) => {
  return (
    <details className="-mx-0" open>
      <summary className="mb-5 cursor-pointer font-medium">
        {title || "Connect"}
      </summary>
      <ul className="w-full max-w-xs">
        <li className="mb-2 flex">
          <span className="t pr-4 text-gray-500">Twitter </span>
          <a
            href="https://twitter.com/Ibelick"
            target="_blank"
            className="text-black transition hover:opacity-80 dark:text-white"
          >
            @ibelick ↗
          </a>
        </li>
        <li className="mb-2 flex">
          <span className="t pr-4 text-gray-500">GitHub</span>
          <a
            href="https://github.com/ibelick"
            target="_blank"
            className="text-black transition hover:opacity-80 dark:text-white"
          >
            @ibelick ↗
          </a>
        </li>
        <li className="mb-2 flex">
          <span className="t pr-4 text-gray-500">Read.CV </span>
          <a
            href="https://read.cv/ibelick"
            target="_blank"
            className="text-black transition hover:opacity-80 dark:text-white"
          >
            @ibelick ↗
          </a>
        </li>
        <li className="mb-2 flex">
          <span className="t pr-4 text-gray-500">Email </span>
          <a
            href="mailto:julien.thibeaut@gmail.com"
            target="_blank"
            className="text-black transition hover:opacity-80 dark:text-white"
          >
            julien.thibeaut[at]gmail.com
          </a>
        </li>
      </ul>
    </details>
  );
};

export default SectionContact;
