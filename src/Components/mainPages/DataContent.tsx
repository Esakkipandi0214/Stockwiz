import React from 'react';
import { FaRegClock, FaBook, FaStar, FaCertificate } from 'react-icons/fa'; // Import icons from react-icons

type DataItem = {
  label: string;
  value: string;
  icon: JSX.Element;
};

const dataItems: DataItem[] = [
  { label: 'Hours Of Content', value: '300 +', icon: <FaRegClock className="text-blue-500" /> },
  { label: 'Total Modules', value: '10 +', icon: <FaBook className="text-blue-500" /> },
  { label: 'Strategies', value: '12 +', icon: <FaStar className="text-blue-500" /> },
  { label: 'Registered', value: 'SEBI', icon: <FaCertificate className="text-blue-500" /> },
];

const DataDisplay: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-black via-gray-900 to-black p-8">
      {dataItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center text-white text-center p-4 border-b sm:border-b-0 sm:border-r border-gray-700 last:border-r-0"
        >
          <div className="text-6xl sm:text-7xl lg:text-4xl font-bold mb-2">
            {item.value}
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl flex items-center justify-center uppercase tracking-wide">
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
