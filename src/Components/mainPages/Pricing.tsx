import React, { useState } from 'react';
import bgImage from '../../../public/pricingBg.jpg';

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
    const [year , setYear] = useState<boolean>(true)
    const [lifetime,setLifetime]=useState<boolean>(false)
    
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
        'inline-block p-5 font-semibold bg-pink-500 tracking-wider text-center rounded-2xl  border border-white border-opacity-30',
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
        'inline-block p-5 font-semibold bg-pink-500 tracking-wider text-center rounded-2xl  border border-white border-opacity-30',
      cardStyle: 'bg-black bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 hover:shadow-xl hover:shadow-pink-500/50',
    },
  ];

//   lifetime cards contents
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
        'inline-block p-5 font-semibold bg-pink-500 tracking-wider text-center rounded-2xl  border border-white border-opacity-30',
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
        'inline-block p-5 font-semibold bg-pink-500 tracking-wider text-center rounded-2xl  border border-white border-opacity-30',
      cardStyle: 'bg-black bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 hover:shadow-xl hover:shadow-pink-500/50',
    },
  ];


    function HandleYear(): void {
        setYear(true)
        setLifetime(false)
    }

    function HandleLifetime(): void { 
        setLifetime(true)
        setYear(false)
        
       }

  return (
    <section
      className="py-20 opacity-95"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container px-4 mx-auto">
      <div className="relative flex flex-col mt-9 items-center">
  <div className="relative mx-auto grid w-8/12 my-11 grid-cols-2 justify-around rounded-full border p-2 sm:w-6/12 lg:w-4/12">
    <h2 className="absolute bg-[#ffa200] border rounded-full right-6 -translate-y-4 z-10 text-base font-semibold text-gray-700 px-2">Recommended</h2>
    <h1 className={`flex justify-center text-4xl font-bold rounded-l-full ${year ? "bg-[#db00b6]" : "bg-[#33415c]"}  p-3 text-white`} onClick={()=>HandleYear()}>1 Year</h1>
    <h1 className={`flex justify-center text-4xl font-bold rounded-r-full ${lifetime ? "bg-[#db00b6]" : "bg-[#33415c]"}  p-3 text-white`} onClick={()=>HandleLifetime()}>Lifetime</h1>
  </div>
</div>

        <div className="flex flex-wrap items-stretch gap-16 justify-center -mx-4">
          {year && Yearplans.map((plan, index) => (
            <div
              key={index}
              className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 "
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <div
                className={`flex flex-grow flex-col p-6 space-y-6 rounded-3xl shadow-lg sm:px-12 sm:py-14 text-white transition-all duration-300 ease-in-out transform  ${plan.cardStyle}`}
              >
                <div className="space-y-1">
                  <h4 className="text-3xl text-[#d100d1] font-medium my-2">{plan.title}</h4>
                  <span className="text-4xl font-bold">
                    {plan.price}
                    {plan.priceDescription && (
                      <span className="text-base ml-2 font-normal tracking-wide text-white/70">
                        {plan.priceDescription}
                      </span>
                    )}
                  </span>
                </div>
                <p className=" leading-relaxed  text-white/80 text-sm">
                  {plan.description}
                </p>
                <ul className="flex-1 mb-6 dark:text-gray-600">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex mb-2 space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`flex-shrink-0 w-6 translate-y-1 h-6 ${hoveredCardIndex === index && "text-pink-500"}`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className=' text-start text-lg font-normal'>{feature.feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  rel="noopener noreferrer"
                  href={plan.buttonLink || '#'}
                  className={`${hoveredCardIndex === index ? plan.buttonStylehover :plan.buttonStyle} `}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
          {lifetime && LifeTimeplans.map((plan, index) => (
            <div
              key={index}
              className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0"
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <div
                className={`flex flex-grow flex-col p-6 space-y-6 rounded-3xl shadow-lg sm:px-12 sm:py-14 text-white transition-all duration-300 ease-in-out transform  ${plan.cardStyle}`}
              >
                <div className="space-y-1">
                  <h4 className="text-3xl text-[#d100d1] font-medium my-2">{plan.title}</h4>
                  <span className="text-4xl font-bold">
                    {plan.price}
                    {plan.priceDescription && (
                      <span className="text-base ml-2 font-normal tracking-wide text-white/70">
                        {plan.priceDescription}
                      </span>
                    )}
                  </span>
                </div>
                <p className=" leading-relaxed  text-white/80 text-sm">
                  {plan.description}
                </p>
                <ul className="flex-1 mb-6 dark:text-gray-600">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex mb-2 space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`flex-shrink-0 w-6 translate-y-1 h-6 ${hoveredCardIndex === index && "text-pink-500"}`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className=' text-start text-lg font-normal'>{feature.feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  rel="noopener noreferrer"
                  href={plan.buttonLink || '#'}
                  className={`${hoveredCardIndex === index ? plan.buttonStylehover :plan.buttonStyle} `}
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
