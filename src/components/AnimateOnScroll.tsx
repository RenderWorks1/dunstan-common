"use client";

import { motion } from "framer-motion";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  slideOnly?: boolean;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  slideOnly = false,
  className,
}: AnimateOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: slideOnly ? 1 : 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
