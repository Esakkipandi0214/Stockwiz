import Slider from "react-slick";
import Image from 'next/image'; // Assuming you're using Next.js for images
import Image1 from '../../../public/connect_with_professional_traders.png';
import Image2 from '../../../public/build_strong_network_connections.jpg';
import Image3 from '../../../public/explore_multi_assets_trading.png';
import Image4 from '../../../public/aI_generated.png';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <button className="arrow arrow-prev">←</button>,
  nextArrow: <button className="arrow arrow-next">→</button>,
};

const Carousel = () => (
  <div className="block lg:hidden">
    <div className="flex flex-col items-center">
      <Slider {...carouselSettings} className="w-full max-w-3xl">
        <div className="bg-black border border-white/15 rounded-3xl shadow flex flex-col items-center p-4 md:p-6 lg:p-8">
          <a href="#" className="w-full flex justify-center">
            <Image
              className="rounded-t-lg"
              src={Image1}
              alt="Connect with Professional Traders"
              layout="responsive"
              width={200}
              height={200}
            />
          </a>
          <div className="text-center p-5">
            <a href="#">
              <h5 className="mb-2 text-base md:text-lg lg:text-xl font-medium tracking-tight text-white">
                Connect With Professional Traders & Investors
              </h5>
            </a>
            <p className="mb-3 text-sm md:text-base lg:text-lg font-normal text-white/60">
              Our exclusive voice chat and live stream technology enables you to share, discuss, and execute trades in real-time with other traders.
            </p>
          </div>
        </div>
        <div className="bg-black border border-white/15 rounded-3xl shadow flex flex-col items-center p-4 md:p-6 lg:p-8">
          <a href="#" className="w-full flex justify-center">
            <Image
              className="rounded-t-lg"
              src={Image3}
              alt="Explore Multi-Assets Trading"
              layout="responsive"
              width={200}
              height={200}
            />
          </a>
          <div className="text-center p-5">
            <a href="#">
              <h5 className="mb-2 text-base md:text-lg lg:text-xl font-medium tracking-tight text-white">
                Explore Multi Asset Trading & Investing
              </h5>
            </a>
            <p className="mb-3 text-sm md:text-base lg:text-lg font-normal text-white/60">
              We trade & invest in global assets ranging from Indian & American equities to commodities like gold and silver.
            </p>
          </div>
        </div>
        <div className="bg-black border border-white/15 rounded-3xl shadow flex flex-col items-center p-4 md:p-6 lg:p-8">
          <a href="#" className="w-full flex justify-center">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/SEBI_Registered.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </a>
          <div className="text-center p-5">
            <a href="#">
              <h5 className="mb-2 text-base md:text-lg lg:text-xl font-medium tracking-tight text-white">
                SEBI Registered Research & Advisory
              </h5>
            </a>
            <p className="mb-3 text-sm md:text-base lg:text-lg font-normal text-white/60">
              Get powerful and actionable research and insights from SEBI registered experts to help you ace the markets.
            </p>
          </div>
        </div>
        <div className="bg-black border border-white/15 rounded-3xl shadow flex flex-col items-center p-4 md:p-6 lg:p-8">
          <a href="#" className="w-full flex justify-center">
            <Image
              className="rounded-t-lg"
              src={Image4}
              alt="AI-Generated Insights"
              layout="responsive"
              width={200}
              height={200}
            />
          </a>
          <div className="text-center p-5">
            <a href="#">
              <h5 className="mb-2 text-base md:text-lg lg:text-xl font-medium tracking-tight text-white">
                A.I Generated News & Market Updates
              </h5>
            </a>
            <p className="mb-3 text-sm md:text-base lg:text-lg font-normal text-white/60">
              Get access to institution-grade news catalysts that have the power to generate big moves in the market.
            </p>
          </div>
        </div>
        <div className="bg-black border border-white/15 rounded-3xl shadow flex flex-col items-center p-4 md:p-6 lg:p-8">
          <a href="#" className="w-full flex justify-center">
            <Image
              className="rounded-t-lg"
              src={Image2}
              alt="Build Strong Network Connections"
              layout="responsive"
              width={200}
              height={200}
            />
          </a>
          <div className="text-center p-5">
            <a href="#">
              <h5 className="mb-2 text-base md:text-lg lg:text-xl font-medium tracking-tight text-white">
                Build A Strong Network & Connections
              </h5>
            </a>
            <p className="mb-3 text-sm md:text-base lg:text-lg font-normal text-white/60">
              Our community members come from various domains such as business, law, finance, technology, sports, and investment banking.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  </div>
);

export default Carousel;
