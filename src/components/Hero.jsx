import React from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from './common/ScrollIndicator';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-background/50">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-dark/90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block"
        >
          <div className="text-sm md:text-base font-medium px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            Welcome to my portfolio
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
        >
          Lukáš Kleveta
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl mb-8 text-white/90"
        >
          Student & Developer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto"
        >
          Exploring the intersection of Mobile Development and AI in Brno
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-4"
        >
          <a
            href="https://github.com/Deatrix09"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaGithub className="inline-block mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lukáš-kleveta-074b07239"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaLinkedin className="inline-block mr-2" />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
