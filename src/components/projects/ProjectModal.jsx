import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-dark-card p-6 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto glass-effect"
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute -right-2 -top-2 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <h3 className="text-3xl font-bold mb-4 text-gradient">{project.title}</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-gradient">Description</h4>
              <p className="text-gray-300">{project.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-gradient">Features</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-gradient">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-cyan-500/10 to-pink-500/10 text-cyan-500 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.links && (
              <div className="flex gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    View on GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border-2 border-cyan-500 text-cyan-500 font-medium hover:bg-cyan-500/10 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
