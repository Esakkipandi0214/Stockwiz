import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLightbulb, FaHandshake, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { FaRobot, FaSignal, FaCoins } from 'react-icons/fa';
import Image from 'next/image';
import { TextGenerateEffect } from "../../Components/UI/text-generate-effect";
import { HeroHighlight, Highlight } from "../../Components/UI/hero-highlight";
import { Meteors } from "../../Components/UI/meteors";
import { CardSpotlight } from "../../Components/UI/card-spotlight";
import { Button } from "../../Components/UI/moving-border";
import { StickyScroll } from "../../Components/UI/sticky-scroll-reveal"
import { WobbleCard } from "../../Components/UI/wobble-card";

// Define an interface for the IconWithGlow component's props
interface IconWithGlowProps {
  Icon: React.ElementType;
  color: string;
}

// IconWithGlow Component
const IconWithGlow: React.FC<IconWithGlowProps> = ({ Icon, color }) => (
  <div
    className="flex items-center justify-center h-12 w-12 rounded-full text-white"
    style={{
      background: `radial-gradient(circle at 50% 50%, ${color}50, transparent 60%)`,
      boxShadow: `0 0 15px ${color}, 0 0 30px ${color}`,
    }}
  >
    <Icon size={24} style={{ color }} />
  </div>
);

const content = [
  {
    title: (
      <div className="flex items-center space-x-3">
        <IconWithGlow Icon={FaLightbulb} color="#ffffff" />
        <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Innovation
        </h3>
      </div>
    ),
    description: (
      <div className="text-xl text-gray-400 mt-4">
        <p>
          We are committed to revolutionize the financial markets by creating and developing innovative products and services to empower retail traders.
          Technology & research are two building blocks of our innovation efforts and we aim to develop, implement and execute every possible solution to stay ahead of the curve and empower our users to achieve their financial goals.
        </p>
      </div>
    ),
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-5">
        <IconWithGlow Icon={FaLightbulb} color="#ffffff" />
        <p className="text-white text-lg mt-2">Innovation</p>
      </div>
    ),
  },
  {
    title: (
      <div className="flex items-center space-x-3">
        <IconWithGlow Icon={FaHandshake} color="#ffffff" />
        <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Partnership
        </h3>
      </div>
    ),
    description: (
      <div className="text-xl text-gray-400 mt-4">
        <p>
          We are a platform built for traders, by traders and hence, traders mean everything to us. We proactively listen and take feedback from our clients to build a better product every day by collaborating with the finest partners in the world, ensuring a world-class experience. Your success is our success, and we are proud to be your trusted wealth partner in your journey to achieve financial freedom.
        </p>
      </div>
    ),
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-5">
        <IconWithGlow Icon={FaHandshake} color="#ffffff" />
        <p className="text-white text-lg mt-2">Partnership</p>
      </div>
    ),
  },
  {
    title: (
      <div className="flex items-center space-x-3">
        <IconWithGlow Icon={FaShieldAlt} color="#ffffff" />
        <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Transparency
        </h3>
      </div>
    ),
    description: (
      <div className="text-xl text-gray-400 mt-4">
        <p>
          We place trust as the fundamental value of all our relationships, and at Stockwiz we are committed to delivering the highest levels of transparency in all our operations, ensuring that our clients are well informed about our services, fees, policies and past performance.
        </p>
      </div>
    ),
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] p-5">
        <IconWithGlow Icon={FaShieldAlt} color="#ffffff" />
        <p className="text-white text-lg mt-2">Transparency</p>
      </div>
    ),
  },
  {
    title: (
      <div className="flex items-center space-x-3">
        <IconWithGlow Icon={FaChartLine} color="#ffffff" />
        <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Growth
        </h3>
      </div>
    ),
    description: (
      <div className="text-xl text-gray-400 mt-4">
        <p>
          We are disruptors and we are here to create, build and start the biggest retail trading revolution in the history of financial markets. Stockwiz is and will be synonymous with growth for our clients, partners, investors, and all our community members. We believe in fast-paced sustainable growth, inculcating a culture of trust, reliability, and consistency in our entire ecosystem.
        </p>
      </div>
    ),
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-5">
        <IconWithGlow Icon={FaChartLine} color="#ffffff" />
        <p className="text-white text-lg mt-2">Growth</p>
      </div>
    ),
  },
];


const AboutUs = () => {
  const { ref: disruptingRef, inView: disruptingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const disruptingControls = useAnimation();
  if (disruptingInView) {
    disruptingControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    });
  }

  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const missionControls = useAnimation();
  if (missionInView) {
    missionControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    });
  }

  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const valuesControls = useAnimation();
  if (valuesInView) {
    valuesControls.start({
      opacity: 1,
      transition: { duration: 1 },
    });
  }
  // const words = ` Welcome to Zentra Wealth,
  //        Our smart AI trading robots and expert signals for Crypto, US stocks, and Indian stocks  guide you to better decisions.
  //        Plus, our fast and secure USDT transactions, with easy options like face-to-face deals and bank deposits.`;
  return (
    <div className="bg-gradient-to-r from-black to-blue-900 text-white p-4 sm:p-6 md:p-8">
      <div className="text-center pt-8 px-4 md:pt-12 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-8">
          About Us
        </h1>
        <span>
          {/* The text effect will go here */}
          {/* <TextGenerateEffect className="text-lg md:text-3xl mt-4 md:mt-7 mx-auto max-w-prose text-justify" words={words} /> */}
        </span>
      </div>



      <HeroHighlight className="mb-4 md:mb-16 pt-6 md:pt-8 pr-4 pl-4">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white dark:text-white max-w-4xl lg:max-w-7xl leading-relaxed lg:leading-snug text-center mx-auto px-2">
          Unlock smarter trading with  {" "}
          <Highlight className="text-black dark:text-white">
            AI-driven insights for Crypto, US, and Indian stocks. Secure USDT deals, hassle-free!</Highlight>
        </motion.h1>
      </HeroHighlight>


      {/* Disrupting Section */}
      <section ref={disruptingRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={disruptingControls}
        >
          <div className="container mx-auto">
            <h2 className="p-4 md:p-20 text-center text-4xl md:text-5xl font-bold mb-7">
              <span className="block text-3xl md:text-6xl font-bold text-transparent bg-clip-text text-white mb-4 md:mb-8">We Are</span>
              <span className="block text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4 md:mb-8">Disrupting</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
              <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className=""
              >
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    <span className="text-white">1.</span> Financial Market Education
                  </h2>
                  <p className="text-gray-300">
                    We aim to become India #1 trading, investing, and personal finance education platform by
                    providing our users with institutional professional grade courses, workshops, and seminars.
                  </p>
                </div>
                {/* <Image
                  src="/linear.webp"
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                /> */}
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  <span className="text-white">2.</span> Research & Advisory
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">

                  Through our discretionary and quantitative proprietary trading and investing strategies, models, and methods,
                  we aim to provide our users with powerful research and insights assisting them in their wealth creation journey.
                </p>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                  <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    <span className="text-white">3.</span>
                    Technology
                  </h2>
                  <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    We strive to be the fastest trading platform in the country powered by partnerships with India top brokers,
                    financial institutions, and data vendors to enhance the trading and investing experience of all our users.
                    Our mission is to revolutionize retail trading through technology.
                  </p>
                </div>
                {/* <Image
                  src="/linear.webp"
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                /> */}
              </WobbleCard>
            </div>


            {/* Financial Market Education */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="lg:order-1">

                <CardSpotlight className="h-52 w-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                    <span className="text-white">1.</span> Financial Market Education
                  </h3>
                  <p className="text-gray-300">
                    We aim to become India #1 trading, investing, and personal finance education platform by
                    providing our users with institutional professional grade courses, workshops, and seminars.
                  </p>
                </CardSpotlight>

              </div>
            </div> */}

            {/* Research & Advisory */}

            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4">
              <div className="hidden lg:block"></div> 
              <div className="lg:order-2 lg:text-left">
                <CardSpotlight className="h-52 w-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                    <span className="text-white">2.</span> Research & Advisory
                  </h3>
                  <p className="text-gray-300">
                    Through our discretionary and quantitative proprietary trading and investing strategies, models, and methods,
                    we aim to provide our users with powerful research and insights assisting them in their wealth creation journey.
                  </p>
                </CardSpotlight>
              </div>
            </div> */}





            {/* Technology */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4 mb-7 md:mb-20">
              <div className="lg:order-1">
                <CardSpotlight className="h-60 w-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 ">
                    <span className="text-white">3.</span> <span className="text-2xl md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                      Technology</span>
                  </h3>
                  <p className="text-gray-300">
                    We strive to be the fastest trading platform in the country powered by partnerships with India top brokers,
                    financial institutions, and data vendors to enhance the trading and investing experience of all our users.
                    Our mission is to revolutionize retail trading through technology.
                  </p>

                </CardSpotlight>

              </div>
            </div> */}
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="text-center mb-16" ref={missionRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={missionControls}
          className="bg-gradient-to-r from-black to-violet-950 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between relative shadow-lg"
        >
          <div className="relative px-4 md:px-8 lg:px-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white mt-12 md:mt-16 tracking-wide text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                Our Mission
              </span>
              {' '}
              &
              {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                Vision
              </span>
            </h2>
            <div className="p-4 md:p-8 lg:p-12">
              <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-300 leading-relaxed text-center md:text-left">
                Our mission is to empower retail traders with world-class research,
                and a state-of-the-art technology stack that enables them to create
                generational wealth. We want to democratize stock trading and investing for everyone.
              </p>
              <p className="relative text-base md:text-lg lg:text-xl text-white z-10 text-center md:text-left">
                Our vision is to become India’s largest trading & investing platform, helping millions of users achieve financial freedom.
              </p>
            </div>
          </div>
          <div className="w-60 h-60 md:w-72 md:h-72 flex justify-center mt-8 md:mt-0 transform hover:scale-105 transition-transform duration-300">
            <Image
              src='/goal.png'
              alt="Target Icon"
              width={288}
              height={288}
              className="text-[#00e5ff] drop-shadow-lg"
            />
          </div>
        </motion.div>
      </section>
      {/* Values Section */}
      {/* <section className="text-center" ref={valuesRef}>*/}
      {/* <motion.div initial={{ opacity: 0 }} animate={valuesControls}>  */}
      <h2 className="text-5xl font-bold mt-6 mb-11 text-center">
        <span className="text-4xl md:text-6xl font-bold text-transparent text-white mb-8">Our</span>
        <span className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-pink-500 via-purple-500 to-blue-500 mb-8">  Values </span>
      </h2>

      <StickyScroll content={content} />

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
      {/*<motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-[#000000] rounded-lg p-6 relative overflow-hidden border-2 shadow-lg min-h-full"
              style={{
                borderColor: "#ffffff", // Matching the icon color
                borderRadius: "20px",
              }}
            >
               <div className="flex flex-col h-full text-left transform hover:scale-105 transition-transform">
                <div className="flex items-center">
                  <IconWithGlow Icon={FaLightbulb} color="#ffffff" />
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-pink-500 via-purple-500 to-blue-500 ml-3">
                    Innovation
                  </h3>
                </div>
                <p className="mt-4 text-gray-400">
                  We are committed to revolutionize the financial markets by creating and developing innovative products and services to empower retail traders.
                  Technology & research are two building blocks of our innovation efforts and we aim to develop, implement and execute every possible solution to stay ahead of the curve and empower our users to achieve their financial goals.
                </p>
              </div> 
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #00ff0050 0%, transparent 70%)",
                  zIndex: -1,
                  borderRadius: "20px",
                }}
              ></div>
            </motion.div>*/}

      {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-[#000000] rounded-lg p-6 relative overflow-hidden border-2 shadow-lg min-h-full"
              style={{
                borderColor: "#ffffff", // Matching the icon color
                borderRadius: "20px",
              }}
            >
              <div className="flex flex-col h-full text-left transform hover:scale-105 transition-transform">
                <div className="flex items-center">
                  <IconWithGlow Icon={FaShieldAlt} color="#ffffff" />
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-pink-500 via-purple-500 to-blue-500 ml-3">
                    Transparency
                  </h3>
                </div>
                <p className="mt-4 text-gray-400">
                  We place trust as the fundamental value of all our relationships, and at Stockwiz we are committed to delivering the highest levels of transparency in all our operations, ensuring that our clients are well informed about our services, fees, policies and past performance.
                </p>
              </div>
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #ff990050 0%, transparent 70%)",
                  zIndex: -1,
                  borderRadius: "20px",
                }}
              ></div>
            </motion.div> */}

      {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-[#000000] rounded-lg p-6 relative overflow-hidden border-2 shadow-lg min-h-full"
              style={{
                borderColor: "#ffffff", // Matching the icon color
                borderRadius: "20px",
              }}
            >
              <div className="flex flex-col h-full text-left transform hover:scale-105 transition-transform">
                <div className="flex items-center">
                  <IconWithGlow Icon={FaHandshake} color="#ffffff" />
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-pink-500 via-purple-500 to-blue-500 ml-3">
                    Partnership
                  </h3>
                </div>
                <p className="mt-4 text-gray-400">
                  We are a platform built for traders, by traders and hence, traders mean everything to us. We proactively listen and take feedback from our clients to build a better product every day by collaborating with the finest partners in the world, ensuring a world-class experience. Your success is our success, and we are proud to be your trusted wealth partner in your journey to achieve financial freedom.
                </p>
              </div>
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #80008050 0%, transparent 70%)",
                  zIndex: -1,
                  borderRadius: "20px",
                }}
              ></div>
            </motion.div> */}

      {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-[#000000] rounded-lg p-6 relative overflow-hidden border-2 shadow-lg min-h-full "
              style={{
                borderColor: "#ffffff", // Matching the icon color
                borderRadius: "20px",
              }}
            >
              <div className="flex flex-col h-full text-left transform hover:scale-105 transition-transform">
                <div className="flex items-center">
                  <IconWithGlow Icon={FaChartLine} color="#ffffff" />
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-pink-500 via-purple-500 to-blue-500 ml-3">
                    Growth
                  </h3>
                </div>
                <p className="mt-4 text-gray-400">
                  We are disruptors and we are here to create, build and start the biggest retail trading revolution in the history of financial markets. Stockwiz is and will be synonymous with growth for our clients, partners, investors, and all our community members. We believe in fast-paced sustainable growth, inculcating a culture of trust, reliability, and consistency in our entire ecosystem.
                </p>
              </div>
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #0000ff50 0%, transparent 70%)",
                  zIndex: -1,
                  borderRadius: "20px",
                }}
              ></div>
            </motion.div> */}
      {/* </div> */}
      {/* </motion.div>
      </section> */}
      <div className="bg-[#061a4800] py-20">
        <h2 className="text-5xl font-bold text-center text-white mb-12">Why choose us?</h2>
        <div className="flex flex-wrap justify-center items-start gap-8">

          {/* Card 1 */}
          <div className="w-full max-w-xs relative transform hover:scale-105 transition-transform">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="flex justify-center mb-4">
                <FaRobot className="h-16 w-16 text-blue-950" />
              </div>

              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Zentra AI Bot
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Experience effortless trading with our AI-powered robots that analyze the market and make smart trades for you, maximizing your profits while you relax.
              </p>

              <Button
                borderRadius="2rem"
                className="bg-gray-900 dark:bg-slate-900 text-white dark:border-slate-800"
              >
                Explore
              </Button>

              <Meteors number={20} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-xs relative transform hover:scale-105 transition-transform">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="flex items-center mb-8">
                <FaSignal className="h-16 w-16 text-blue-950" />
              </div>

              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Zentra Crypto / Stock (US & Indian) Signals
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                We provide expert trading signals for crypto, US stocks, and Indian stocks, helping you make informed decisions and boost your profits.
              </p>

              <Button
                borderRadius="2rem"
                className="bg-gray-900 dark:bg-slate-900 text-white dark:border-slate-800"
              >
                Explore
              </Button>

              <Meteors number={20} />
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-xs relative transform hover:scale-105 transition-transform">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="flex justify-center mb-4">
                <FaCoins className="h-16 w-16 text-blue-950" />
              </div>

              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Zentra Tether Trades
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                We offer fast and secure USDT transactions. Whether you want to buy or sell, we provide face-to-face deals and convenient bank deposit options.
              </p>

              <Button
                borderRadius="2rem"
                className="bg-gray-900 dark:bg-slate-900 text-white dark:border-slate-800"
              >
                Explore
              </Button>

              <Meteors number={20} />
            </div>
          </div>

        </div>
      </div>


    </div>
  );
};

export default AboutUs;