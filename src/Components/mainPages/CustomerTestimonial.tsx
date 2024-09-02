import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Card1 from "../../../public/user1.png";

const Testimonial: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px',
  });

  const images = [
    { src: Card1, alt: "Card Image 2", width: 600, height: 400, title: "Hardik Paliwal", description: "This Man Is An Inspiration! The Most Genuine Trader in India 🇮🇳", body: 'Parang sir is an inspiration—his dedication to sharing knowledge has completely transformed my market approach. His understanding is incredible, and I’m grateful to have him as a mentor. Excited for a long, profitable journey ahead! 🔥🔥' },
    { src: Card1, alt: "Card Image 3", width: 600, height: 400, title: "Snigdha", description: "He is the Google of Financial Markets! Brilliant Mentor, Super Helpful Community ❤️", body: 'Parang is the best mentor with immense market knowledge and a genuine willingness to share it. With his guidance, I improve every day. Grateful for his incredible approach to trading since the start of my journey. 🙌' },
    { src: Card1, alt: "Card Image 3", width: 600, height: 400, title: "Snigdha", description: "He is the Google of Financial Markets! Brilliant Mentor, Super Helpful Community ❤️",body:'Parang is the best mentor with immense market knowledge and a genuine willingness to share it. With his guidance, I improve every day. Grateful for his incredible approach to trading since the start of my journey. 🙌' },
  ];

  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: ['100%', '-100%'],
        transition: {
          ease: 'linear',
          duration: 70,
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
            className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent px-4 md:px-6 text-xl font-semibold text-center sm:font-bold sm:text-2xl md:text-5xl lg:text-7xl lg:max-w-2xl xl:max-w-4xl"
          >
            Testimonials
          </motion.span>
        </motion.h4>
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

      {/* Infinite Moving Cards Carousel */}
      <div className="flex flex-col items-center md:mt-16 px-4 md:px-8 overflow-hidden">
        <motion.div
          className="flex space-x-4"
          initial={{ x: '100%' }}
          animate={controls}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...images, ...images].map((image, index) => (
            <div key={index} className="flex-1 min-w-[280px] md:min-w-[410px] max-w-[410px]">
              <div className="bg-black border border-pink-500 h-[320px] p-4 rounded-3xl shadow-lg flex flex-col justify-between">
                <div className="flex items-center mb-2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="rounded-full object-cover w-12 h-12 md:w-16 md:h-16"
                    width={image.width}
                    height={image.height}
                    layout="fixed"
                  />
                  <div className="ml-4">
                    <h2 className="text-sm md:text-lg text-white font-semibold">{image.title}</h2>
                    <p className="text-xs md:text-sm text-white">{image.description}</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-white/50 text-ellipsis">{image.body}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
