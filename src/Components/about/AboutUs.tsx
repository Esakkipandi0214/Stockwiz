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
    <div className="bg-gradient-to-r from-teal-900 to-black text-white p-8 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8">
          About Us
        </h1>
        <p className="text-xl">
          Welcome to Zentra Wealth, where we make investing simple and profitable.
          Our smart AI trading robots and expert signals for crypto, US stocks, and Indian stocks guide you to better decisions. 
          Plus, our fast and secure USDT transactions, with easy options like face-to-face deals and bank deposits, put you in control. 
          Join us and see how effortless growing your wealth can be.
        </p>
      </div>

      {/* <div className="flex justify-center mb-16">
        <img
          src="" // Replace with your actual image path
          alt="Stockwiz Office"
          className="rounded-lg shadow-lg"
        />
      </div> */}

      <section ref={disruptingRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={disruptingControls}
        >
          <div className="container mx-auto">
            <h2 className="text-center text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              We Are <span className="text-green-400">Disrupting</span>
            </h2>

            {/* 01. Financial Market Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="lg:order-1">
                <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  <span className="text-orange-500">01.</span> Financial Market Education
                </h3>
                <p className="text-gray-300">
                  We aim to become India #1 trading, investing, and personal finance education platform by
                  providing our users with institutional professional grade courses, workshops, and seminars.
                </p>
              </div>
            </div>

            {/* 02. Research & Advisory */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="hidden lg:block"></div> {/* Empty div to push the content down */}
              <div className="lg:order-2 lg:text-left lg:mt-10">
                <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  <span className="text-orange-500">02.</span> Research & Advisory
                </h3>
                <p className="text-gray-300">
                  Through our discretionary and quantitative proprietary trading and investing strategies, models, and methods, 
                  we aim to provide our users with powerful research and insights assisting them in their wealth creation journey.
                </p>
              </div>
            </div>

            {/* 03. Technology */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-20">
              <div className="lg:order-1">
                <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  <span className="text-orange-500">03.</span> Technology
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

  <section className="text-center mb-16" ref={missionRef}>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={missionControls}
    className="bg-black rounded-lg p-8 flex flex-col md:flex-row items-center justify-between relative">
      <div className="relative">
  {/* Line Above "Our Mission & Vision" */}
  <div className="absolute inset-x-4 top-0 flex items-center justify-center">
    <div className="w-full border-t border-white opacity-50"></div>
  </div>
  {/* Content Section */}
  <h2 className="text-5xl font-bold mb-10 text-white mt-4">
    Our Mission & Vision
  </h2>
  <p className="text-xl mb-4 text-gray-300">
    Our mission is to empower retail traders with world-class research, 
    state-of-the-art technology stack which would enable them to create 
    generational wealth. We want to democratize stock trading and investing for everyone.
  </p>
  {/* Our Vision Section with Black Background and Lines */}
  <div className="relative bg-black py-4 px-6 my-6 rounded-md">
    <p className="relative text-xl text-white z-10">
      Our vision is to become India largest trading & investing platform helping millions of users to achieve financial freedom.
    </p>
  </div>
  {/* Line Below End of Content */}
  <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
    <div className="w-full border-t border-white opacity-50"></div>
  </div>
</div>
    <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
    <Image 
  src='/goal.png' 
  alt="Target Icon" 
  width={288}  
  height={288} 
  className="w-40 h-40 md:w-72 md:h-72 text-[#00e5ff]"
/>
    </div>
  </motion.div>
</section>
<section className="text-center" ref={valuesRef}>
  <motion.div initial={{ opacity: 0 }} animate={valuesControls}>
    <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8">
      Our Values
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Innovation Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#1c1c1c] rounded-lg p-6 relative overflow-hidden border-2 shadow-lg"
        style={{
          borderColor: "#00ff00", // Matching the icon color
          borderRadius: "20px",
        }}
      >
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
        className="bg-[#1c1c1c] rounded-lg p-6 relative overflow-hidden border-2 shadow-lg"
        style={{
          borderColor: "#ff9900", // Matching the icon color
          borderRadius: "20px",
        }}
      >
        <div className="flex items-center">
          <IconWithGlow Icon={FaShieldAlt} color="#ff9900" />
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ml-3">
            Transparency
          </h3>
        </div>
        <p className="mt-4 text-gray-400">
        We place trust as the fundamental value of all our relationships, and at Stockwiz we are committed to delivering the highest levels of transparency in all our operations, ensuring that our clients are well informed about our services, fees, policies and past performance.        </p>
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
        className="bg-[#1c1c1c] rounded-lg p-6 relative overflow-hidden border-2 shadow-lg"
        style={{
          borderColor: "#800080", // Matching the icon color
          borderRadius: "20px",
        }}
      >
        <div className="flex items-center">
          <IconWithGlow Icon={FaHandshake} color="#800080" />
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ml-3">
            Partnership
          </h3>
        </div>
        <p className="mt-4 text-gray-400">
          We are a platform built for traders, by traders and hence, traders mean everything to us. We proactively listen and take feedback from our clients to build a better product every day by collaborating with the finest partners in the world, ensuring a world-class experience. Your success is our success, and we are proud to be your trusted wealth partner in your journey to achieve financial freedom.
        </p>
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
        className="bg-[#1c1c1c] rounded-lg p-6 relative overflow-hidden border-2 shadow-lg"
        style={{
          borderColor: "#0000ff", // Matching the icon color
          borderRadius: "20px",
        }}
      >
        <div className="flex items-center">
          <IconWithGlow Icon={FaChartLine} color="#0000ff" />
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ml-3">
            Growth
          </h3>
        </div>
        <p className="mt-4 text-gray-400">
          We are disruptors and we are here to create, build and start the biggest retail trading revolution in the history of financial markets. Stockwiz is and will be synonymous with growth for our clients, partners, investors, and all our community members. We believe in fast-paced sustainable growth, inculcating a culture of trust, reliability, and consistency in our entire ecosystem.
        </p>
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