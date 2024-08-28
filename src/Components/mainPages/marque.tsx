// components/Marquee.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaBitcoin, FaMicrosoft } from 'react-icons/fa'; // Import relevant icons
import { GiBank } from 'react-icons/gi'; // BankNIFTY Icon

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black text-white py-3 pb-5 ">
      <motion.div
        className="flex absolute left-0 top-0"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, // Adjust speed by changing the duration
          ease: 'linear',
        }}
      >
        {/* Container for looping effect */}
        <div className="flex whitespace-nowrap">
          <span className="flex items-center mr-10 text-lg font-semibold">
            <FaBitcoin className="mr-2" color="#f7931a" /> BTCUSDT 54,000$ -6%
          </span>
          {/* <span className="flex items-center mr-10 text-lg font-semibold">
            NIFTY 22,000 +2%
          </span> */}
          <span className="flex items-center mr-10 text-lg font-semibold">
            <GiBank className="mr-2" color="#007bff" /> BANKNIFTY 54,000 +3.5%
          </span>
          <span className="flex items-center mr-10 text-lg font-semibold">
            <FaApple className="mr-2" color="#a2aaad" /> Apple 219 +3%
          </span>
          <span className="flex items-center mr-10 text-lg font-semibold">
            <FaMicrosoft className="mr-2" color="#00a4ef" /> Microsoft 408 +5%
          </span>
          {/* Repeat content to make it continuous */}
          <span className="flex items-center mr-10 text-lg font-semibold">
            <FaBitcoin className="mr-2" color="#f7931a" /> BTCUSDT 54,000$ -6%
          </span>
          {/* <span className="flex items-center mr-10 text-lg font-semibold">
            NIFTY 22,000 +2%
          </span> */}
          <span className="flex items-center mr-10 text-lg font-semibold">
            <GiBank className="mr-2" color="#007bff" /> BANKNIFTY 54,000 +3.5%
          </span>
          <span className="flex items-center mr-10 text-lg font-semibold">
            <FaApple className="mr-2" color="#a2aaad" /> Apple 219 +3%
          </span>
          <span className="flex items-center mr-10 text-lg font-semibold">
            <FaMicrosoft className="mr-2" color="#00a4ef" /> Microsoft 408 +5%
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
