"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function Transition({ children }: { children: ReactNode }) {
  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            ease: "linear",
            duration: 0.5,
            delay: 0.5,
          },
        }}
        exit={{ opacity: 0 }}
        className="w-full h-[99%] overflow-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
