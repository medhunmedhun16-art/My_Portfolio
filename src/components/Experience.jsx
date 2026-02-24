import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experienceData } from "../data/portfolio";
import SectionTitle from "./ui/SectionTitle";
import { fadeUp, staggerContainer } from "../hooks/useScrollReveal";

/**
 * Experience — timeline layout showing work history.
 *
 * Each entry shows role, company, duration, and bullet achievements.
 * The timeline line threads through a central vertical connector.
 */
export default function Experience() {
  return (
    <section id="experience">
      <div className="section-container">
        <SectionTitle title="Experience" subtitle="My Journey" />

        {/* Timeline container */}
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-200 md:-translate-x-1/2" />

          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0; // alternate sides on desktop

            return (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* ── Timeline Dot ────────────── */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-primary-500 rounded-full flex items-center justify-center z-10 shadow-glow">
                  <FiBriefcase className="text-white text-sm" />
                </div>

                {/* ── Spacer (half width) ─────── */}
                <div className="hidden md:block md:w-1/2" />

                {/* ── Card ────────────────────── */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card p-6 hover:shadow-glow transition-shadow duration-300">
                    {/* Duration */}
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 mb-3">
                      {exp.duration}
                    </span>

                    {/* Role & Company */}
                    <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-primary-500 dark:text-primary-400 font-medium mb-4">
                      {exp.company}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((a, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
