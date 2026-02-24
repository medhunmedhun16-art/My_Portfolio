import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../data/portfolio";
import ThemeToggle from "./ThemeToggle";

/**
 * Navbar — sticky top navigation with mobile hamburger menu.
 *
 * Features:
 *  - Transparent → solid background on scroll
 *  - Mobile slide-in menu with backdrop
 *  - Smooth scroll to sections
 *  - Dark mode toggle integration
 */
export default function Navbar({ isDark, toggleDark }) {
  const [isOpen, setIsOpen] = useState(false);    // mobile menu state
  const [scrolled, setScrolled] = useState(false); // has the user scrolled?

  // ── Track scroll position to add background to navbar ──
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Close mobile menu on link click ──
  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ── Logo ─────────────────────────── */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-heading font-bold gradient-text"
          >
            {"<Dev />"}
          </a>

          {/* ── Desktop Links ────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 transition-all"
              >
                {link.label}
              </a>
            ))}

            {/* Theme toggle */}
            <div className="ml-2">
              <ThemeToggle isDark={isDark} toggle={toggleDark} />
            </div>
          </div>

          {/* ── Mobile Buttons ───────────────── */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle isDark={isDark} toggle={toggleDark} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors"
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-dark-100 shadow-2xl p-6 md:hidden"
            >
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors"
                >
                  <HiX size={24} className="text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 rounded-xl hover:bg-primary-50 dark:hover:bg-dark-200 hover:text-primary-500 dark:hover:text-primary-400 transition-all"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
