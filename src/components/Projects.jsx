import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCarousel from './projects/ProjectCarousel';
import ProjectModal from './projects/ProjectModal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlaceholderImg from '../assets/coding.jpg';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Voice Transcriptor',
      description: 'A web application for transcribing voice recordings using Whisper AI technology.',
      image: PlaceholderImg,
      features: [
        'Real-time voice transcription',
        'Multiple language support',
        'Export to various formats',
        'High accuracy using Whisper AI'
      ],
      technologies: ['React', 'Python', 'Whisper AI', 'FastAPI'],
      links: {
        github: 'https://github.com/yourusername/voice-transcriptor',
        live: 'https://voice-transcriptor.demo.com'
      }
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application with modern UI",
      tags: ["Flutter", "Dart", "Firebase"],
      image: PlaceholderImg,
      longDescription: "A feature-rich mobile application built with Flutter, offering a seamless cross-platform experience with real-time data synchronization.",
      features: [
        "Cross-platform compatibility",
        "Real-time updates",
        "Offline support",
        "Push notifications"
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Cloud Functions",
        "Material Design"
      ],
      github: "https://github.com/yourusername/mobile-app",
      demo: "https://demo.example.com"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with modern technologies",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      image: PlaceholderImg,
      longDescription: "A modern, responsive portfolio website showcasing my projects and skills. Built with React and styled with Tailwind CSS.",
      features: [
        "Responsive design",
        "Dark mode support",
        "Project showcase",
        "Contact form"
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
        "Netlify"
      ],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://demo.example.com"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Projects
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and interests in development.
          </p>
        </motion.div>

        <ProjectCarousel
          projects={projects}
          onProjectClick={handleProjectClick}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
