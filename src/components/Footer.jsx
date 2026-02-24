import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp, FiHeart } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

/**
 * Footer — minimal footer with copyright and back-to-top button.
 */
export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  // Show the button after scrolling 400px
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gray-50 dark:bg-dark border-t border-gray-200 dark:border-dark-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {personalInfo.name}
            </span>
            . All rights reserved.
          </p>

          {/* Made with love */}
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            Made with{" "}
            <FiHeart className="text-red-500 animate-pulse" size={14} /> using
            React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* ── Back to Top Button ───────────── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 p-3 rounded-xl bg-primary-500 text-white shadow-glow hover:bg-primary-600 transition-colors z-40"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
