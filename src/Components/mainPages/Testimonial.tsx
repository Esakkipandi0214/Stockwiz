import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Mobiles1 from '../../../public/mobileres2.png';
import TestimonialCarousel from './TestimonialCarousel';

const Testimonial: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px',
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
    <section className="bg-gradient-to-r from-teal-900 to-black pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="text-5xl font-extrabold text-white sm:text-6xl md:text-5xl lg:text-7xl"
          >
            Catch Institutional
          </motion.h2>

          <motion.h3
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-6xl"
          >
            Moves Everyday
          </motion.h3>

          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
            className="text-lg text-gray-400 sm:text-xl md:text-2xl lg:text-xl max-w-2xl"
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
