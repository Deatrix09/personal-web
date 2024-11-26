import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";
import placeholderImage from '../assets/coding.jpg';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [showDetails, setShowDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true,
    appendDots: dots => (
      <div>
        <ul className="slick-dots">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <button>
        <div />
      </button>
    ),
  };

  const projects = [
    {
      title: "Voice Transcriptor",
      description: "Bachelor's thesis project using Whisper AI for voice transcription",
      tags: ["Python", "Whisper AI", "Machine Learning"],
      image: placeholderImage,
      longDescription: "A sophisticated voice transcription application leveraging OpenAI's Whisper model. This project was developed as part of my bachelor's thesis, focusing on accurate speech-to-text conversion with support for multiple languages.",
      features: [
        "Real-time voice transcription",
        "Multiple language support",
        "Custom acoustic model training",
        "Export to various formats"
      ],
      technologies: [
        "Python 3.9",
        "Whisper AI",
        "PyTorch",
        "TensorFlow",
        "CUDA Acceleration"
      ],
      github: "https://github.com/yourusername/voice-transcriptor",
      demo: "https://demo.example.com"
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application with modern UI",
      tags: ["Flutter", "Dart", "Firebase"],
      image: placeholderImage,
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
      image: placeholderImage,
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
    setShowDetails(true);
  };

  return (
    <section className="h-screen w-full py-10 section-padding relative overflow-hidden flex flex-col justify-center" id="projects">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        <div className="section-blob section-blob-1 animate-blob" />
        <div className="section-blob section-blob-2 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col">
        <div ref={ref} className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient p-6">
            My Projects
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and interests in development.
          </p>
        </div>

        <div className="w-full max-w-[1000px] mx-auto">
          <div className="project-slider">
            <Slider {...settings}>
              {projects.map((project, index) => (
                <div key={index} onClick={() => handleProjectClick(project)}>
                  <div className="relative h-[600px] w-full cursor-pointer px-2">
                    <div className="absolute inset-0 bg-black/30 z-10 rounded-xl" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-xl">
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-lg text-white/90 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1.5 text-sm rounded-full bg-white/10 text-white/90 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {showDetails && selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-dark/90 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gradient">
                  {selectedProject.title}
                </h3>
                <button 
                  onClick={() => setShowDetails(false)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-lg text-white/80">
                  {selectedProject.longDescription}
                </p>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-white">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full bg-primary/20 hover:bg-primary/30 text-white transition-colors duration-300"
                  >
                    View Source
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full bg-secondary/20 hover:bg-secondary/30 text-white transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
