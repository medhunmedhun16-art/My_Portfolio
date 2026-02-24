import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/portfolio";
import SectionTitle from "./ui/SectionTitle";
import { fadeUp, staggerContainer } from "../hooks/useScrollReveal";
import {
  FaCode,
  FaChartBar,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

/**
 * Skills — categorised skill cards with animated progress bars.
 *
 * Categories: Programming Languages, Data Science & Analysis, Database, Tools
 * Each card shows a skill name + animated percentage bar.
 */

// Map category name → icon
const categoryIcons = {
  "Programming Languages": <FaCode />,
  "Data Science & Analysis": <FaChartBar />,
  Database: <FaDatabase />,
  Tools: <FaTools />,
};

// Category card gradient backgrounds
const categoryGradients = {
  "Programming Languages": "from-blue-500 to-cyan-500",
  "Data Science & Analysis": "from-green-500 to-emerald-500",
  Database: "from-orange-500 to-amber-500",
  Tools: "from-purple-500 to-pink-500",
};

export default function Skills() {
  const categories = Object.entries(skillsData);

  return (
    <section id="skills">
      <div className="section-container">
        <SectionTitle title="My Skills" subtitle="What I Do" />

        {/* Category grid */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {categories.map(([category, skills]) => (
            <motion.div
              key={category}
              variants={fadeUp}
              className="glass-card p-6 hover:shadow-glow transition-shadow duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${categoryGradients[category]} text-white text-xl`}
                >
                  {categoryIcons[category]}
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>

              {/* Skills list with progress bars */}
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar track */}
                    <div className="w-full h-2 bg-gray-200 dark:bg-dark-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className={`h-full rounded-full bg-gradient-to-r ${categoryGradients[category]}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
