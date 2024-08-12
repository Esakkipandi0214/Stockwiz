import React from 'react';

type DataItem = {
  id: string;
  title: string;
  description: string;
};

const dataItems: DataItem[] = [
  {
    id: 'super-trad1',
    title: 'Learn From<br />The Basics',
    description: 'Start learning from scratch, all the way to advanced institutional trading strategies.',
  },
  {
    id: 'super-trad2',
    title: 'Lightning Fast Trading Signals',
    description: 'Get real-time trading and investing signals from SEBI Registered experts for intraday, swing and positional trading.',
  },
  {
    id: 'super-trad3',
    title: 'Live Trading<br />Stream',
    description: 'Trade live with professional institutional traders every day and learn how to trade in the live market.',
  },
  {
    id: 'super-trad4',
    title: 'Priority Customer Support',
    description: 'Get a dedicated relationship manager to resolve your doubts, queries, and questions. We serve 24x7, 365 days.',
  },
];

const DataDisplay: React.FC = () => {
  return (
    <div className="w-full grid sm:grid-cols-4 bg-black/95 grid-cols-2 gap-1 px-32 py-4">
      {dataItems.map((item, index) => (
        <div
          key={item.id}
          className="min-h-[100px] flex flex-col gap-y-2 justify-center items-center text-white text-left p-4 relative"
        >
          <div
            className="text-sm sm:text-xl text-center font-bold leading-tight max-w-[200px]"
            dangerouslySetInnerHTML={{ __html: item.title }}
          ></div>
          <div className="text-sm sm:text-base text-center my-1">{item.description}</div>
          {index < dataItems.length - 1 && (
            <div className="absolute right-0 top-0 h-full w-[1px] bg-slate-400"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
