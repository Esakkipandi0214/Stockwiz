import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLightbulb, FaHandshake, FaChartLine, FaShieldAlt } from "react-icons/fa";
import Image from 'next/image';

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

  return (
    <div className="bg-black text-white p-4 md:p-8">
      <div className="text-center mb-10 md:mb-20">
        <h1><span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-green-500 mb-8">
          About </span><span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Us</span>
        </h1>
        <p className="text-lg md:text-xl mt-4 md:mt-7">
          Welcome to Zentra Wealth, where we make investing simple and profitable.
          Our smart AI trading robots and expert signals for crypto, US stocks, and Indian stocks guide you to better decisions. 
          Plus, our fast and secure USDT transactions, with easy options like face-to-face deals and bank deposits, put you in control. 
          Join us and see how effortless growing your wealth can be.
        </p>
      </div>

{/* Disrupting Section */}
      <section ref={disruptingRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={disruptingControls}
        >
          <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-7 ">
                  We Are  <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-green-500">Disrupting</span>
                </h2>
            {/* Financial Market Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  <span className="text-orange-500">01.</span> Financial Market Education
                </h3>
                <p className="text-gray-300">
                  We aim to become India #1 trading, investing, and personal finance education platform by
                  providing our users with institutional professional grade courses, workshops, and seminars.
                </p>
              </div>
            </div>

            {/* Research & Advisory */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4">
              <div className="hidden lg:block"></div> {/* Empty div to push the content down */}
              <div className="lg:order-2 lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                  <span className="text-orange-500">02.</span> Research & Advisory
                </h3>
                <p className="text-gray-300">
                  Through our discretionary and quantitative proprietary trading and investing strategies, models, and methods, 
                  we aim to provide our users with powerful research and insights assisting them in their wealth creation journey.
                </p>
              </div>
            </div>

            {/* Technology */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4 mb-7 md:mb-20">
              <div className="lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 ">
                  <span className="text-orange-500">03.</span> <span className="text-2xl md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Technology</span>
                </h3>
                <p className="text-gray-300">
                  We strive to be the fastest trading platform in the country powered by partnerships with India top brokers, 
                  financial institutions, and data vendors to enhance the trading and investing experience of all our users. 
                  Our mission is to revolutionize retail trading through technology.
                </p>
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
    className="bg-gradient-to-r from-black to-gray-800 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between relative shadow-lg"
  >
    <div className="relative md:w-2/3">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white mt-4 tracking-wide">
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-green-500">Mission </span>&<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Vision</span>
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
      Our <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mt-2 mb-10"> Values </span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Innovation Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#1c1c1c] rounded-lg p-6 relative overflow-hidden border-2 shadow-lg min-h-full"
        style={{
          borderColor: "#00ff00", // Matching the icon color
          borderRadius: "20px",
        }}
      >
        <div className="flex flex-col h-full text-left">
          <div className="flex items-center">
            <IconWithGlow Icon={FaLightbulb} color="#00ff00" />
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ml-3">
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
        className="bg-[#1c1c1c] rounded-lg p-6 relative overflow-hidden border-2 shadow-lg min-h-full"
        style={{
          borderColor: "#ff9900", // Matching the icon color
          borderRadius: "20px",
        }}
      >
        <div className="flex flex-col h-full text-left">
          <div className="flex items-center">
            <IconWithGlow Icon={FaShieldAlt} color="#ff9900" />
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ml-3">
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
        className="bg-[#1c1c1c] rounded-lg p-6 relative overflow-hidden border-2 shadow-lg min-h-full"
        style={{
          borderColor: "#800080", // Matching the icon color
          borderRadius: "20px",
        }}
      >
        <div className="flex flex-col h-full text-left">
          <div className="flex items-center">
            <IconWithGlow Icon={FaHandshake} color="#800080" />
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ml-3">
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
        className="bg-[#1c1c1c] rounded-lg p-6 relative overflow-hidden border-2 shadow-lg min-h-full"
        style={{
          borderColor: "#0000ff", // Matching the icon color
          borderRadius: "20px",
        }}
      >
        <div className="flex flex-col h-full text-left">
          <div className="flex items-center">
            <IconWithGlow Icon={FaChartLine} color="#0000ff" />
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ml-3">
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
    </div>
  );
};

export default AboutUs;