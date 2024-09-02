//  Testimonial;

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
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
    <section className="bg-gradient-to-r from-black to-blue-950 md:pt-20 md:pb-20 pb-1">
      <div className="container flex flex-col items-center md:mb-10 p-4 mx-auto space-y-6 md:p-2">
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-6 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-8xl lg:max-w-2xl xl:max-w-4xl text-white"
        >
          Top
          <motion.span
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent px-6 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-8xl lg:max-w-2xl xl:max-w-4xl"
          >
            Features
          </motion.span>
        </motion.h4>
      </div>

      <div className="container mx-auto p-6 lg:px-24 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>

        {/* ====================================First Section============================================== */}
        <div className="timeline-item flex flex-col lg:flex-row items-center my-10">
          <div className="timeline-content bg-black rounded-3xl py-10 lg:py-14 border border-slate-600 hover:border-green-500 text-center lg:text-left px-6 lg:px-10 text-white lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-6">World Class Education</h2>
            <p className="text-base md:text-lg lg:text-xl text-white/70 font-normal">
              Learn professional institutional trading from the absolute basics. Experience the world of smart money concepts.
            </p>
            <ul className="list-disc grid gap-2 md:gap-3 pl-5 text-left">
              <li className="text-base md:text-lg lg:text-lg">Learn 10+ institutional trading strategies.</li>
              <li className="text-base md:text-lg lg:text-lg">We teach equity, futures, options, commodities & forex trading.</li>
              <li className="text-base md:text-lg lg:text-lg">Attend weekly live webinars and interactive Q&A sessions.</li>
              <li className="text-base md:text-lg lg:text-lg">Course available in English & Hindi language.</li>
            </ul>
            <button
              type="button"
              className="glitter-button p-3 md:p-4 w-full md:w-2/4 rounded-2xl text-black bg-gradient-to-r from-[rgb(157,255,101)] to-[#95f527] bg-[length:200%_300%] bg-right animate-gradient-flow mt-4"
            >
              <Link
                className="text-lg font-semibold text-black hover:text-white"
                href="#"
              >
                Join Now
              </Link>
            </button>
          </div>
          <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-1/2">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/vd.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* ====================================Second Section============================================== */}
        <div className="timeline-item flex flex-col items-center my-10 lg:flex-row-reverse">
          <div className="timeline-content bg-black rounded-3xl py-10 lg:py-14 border border-slate-600 hover:border-green-500 text-center lg:text-left px-6 lg:px-20 text-white lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-6">
              Realtime Trading Signals & Alerts Indian Market
            </h2>
            <p className="text-base md:text-lg lg:text-lg text-white/70 font-normal">
              Get lightning fast trading & investing signals and callouts from SEBI registered trading experts.
            </p>
            <ul className="list-disc grid gap-2 md:gap-3 pl-5 text-left">
              <li className="text-base md:text-lg lg:text-base">Live signals for intraday, swing, and positional trading.</li>
              <li className="text-base md:text-lg lg:text-base">We cover the cash, futures & options, and commodities market.</li>
              <li className="text-base md:text-lg lg:text-base">75%+ accuracy with an average reward to risk ratio of 2.5x.</li>
              <li className="text-base md:text-lg lg:text-base">12%+ average monthly returns generated since inception.</li>
            </ul>
            <p className="text-base md:text-lg lg:text-lg text-white/70 font-normal mt-4 lg:mt-6">
              Past performance is not indicative of future performance. Returns are not guaranteed; they can change with market conditions.
            </p>
            <button
              type="button"
              className="glitter-button p-3 md:p-4 w-full md:w-2/4 mt-4 rounded-2xl text-black bg-gradient-to-r from-[rgb(157,255,101)] to-[#95f527] bg-[length:200%_300%] bg-right animate-gradient-flow"
            >
              <Link
                className="text-lg font-semibold text-black hover:text-white"
                href="#"
              >
                Join Now
              </Link>
            </button>
          </div>
          <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-1/2">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/vdo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* ====================================Third Section============================================== */}
        <div className="timeline-item flex flex-col lg:flex-row items-center my-10">
          <div className="timeline-content bg-black rounded-3xl py-10 lg:py-14 border border-slate-600 hover:border-green-500 text-center lg:text-left px-6 lg:px-10 text-white lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-5xl mb-6 font-semibold">
              Live Trading Everyday
            </h2>
            <p className="text-base md:text-lg lg:text-lg text-white/70 font-normal">
              Trade live with professional traders in stocks, indices & commodities.
            </p>
            <ul className="list-disc grid gap-2 md:gap-3 pl-5 text-left">
              <li className="text-base md:text-lg lg:text-base">Live trading via screen sharing with our research analysts.</li>
              <li className="text-base md:text-lg lg:text-base">Ask your stock-related queries in real-time with professional traders.</li>
              <li className="text-base md:text-lg lg:text-base">Apply institutional trading strategies LIVE with SEBI Registered Experts.</li>
              <li className="text-base md:text-lg lg:text-base">Daily live trading from 10am - 3pm.</li>
            </ul>
            <button
              type="button"
              className="glitter-button p-3 md:p-4 w-full mt-4 md:w-2/4 rounded-2xl text-black bg-gradient-to-r from-[rgb(157,255,101)] to-[#95f527] bg-[length:200%_300%] bg-right animate-gradient-flow"
            >
              <Link
                className="text-lg font-semibold text-black hover:text-white"
                href="#"
              >
                Join Now
              </Link>
            </button>
          </div>
          <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-1/2">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* ====================================Fourth Section (Timeline Effect)============================================== */}
        <div className="timeline-item flex flex-col lg:flex-row items-center my-10">
          <div className="timeline-content bg-black rounded-3xl py-10 lg:py-14 border border-slate-600 hover:border-green-500 text-center lg:text-left px-6 lg:px-20 text-white lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-5xl mb-6 font-semibold">
              Collaborate & Network<br />With India&apos;s Top Traders
            </h2>
            <p className="text-base md:text-lg lg:text-lg text-white/70 font-normal md:mb-3">
              Become a part of India&apos;s Largest SEBI Registered Trading Community with 5,000+ Professional Traders.
            </p>
            <ul className="list-disc grid gap-2 md:gap-3 pl-5 text-left">
              <li className="text-base md:text-lg lg:text-base">Network with the top 1% traders & investors in India.</li>
              <li className="text-base md:text-lg lg:text-base">Explore new and innovative trading styles.</li>
              <li className="text-base md:text-lg lg:text-base">Access daily watchlist, screeners, and scanners.</li>
              <li className="text-base md:text-lg lg:text-base">Interact with industry experts to improve your performance.</li>
            </ul>
            <button
              type="button"
              className="glitter-button p-3 md:p-4 w-full mt-4 md:w-2/4 rounded-2xl text-black bg-gradient-to-r from-[rgb(157,255,101)] to-[#95f527] bg-[length:200%_300%] bg-right animate-gradient-flow"
            >
              <Link
                className="text-lg font-semibold text-black hover:text-white"
                href="#"
              >
                Join Now
              </Link>
            </button>
          </div>
          <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-1/2">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/colb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* ====================================Fifth Section (Timeline Effect)============================================== */}
        <div className="timeline-item flex flex-col lg:flex-row-reverse items-center my-10">
          <div className="timeline-content bg-black rounded-3xl py-10 lg:py-14 border border-slate-600 hover:border-green-500 text-center lg:text-left px-6 lg:px-20 text-white lg:w-1/2">
            <h2 className="text-2xl mb-6 md:text-3xl lg:text-5xl font-semibold">
              A.I Powered Fully<br />Automatic Trading
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/70 font-normal md:mb-4">
              Unleash the power of artificial intelligence in stock trading & investing.
            </p>
            <ul className="list-disc grid gap-2 md:gap-3 pl-5 text-left">
              <li className="text-base md:text-lg lg:text-base">Smart position size calculator.</li>
              <li className="text-base md:text-lg lg:text-base">AI powered news & market updates.</li>
              <li className="text-base md:text-lg lg:text-base">Fully automated trading.</li>
              <li className="text-base md:text-lg lg:text-base">Powerful insights on trading & investing performance.</li>
            </ul>
            <button
              type="button"
              className="glitter-button p-3 md:p-4 w-full mt-4 md:w-2/4 rounded-2xl text-black bg-gradient-to-r from-[rgb(157,255,101)] to-[#95f527] bg-[length:200%_300%] bg-right animate-gradient-flow"
            >
              <Link
                className="text-lg font-semibold text-black hover:text-white"
                href="#"
              >
                Join Now
              </Link>
            </button>
          </div>
          <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-1/2">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/ai_powered.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
