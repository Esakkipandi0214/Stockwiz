// components/Hero.tsx

import React from 'react';
import Link from 'next/link';
import Mobile1 from '../../../public/mobile1.png'
import Mobile2 from '../../../public/mobile2.png'
import Base from '../../../public/base.png'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';
import Phone1 from '../../../public/phone1.png'
import Phone2 from '../../../public/phone2.png'

const hangingAnimationLeft = {
    animate: {
      rotate: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'mirror'as const, // Correct type
        ease: 'easeInOut',
      },
    },
  };
  
  const hangingAnimationRight = {
    animate: {
      rotate: [0, 5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'mirror' as const, // Correct type
        ease: 'easeInOut',
      },
    },
  };
  
  

const Hero: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full p-4 md:p-12 lg:grid lg:gap-4 lg:grid-cols-12 grid-cols-1 bg-gradient-to-r from-black to-violet-950 ">
       <div className="lg:col-span-5 ml-4 md:ml-[40px]  flex justify-center lg:justify-start items-center text-center lg:text-left text-white">
        <div className='mt-20'>
        <div className="flex flex-col gap-4 lg:gap-6">
  <p className="px-6 py-3  rounded-3xl flex justify-center max-w-max bg-transparent border border-purple-500 text-blue-300  font-small mb-7">
    SEBI Registered-978657464
  </p>
</div>
  <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-3 mb-7">
  <p className="text-white text-4xl md:text-6xl lg:text-6xl font-bold leading-tight">
    Your gateway to <br />
    {isClient && (
      <span className="text-violet-950"> {/* Replace with your desired color */}
        <Typewriter
          options={{
            strings: ['Smart Investing', 'Strong Returns'],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    )}
  </p>
</div>

  </div>
</div>
      <div className="min-h-[100px] md:row-span-3  md:col-span-7 md:flex hidden items-center justify-center text-center text-white">
    <div className="w-full md:ml-20 flex flex-col gap-2">
      <div className="relative md:-translate-x-16">
        <motion.div {...hangingAnimationLeft} className="relative md:ml-14 md:translate-y-8">
          <Image src={Mobile1} width={300} height={200} alt="" />
          {/* <Image src={Phone1} width={400} height={400} alt="" /> */}
        </motion.div>
        <motion.div {...hangingAnimationRight} className="absolute md:top-1 md:right-44 md:-translate-y-11">
          <Image src={Mobile2} width={400} height={400} alt="" />
          {/* <Image src={Phone2} width={800} height={600} alt="" /> */}
        </motion.div>
      </div>
      <Image src={Base} className="md:translate-y-28 md:-ml-28" width={650} height={500} alt="" />
    </div>
  </div>
  {/* <div className="lg:col-span-7 flex items-center md:hidden justify-center text-center text-white">
        <div className="w-full flex flex-col items-center lg:items-end gap-4">
          <div className="relative flex justify-center lg:justify-start">
            <motion.div {...hangingAnimationLeft} className="relative">
              <Image src={Mobile1} width={150} height={100} alt="Mobile1" />
            </motion.div>
            <motion.div {...hangingAnimationRight} className="absolute top-0 lg:top-4 right-0 lg:right-16">
              <Image src={Mobile2} width={200} height={200} alt="Mobile2" />
            </motion.div>
          </div>
          <div className="relative flex justify-center lg:justify-start">
            <Image src={Base} className="mt-8 lg:mt-16" width={300} height={300} alt="Base" />
          </div>
        </div>
      </div> */}
      <div className=" min-h-[100px] md:col-span-5 md:ml-9 flex-col gap-10  md:flex-col md:gap-3 flex justify-start text-white">
      <div className="flex flex-col gap-1 lg:gap-2 text-center lg:text-left">
          <p className="text-lg">At Zentra Wealth, we turn your financial goals into real wealth. We use simple, smart strategies and offer personalized service to help you navigate the market and achieve the best results.&quot;
          </p>
        </div>
        <div className=' flex md:flex-col flex-row md:p-1 md:gap-0 gap-8 md:ml-6 '>
       
        </div>
      </div>
      <div className=" min-h-[100px]  md:col-span-5 flex justify-start items-start text-center text-white">
      <div className="w-full flex justify-center md:justify-start items-start p-4 md:ml-20 ml-4">
      <button className="glitter-button p-4 w-full md:w-2/4 rounded-2xl text-black bg-gradient-to-r from-[rgb(157,255,101)] to-[#95f527] bg-[length:200%_300%] bg-right animate-gradient-flow text-center font-bold relative overflow-hidden">
  <span>Hover me</span>
</button>


</div>
      </div>
    </div>
  );
};

export default Hero;