// components/Marquee.tsx
import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black text-white py-3">
      <div className="absolute left-0 top-0 w-full flex">
        {/* Container for looping effect */}
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mr-10 text-lg font-semibold">
            Stack Percentage: 75% | Stack Percentage: 75% | Stack Percentage: 75%
          </span>
          <span className="mr-10 text-lg font-semibold">
            |Stack Percentage: 75% | Stack Percentage: 75% | Stack Percentage: 75%|
          </span>
          {/* Duplicate for continuous scrolling */}
          <span className="mr-10 text-lg font-semibold">
            Stack Percentage: 75% | Stack Percentage: 75% | Stack Percentage: 75%
          </span>
          <span className="mr-10 text-lg font-semibold">
            Stack Percentage: 75% | Stack Percentage: 75% | Stack Percentage: 75%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
