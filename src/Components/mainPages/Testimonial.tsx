import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Mobiles1 from '../../../public/mobileres2.png';
import TestimonialCarousel from './TestimonialCarousel'

const Testimonial: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px', // Adjust to trigger inView earlier/later from the top and bottom
  });
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <section className="bg-black pb-20">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="flex flex-col items-center space-y-6 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Catch Everyday Profit
        </motion.h2>

        <motion.h3
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent sm:text-2xl md:text-3xl lg:text-4xl"
        >
          Using Different Services & Become Richer
        </motion.h3>

        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl max-w-2xl"
        >
          Experience the power of order flow trading with a world-class trading & investing ecosystem designed to outperform the competition.
        </motion.p>
      </div>
    </div>
    <div className="min-h-[100px] hidden md:flex md:row-span-3 md:col-span-7 items-center justify-center text-center text-white">
  <div className="relative w-full flex justify-center items-center md:ml-20">
    <motion.div
      className="absolute z-10"
      initial={{ x: 0, rotate: 0 }}
      animate={scrollY > 0 ? { x: -200, rotate: -40 } : { x: 0, rotate: 0 }}
      transition={{ type: 'tween', duration: 1 }}
    >
      <Image 
        src={Mobiles1} 
        alt="Left Image" 
        className='w-[200px] h-[500px] lg:w-[300px] lg:h-[700px]' 
      />
    </motion.div>
    <motion.div
      className="relative z-20"
      initial={{ x: 0, rotate: 0 }}
      animate={scrollY > 0 ? { x: 0, rotate: 0 } : { x: 0, rotate: 0 }}
      transition={{ type: 'tween', duration: 0.6 }}
    >
      <Image 
        src={Mobiles1} 
        alt="Center Image" 
        className='w-[200px] h-[500px] lg:w-[300px] lg:h-[700px]' 
      />
    </motion.div>
    <motion.div
      className="absolute z-10"
      initial={{ x: 0, rotate: 0 }}
      animate={scrollY > 0 ? { x: 200, rotate: 40 } : { x: 0, rotate: 0 }}
      transition={{ type: 'tween', duration: 1 }}
    >
      <Image 
        src={Mobiles1} 
        alt="Right Image" 
        className='w-[200px] h-[500px] lg:w-[300px] lg:h-[700px]' 
      />
    </motion.div>
  </div>
</div>
<TestimonialCarousel/>
    </section>
  );
};

export default Testimonial;
