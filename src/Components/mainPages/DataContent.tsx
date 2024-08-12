import React from 'react';

type DataItem = {
  label: string;
  value: string;
};

const dataItems: DataItem[] = [
  { label: 'Hours Of Content', value: '300 +' },
  { label: 'Total Modules', value: '10 +' },
  { label: 'Strategies', value: '12 +' },
  { label: 'Registered', value: 'SEBI' }, // Assuming this is an icon or text
];

const DataDisplay: React.FC = () => {
  return (
    <div className="w-full grid sm:grid-cols-4 bg-black/95 grid-cols-2 gap-1 py-4 pl-32">
      {dataItems.map((item, index) => (
        <div
          key={index}
          className="min-h-[100px] flex flex-col gap-y-2 justify-start items-start text-white text-center p-2 relative"
        >
          <div className="text-3xl sm:text-4xl font-bold">{item.value}</div>
          <div className="text-base sm:text-lg">{item.label}</div>
          {index < dataItems.length - 1 && (
            <div className="absolute right-0 top-0 h-full w-[1px] mx-5 bg-slate-400"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
