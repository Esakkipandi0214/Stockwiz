import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import DisplayImage from '../../../public/super-trade-banner.png'

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
      <div className="container flex flex-col items-center p-4 mb-20 mx-auto space-y-6 md:p-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-16 h-16 dark:text-violet-600"
          >
            <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
            <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
          </svg>
        </motion.div>
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-6 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-7xl lg:max-w-2xl xl:max-w-4xl text-white"
        >
           Trade Like
        </motion.h4>
        <motion.h3
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent px-6 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-7xl lg:max-w-2xl xl:max-w-4xl"
        >
         The Institutions
        </motion.h3>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-6 py-2 text-2xl font-semibold text-center sm:font-normal sm:text-3xl md:text-xl lg:max-w-2xl xl:max-w-4xl text-white"
        >
        Get ready to level up your trading game.
        </motion.p>
      </div>
      <div className="w-full px-20">
      <Image
        src={DisplayImage}
        alt=""
        layout="responsive" // Sets the image to be responsive
        width={500} // Aspect ratio width
        height={500} // Aspect ratio height
        className="w-full h-auto"
      />
    </div>
    </section>
  );
};

export default Testimonial;
