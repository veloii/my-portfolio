"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  // {
  //   label: "About me",
  //   href: "/about-me",
  // },
  // {
  //   label: "Workflow",
  //   href: "/workflow",
  // },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex gap-8 justify-center items-center text-white px-6">
      {items.map((item) => (
        <Link
          className={clsx(
            "py-2 text-[15px] font-medium relative transition duration-500 ease-in-out",
            pathname === item.href ? "text-rose-400" : "text-neutral-300"
          )}
          key={item.href}
          href={item.href}
        >
          {item.label}
          <span
            className={clsx(
              pathname === item.href ? "opacity-100" : "opacity-0",
              "transition duration-500 ease-in-out absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-rose-400/0 via-rose-400/40 to-rose-400/0"
            )}
          ></span>
        </Link>
      ))}
    </div>
  );
}
