import React from 'react';
import { FaBook, FaStar, FaCertificate } from 'react-icons/fa'; // Import icons from react-icons
import { MdPeopleAlt } from "react-icons/md";
import { ImCalendar } from "react-icons/im";


type DataItem = {
  label: string;
  value: string;
  icon: JSX.Element;
};

const dataItems: DataItem[] = [
  { label: 'Clients', value: '33000 +', icon: <MdPeopleAlt className="text-blue-500" /> },
  { label: 'Years', value: '15 +', icon: <ImCalendar className="text-blue-500" /> },
  { label: 'Services', value: '5 +', icon: <FaStar className="text-blue-500" /> },
  { label: 'Registered', value: 'SEBI', icon: <FaCertificate className="text-blue-500" /> },
];

const DataDisplay: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-black via-gray-900 to-black p-4 sm:p-8">
      {dataItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center text-white text-center p-3 sm:p-4 border-b sm:border-b-0 sm:border-r border-gray-700 last:border-r-0"
        >
          <div className="text-4xl sm:text-6xl lg:text-4xl font-bold mb-2">
            {item.value}
          </div>
          <div className="text-base sm:text-lg lg:text-2xl flex items-center justify-center uppercase tracking-wide">
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
