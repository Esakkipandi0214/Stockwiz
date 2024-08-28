// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { TypeAnimation } from 'react-type-animation';

// type DataItem = {
//   label: string;
//   value: string;
// };

// const dataItems: DataItem[] = [
//   { label: 'Traders and investors have transformed their lives with our platform.', value: '100K +' },
//   { label: 'India&apos;s fastest growing SEBI registered trading and investing platform.', value: '# 1' },
//   { label: 'Average user rating out of 5 on Quora, Google Play Store & Apple App Store.', value: '4.8 +' },
//   { label: 'Daily community wide trading turnover, growing at lightning fast speed.', value: '125+ Cr' }, // Assuming this is an icon or text
// ];

// const ExampleComponent = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.2,
//     rootMargin: '0px 0px -20% 0px',
//   });

//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0 });
//     } else {
//       controls.start({ opacity: 0, y: 50 });
//     }
//   }, [controls, inView]);

//   return (
//     <section className="bg-black pr-6 h-[490px]">
//       <div className="container flex flex-col items-center p-4 mb-20 mx-auto space-y-6 md:p-2">
//         <motion.h4
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={controls}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           className="px-6 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-7xl lg:max-w-2xl xl:max-w-6xl text-white"
//         >
//           Get Ready To Witness Retail
//         </motion.h4>
//         <motion.h3
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={controls}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           className="bg-gradient-to-r from-lime-500 flex to-teal-400 bg-clip-text text-transparent py-3 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl"
//         >
//           <TypeAnimation
//             sequence={[
//               'Trading Revolution',
//               1000,
//               '',
//               500,
//             ]}
//             wrapper="span"
//             speed={10}
//             style={{ fontSize: '2em', display: 'inline-block' }}
//             repeat={Infinity}
//           />
//           <div className="w-[6px] h-[55px] bg-gradient-to-b -ml-3 from-blue-500 to-teal-400 mr-2 inline-block" />
//         </motion.h3>
//         <motion.p
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={controls}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           className="px-6 py-2 text-2xl font-semibold text-center sm:font-normal sm:text-3xl md:text-xl lg:max-w-2xl xl:max-w-4xl text-white"
//         >
//         </motion.p>
//       </div>
//       {/* =========================== Content =========================== */}
//       <div className="w-full grid sm:grid-cols-4 grid-cols-2 gap-4 px-28">
//         {dataItems.map((item, index) => (
//           <div
//             key={index}
//             className="min-h-[100px] flex gap-3 flex-col w-[300px] justify-start items-start text-white text-center p-4 relative"
//           >
//             <p className="text-3xl  px-2 sm:text-5xl text-left font-bold">{item.value}</p>
//             <p className="text-base text-left text-white/50 sm:text-sm ">{item.label}</p>
//             {index < dataItems.length - 1 && (
//               <div className="absolute right-0 top-0 h-full w-[1px] bg-slate-400"></div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ExampleComponent;

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';

type DataItem = {
  label: string;
  value: string;
};

const dataItems: DataItem[] = [
  { label: 'Traders and investors have transformed their lives with our platform.', value: '100K +' },
  { label: 'India&apos;s fastest growing SEBI registered trading and investing platform.', value: '# 1' },
  { label: 'Average user rating out of 5 on Quora, Google Play Store & Apple App Store.', value: '4.8 +' },
  { label: 'Daily community wide trading turnover, growing at lightning fast speed.', value: '125+ Cr' },
];

const ExampleComponent = () => {
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
    <section className="bg-gradient-to-r from-black to-teal-900 px-4 py-6 md:px-6 md:py-12 lg:px-8 lg:py-16 h-auto">
      <div className="container flex flex-col items-center mx-auto space-y-6">
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-2xl font-semibold text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white px-4 sm:px-6 md:px-8 lg:px-12"
        >
          Get Ready To Witness Retail
        </motion.h4>
        <motion.h3
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent py-2 sm:py-3 sm:px-6 md:py-4 md:px-8 text-sm font-semibold text-center sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl flex items-center justify-center"
        >
          <TypeAnimation
            sequence={[
              'Trading Revolution',
              1000,
              '',
              500,
            ]}
            wrapper="span"
            speed={10}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-teal-400 ml-2 inline-block" />
        </motion.h3>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-semibold text-white px-4 sm:px-6 md:px-8 lg:px-12"
        >
          {/* Your content here */}
        </motion.p>
      </div>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {dataItems.map((item, index) => (
      <div
        key={index}
        className={`min-h-[100px] flex flex-col justify-start items-center sm:items-start text-white text-center p-4 relative ${index % 2 === 0 ? 'lg:pl-4' : ''}`}
      >
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{item.value}</p>
        <p className="text-sm sm:text-base md:text-lg text-white/50">{item.label}</p>
        {/* Hide vertical line on small devices */}
        {index < dataItems.length - 1 && (
          <div className={`absolute right-0 top-0 h-full w-[1px] bg-slate-400 ${index % 1 === 0 ? 'hidden lg:block' : ''}`}></div>
        )}
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default ExampleComponent;
