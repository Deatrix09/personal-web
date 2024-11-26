import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-16 text-center"
    >
      <p className="text-white/60 text-sm">
        {new Date().getFullYear()} Lukáš Kleveta. All rights reserved.
      </p>
    </motion.div>
  );
};

export default Footer;
