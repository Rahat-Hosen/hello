import { ArrowTopRightIcon } from "@radix-ui/react-icons";

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
          <span className="inline-block">
            <a
              href="https://twitter.com/Ibelick"
              target="_blank"
              className="external-link"
            >
              @ibelick
            </a>
            <ArrowTopRightIcon className="inline-block h-3 w-3" />
          </span>
        </li>
        <li className="mb-2 flex">
          <span className="paragraph pr-4">GitHub</span>
          <span className="inline-block">
            <a
              href="https://github.com/ibelick"
              target="_blank"
              className="external-link"
            >
              @ibelick
            </a>
            <ArrowTopRightIcon className="inline-block h-3 w-3" />
          </span>
        </li>
        <li className="mb-2 flex">
          <span className="paragraph pr-4">Read.CV </span>
          <span className="inline-block">
            <a
              href="https://read.cv/ibelick"
              target="_blank"
              className="external-link"
            >
              @ibelick
            </a>
            <ArrowTopRightIcon className="inline-block h-3 w-3" />
          </span>
        </li>
        <li className="mb-2 flex">
          <span className="paragraph pr-4">Email </span>
          <span className="inline-block">
            <a
              href="mailto:julien.thibeaut@gmail.com"
              target="_blank"
              className="external-link"
            >
              julien.thibeaut[at]gmail.com
            </a>
            <ArrowTopRightIcon className="inline-block h-3 w-3" />
          </span>
        </li>
      </ul>
    </>
  );
};

export default SectionContact;
