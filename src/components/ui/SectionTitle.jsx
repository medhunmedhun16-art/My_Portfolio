import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../hooks/useScrollReveal";

/**
 * SectionTitle — consistent heading for every portfolio section.
 *
 * @param {string} title    — main heading text
 * @param {string} subtitle — small text above the heading
 */
export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="text-center mb-12 md:mb-16"
    >
      {/* Subtitle chip */}
      <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
        {subtitle}
      </span>

      {/* Main title */}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white">
        {title}
      </h2>

      {/* Decorative underline */}
      <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
    </motion.div>
  );
}
