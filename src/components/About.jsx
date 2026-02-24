import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../data/portfolio";
import SectionTitle from "./ui/SectionTitle";
import { fadeUp, staggerContainer, slideLeft, slideRight } from "../hooks/useScrollReveal";

/**
 * About — profile image, summary text, and highlight stat boxes.
 */
export default function About() {
  const { image, summary, highlights } = aboutData;

  return (
    <section id="about" className="bg-white dark:bg-dark-100">
      <div className="section-container">
        <SectionTitle title="About Me" subtitle="Who I Am" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ── Profile Image ──────────────── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative group"
          >
            {/* Decorative border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-500" />

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={image}
                alt="Profile"
                loading="lazy"
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* ── Text & Highlights ──────────── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-base md:text-lg">
              {summary}
            </p>

            {/* Stat highlight boxes */}
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
              {highlights.map((h) => (
                <motion.div
                  key={h.label}
                  variants={fadeUp}
                  className="glass-card p-4 text-center hover:shadow-glow transition-shadow duration-300"
                >
                  <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                    {h.value}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {h.unit}
                  </p>
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mt-0.5">
                    {h.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
