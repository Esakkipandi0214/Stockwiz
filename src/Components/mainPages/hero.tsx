// components/Hero.tsx

import React from 'react';
import Link from 'next/link';
import Mobile1 from '../../../public/mobile1.png'
import Mobile2 from '../../../public/mobile2.png'
import Base from '../../../public/base.png'
import Image from 'next/image';
import { motion } from 'framer-motion';

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
  return (
    <div className="w-full p-4 md:p-12 lg:grid lg:gap-4 lg:grid-cols-12 grid-cols-1 bg-gradient-to-r from-black to-green-800">
       <div className="lg:col-span-5 flex justify-center lg:justify-start items-center text-center lg:text-left text-white">
        <div className="flex flex-col gap-4 lg:gap-6">
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
      </div>
      <div className="min-h-[100px] md:row-span-3  md:col-span-7 md:flex hidden items-center justify-center text-center text-white">
    <div className="w-full md:ml-20 flex flex-col gap-2">
      <div className="relative md:-translate-x-16">
        <motion.div {...hangingAnimationLeft} className="relative md:ml-14 md:translate-y-8">
          <Image src={Mobile1} width={300} height={200} alt="" />
        </motion.div>
        <motion.div {...hangingAnimationRight} className="absolute md:top-1 md:right-44 md:-translate-y-11">
          <Image src={Mobile2} width={400} height={400} alt="" />
        </motion.div>
      </div>
      <Image src={Base} className="md:translate-y-28 md:-ml-28" width={650} height={500} alt="" />
    </div>
  </div>
  <div className="lg:col-span-7 flex items-center md:hidden justify-center text-center text-white">
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
      </div>
      <div className=" min-h-[100px] md:col-span-5 md:ml-9 flex-col gap-10  md:flex-col md:gap-3 flex justify-start text-white">
      <div className="flex flex-col gap-1 lg:gap-2 text-center lg:text-left">
          <p className="text-lg">Unlock the secrets of the top 1% professional institutional</p>
          <p className="text-lg">traders with Super Trader Program. Get unlimited access</p>
          <p className="text-lg">to powerful institutional trading ideas</p>
        </div>
        <div className=' flex md:flex-col flex-row md:p-1 md:gap-0 gap-8 md:ml-6 '>
         <span className=' flex text-center flex-col md:flex-row justify-center md:justify-start items-center md:items-center'>
        <Link href="#" aria-label="Back to homepage" className="flex items-center">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_5447_2309)">
<circle cx="28" cy="28" r="12" fill="url(#paint0_linear_5447_2309)"/>
</g>
<path d="M32.7611 28.1116C32.704 28.0532 32.6358 28.0067 32.5606 27.975C32.4854 27.9432 32.4046 27.9267 32.3229 27.9265C32.2412 27.9263 32.1603 27.9423 32.0849 27.9737C32.0095 28.005 31.9411 28.0511 31.8837 28.1092C31.8263 28.1672 31.781 28.2361 31.7504 28.3119C31.7199 28.3876 31.7048 28.4687 31.7059 28.5504C31.707 28.632 31.7244 28.7126 31.757 28.7875C31.7896 28.8624 31.8367 28.93 31.8958 28.9865C32.4178 29.5003 32.8321 30.1131 33.1141 30.7891C33.3961 31.4651 33.5403 32.1906 33.5381 32.9231C33.5381 33.6758 31.3807 34.7693 27.9997 34.7693C24.6187 34.7693 22.4613 33.6752 22.4613 32.9219C22.4592 32.1944 22.6014 31.4738 22.8797 30.8017C23.1581 30.1296 23.5669 29.5194 24.0827 29.0064C24.141 28.9495 24.1875 28.8816 24.2194 28.8066C24.2512 28.7317 24.2679 28.6511 24.2685 28.5697C24.269 28.4882 24.2533 28.4074 24.2224 28.3321C24.1914 28.2567 24.1458 28.1882 24.0882 28.1306C24.0306 28.073 23.9621 28.0274 23.8868 27.9965C23.8114 27.9655 23.7306 27.9499 23.6492 27.9504C23.5677 27.9509 23.4872 27.9676 23.4122 27.9995C23.3372 28.0314 23.2693 28.0778 23.2125 28.1362C22.582 28.7634 22.0821 29.5094 21.7419 30.3311C21.4017 31.1528 21.2279 32.0338 21.2305 32.9231C21.2305 34.9216 24.7179 36 27.9997 36C31.2815 36 34.7689 34.9216 34.7689 32.9231C34.7716 32.0278 34.5954 31.1409 34.2506 30.3147C33.9059 29.4884 33.3994 28.7394 32.7611 28.1116Z" fill="white"/>
<path d="M27.9991 28.6154C28.8511 28.6154 29.6839 28.3627 30.3923 27.8894C31.1007 27.416 31.6528 26.7433 31.9789 25.9562C32.3049 25.169 32.3902 24.3029 32.224 23.4673C32.0578 22.6317 31.6475 21.8641 31.0451 21.2617C30.4426 20.6593 29.6751 20.249 28.8395 20.0828C28.0039 19.9166 27.1377 20.0019 26.3506 20.3279C25.5635 20.6539 24.8907 21.2061 24.4174 21.9145C23.944 22.6229 23.6914 23.4557 23.6914 24.3077C23.6927 25.4497 24.147 26.5446 24.9546 27.3522C25.7621 28.1598 26.857 28.614 27.9991 28.6154ZM27.9991 21.2308C28.6076 21.2308 29.2025 21.4112 29.7085 21.7493C30.2145 22.0874 30.6089 22.568 30.8418 23.1302C31.0747 23.6924 31.1356 24.3111 31.0169 24.908C30.8981 25.5048 30.6051 26.0531 30.1748 26.4834C29.7445 26.9137 29.1962 27.2067 28.5994 27.3255C28.0025 27.4442 27.3838 27.3833 26.8216 27.1504C26.2594 26.9175 25.7788 26.5231 25.4407 26.0171C25.1026 25.5111 24.9222 24.9162 24.9222 24.3077C24.9231 23.4919 25.2476 22.7099 25.8244 22.133C26.4013 21.5562 27.1833 21.2317 27.9991 21.2308Z" fill="white"/>
<defs>
<filter id="filter0_f_5447_2309" x="0.7" y="0.7" width="54.6" height="54.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="7.65" result="effect1_foregroundBlur_5447_2309"/>
</filter>
<linearGradient id="paint0_linear_5447_2309" x1="41.5" y1="14.5" x2="13" y2="41.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#49D3FF"/>
<stop offset="0.781126" stop-color="#AD00FF"/>
</linearGradient>
</defs>
</svg> 
         </Link>
         <p className=' text-lg font-semibold'>Trade Like Professional Traders</p>
         </span>
         <span className=' flex text-center flex-col justify-center md:flex-row md:justify-start items-center md:items-center'>
        <Link href="#" aria-label="Back to homepage" className="flex items-center">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_5447_2316)">
<circle cx="28" cy="28" r="12" fill="url(#paint0_linear_5447_2316)"/>
</g>
<path d="M25.375 24.3753V23.7344C25.375 23.4323 25.1302 23.1875 24.8281 23.1875C24.5261 23.1875 24.2812 23.4323 24.2812 23.7344V24.3753C23.6447 24.6011 23.1875 25.2089 23.1875 25.9219V28.9844C23.1875 29.6973 23.6447 30.3052 24.2812 30.5309V31.1719C24.2812 31.4739 24.5261 31.7188 24.8281 31.7188C25.1302 31.7188 25.375 31.4739 25.375 31.1719V30.5309C26.0115 30.3052 26.4688 29.6973 26.4688 28.9844V25.9219C26.4688 25.2089 26.0115 24.6011 25.375 24.3753ZM25.375 28.9844C25.375 29.2859 25.1297 29.5312 24.8281 29.5312C24.5266 29.5312 24.2812 29.2859 24.2812 28.9844V25.9219C24.2812 25.6203 24.5266 25.375 24.8281 25.375C25.1297 25.375 25.375 25.6203 25.375 25.9219V28.9844Z" fill="white"/>
<path d="M29.6406 26.5628V25.9219C29.6406 25.6198 29.3958 25.375 29.0938 25.375C28.7917 25.375 28.5469 25.6198 28.5469 25.9219V26.5628C27.9104 26.7886 27.4531 27.3964 27.4531 28.1094V30.0781C27.4531 30.7911 27.9104 31.3989 28.5469 31.6247V32.2656C28.5469 32.5677 28.7917 32.8125 29.0938 32.8125C29.3958 32.8125 29.6406 32.5677 29.6406 32.2656V31.6247C30.2771 31.3989 30.7344 30.7911 30.7344 30.0781V28.1094C30.7344 27.3964 30.2771 26.7886 29.6406 26.5628ZM29.6406 30.0781C29.6406 30.3797 29.3953 30.625 29.0938 30.625C28.7922 30.625 28.5469 30.3797 28.5469 30.0781V28.1094C28.5469 27.8078 28.7922 27.5625 29.0938 27.5625C29.3953 27.5625 29.6406 27.8078 29.6406 28.1094V30.0781Z" fill="white"/>
<path d="M33.9062 22.1878V21.5469C33.9062 21.2448 33.6614 21 33.3594 21C33.0573 21 32.8125 21.2448 32.8125 21.5469V22.1878C32.176 22.4136 31.7188 23.0214 31.7188 23.7344V27.8906C31.7188 28.6036 32.176 29.2114 32.8125 29.4372V30.0781C32.8125 30.3802 33.0573 30.625 33.3594 30.625C33.6614 30.625 33.9062 30.3802 33.9062 30.0781V29.4372C34.5428 29.2114 35 28.6036 35 27.8906V23.7344C35 23.0214 34.5428 22.4136 33.9062 22.1878ZM33.9062 27.8906C33.9062 28.1922 33.6609 28.4375 33.3594 28.4375C33.0578 28.4375 32.8125 28.1922 32.8125 27.8906V23.7344C32.8125 23.4328 33.0578 23.1875 33.3594 23.1875C33.6609 23.1875 33.9062 23.4328 33.9062 23.7344V27.8906Z" fill="white"/>
<path d="M34.4531 35H23.7344C22.2266 35 21 33.7734 21 32.2656V21.5469C21 21.2448 21.2448 21 21.5469 21C21.8489 21 22.0938 21.2448 22.0938 21.5469V32.2656C22.0938 33.1703 22.8297 33.9062 23.7344 33.9062H34.4531C34.7552 33.9062 35 34.1511 35 34.4531C35 34.7552 34.7552 35 34.4531 35Z" fill="white"/>
<defs>
<filter id="filter0_f_5447_2316" x="0.7" y="0.7" width="54.6" height="54.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="7.65" result="effect1_foregroundBlur_5447_2316"/>
</filter>
<linearGradient id="paint0_linear_5447_2316" x1="41.5" y1="14.5" x2="19.5" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#52FF00"/>
<stop offset="1" stop-color="#0057FF"/>
</linearGradient>
</defs>
</svg>
         </Link>
         <p className=' text-lg font-semibold'>75%+ Trade Accuracy</p>
         </span>
         <span className=' flex text-center flex-col justify-center items-center md:justify-start md:flex-row  md:items-center'>
        <Link href="#" aria-label="Back to homepage" className="flex items-center">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_5447_2327)">
<circle cx="28" cy="28" r="12" fill="url(#paint0_linear_5447_2327)"/>
</g>
<path d="M34.1875 19.793H32.4258V19.0625C32.4258 18.7065 32.1372 18.418 31.7812 18.418H29.9281C29.6714 17.5972 28.9041 17 28 17C27.0942 17 26.3258 17.5994 26.0706 18.4224C23.5882 18.4165 24.3783 18.418 24.2188 18.418C23.8635 18.418 23.5742 18.7061 23.5742 19.0625V19.793H21.8125C20.6989 19.793 19.793 20.6989 19.793 21.8125V36.9805C19.793 38.094 20.6989 39 21.8125 39H34.1875C35.3011 39 36.207 38.094 36.207 36.9805V21.8125C36.207 20.6989 35.3011 19.793 34.1875 19.793ZM24.8633 19.7086L26.6235 19.7128C26.9734 19.7142 27.2695 19.4304 27.2695 19.0683V19.0195C27.2695 18.6167 27.5972 18.2891 28 18.2891C28.4028 18.2891 28.7305 18.6167 28.7305 19.0195V19.0625C28.7305 19.4185 29.019 19.707 29.375 19.707H31.1367V21.168H24.8633V19.7086ZM34.918 36.9805C34.918 37.3833 34.5903 37.7109 34.1875 37.7109H21.8125C21.4097 37.7109 21.082 37.3833 21.082 36.9805V21.8125C21.082 21.4097 21.4097 21.082 21.8125 21.082H23.5742V21.8125C23.5742 22.1685 23.8628 22.457 24.2188 22.457H31.7812C32.1372 22.457 32.4258 22.1685 32.4258 21.8125V21.082H34.1875C34.5903 21.082 34.918 21.4097 34.918 21.8125V36.9805Z" fill="white"/>
<path d="M32.5807 32.3568C32.3291 32.1051 31.921 32.1051 31.6693 32.3568L31.0938 32.9322L30.5182 32.3567C30.2666 32.1051 29.8585 32.1051 29.6068 32.3567C29.355 32.6084 29.355 33.0165 29.6068 33.2682L30.1823 33.8437L29.6068 34.4193C29.355 34.6709 29.355 35.079 29.6068 35.3308C29.8585 35.5825 30.2665 35.5825 30.5182 35.3308L31.0938 34.7552L31.6693 35.3308C31.921 35.5825 32.3291 35.5825 32.5808 35.3308C32.8325 35.0791 32.8325 34.671 32.5808 34.4193L32.0053 33.8437L32.5808 33.2682C32.8325 33.0165 32.8325 32.6084 32.5807 32.3568Z" fill="white"/>
<path d="M31.5495 24.1067C31.2978 23.8551 30.8897 23.8551 30.638 24.1067L29.263 25.4817C29.0113 25.7334 29.0113 26.1415 29.263 26.3932C29.5146 26.6449 29.9228 26.6449 30.1745 26.3932L30.4492 26.1185V26.2812C30.4492 28.1038 29.2631 28.7951 27.7614 29.6703C26.9416 30.1481 26.0939 30.6421 25.4295 31.3697C24.6437 32.2303 24.2617 33.2644 24.2617 34.5312V34.8749C24.2617 35.2309 24.5503 35.5195 24.9062 35.5195C25.2622 35.5195 25.5508 35.2309 25.5508 34.8749V34.5312C25.5508 32.4507 26.876 31.6783 28.4105 30.784C29.9703 29.8749 31.7383 28.8445 31.7383 26.2812V26.1185L32.013 26.3932C32.2647 26.645 32.6728 26.6449 32.9245 26.3932C33.1762 26.1415 33.1762 25.7334 32.9245 25.4817L31.5495 24.1067Z" fill="white"/>
<path d="M26.9258 26.2812C26.9258 25.1677 26.0198 24.2617 24.9062 24.2617C23.7927 24.2617 22.8867 25.1677 22.8867 26.2812C22.8867 27.3948 23.7927 28.3008 24.9062 28.3008C26.0198 28.3008 26.9258 27.3948 26.9258 26.2812ZM24.1758 26.2812C24.1758 25.8785 24.5035 25.5508 24.9062 25.5508C25.309 25.5508 25.6367 25.8785 25.6367 26.2812C25.6367 26.684 25.309 27.0117 24.9062 27.0117C24.5035 27.0117 24.1758 26.684 24.1758 26.2812Z" fill="white"/>
<defs>
<filter id="filter0_f_5447_2327" x="0.7" y="0.7" width="54.6" height="54.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="7.65" result="effect1_foregroundBlur_5447_2327"/>
</filter>
<linearGradient id="paint0_linear_5447_2327" x1="41.5" y1="14.5" x2="19.5" y2="40" gradientUnits="userSpaceOnUse">
<stop offset="0.095" stop-color="#7000FF"/>
<stop offset="0.34" stop-color="#A233C4"/>
<stop offset="0.83422" stop-color="#FF9255"/>
</linearGradient>
</defs>
</svg>
         </Link>
         <p className=' text-lg font-semibold'>10+ Trading Stratagies</p>
         </span>
        </div>
      </div>
      <div className=" min-h-[100px]  md:col-span-5 flex justify-start items-start text-center text-white">
        <div className=' w-full md:ml-20 ml-20 items-start flex'>
        <button
  type="button"
  className=" p-4 w-2/4 rounded-2xl bg-gradient-to-r from-[rgb(157,255,101)] to-[#95f527] bg-[length:200%_300%] bg-right animate-gradient-flow"
>
  Hover me
</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
