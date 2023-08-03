type SectionContactProps = {
  title?: string;
};

const SectionContact: React.FC<SectionContactProps> = ({ title }) => {
  return (
    <>
      <h2 className="h2 mb-4">{title || "Connect"}</h2>
      <ul className="w-full max-w-xs">
        <li className="mb-2 flex">
          <span className="paragraph pr-4">Twitter </span>
          <a
            href="https://twitter.com/Ibelick"
            target="_blank"
            className="text-black transition hover:opacity-80 dark:text-white"
          >
            @ibelick
          </a>
        </li>
        <li className="mb-2 flex">
          <span className="paragraph pr-4">GitHub</span>
          <a
            href="https://github.com/ibelick"
            target="_blank"
            className="text-neutral-900 transition hover:opacity-80 dark:text-neutral-100"
          >
            @ibelick
          </a>
        </li>
        <li className="mb-2 flex">
          <span className="paragraph pr-4">Read.CV </span>
          <a
            href="https://read.cv/ibelick"
            target="_blank"
            className="text-neutral-900 transition hover:opacity-80 dark:text-neutral-100"
          >
            @ibelick
          </a>
        </li>
        <li className="mb-2 flex">
          <span className="paragraph pr-4">Email </span>
          <a
            href="mailto:julien.thibeaut@gmail.com"
            target="_blank"
            className="text-neutral-900 transition hover:opacity-80 dark:text-neutral-100"
          >
            julien.thibeaut[at]gmail.com
          </a>
        </li>
      </ul>
    </>
  );
};

export default SectionContact;
