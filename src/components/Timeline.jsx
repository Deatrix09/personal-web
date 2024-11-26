import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { timelineData, timelineTabs } from '../data/timelineData';

const Timeline = () => {
  const [activeTab, setActiveTab] = useState('education'); // Default tab
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
          {timelineTabs.map((tab) => (
            <motion.button
              key={tab.id}
              variants={tabVariants}
              animate={activeTab === tab.id ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className="px-6 py-2 rounded-full border-2 border-cyan-500 font-medium capitalize transition-all"
            >
              {tab.label}
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
                      <p className="text-gray-400 dark:text-gray-300">{item.date}</p>
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
