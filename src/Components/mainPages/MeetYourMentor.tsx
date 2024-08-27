import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import DisplayImage from '../../../public/super-trade-banner.png'
import VideoFeature from '../../../public/featureVideo.mp4'
import BackFrame from "../../../public/videoframe_99.png"
import CEO from '../../../public/admin.jpg'
import Link from 'next/link';

const Testimonial: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px',
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
    <section className="bg-gradient-to-r from-teal-900 to-black pt-10">
      <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-2">
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-6 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-5xl lg:text-7xl lg:max-w-2xl xl:max-w-4xl text-white"
        >
          Meet Your 
          <motion.span
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent px-6 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-7xl lg:max-w-2xl xl:max-w-4xl"
          >
             Mentor
          </motion.span> 
        </motion.h4>
      </div>

      {/* First section */}
      <div className="z-20 mx-4 sm:mx-8 lg:mx-28 mt-11 py-2 bg-black rounded-[50px] border border-slate-600 hover:border-green-500 text-white">
        <div className="flex flex-col lg:flex-row items-center lg:items-start p-4 lg:p-8 gap-6">
          <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-7xl font-semibold text-center lg:text-left">Essaki Pandian</h2>
            <p className="text-xl lg:text-3xl mb-4 lg:mb-7 text-white/50 font-medium text-center lg:text-left">
              Founder & CEO, Zendra Technologies
            </p>
            <p className="text-lg lg:text-2xl leading-relaxed text-center lg:text-left text-white/50 font-medium">
              Hello everyone! I&apos;Essaki, a SEBI and NISM registered and certified research analyst. I have over 10 years of trading and investing experience, specializing in institutional stock trading. My educational background is rich in the finance domain, including an MBA in Finance, Financial Modelling and Valuation Analyst (FMVA) certification, and I am a CFA Level III candidate.
            </p>
            <div className="flex justify-center lg:justify-start">
              <span className="flex flex-row items-center gap-3 bg-gradient-to-r from-[#1A3636] via-black via-40% to-green-950 to-99% border-2 border-white rounded-3xl p-4 lg:p-6 w-full lg:w-auto">
                <Link href="#" aria-label="Back to homepage" className="flex items-center">
                  <svg width="70" height="95" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG content here */}
                  </svg>
                </Link>
                <span className="flex flex-col justify-center">
                  <p className="text-white text-xl lg:text-3xl">SEBI Registered Research Analyst</p>
                </span>
              </span>
            </div>
          </div>
          <div className="relative flex justify-center w-full lg:w-1/2 mt-6 lg:mt-0">
            <Image src={CEO} className="w-full h-auto max-w-[450px]" alt="CEO" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;