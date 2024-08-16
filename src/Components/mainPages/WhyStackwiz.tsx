import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Card1 from '../../../public/shield-hover.svg';
import Card2 from '../../../public/ai-engine-hover.svg';
import Card3 from '../../../public/founded-by-hover.svg';
import Card4 from '../../../public/unbase-imp-hover.svg';
import Card5 from '../../../public/hit-target-hover.svg';
import Card6 from '../../../public/crores-green.svg';

const cardsData = [
  { title: 'We are SEBI', description: 'Registered Experts', image: Card1 },
  { title: 'AI-Engine', description: 'Powered by the most powerful A.I trading tools', image: Card2 },
  { title: '10,000+', description: 'Active Pro Traders & Investors', image: Card3 },
  { title: 'Daily LiveTrading ', description: 'Stream live with pro traders, everyday', image: Card4 },
  { title: 'Verified P&L', description: 'Shared everyday with verified trade executions', image: Card5 },
  { title: '125+ Crores', description: 'Daily community wide trading turnover', image: Card6 },
];
// cardsData[0].title
const Testimonial: React.FC = () => {
    const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

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
    <section className="bg-black pt-11 pb-20">
      <div className="container flex flex-col items-center mb-10 mx-auto space-y-6 md:p-2">
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-6 text-2xl font-semibold flex text-center sm:font-bold sm:text-3xl md:text-7xl lg:max-w-2xl xl:max-w-4xl text-white"
        >
          Why
          <motion.span
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-gradient-to-r from-lime-500 to-blue-500 bg-clip-text text-transparent px-6 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-7xl lg:max-w-2xl xl:max-w-4xl"
          >
            Stockwiz?
          </motion.span>
        </motion.h4>
        
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-6 py-2 text-2xl font-semibold text-center sm:font-normal sm:text-3xl md:text-xl lg:max-w-2xl xl:max-w-4xl text-white/60"
        >
        </motion.p>
      </div>

      {/* AI-Engine Cards Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-14 xl:grid-cols-3 gap-x-10 gap-y-24">
            {cardsData.map((card, index) => (
              <motion.div
                key={index}
                className=" bg-slate-600/35 hover:border-[#56e842]  w-[350px] h-[350px]  justify-start border-white/5 border p-10 rounded-[40px] shadow-lg flex flex-col text-center transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              >
                <Image
                  src={card.image}
                  alt={`AI Engine Card ${index + 1}`}
                  className={`w-20 h-20 object-cover transition-all duration-500 ${hoveredCardIndex == index && '[transform-style:preserve-3d] [transform:rotateY(180deg)]'}`}
                />
                <h5 className="text-4xl flex font-bold  text-left pt-4 text-[#56e842]">{card.title}</h5>
                <p className=" text-white text-left flex text-2xl -mr-6 font-bold pt-3">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
