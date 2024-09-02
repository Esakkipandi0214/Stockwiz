import React, { useState } from 'react';
import Image from 'next/image';
import { BackgroundBeams } from "../../Components/UI/background-beams";

interface PlanFeature {
  feature: string;
}

interface PricingPlan {
  title: string;
  price: string;
  priceDescription?: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  buttonLink?: string;
  buttonStyle: string;
  buttonStylehover: string;
  cardStyle?: string;
}

const Pricing: React.FC = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [year, setYear] = useState<boolean>(true);
  const [lifetime, setLifetime] = useState<boolean>(false);

  const Yearplans: PricingPlan[] = [
    {
      title: 'Hindi',
      price: '₹ 15,999',
      priceDescription: 'Inclusive of 18% GST',
      description: 'Designed for serious traders and investors who want to become full-time traders.',
      features: [
        { feature: 'Super Trader Course with Live & Pre Recorded Sessions' },
        { feature: 'Access to 10+ Institutional Trading Strategies' },
        { feature: 'Daily Trading & Investing Signals in Cash, F&O, Commodities Segment' },
        { feature: 'Daily Watchlist, Stock Research and Assistance with trade buddy.' },
        { feature: 'Daily LIVE Trading with SEBI Registered Experts' },
        { feature: 'Complimentary Access to StockWiz Trading App (Launching June 2024)' },
        { feature: '365 Days Doubt Support' },
      ],
      buttonText: 'Buy Now',
      buttonStyle:
        'inline-block font-semibold p-5 tracking-wider text-center hover:bg-pink-500 hover:bg-opacity-100 rounded-2xl bg-black bg-opacity-20 backdrop-blur-md border border-white border-opacity-30',
      buttonStylehover:
        'inline-block p-5 font-semibold bg-pink-500 tracking-wider text-center rounded-2xl border border-white border-opacity-30',
      cardStyle: 'bg-black bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 hover:shadow-xl hover:shadow-pink-500/50',
    },
    {
      title: 'English',
      price: '₹ 15,999',
      priceDescription: 'Inclusive of 18% GST',
      description: 'Designed for serious traders and investors who want to become full-time traders.',
      features: [
        { feature: 'Super Trader Course with Live & Pre Recorded Sessions' },
        { feature: 'Access to 10+ Institutional Trading Strategies' },
        { feature: 'Daily Trading & Investing Signals in Cash, F&O, Commodities Segment' },
        { feature: 'Daily Watchlist, Stock Research and Assistance with trade buddy.' },
        { feature: 'Daily LIVE Trading with SEBI Registered Experts' },
        { feature: 'Complimentary Access to StockWiz Trading App (Launching June 2024)' },
        { feature: '365 Days Doubt Support' },
      ],
      buttonText: 'Buy Now',
      buttonStyle:
        'inline-block font-semibold p-5 tracking-wider text-center hover:bg-pink-500 hover:bg-opacity-100 rounded-2xl bg-black bg-opacity-20 backdrop-blur-md border border-white border-opacity-30',
      buttonStylehover:
        'inline-block p-5 font-semibold bg-pink-500 tracking-wider text-center rounded-2xl border border-white border-opacity-30',
      cardStyle: 'bg-black bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 hover:shadow-xl hover:shadow-pink-500/50',
    },
  ];

  // Lifetime cards contents
  const LifeTimeplans: PricingPlan[] = [
    {
      title: 'Hindi',
      price: '₹ 19,999',
      priceDescription: 'Inclusive of 18% GST',
      description: 'Designed for serious traders and investors who want to become full-time traders.',
      features: [
        { feature: 'Super Trader Course with Live & Pre Recorded Sessions' },
        { feature: 'Access to 10+ Institutional Trading Strategies' },
        { feature: 'Daily Trading & Investing Signals in Cash, F&O, Commodities Segment' },
        { feature: 'Daily Watchlist, Stock Research and Assistance with trade buddy.' },
        { feature: 'Daily LIVE Trading with SEBI Registered Experts' },
        { feature: 'Complimentary Access to StockWiz Trading App (Launching June 2024)' },
        { feature: 'Lifetime Doubt Support' },
      ],
      buttonText: 'Buy Now',
      buttonStyle:
        'inline-block font-semibold p-5 tracking-wider text-center hover:bg-pink-500 hover:bg-opacity-100 rounded-2xl bg-black bg-opacity-20 backdrop-blur-md border border-white border-opacity-30',
      buttonStylehover:
        'inline-block p-5 font-semibold bg-pink-500 tracking-wider text-center rounded-2xl border border-white border-opacity-30',
      cardStyle: 'bg-black bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 hover:shadow-xl hover:shadow-pink-500/50',
    },
    {
      title: 'English',
      price: '₹ 19,999',
      priceDescription: 'Inclusive of 18% GST',
      description: 'Designed for serious traders and investors who want to become full-time traders.',
      features: [
        { feature: 'Super Trader Course with Live & Pre Recorded Sessions' },
        { feature: 'Access to 10+ Institutional Trading Strategies' },
        { feature: 'Daily Trading & Investing Signals in Cash, F&O, Commodities Segment' },
        { feature: 'Daily Watchlist, Stock Research and Assistance with trade buddy.' },
        { feature: 'Daily LIVE Trading with SEBI Registered Experts' },
        { feature: 'Complimentary Access to StockWiz Trading App (Launching June 2024)' },
        { feature: 'Lifetime Doubt Support' },
      ],
      buttonText: 'Buy Now',
      buttonStyle:
        'inline-block font-semibold p-5 tracking-wider text-center hover:bg-pink-500 hover:bg-opacity-100 rounded-2xl bg-black bg-opacity-20 backdrop-blur-md border border-white border-opacity-30',
      buttonStylehover:
        'inline-block p-5 font-semibold bg-pink-500 tracking-wider text-center rounded-2xl border border-white border-opacity-30',
      cardStyle: 'bg-black bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 hover:shadow-xl hover:shadow-pink-500/50',
    },
  ];

  function HandleYear(): void {
    setYear(true);
    setLifetime(false);
  }

  function HandleLifetime(): void {
    setLifetime(true);
    setYear(false);
  }

  return (
 
    <section className="py-20 opacity-95 bg-gradient-to-r from-black to-blue-950 relative">
    {/* Background Beams */}
    <BackgroundBeams className="absolute inset-0 w-full h-full z-0 "/>
  
      <div className="container px-4 mx-auto">
        <div className="relative flex flex-col items-center mb-12">
          <div className="relative mx-auto grid w-full max-w-lg my-6 grid-cols-2 rounded-full border p-2 sm:w-8/12 lg:w-6/12">
            <h2 className="absolute bg-[#ffa200] border rounded-full right-6 -translate-y-4 z-10 text-base font-semibold text-gray-700 px-2">Recommended</h2>
            <h1
              className={`flex justify-center text-2xl md:text-4xl font-bold rounded-l-full cursor-pointer ${year ? "bg-[#db00b6]" : "bg-[#33415c]"} p-3 text-white`}
              onClick={HandleYear}
            >
              1 Year
            </h1>
            <h1
              className={`flex justify-center text-2xl md:text-4xl font-bold rounded-r-full cursor-pointer ${lifetime ? "bg-[#db00b6]" : "bg-[#33415c]"} p-3 text-white`}
              onClick={HandleLifetime}
            >
              Lifetime
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-stretch gap-8 md:gap-12 justify-center">
          {(year ? Yearplans : LifeTimeplans).map((plan, index) => (
            <div
              key={index}
              className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3"
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <div
                className={`flex flex-grow flex-col p-6 space-y-6 rounded-3xl shadow-lg text-white transition-all duration-300 ease-in-out transform ${plan.cardStyle}`}
              >
                <div className="space-y-1">
                  <h4 className="text-2xl md:text-3xl text-[#d100d1] font-medium my-2">{plan.title}</h4>
                  <span className="text-3xl md:text-4xl font-bold">
                    {plan.price}
                    {plan.priceDescription && (
                      <span className="text-base ml-2 font-normal tracking-wide text-white/70">{plan.priceDescription}</span>
                    )}
                  </span>
                  <p className="text-sm text-white/80">{plan.description}</p>
                </div>
                <div className="space-y-2">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-white/80">{feature.feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={plan.buttonLink}
                  className={`${plan.buttonStyle} hover:${plan.buttonStylehover} transition-colors duration-300`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
