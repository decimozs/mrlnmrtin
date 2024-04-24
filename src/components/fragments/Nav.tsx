"use client";

import { navItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ResumeButton } from "../ui";

const NavigationItems = () => {
  const currentPath = usePathname();
  return (
    <nav className="flex items-center justify-between lg:w-[420px] lg:absolute lg:top-[10%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
      <div className="flex flex-row gap-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={
              currentPath === item.href ? "smooth-hover" : "text-slate "
            }
            target={index === navItems.length - 1 ? "_blank" : "_self"}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <ResumeButton />
    </nav>
  );
};

export default function Nav() {
  const paths = ["/", "/showcase"];
  const currentPath = usePathname();

  return paths.includes(currentPath) ? <NavigationItems /> : null;
}
