import Image from "next/image";
import React from "react";
import { Timeline } from "../UI/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "World Class Education",
      content: (
        <div>
          <p className="text-base md:text-lg lg:text-xl text-white/70 font-normal">
              Learn professional institutional trading from the absolute basics. Experience the world of smart money concepts.
            </p>
            <ul className="list-disc grid gap-2 md:gap-3 pl-5 text-left text-white mt-3 mb-5">
              <li className="text-base md:text-lg lg:text-lg">Learn 10+ institutional trading strategies.</li>
              <li className="text-base md:text-lg lg:text-lg">We teach equity, futures, options, commodities & forex trading.</li>
              <li className="text-base md:text-lg lg:text-lg">Attend weekly live webinars and interactive Q&A sessions.</li>
              <li className="text-base md:text-lg lg:text-lg">Course available in English & Hindi language.</li>
            </ul>
            <div className="grid grid-cols-2 gap-4 pt-5 pb-10">
            <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-full pb-1 pt-1 w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/vd.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start  lg:mt-0 lg:w-full w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/vd.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-full pb-1 pt-1 w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/vd.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start  lg:mt-0 lg:w-full w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/vd.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        </div>
      ),
    },
    {
      title: "Realtime Trading Signals & Alerts Indian Market",
      content: (
        <div>
           <p className="text-base md:text-lg lg:text-lg text-white/70 font-normal">
              Get lightning fast trading & investing signals and callouts from SEBI registered trading experts.
            </p>
            <ul className="list-disc grid gap-2 md:gap-3 pl-5 text-left text-white mt-3">
              <li className="text-base md:text-lg lg:text-base">Live signals for intraday, swing, and positional trading.</li>
              <li className="text-base md:text-lg lg:text-base">We cover the cash, futures & options, and commodities market.</li>
              <li className="text-base md:text-lg lg:text-base">75%+ accuracy with an average reward to risk ratio of 2.5x.</li>
              <li className="text-base md:text-lg lg:text-base">12%+ average monthly returns generated since inception.</li>
            </ul>
            <p className="text-base md:text-lg lg:text-lg text-white/70 font-normal mt-4 lg:mt-6 mb-5">
              Past performance is not indicative of future performance. Returns are not guaranteed; they can change with market conditions.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-5 pb-10">
            <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-full pb-1 pt-1 w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/vdo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start  lg:mt-0 lg:w-full w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/vdo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-full pb-1 pt-1 w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/vdo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start  lg:mt-0 lg:w-full w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/vdo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        </div>
      ),
    },
    {
      title: "Live Trading Everyday",
      content: (
        <div>
           <p className="text-base md:text-lg lg:text-lg text-white/70 font-normal">
              Trade live with professional traders in stocks, indices & commodities.
            </p>
            <ul className="list-disc grid gap-2 md:gap-3 pl-5 text-left text-white mt-3 mb-5">
              <li className="text-base md:text-lg lg:text-base">Live trading via screen sharing with our research analysts.</li>
              <li className="text-base md:text-lg lg:text-base">Ask your stock-related queries in real-time with professional traders.</li>
              <li className="text-base md:text-lg lg:text-base">Apply institutional trading strategies LIVE with SEBI Registered Experts.</li>
              <li className="text-base md:text-lg lg:text-base">Daily live trading from 10am - 3pm.</li>
            </ul>
            <div className="grid grid-cols-2 gap-4 pt-5 pb-10">
            <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-full pb-1 pt-1 w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/v.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start  lg:mt-0 lg:w-full w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/v.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-full pb-1 pt-1 w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/v.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start  lg:mt-0 lg:w-full w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/v.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        </div>
      
      ),
    },
    {
      title: "Collaborate & Network With Indias Top Traders",
      content: (
        <div>
          <p className="text-base md:text-lg lg:text-lg text-white/70 font-normal">
            Become a part of India&apos;s Largest SEBI Registered Trading Community with 5,000+ Professional Traders.            </p>
            <ul className="list-disc grid gap-2 md:gap-3 pl-5 text-left text-white mt-3 mb-5">
            <li className="text-base md:text-lg lg:text-base">Network with the top 1% traders & investors in India.</li>
              <li className="text-base md:text-lg lg:text-base">Explore new and innovative trading styles.</li>
              <li className="text-base md:text-lg lg:text-base">Access daily watchlist, screeners, and scanners.</li>
              <li className="text-base md:text-lg lg:text-base">Interact with industry experts to improve your performance.</li>
            </ul>
            <div className="grid grid-cols-2 gap-4 pt-5 pb-10">
            <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-full pb-1 pt-1 w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/colb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start  lg:mt-0 lg:w-full w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/colb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-full pb-1 pt-1 w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/colb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start  lg:mt-0 lg:w-full w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/colb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        </div>
         ),
        },
        {
          title: "A.I Powered Fully Automatic Trading",
          content: (
            <div>
              <p className="text-base md:text-lg lg:text-xl text-white/70 font-normal">
            Unleash the power of artificial intelligence in stock trading & investing.</p>
            <ul className="list-disc grid gap-2 md:gap-3 pl-5 text-left text-white mt-3 mb-5">
              <li className="text-base md:text-lg lg:text-base">Smart position size calculator.</li>
              <li className="text-base md:text-lg lg:text-base">AI powered news & market updates.</li>
              <li className="text-base md:text-lg lg:text-base">Fully automated trading.</li>
              <li className="text-base md:text-lg lg:text-base">Powerful insights on trading & investing performance.</li>
            </ul>
            <div className="grid grid-cols-2 gap-4 pt-5 pb-10">
            <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-full pb-1 pt-1 w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/ai_v.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start  lg:mt-0 lg:w-full w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/ai_v.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start mt-6 lg:mt-0 lg:w-full pb-1 pt-1 w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/ai_v.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:justify-start  lg:mt-0 lg:w-full w-auto">
            <video width="100%" className="border border-slate-600 rounded-xl bg-black" autoPlay loop muted>
              <source src="/ai_v.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
            </div>
             ),
            },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
export default Timeline;