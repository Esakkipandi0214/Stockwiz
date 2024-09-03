import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Card1 from "../../../public/user1.png";
import { InfiniteMovingCards } from "../UI/infinite-moving-cards";
import imgsss from "../../../public/user1.png"

const Testimonial: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px',
  });

  const images = [
    { src: imgsss, alt: "Card Image 2", width: 600, height: 400, title: "Hardik Paliwal", name: "This Man Is An Inspiration! The Most Genuine Trader in India 🇮🇳", quote: 'Parang sir is an inspiration—his dedication to sharing knowledge has completely transformed my market approach. His understanding is incredible, and I’m grateful to have him as a mentor. Excited for a long, profitable journey ahead! 🔥🔥' },
    { src: imgsss, alt: "Card Image 3", width: 600, height: 400, title: "Snigdha", name: "He is the Google of Financial Markets! Brilliant Mentor, Super Helpful Community ❤️", quote: 'Parang is the best mentor with immense market knowledge and a genuine willingness to share it. With his guidance, I improve every day. Grateful for his incredible approach to trading since the start of my journey. 🙌' },
    { src: imgsss, alt: "Card Image 3", width: 600, height: 400, title: "Snigdha", name: "He is the Google of Financial Markets! Brilliant Mentor, Super Helpful Community ❤️",quote:'Parang is the best mentor with immense market knowledge and a genuine willingness to share it. With his guidance, I improve every day. Grateful for his incredible approach to trading since the start of my journey. 🙌' },
  ];

  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: ['10%', '-100%'],
        transition: {
          ease: 'linear',
          duration: 100,
          repeat: Infinity,
          repeatType: 'loop',
        },
      });
    }
  }, [isHovered, controls]);

  return (
    <section className="bg-gradient-to-r from-black to-blue-900 md:pt-20 pb-20">
      <div className="container flex flex-col items-center md:-mb-10 p-4 mx-auto space-y-6 md:p-2">
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-4 md:px-6 text-xl font-semibold text-center sm:font-bold sm:text-2xl md:text-5xl lg:text-7xl lg:max-w-2xl xl:max-w-4xl text-white"
        >
          Customer
          <motion.span
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent px-4 md:px-6 text-xl font-semibold text-center sm:font-bold sm:text-2xl md:text-5xl lg:text-7xl lg:max-w-2xl xl:max-w-4xl"
          >
            Testimonials
          </motion.span>
        </motion.h4>
        <div className=" mt-20 rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={images}
        direction="right"
        speed="slow"
      />
    </div>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-4 md:px-6 py-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center sm:font-normal lg:max-w-2xl xl:max-w-4xl text-white"
        >
          {/* Add your content here */}
        </motion.p>
      </div>

    </section>
  );
};

export default Testimonial;
