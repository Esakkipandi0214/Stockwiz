

// export default Testimonial;

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import DisplayImage from '../../../public/super-trade-banner.png'
import VideoFeature from '../../../public/featureVideo.mp4'
import BackFrame from "../../../public/videoframe_99.png"


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
    <section className="bg-black/95 pb-20">
      <div className="container flex flex-col items-center p-4 mb-20 mx-auto space-y-6 md:p-2">
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
          className="px-6 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-7xl lg:max-w-2xl xl:max-w-4xl text-white"
        >
        Top<motion.span
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent px-6 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-7xl lg:max-w-2xl xl:max-w-4xl"
        >
         Features
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
        <div className="lg:grid lg:grid-cols-2 lg:gap-6 bg-black items-center rounded-2xl  mx-24 py-14 border border-slate-600 hover:border-green-500 text-center lg:text-left px-28 text-white">
    <div className="flex flex-col gap-4 lg:gap-6  lg:items-start lg:justify-center">
        <p className="p-3 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-r from-teal-400/45 to-blue-500/50">
            SEBI Registered - INH000013925
        </p>
        <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-3">
            <p className="text-3xl md:text-5xl lg:text-6xl font-semibold">Become A</p>
            <p className="text-3xl md:text-5xl lg:text-6xl font-semibold">
                Super <span className="text-green-400">Trader</span>
            </p>
        </div>
    </div>
    <div className="relative flex justify-center lg:justify-start">
    <video width="580" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
    <source src="/featureVideo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
</video>
</div>

</div>
    </section>
  );
};

export default Testimonial;
