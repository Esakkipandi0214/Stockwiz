import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import imgsss from "../../../public/user1.png";
import { InfiniteMovingCards } from "../UI/infinite-moving-cards";

const Testimonial: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px',
  });

  const images = [
    { src: imgsss, alt: "Card Image 1", width: 600, height: 400, title: "Hardik Paliwal", name: "This Man Is An Inspiration! The Most Genuine Trader in India 🇮🇳", quote: 'Parang sir is an inspiration—his dedication to sharing knowledge has completely transformed my market approach. His understanding is incredible, and I’m grateful to have him as a mentor. Excited for a long, profitable journey ahead! 🔥🔥' },
    { src: imgsss, alt: "Card Image 2", width: 600, height: 400, title: "Snigdha", name: "He is the Google of Financial Markets! Brilliant Mentor, Super Helpful Community ❤️", quote: 'Parang is the best mentor with immense market knowledge and a genuine willingness to share it. With his guidance, I improve every day. Grateful for his incredible approach to trading since the start of my journey. 🙌' },
    { src: imgsss, alt: "Card Image 3", width: 600, height: 400, title: "Snigdha", name: "He is the Google of Financial Markets! Brilliant Mentor, Super Helpful Community ❤️", quote: 'Parang is the best mentor with immense market knowledge and a genuine willingness to share it. With his guidance, I improve every day. Grateful for his incredible approach to trading since the start of my journey. 🙌' },
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
    <section className="bg-gradient-to-r from-black to-blue-900 py-10 md:py-20">
      <div className="container flex flex-col items-center px-4 mx-auto space-y-6 md:px-6">
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-lg  font-semibold text-center sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white"
        >
          Customer
          <motion.span
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent px-2 md:px-4 text-lg  font-semibold sm:text-2xl max-[420px]:2xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            Testimonials
          </motion.span>
        </motion.h4>

        <div className="relative overflow-hidden w-full mt-8 sm:mt-10 md:mt-20">
          <InfiniteMovingCards
            items={images}
            direction="right"
            speed="slow"
            className="w-full max-w-full"
          />
        </div>

        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-2 sm:px-4 md:px-6 py-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center text-white"
        >
          {/* Add your content here */}
        </motion.p>
      </div>
    </section>
  );
};

export default Testimonial;
