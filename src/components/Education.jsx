import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { educationData } from "../data/portfolio";
import SectionTitle from "./ui/SectionTitle";
import { fadeUp, staggerContainer } from "../hooks/useScrollReveal";

/**
 * Education — timeline layout showing academic background.
 *
 * Each entry shows degree, institution, duration, and description.
 */
export default function Education() {
  return (
    <section id="education" className="bg-white dark:bg-dark-100">
      <div className="section-container">
        <SectionTitle title="Education" subtitle="My Academic Journey" />

        {/* Timeline container */}
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-200" />

          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeUp}
              className="relative flex items-start mb-10 last:mb-0"
            >
              {/* ── Timeline Dot ────────────── */}
              <div className="absolute left-4 md:left-8 w-8 h-8 -translate-x-1/2 bg-primary-500 rounded-full flex items-center justify-center z-10 shadow-glow">
                <FiBookOpen className="text-white text-sm" />
              </div>

              {/* ── Card ────────────────────── */}
              <div className="ml-12 md:ml-20 w-full">
                <div className="glass-card p-6 hover:shadow-glow transition-shadow duration-300">
                  {/* Duration badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 mb-3">
                    {edu.duration}
                  </span>

                  {/* Degree */}
                  <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-primary-500 dark:text-primary-400 font-medium mb-3">
                    {edu.institution}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
