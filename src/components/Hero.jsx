import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import Button from "./ui/Button";

/**
 * Hero — the first thing visitors see.
 *
 * Features:
 *  - Animated entrance (staggered children)
 *  - CTA buttons: Download Resume & View Projects
 *  - Social icon links
 *  - Decorative floating gradient blobs
 */

// Stagger container variant
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Individual child variant
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const { name, subtitle, tagline, resumeUrl, socialLinks } = personalInfo;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Decorative Background Blobs ───────────── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-float [animation-delay:3s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-200/30 to-purple-200/30 dark:from-primary-800/10 dark:to-purple-800/10 rounded-full blur-3xl" />
      </div>

      {/* ── Content ──────────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="section-container text-center"
      >
        {/* Greeting */}
        <motion.p
          variants={item}
          className="text-sm md:text-base font-medium text-primary-500 dark:text-primary-400 mb-4 tracking-wide"
        >
          👋 Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-4"
        >
          <span className="gradient-text">{name}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={item}
          className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-gray-700 dark:text-gray-300 mb-6"
        >
          {subtitle}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-base md:text-lg mb-10 leading-relaxed"
        >
          {tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button
            href={resumeUrl}
            icon={<FiDownload />}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </Button>

          <Button href="#projects" variant="outline" icon={<FiArrowRight />}>
            View Projects
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: <FaGithub />, url: socialLinks.github, label: "GitHub" },
            { icon: <FaLinkedinIn />, url: socialLinks.linkedin, label: "LinkedIn" },
            { icon: <FaTwitter />, url: socialLinks.twitter, label: "Twitter" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-xl bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all duration-300 text-lg"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-3 bg-primary-500 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
