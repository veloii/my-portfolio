import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export interface StaticRequire {
  default: StaticImageData;
}
export type StaticImport = StaticRequire | StaticImageData;

export default function ProjectPreview({
  image,
  title,
  description,
  className,
  theme = "dark",
  id,
  href,
  hrefExternal,
}: {
  image: {
    src: StaticImport | string;
    height: number;
    alt: string;
    className?: string;
  };
  title: string;
  description: string;
  className?: string;
  theme?: "light" | "dark";
  id: string;
  href?: string;
  hrefExternal?: boolean;
}) {
  const LinkComponent = hrefExternal ? "a" : Link;

  return (
    <LinkComponent
      href={href ?? "#"}
      target={hrefExternal ? "_blank" : undefined}
      className="group text-left relative"
    >
      <div
        className={clsx(
          theme === "light"
            ? "bg-neutral-50 border-neutral-100 group-hover:border-neutral-200"
            : "bg-neutral-950 border-neutral-900 group-hover:border-neutral-800",
          "absolute bottom-0 z-20 px-6 pb-3 bg-opacity-90 backdrop-blur-sm w-full rounded-b-2xl border duration-500 ease-in-out"
        )}
      >
        <h1
          className={clsx(
            theme === "light" ? "text-black" : "text-white",
            "text-xl font-bold mt-4"
          )}
        >
          {title}
        </h1>
        <p
          className={clsx(
            theme === "light" ? "text-neutral-600" : "text-neutral-400",
            "text-base"
          )}
        >
          {description}
        </p>
      </div>

      <div
        className={twMerge(
          clsx(
            `w-[500px] rounded-2xl shadow-md transition h-[300px] border relative duration-500 ease-in-out`,
            theme === "light"
              ? "bg-white border-neutral-100 group-hover:border-neutral-200"
              : "bg-black border-neutral-900 group-hover:border-neutral-800"
          ),
          className
        )}
      >
        <svg
          className={clsx(
            `absolute inset-0 rounded-2xl duration-500 ease-in-out h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] transition-all`,
            theme === "light"
              ? "stroke-neutral-200 group-hover:stroke-neutral-300"
              : "stroke-neutral-800 group-hover:stroke-neutral-700"
          )}
          aria-hidden="true"
        >
          <defs>
            <pattern
              id={id}
              width={70}
              height={70}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M41 70V.5M.5 .5H70" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill={`url(#${id})`}
          />
        </svg>

        <div className="h-full relative z-10 group-hover:h-[calc(100%+3rem)] group-hover:-translate-y-12 overflow-hidden transition-all duration-500 ease-in-out">
          <Image
            {...image}
            className={`${image.className} group-hover:rotate-3 mx-auto object-cover object-top transition duration-500 ease-in-out`}
          />
        </div>
      </div>
      {/* <div className="ml-2">
        <h1 className="text-2xl font-bold mt-4">{title}</h1>
        <p className="text-lg">{description}</p>
      </div> */}
    </LinkComponent>
  );
}
