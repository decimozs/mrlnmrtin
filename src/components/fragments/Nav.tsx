"use client";

import { navItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ResumeButton } from "../ui";

const NavigationItems = () => {
  const currentPath = usePathname();
  return (
    <nav className="flex items-center justify-between">
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
