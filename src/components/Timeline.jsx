import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = {
  professional: [
    {
      id: 1,
      year: '2023 - Present',
      title: 'Voice Transcriptor Project',
      company: 'Bachelor\'s Thesis',
      description: 'Developing a Voice Transcriptor using Whisper AI technology, focusing on speech-to-text conversion and AI integration.',
      technologies: ['AI', 'Whisper', 'Web Development']
    },
    {
      id: 2,
      year: '2022 - Present',
      title: 'Full-stack Developer',
      company: 'Personal Projects',
      description: 'Creating modern web applications with focus on AI integration and full-stack development.',
      technologies: ['React', 'Node.js', 'AI Integration']
    },
  ],
  education: [
    {
      id: 1,
      year: '2020 - Present',
      title: 'Bachelor\'s Degree in Open Informatics',
      institution: 'Mendel University',
      location: 'Brno, Czech Republic',
      description: 'Final semester student specializing in modern web development and AI technologies. Working on Bachelor\'s thesis: Voice Transcriptor using Whisper AI.',
    },
    {
      id: 2,
      year: '2016 - 2020',
      title: 'High School Diploma in IT',
      institution: 'Vyšší odborná škola a střední škola Boskovice',
      location: 'Boskovice, Czech Republic',
      description: 'Information Technology program focusing on software development fundamentals.',
    },
  ],
};

const Timeline = () => {
  const [activeTab, setActiveTab] = useState('professional');
  const [hoveredItem, setHoveredItem] = useState(null);

  const tabVariants = {
    active: {
      backgroundColor: '#00ADB5',
      color: 'white',
      scale: 1.05,
    },
    inactive: {
      backgroundColor: 'transparent',
      color: '#718096',
      scale: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="timeline" className="section-padding">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gradient">
          My Journey
        </h2>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {['professional', 'education'].map((tab) => (
            <motion.button
              key={tab}
              variants={tabVariants}
              animate={activeTab === tab ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className="px-6 py-2 rounded-full border-2 border-cyan-500 font-medium capitalize transition-all"
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Timeline Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-pink-500"></div>

            {timelineData[activeTab].map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative flex items-center mb-12"
              >
                <div className="flex w-full">
                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div 
                      className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500"
                      whileHover={{ scale: 1.5 }}
                      animate={hoveredItem === item.id ? { scale: 1.5 } : { scale: 1 }}
                    />
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto'
                    }`}
                  >
                    <div className="p-6 bg-dark-card dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow glass-effect">
                      <h3 className="text-xl font-bold text-gradient">
                        {item.title}
                      </h3>
                      <p className="text-cyan-500 font-medium">
                        {item[activeTab === 'professional' ? 'company' : 'institution']}
                      </p>
                      {item.location && (
                        <p className="text-gray-400 dark:text-gray-300">{item.location}</p>
                      )}
                      <p className="text-gray-400 dark:text-gray-300">{item.year}</p>
                      <p className="mt-2 text-gray-300 dark:text-gray-400">
                        {item.description}
                      </p>
                      {item.technologies && (
                        <div className="mt-3 flex flex-wrap gap-2 justify-end">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-sm rounded-full bg-gradient-to-r from-cyan-500/10 to-pink-500/10 text-cyan-500 border border-cyan-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Timeline;
