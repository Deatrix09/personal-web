import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center p-2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-1 h-1 rounded-full bg-white/60"
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
