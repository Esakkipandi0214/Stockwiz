import React from 'react';

type DataItem = {
  label: string;
  value: string;
};

const dataItems: DataItem[] = [
  { label: 'Clients', value: '33000 +' },
  { label: 'Years results', value: '15 +' },
  { label: 'Services', value: '5 +' },
  { label: 'Registered', value: 'SEBI' }, // Assuming this is an icon or text
];

const DataDisplay: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-4 p-4 bg-black/95 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:gap-8 lg:gap-10">
      {dataItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-y-2 justify-center items-center text-white text-center p-4 relative"
        >
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{item.value}</div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl">{item.label}</div>
          {index < dataItems.length - 1 && (
            <div className="hidden lg:block absolute right-0 top-0 h-full w-[1px] bg-slate-400"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
