// components/Marquee.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-black via-blue-950 to-black text-white py-5 pb-5 h-8">
      <motion.div
        className="flex absolute left-0 top-0"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 300, // Slower speed by increasing the duration
          ease: 'linear',
        }}
      >
        {/* Container for looping effect */}
        <div className="flex whitespace-nowrap">
          <span className="mr-10 text-lg font-semibold">
            Disclaimer: <span className=' text-lg text-white/80'>Investing in securities are subject to market risk. Past performance is not indicative of performance. Registration granted by SEBI and certification from NISM in no way guarantees performance of the intermediary or provides any assurance of returns to investors.</span> 
          </span>
          <span className="mr-10 text-lg font-semibold">
            Disclaimer: <span className=' text-lg text-white/80'>Investing in securities are subject to market risk. Past performance is not indicative of performance. Registration granted by SEBI and certification from NISM in no way guarantees performance of the intermediary or provides any assurance of returns to investors.</span> 
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
