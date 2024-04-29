"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="hidden xl:flex fixed-center w-[420px] items-center justify-between bottom-8"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          ease: "linear",
          duration: 1,
          delay: 3,
        },
      }}
    >
      <div>
        <p className="smooth-hover year btooltip cursor-pointer">@2024</p>
      </div>
      <div>
        <p className="smooth-hover version tooltip cursor-pointer">
          + Version 3
        </p>
      </div>
    </motion.footer>
  );
}
