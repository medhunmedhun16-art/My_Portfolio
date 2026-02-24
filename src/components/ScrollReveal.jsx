import React from "react";
import { motion } from "framer-motion";

/**
 * ScrollReveal — wraps children with a Framer Motion reveal animation.
 *
 * @param {object}  variants  — Framer Motion variants (hidden → visible)
 * @param {number}  delay     — extra delay (seconds)
 * @param {string}  className — optional extra classes
 * @param {boolean} once      — animate only the first time (default true)
 */
export default function ScrollReveal({
  children,
  variants,
  delay = 0,
  className = "",
  once = true,
}) {
  // Default fade-up if no variants are provided
  const defaultVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  };

  return (
    <motion.div
      variants={variants || defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
