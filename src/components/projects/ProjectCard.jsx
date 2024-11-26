import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div onClick={() => onClick(project)}>
      <div className="relative h-[500px] w-full cursor-pointer px-2">
        <div className="absolute inset-0 bg-black/30 z-10 rounded-xl" />
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 rounded-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold mb-2 text-gradient">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
