import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import DisplayImage from '../../../public/plan-card.png'

const Testimonial: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px', // Adjust to trigger inView earlier/later from the top and bottom
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
    <section className="bg-black pb-20">
      <div className="container flex flex-col items-center mb-10 mx-auto space-y-6 md:p-2">
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-6 text-2xl font-semibold flex text-center sm:font-bold sm:text-3xl md:text-8xl lg:max-w-2xl xl:max-w-4xl text-white"
        >
           Membership 
           <motion.h3
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent px-6 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-8xl lg:max-w-2xl xl:max-w-4xl"
        >
         Plans
        </motion.h3>
        </motion.h4>
        
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-6 py-2 text-2xl font-semibold text-center sm:font-normal sm:text-3xl md:text-xl lg:max-w-2xl xl:max-w-4xl text-white/60"
        >
         We empower a new generation of traders and investors with world class technology,<br/> institution grade education and professional advisory services.
        </motion.p>
      </div>
      <div className=" flex justify-center items-center w-full">
      <Image
        src={DisplayImage}
        alt=""
        width={500} // Aspect ratio width
        height={500} // Aspect ratio height
        
      />
    </div>
    </section>
  );
};

export default Testimonial;
