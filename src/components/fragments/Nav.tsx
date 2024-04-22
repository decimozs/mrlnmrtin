"use client";

import { navItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ResumeButton } from "../ui";

const NavigationItems = () => {
  const currentPath = usePathname();
  return (
    <nav className="flex items-center justify-between lg:w-[420px] lg:absolute lg:top-[20%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
      <ul className="flex flex-row gap-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={currentPath === item.href ? "" : "text-slate"}
          >
            {item.title}
          </Link>
        ))}
      </ul>
      <ResumeButton />
    </nav>
  );
};

export default function Nav() {
  return <NavigationItems />;
}