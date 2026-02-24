import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

/**
 * ProjectModal — overlay popup showing full project details.
 *
 * @param {object|null} project — selected project data (null = closed)
 * @param {Function}    onClose — callback to close the modal
 */
export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 w-auto md:w-full md:max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-100 rounded-2xl shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-xl bg-gray-100 dark:bg-dark-200 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors z-10"
            >
              <FiX size={20} className="text-gray-600 dark:text-gray-300" />
            </button>

            {/* Project image */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 md:h-64 object-cover"
              />
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <Badge label={project.category} variant="primary" />
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {project.longDescription}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <Button
                  href={project.githubUrl}
                  variant="outline"
                  size="sm"
                  icon={<FiGithub />}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </Button>
                <Button
                  href={project.liveUrl}
                  size="sm"
                  icon={<FiExternalLink />}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
