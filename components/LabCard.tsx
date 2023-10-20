import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "lib/utils";
import Link from "next/link";

type LabCardProps = {
  children: React.ReactNode;
  slug?: string;
  variant: "light" | "dark" | "system";
};

const LabCard = ({ children, slug, variant }: LabCardProps) => {
  const containerVariantCn = {
    light: "bg-white",
    dark: "bg-neutral-900 border dark:border-neutral-800",
    system:
      "bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800",
  }[variant];

  const arrowVariantCn = {
    light: "text-neutral-900",
    dark: "text-neutral-100",
    system: "text-neutral-900 dark:text-neutral-100",
  }[variant];

  return (
    <div
      className={cn(
        containerVariantCn,
        `relative z-0 flex h-full min-h-[240px] items-center justify-center rounded-[4px] p-10`
      )}
    >
      {slug ? (
        <Link href={`/lab/${slug}`}>
          <div className="absolute right-4 top-3 cursor-pointer">
            <ArrowRightIcon className={cn(arrowVariantCn, `h-4 w-4`)} />
          </div>
        </Link>
      ) : null}
      {children}
    </div>
  );
};

export default LabCard;
