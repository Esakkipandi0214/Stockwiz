import React from 'react';
import supertrade1 from '../../../public/super-trad1.svg';
import supertrade2 from '../../../public/super-trad2.svg';
import supertrade3 from '../../../public/super-trad3.svg';
import supertrade4 from '../../../public/super-trad4.svg';
import Image from 'next/image';

type DataItem = {
  id: string;
  title: string;
  description: string;
  svg: string;
};

const dataItems: DataItem[] = [
  {
    id: 'super-trad1',
    title: 'Learn From<br />The Basics',
    description:
      'Start learning from scratch, all the way to advanced institutional trading strategies.',
    svg: supertrade1,
  },
  {
    id: 'super-trad2',
    title: 'Lightning Fast Trading Signals',
    description:
      'Get real-time trading and investing signals from SEBI Registered experts for intraday, swing and positional trading.',
    svg: supertrade2,
  },
  {
    id: 'super-trad3',
    title: 'Live Trading<br />Stream',
    description:
      'Trade live with professional institutional traders every day and learn how to trade in the live market.',
    svg: supertrade3,
  },
  {
    id: 'super-trad4',
    title: 'Priority Customer Support',
    description:
      'Get a dedicated relationship manager to resolve your doubts, queries, and questions. We serve 24x7, 365 days.',
    svg: supertrade4,
  },
];

const DataDisplay: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 bg-black/95">
      {dataItems.map((item, index) => (
        <div
          key={item.id}
          className="flex flex-col items-center text-white text-center p-4 relative"
        >
          <Image src={item.svg} alt={item.title} className="mb-4" />
          <div
            className="text-lg sm:text-xl font-bold leading-tight max-w-[200px]"
            dangerouslySetInnerHTML={{ __html: item.title }}
          ></div>
          <div className="text-sm sm:text-base mt-2">{item.description}</div>
          {index < dataItems.length - 1 && (
            <div className="hidden lg:block absolute right-0 top-0 h-4/5 my-10 w-[1px] bg-slate-400"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
