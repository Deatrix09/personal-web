import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const education = [
    {
      period: "2020 - Present",
      degree: "Bachelor's Degree in Open Informatics",
      institution: "Mendel University",
      location: "Brno, Czech Republic",
      details: "Final semester student working on Bachelor's thesis: Voice Transcriptor using Whisper AI"
    },
    {
      period: "2016 - 2020",
      degree: "High School Diploma",
      institution: "Vyšší odborná škola a střední škola Boskovice, příspěvková organizace",
      location: "Boskovice, Czech Republic",
      details: "Information Technology"
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-1 gap-12 max-w-7xl mx-auto pb-12">  
          <p className='text-light/80 text-center'>
            Hi! I'm Lukáš Kleveta, a 22-year-old developer based in Brno, Czech Republic. 
            Currently in my final semester at Mendel University studying Open Informatics, 
            I'm passionate about creating modern web applications and exploring new technologies. 
            My bachelor's thesis focuses on developing a Voice Transcriptor using Whisper AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - About Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">Interests</h3>
              <ul className="space-y-2 text-light/80">
                <li>• Modern Web Development</li>
                <li>• Mobile Development</li>
                <li>• AI & Machine Learning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">Current Focus</h3>
              <ul className="space-y-2 text-light/80">
                <li>• Bachelor's Thesis: Voice Transcriptor</li>
                <li>• Full-stack Development</li>
                <li>• AI Integration in Web Apps</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h3 className="text-2xl font-bold mb-8 text-gradient">Education Journey</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 group"
                >
                  {/* Timeline dot and line */}
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-125 transition-transform duration-300" />
                  {index !== education.length - 1 && (
                    <div className="absolute left-[5px] top-5 w-[2px] h-[calc(100%+1.5rem)] bg-gradient-to-b from-primary/50 to-secondary/50" />
                  )}
                  
                  {/* Content */}
                  <div className="card group-hover:-translate-y-1 transition-all duration-300">
                    <span className="text-sm font-medium text-primary mb-1 block">
                      {edu.period}
                    </span>
                    <h4 className="text-xl font-bold mb-2 text-gradient">
                      {edu.degree}
                    </h4>
                    <p className="text-lg font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-light/60 mb-2">
                      {edu.location}
                    </p>
                    <p className="text-light/80">
                      {edu.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
