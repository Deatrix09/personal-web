import React from 'react';
import { motion } from 'framer-motion';
import { footerContent } from '../../data/textContent';

const Footer = ({ inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-16 text-center"
    >
      <p className="text-white/60 text-sm">
        {footerContent.copyright("Lukáš Kleveta")}
      </p>
    </motion.div>
  );
};

export default Footer;
