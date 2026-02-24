import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projectsData } from "../data/portfolio";
import SectionTitle from "./ui/SectionTitle";
import Badge from "./ui/Badge";
import ProjectModal from "./ProjectModal";
import { fadeUp, staggerContainer } from "../hooks/useScrollReveal";

/**
 * Projects — filterable grid of project cards + detail modal.
 *
 * Categories extracted automatically from projectsData.
 */

// Derive unique categories from data
const allCategories = [
  "All",
  ...new Set(projectsData.map((p) => p.category)),
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="bg-white dark:bg-dark-100">
      <div className="section-container">
        <SectionTitle title="My Projects" subtitle="Recent Work" />

        {/* ── Filter Tabs ────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-primary-500 text-white shadow-glow"
                  : "bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Project Grid ───────────────────── */}
        <motion.div
          layout
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-card overflow-hidden group cursor-pointer hover:shadow-glow transition-shadow duration-300"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <Badge label={project.category} variant="primary" />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} label={tech} />
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge label={`+${project.techStack.length - 3}`} />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Project Detail Modal ───────────── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
