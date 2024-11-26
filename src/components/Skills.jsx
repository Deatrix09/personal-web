import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      category: 'Mobile Development',
      items: [
        { name: 'Flutter', level: 80, description: 'Cross-platform mobile development' },
        { name: 'Swift UI', level: 50, description: 'iOS native development' },
        { name: 'Android - Jetpack Compose', level: 70, description: 'Modern Android UI toolkit' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Python', level: 85, description: 'Server-side development' },
        { name: 'PostgreSQL', level: 65, description: 'Database management' },
        { name: 'Firebase', level: 65, description: 'Backend-as-a-Service' },
      ],
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', level: 85, description: 'Version control' },
        { name: 'Docker', level: 65, description: 'Containerization' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gradient"
            variants={itemVariants}
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {skillGroup.category}
                </h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-500 to-pink-500"
                          initial={{ width: 0 }}
                          animate={{ width: inView ? `${skill.level}%` : 0 }}
                          transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 }}
                        />
                      </div>

                      {hoveredSkill === `${index}-${skillIndex}` && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute mt-2 p-2 bg-white dark:bg-gray-800 rounded-md shadow-lg text-sm text-gray-600 dark:text-gray-300 z-10"
                        >
                          {skill.description}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-300">
              Always learning and exploring new technologies to stay at the cutting edge of web development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
