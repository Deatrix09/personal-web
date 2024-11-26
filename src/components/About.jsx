import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-1 gap-12 max-w-3xl mx-auto pb-12">  
          <p className='text-light/80 text-center text-lg'>
            Hi! I'm Lukáš Kleveta, a 22-year-old developer based in Brno, Czech Republic. 
            Currently in my final semester at Mendel University studying Open Informatics, 
            I'm passionate about creating modern web applications and exploring new technologies. 
            My bachelor's thesis focuses on developing a Voice Transcriptor using Whisper AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Interests */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="card p-8 bg-dark-card hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-2xl font-bold mb-6 text-gradient relative">Interests</h3>
              <ul className="space-y-4 text-light/80 relative">
                {[
                  'Modern Web Development',
                  'Mobile Development',
                  'AI & Machine Learning'
                ].map((interest, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500" />
                    <span>{interest}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="card p-8 bg-dark-card hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-2xl font-bold mb-6 text-gradient relative">Current Focus</h3>
              <ul className="space-y-4 text-light/80 relative">
                {[
                  'Bachelor\'s Thesis: Voice Transcriptor',
                  'Full-stack Development',
                  'AI Integration in Web Apps'
                ].map((focus, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500" />
                    <span>{focus}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
