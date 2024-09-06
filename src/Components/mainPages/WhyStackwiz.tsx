import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Card1 from '../../../public/shield-hover.svg';
import Card2 from '../../../public/ai-engine-hover.svg';
import Card3 from '../../../public/founded-by-hover.svg';
import Card4 from '../../../public/unbase-imp-hover.svg';
import Card5 from '../../../public/hit-target-hover.svg';
import Card6 from '../../../public/crores-green.svg';
import { HoverEffect } from '../UI/card-hover-effect'; // Update path if necessary

const cardsData = [
  { title: 'We are SEBI', description: 'Registered Experts', image: Card1 },
  { title: 'AI-Engine', description: 'Powered by the most powerful A.I trading tools', image: Card2 },
  { title: '10,000+', description: 'Active Pro Traders & Investors', image: Card3 },
  { title: 'Expert & Focus', description: 'High Profit Ratio by proper guidance', image: Card4 },
  { title: 'Profit Results', description: 'Weekly & Monthly statement', image: Card5 },
  { title: '24/7 Trading', description: 'Without interventions of Humans', image: Card6 },
];

const Testimonial: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px',
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <section className="bg-gradient-to-r from-black to-blue-900 pt-11">
      <div className="container flex flex-col items-center mx-auto space-y-6 md:p-2">
  <motion.h4
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={controls}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="px-4 text-2xl font-semibold flex text-center sm:font-bold sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl text-white"
  >
    Why
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent px-4 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl"
    >
      Zentra Wealth?
    </motion.span>
  </motion.h4>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-6 py-2 text-xl text-center sm:text-2xl md:text-3xl lg:max-w-2xl xl:max-w-4xl text-white/60"
        >
          {/* You can add an optional description here */}
        </motion.p>
      </div>

      {/* HoverEffect Cards Section */}
      <div className="">
        <div className="container mx-auto px-4">
          <HoverEffect items={cardsData} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;