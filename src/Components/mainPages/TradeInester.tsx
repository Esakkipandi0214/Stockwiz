import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Image1 from '../../../public/connect_with_professional_traders.png';
import Image2 from '../../../public/build_strong_network_connections.jpg';
import Image3 from '../../../public/explore_multi_assets_trading.png';
import Image4 from '../../../public/aI_generated.png';
import Link from 'next/link';
import TradeResponsive from './TradeInvesterResponsive'

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
    <section className="bg-black pr-6 pb-20">
      <div className="container flex flex-col items-center p-4 mb-20 mx-auto space-y-6 sm:p-6 md:p-8 lg:p-10">
  <motion.h4
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={controls}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:max-w-2xl xl:max-w-4xl text-white px-4 sm:px-6 md:px-8"
  >
    Join India&apos;s Smartest
  </motion.h4>
  <motion.h3
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={controls}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl lg:max-w-2xl xl:max-w-4xl px-4 sm:px-6 md:px-8"
  >
    Traders & Investors
  </motion.h3>
  <motion.p
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={controls}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="text-base font-semibold text-center sm:font-normal sm:text-xl md:text-xl lg:text-4xl xl:text-2xl lg:max-w-2xl xl:max-w-4xl px-4 sm:px-6 md:px-8 py-2 text-white/80"
  >
    &quot;We&apos;ve transformed trading and investing into a community experience. Join us to trade, learn, and connect with traders across India.&quot;
  </motion.p>
</div>

{/* ------------------------------------------------------------------------==================================-------------------- */}
<div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:justify-items-center bg-white/5 rounded-3xl py-16 my-20 mx-24 border border-slate-600/35 text-center lg:text-left text-white">

  {/* <!-- Card 1 --> */}
  <div className="max-w-sm bg-black border -translate-x-11 z-10 border-white/15 rounded-3xl shadow flex flex-col hover:border-blue-500 items-center justify-evenly">
    <a href="#" className="p-4">
      <Image
        className="rounded-t-lg"
        src={Image1}
        alt="Connect with Professional Traders"
        width={500}
        height={500}
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-white">
          Connect With Professional Traders & Investors
        </h5>
      </a>
      <p className="mb-3 font-normal mr-7 text-white/60">
        Our exclusive voice chat and live stream technology enables you to share, discuss, and execute trades in real-time with other traders.
      </p>
    </div>
  </div>

  {/* <!-- Card 2 --> */}
  <div className="max-w-sm bg-black border z-30 -translate-y-10 hover:border-blue-500 border-white/15 rounded-3xl shadow flex flex-col items-center justify-evenly">
    <a href="#" className="p-4">
      <Image
        className="rounded-t-lg"
        src={Image3}
        alt="Explore Multi-Assets Trading"
        width={500}
        height={500}
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-white">
          Explore Multi Asset Trading & Investing
        </h5>
      </a>
      <p className="mb-3 font-normal mr-7 text-white/60">
        We trade & invest in global assets ranging from Indian & American equities to commodities like gold and silver.
      </p>
    </div>
  </div>

  {/* <!-- Card 3 --> */}
  <div className="max-w-sm bg-black border z-10 hover:border-blue-500 border-white/15 rounded-3xl shadow flex flex-col items-center justify-evenly">
    <a href="#" className="p-4">
      <video width="400" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
        <source src="/SEBI_Registered.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-white">
          SEBI Registered Research & Advisory
        </h5>
      </a>
      <p className="mb-3 mr-7 font-normal text-white/60">
        Get powerful and actionable research and insights from SEBI registered experts to help you ace the markets.
      </p>
    </div>
  </div>

  {/* <!-- Card 4 --> */}
  <div className="max-w-sm bg-black border translate-x-7 z-30 hover:border-blue-500 border-white/15 rounded-3xl shadow flex flex-col items-center justify-evenly">
    <a href="#" className="p-4">
      <Image
        className="rounded-t-lg"
        src={Image4}
        alt="AI-Generated Insights"
        width={500}
        height={500}
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-white">
          A.I Generated News & Market Updates
        </h5>
      </a>
      <p className="mb-3 font-normal mr-7 text-white/60">
        Get access to institution-grade news catalysts that have the power to generate big moves in the market.
      </p>
    </div>
  </div>

  {/* <!-- Card 5 --> */}
  <div className="max-w-sm bg-black z-20 border translate-y-1/3 hover:border-blue-500 absolute border-white/15 rounded-3xl shadow flex flex-col items-center justify-evenly">
    <a href="#" className="p-4">
      <Image
        className="rounded-t-lg"
        src={Image2}
        alt="Build Strong Network Connections"
        width={500}
        height={500}
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-white">
          Build A Strong Network & Connections
        </h5>
      </a>
      <p className="mb-3 font-normal text-white/60">
        Our community members come from various domains such as business, law, finance, technology, sports, and investment banking.
      </p>
    </div>
  </div>

</div>
<TradeResponsive/>

    {/* ====================================-------------------------------------------====================================== */}
    <div className="grid justify-center items-center gap-10 px-4 sm:px-6 md:px-8 lg:px-16">
  <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-center text-white font-medium">
    We are India&apos;s Largest SEBI registered trading community.<br/>
    We help everyone become Super Traders.
  </p>
  <button
    type="button"
    className="p-4 w-full max-w-md rounded-2xl mx-auto bg-gradient-to-r from-[rgb(157,255,101)] text-black hover:text-white to-[#95f527] bg-[length:200%_300%] bg-right animate-gradient-flow"
  >
    <Link className="text-lg font-semibold text-black hover:text-white" href="#">
      Join Now
    </Link>
  </button>
</div>


    </section>
  );
};

export default Testimonial;
