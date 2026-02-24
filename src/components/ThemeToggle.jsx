import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

/**
 * ThemeToggle — animated dark / light mode switch.
 *
 * @param {boolean}  isDark — current theme state
 * @param {Function} toggle — callback to flip the theme
 */
export default function ThemeToggle({ isDark, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative p-2 rounded-xl bg-gray-100 dark:bg-dark-200 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FiSun className="w-5 h-5 text-yellow-400" />
        ) : (
          <FiMoon className="w-5 h-5 text-gray-700" />
        )}
      </motion.div>
    </button>
  );
}
