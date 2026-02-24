import React from "react";
import { motion } from "framer-motion";
import {
  FiTarget,
  FiMessageCircle,
  FiUsers,
  FiClock,
} from "react-icons/fi";
import { softSkillsData } from "../data/portfolio";
import SectionTitle from "./ui/SectionTitle";
import { fadeUp, staggerContainer } from "../hooks/useScrollReveal";

/**
 * SoftSkills — card grid highlighting interpersonal strengths.
 *
 * Each card shows an icon, label, and short description.
 */

// Map icon string → React Icon component
const iconMap = {
  puzzle: <FiTarget />,
  chat: <FiMessageCircle />,
  team: <FiUsers />,
  clock: <FiClock />,
};

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="bg-white dark:bg-dark-100">
      <div className="section-container">
        <SectionTitle title="Soft Skills" subtitle="Beyond the Code" />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {softSkillsData.map((skill) => (
            <motion.div
              key={skill.label}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="glass-card p-6 text-center group hover:shadow-glow transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-500 text-white text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                {iconMap[skill.icon] || <FiTarget />}
              </div>

              {/* Label */}
              <h3 className="text-base font-heading font-semibold text-gray-900 dark:text-white mb-2">
                {skill.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
