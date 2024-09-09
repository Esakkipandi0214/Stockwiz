

// export default Testimonial;

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


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
    <section className="bg-gradient-to-r  from-black to-violet-950 md:pt-0 pb-20">
      <div className="container flex flex-col items-center md:-mb-10  p-4 mx-auto space-y-6 md:p-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
        </motion.div>
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-6 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-8xl lg:max-w-2xl xl:max-w-4xl text-white"
        >
        <motion.span
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-gradient-to-r  from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent px-6 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-8xl lg:max-w-2xl xl:max-w-4xl"
        >
         Past Performance
        </motion.span> 
        </motion.h4>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="content px-6 py-2 text-2xl font-semibold text-center sm:font-normal sm:text-3xl md:text-xl lg:max-w-2xl xl:max-w-4xl text-white"
        >
        </motion.p>
        </div>
    </section>
  );
};

export default Testimonial;
