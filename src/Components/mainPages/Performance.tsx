

// export default Testimonial;

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../Components/UI/carousel";
import { Card, CardContent } from "../../Components/UI/card";
import Image from 'next/image';
import Card1 from "../../../public/card1.png"
import Card2 from "../../../public/card2.png"
import Card3 from "../../../public/card3.png"
import Card4 from "../../../public/card4.png"
import Card5 from "../../../public/card5.png"
import Card6 from "../../../public/card6.png"
import Card7 from "../../../public/card7.png"
import Link from 'next/link';


const Testimonial: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px', // Adjust to trigger inView earlier/later from the top and bottom
  });

  // Array of image data
const images = [
    { src: Card1, alt: "Card Image 1", width: 600, height: 400 },
    { src: Card2, alt: "Card Image 2", width: 600, height: 400 },
    { src: Card3, alt: "Card Image 3", width: 600, height: 400 },
    { src: Card4, alt: "Card Image 4", width: 600, height: 400 },
    { src: Card5, alt: "Card Image 5", width: 700, height: 700 },
    { src: Card6, alt: "Card Image 6", width: 600, height: 400 },
    { src: Card7, alt: "Card Image 6", width: 600, height: 400 }
  ];
  

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
        {/* =========================================cards carousal================================================= */}

        <div className="flex justify-center items-center md:mt-16 px-4 md:px-28">
  <div className="w-full min-h-[100px]">
    <Carousel className="relative w-full">
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
      <CarouselContent className="flex justify-between space-x-4">
        {images.map((image, index) => (
          <CarouselItem key={index} className="flex-1 min-w-[250px] sm:min-w-[300px] md:min-w-[400px]">
            <Image
              src={image.src}
              alt={image.alt}
              className="rounded-lg object-contain w-full h-full"
              width={image.width}
              height={image.height}
              layout="responsive"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
</div>
               
        {/* ================================================= End Cards Carousal =================================== */}
        {/* ==========================Button ================================================== */}
        <div className="min-h-[100px] flex justify-center items-center text-center text-white md:mt-8 md:col-span-5">
  <div className="w-full px-4 md:px-8 flex justify-center">
  <button
      type="button"
      className="glitter-button p-3 md:p-4 w-1/2 md:w-1/3 rounded-2xl text-black bg-gradient-to-r from-[rgb(157,255,101)] to-[#95f527] bg-[length:200%_300%] bg-right animate-gradient-flow"
    >
      <Link
        className="text-lg font-semibold text-black hover:text-white"
        href="#"
      >
        Request Verified P&L
      </Link>
    </button>
  </div>
</div>
      {/* ================================================================ */}
    </section>
  );
};

export default Testimonial;
