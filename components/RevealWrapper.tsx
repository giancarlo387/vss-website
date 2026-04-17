"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealWrapper({ children, delay = 0, className }: RevealWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
