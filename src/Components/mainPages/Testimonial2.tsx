import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Chart from '../../../public/chart.png';


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
    <section
      className="bg-gradient-to-r from-black to-blue-900 pb-12 sm:pb-16 md:pb-20" // Apply the background gradient
    >
      <div className="container flex flex-col items-center px-4 py-12 space-y-6 mx-auto md:py-16 md:space-y-10">
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl font-extrabold text-white sm:text-6xl md:text-5xl lg:text-7xl"
        >
          Trade Like
        </motion.h4>
        <motion.h3
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl font-bold bg-gradient-to-r  from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-6xl"

        >
          The Institutions
        </motion.h3>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-4 py-2 text-xl font-normal text-center sm:font-semibold sm:text-2xl md:text-3xl lg:max-w-2xl xl:max-w-4xl text-white"
        >
          Get ready to level up your trading game.
        </motion.p>
      </div>
      <div className="w-full px-4 sm:px-8 md:px-20">
        <Image
          src={Chart}
          alt=""
          layout="responsive"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Testimonial;
