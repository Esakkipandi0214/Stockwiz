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




import { GradientCard } from "../../Components/GradientCard";
import { CheckIcon } from "lucide-react";
import { title } from "process";
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
    <div className="bg-gradient-to-r  from-black to-blue-900 text-white p-4 md:p-8">
      <div className="text-center pt-12 pr-12 pl-12">
        <h1><span className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-pink-500 via-purple-500 to-blue-500 mb-8">
          About Us</span>
        </h1>
        <span>
          {/* <TextGenerateEffect className="text-lg md:text-3xl mt-4 md:mt-7 mx-auto max-w-prose text-justify" words={words} /> */}
        </span>

      </div>
      <HeroHighlight className="mb-2 md:mb-16 pt-8 pr-8 pl-4">
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
          className=" text-lg px-4 md:text-xl lg:text-2xl font-semibold  dark:text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Welcome to Zentra Wealth,
          Our smart AI trading robots and  {" "}
          <Highlight className="text-black dark:text-white">
            expert signals for Crypto, US stocks, and Indian stocks  guide you to better decisions Plus, our fast and secure USDT transactions, with easy options like face-to-face deals and bank deposits.   </Highlight>
        </motion.h1>
      </HeroHighlight>


      {/* Disrupting Section */}
      <section ref={disruptingRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={disruptingControls}
        >
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold mb-7 ">
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"> We Are Disrupting</span>
            </h2>
            {/* Financial Market Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
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
            </div>

            {/* Research & Advisory */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4">
              <div className="hidden lg:block"></div> {/* Empty div to push the content down */}
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
            </div>





            {/* Technology */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4 mb-7 md:mb-20">
              <div className="lg:order-1">
                <CardSpotlight className="h-60 w-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 ">
                  <span className="text-white">3.</span> <span className="text-2xl md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">Technology</span>
                  </h3>
                  <p className="text-gray-300">
                    We strive to be the fastest trading platform in the country powered by partnerships with India top brokers,
                    financial institutions, and data vendors to enhance the trading and investing experience of all our users.
                    Our mission is to revolutionize retail trading through technology.
                  </p>

                </CardSpotlight>

              </div>
            </div>
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
          <div className="relative md:w-2/3">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white mt-4 tracking-wide">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"> Our Mission </span>&<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">Vision</span>
            </h2>
            <p className="text-lg md:text-2xl mb-6 text-gray-300 leading-relaxed">
              Our mission is to empower retail traders with world-class research,
              state-of-the-art technology stack that enables them to create
              generational wealth. We want to democratize stock trading and investing for everyone.
            </p>
            <div>
              <p className="relative text-lg md:text-2xl text-white z-10">
                Our vision is to become Indias largest trading & investing platform, helping millions of users achieve financial freedom.
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
      <section className="text-center" ref={valuesRef}>
        <motion.div initial={{ opacity: 0 }} animate={valuesControls}>
          <h2 className="text-5xl font-bold mt-4 mb-8">
            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mt-2 mb-10">Our Values </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Innovation Card */}
            <motion.div
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
            </motion.div>

            {/* Transparency Card */}
            <motion.div
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
            </motion.div>

            {/* Partnership Card */}
            <motion.div
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
            </motion.div>

            {/* Growth Card */}
            <motion.div
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
            </motion.div>
          </div>
        </motion.div>
      </section>
      <div className="bg-[#061a4800] py-20"> {/* Background color similar to the footer */}
        <h2 className="text-5xl font-bold text-center text-white mb-12">Why choose us?</h2>
        <div className="flex justify-center items-start space-x-8">

          {/* Card 1 */}
          {/* <GradientCard className="w-80 transform hover:scale-105 transition-transform">
          <div className="flex justify-center mb-4">
            <FaRobot className="h-16 w-16 text-blue-950" /> 
          </div>
          <h3 className="text-lg font-bold text-center text-blue-950 mb-4">Zentra AI Bot</h3>
          <p className="text-center text-gray-300">
            Experience effortless trading with our AI-powered robots that analyze the market and make smart trades for you, maximizing your profits while you relax.
          </p>
        </GradientCard> */}
          <div className=" w-full relative max-w-xs transform hover:scale-105 transition-transform">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500"> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                {/* <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              /> */}
              </svg>
              {/* </div> */}
              <div className="flex justify-center mb-4">
                <FaRobot className="h-16 w-16 text-blue-950" />
              </div>

              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Zentra AI Bot
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Experience effortless trading with our AI-powered robots that analyze the market and make smart trades for you, maximizing your profits while you relax.

              </p>

              <div>
                <Button
                  borderRadius="2rem"
                  className="bg-gray-900 dark:bg-slate-900 text-white dark:border-slate-800"
                >
                  Explore
                </Button>
              </div>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>

          {/* Card 2 (lowered) */}
          {/* <GradientCard className="w-80 transform hover:scale-105 transition-transform mt-12">
          <div className="flex justify-center mb-4">
            <FaSignal className="h-16 w-16 text-blue-950" />
          </div>
          <h3 className="text-lg font-bold text-center text-blue-950 mb-4">Zentra Crypto / Stock (US & Indian) Signals</h3>
          <p className="text-center text-gray-300">
            We provide expert trading signals for crypto, US stocks, and Indian stocks, helping you make informed decisions and boost your profits.
          </p>
        </GradientCard> */}

          <div className=" w-full relative max-w-xs transform hover:scale-105 transition-transform">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500"> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                {/* <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              /> */}
              </svg>
              {/* </div> */}
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

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>

          {/* Card 3 */}
          {/* <GradientCard className="w-80 transform hover:scale-105 transition-transform">
          <div className="flex justify-center mb-4">
            <FaCoins className="h-16 w-16 text-blue-950" /> 
          </div>
          <h3 className="text-lg font-bold text-center text-blue-950 mb-4">Zentraa Tether Trades</h3>
          <p className="text-center text-gray-300">
            We offer fast and secure USDT transactions. Whether you want to buy or sell, we provide face-to-face deals and convenient bank deposit options.
          </p>
        </GradientCard> */}
          <div className=" w-full relative max-w-xs transform hover:scale-105 transition-transform">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500"> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                {/* <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              /> */}
              </svg>
              {/* </div> */}
              <div className="flex justify-center mb-4">
                <FaCoins className="h-16 w-16 text-blue-950" />
              </div>

              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Zentraa Tether Trades
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

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>

        </div>
      </div>


    </div>
  );
};

export default AboutUs;