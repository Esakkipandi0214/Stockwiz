

// export default Testimonial;

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../Components/UI/carousel";
import { Card, CardContent } from "../../Components/UI/card";
import Image from 'next/image';
import Card1 from "../../../public/user1.png"
import Card2 from "../../../public/user2.png"
import Card3 from "../../../public/user3.png"
import Card4 from "../../../public/user4.png"
import Card5 from "../../../public/santosh-ravula.jpg"
import Card6 from "../../../public/card6.png"
import Card7 from "../../../public/card7.png"
import Link from 'next/link';


const Testimonial: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px', // Adjust to trigger inView earlier/later from the top and bottom
  });

  const images = [
    { src: Card1, alt: "Card Image 1", width: 600, height: 400, title: "Sharan Devendra Donthi", description: "Thank You Stockwiz For Making Me A Professional Trader!", body:"A successful trader is disciplined in risk, trade, emotion, and capital management. As Parang says, you are as good as the stocks you choose and the mentor you follow. Parang’s global market expertise and guidance have been invaluable. Highly recommended!" },
    { src: Card2, alt: "Card Image 2", width: 600, height: 400, title: "Hardik Paliwal", description: "This Man Is An Inspiration! The Most Genuine Trader in India 🇮🇳",body:'Parang sir is an inspiration—his dedication to sharing knowledge has completely transformed my market approach. His understanding is incredible, and I’m grateful to have him as a mentor. Excited for a long, profitable journey ahead! 🔥🔥' },
    { src: Card3, alt: "Card Image 3", width: 600, height: 400, title: "Snigdha", description: "He is the Google of Financial Markets! Brilliant Mentor, Super Helpful Community ❤️",body:'Parang is the best mentor with immense market knowledge and a genuine willingness to share it. With his guidance, I improve every day. Grateful for his incredible approach to trading since the start of my journey. 🙌' },
    { src: Card4, alt: "Card Image 1", width: 600, height: 400, title: "Sharan Devendra Donthi", description: "Thank You Stockwiz For Making Me A Professional Trader!", body:"A successful trader is disciplined in risk, trade, emotion, and capital management. As Parang says, you are as good as the stocks you choose and the mentor you follow. Parang’s global market expertise and guidance have been invaluable. Highly recommended!" },
    { src: Card5, alt: "Card Image 2", width: 600, height: 400, title: "Hardik Paliwal", description: "This Man Is An Inspiration! The Most Genuine Trader in India 🇮🇳",body:'Parang sir is an inspiration—his dedication to sharing knowledge has completely transformed my market approach. His understanding is incredible, and I’m grateful to have him as a mentor. Excited for a long, profitable journey ahead! 🔥🔥' },
    { src: Card1, alt: "Card Image 3", width: 600, height: 400, title: "Snigdha", description: "He is the Google of Financial Markets! Brilliant Mentor, Super Helpful Community ❤️",body:'Parang is the best mentor with immense market knowledge and a genuine willingness to share it. With his guidance, I improve every day. Grateful for his incredible approach to trading since the start of my journey. 🙌' }

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
    <section className="bg-black/95 md:pt-20 pb-20">
      <div className="container flex flex-col items-center md:-mb-10 p-4 mx-auto space-y-6 md:p-2">
  <motion.h4
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={controls}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="px-4 md:px-6 text-xl font-semibold text-center sm:font-bold sm:text-2xl md:text-5xl lg:text-7xl lg:max-w-2xl xl:max-w-4xl text-white"
  >
    Customer
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent px-4 md:px-6 text-xl font-semibold text-center sm:font-bold sm:text-2xl md:text-5xl lg:text-7xl lg:max-w-2xl xl:max-w-4xl"
    >
      Testimonials
    </motion.span>
  </motion.h4>
  <motion.p
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={controls}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="px-4 md:px-6 py-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center sm:font-normal lg:max-w-2xl xl:max-w-4xl text-white"
  >
    {/* Add your content here */}
  </motion.p>
</div>
        {/* =========================================cards carousal================================================= */}
        <div className="flex flex-col items-center md:mt-16 px-4 md:px-8">
  <div className="w-full min-h-[100px] md:px-16">
    {/* Carousel Section */}
    <Carousel className="relative w-full px-4 md:px-8">
      <CarouselPrevious className="absolute left-0 top-1/2 transform translate-x-0 md:translate-x-[420px] z-10" />
      <CarouselNext className="absolute right-0 top-1/2 transform translate-x-0 md:-translate-x-[430px] z-10" />
      <CarouselContent className="flex justify-between space-x-2 md:space-x-4">
        {images.map((image, index) => (
          <CarouselItem key={index} className="flex-1 min-w-[280px] md:min-w-[410px]">
            <div className="flex items-center border border-lime-500 space-x-4 md:space-x-10 bg-black h-auto md:h-[400px] p-4 md:px-6 rounded-3xl shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                className="rounded-full object-cover w-16 h-16 md:w-24 md:h-24"
                width={image.width}
                height={image.height}
                layout="fixed"
              />
              <div className="grid gap-2 md:gap-3">
                <h2 className="text-base md:text-xl text-white font-semibold">{image.title}</h2>
                <p className="text-sm md:text-base text-white">{image.description}</p>
                <p className="text-xs md:text-sm text-white/50 h-[100px] md:h-[200px] text-ellipsis">{image.body}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
</div>

      {/* ================================================================ */}
    </section>
  );
};

export default Testimonial;
