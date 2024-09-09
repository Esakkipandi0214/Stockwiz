
// import React, { useRef } from 'react';

// // Define the interface for the StockCard data
// interface StockCardData {
//   type: string;
//   stockName: string;
//   companyName: string;
//   stopLoss: string;
//   entry: string;
//   target: string;
//   exitPrice: string;
//   rrRatio: string;
//   gain: string;
//   imageUrl: string;
// }

// // Sample stock card data
// const stockCardData: StockCardData[] = [
//   {
//     type: 'SWING',
//     stockName: 'TATAPOWER',
//     companyName: 'Tata Power Co Ltd',
//     stopLoss: '₹ 386',
//     entry: '₹ 394',
//     target: '₹ 418',
//     exitPrice: '₹ 419',
//     rrRatio: '3x',
//     gain: '+6.30%',
//     imageUrl: '/Tata.png',
//   },
//   {
//     type: 'SWING',
//     stockName: 'RELIANCE',
//     companyName: 'Reliance Industries',
//     stopLoss: '₹ 2360',
//     entry: '₹ 2400',
//     target: '₹ 2500',
//     exitPrice: '₹ 2520',
//     rrRatio: '2x',
//     gain: '+5.00%',
//     imageUrl: '/OMDC.png',
//   },
//   {
//         type: 'INTRADAY',
//         stockName: 'INFY',
//         companyName: 'Infosys Ltd',
//         stopLoss: '₹ 1420',
//         entry: '₹ 1450',
//         target: '₹ 1500',
//         exitPrice: '₹ 1520',
//         rrRatio: '4x',
//         gain: '+4.83%',
//         imageUrl: '/Time.png',
//       },
//       {
//         type: 'SWING',
//         stockName: 'TCS',
//         companyName: 'Tata Consultancy Services',
//         stopLoss: '₹ 3260',
//         entry: '₹ 3300',
//         target: '₹ 3400',
//         exitPrice: '₹ 3450',
//         rrRatio: '3x',
//         gain: '+4.55%',
//         imageUrl: '/Tor.png',
//       },
//       {
//         type: 'INTRADAY',
//         stockName: 'HDFCBANK',
//         companyName: 'HDFC Bank Ltd',
//         stopLoss: '₹ 1440',
//         entry: '₹ 1460',
//         target: '₹ 1500',
//         exitPrice: '₹ 1510',
//         rrRatio: '2x',
//         gain: '+3.42%',
//         imageUrl: '/Tata.png',
//       },
//       {
//         type: 'SWING',
//         stockName: 'ICICIBANK',
//         companyName: 'ICICI Bank Ltd',
//         stopLoss: '₹ 900',
//         entry: '₹ 920',
//         target: '₹ 960',
//         exitPrice: '₹ 965',
//         rrRatio: '3x',
//         gain: '+4.89%',
//         imageUrl: '/Bhel.png',
//       },
// ];

// // StockCard component
// const StockCard: React.FC<StockCardData> = ({
//   type,
//   stockName,
//   companyName,
//   stopLoss,
//   entry,
//   target,
//   exitPrice,
//   rrRatio,
//   gain,
//   imageUrl,
// }) => {
//   return (
//     <div className="w-96 bg-gray-700 rounded-lg shadow-lg p-4 mb-6 transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-2xl">
//       <div className="flex items-center justify-between mb-6">
//         <span className="text-gray-600 text-sm font-semibold uppercase bg-gray-200 px-4 py-2 rounded-lg">
//           {type}
//         </span>
//         <div className="bg-gray-100 rounded-full ">
//           <img src={imageUrl} alt={stockName} className="rounded-full w-16 h-16" />
//         </div>
//       </div>
//       <h2 className="text-white text-2xl font-bold mt-2 mb-2">{stockName}</h2>
//       <p className="text-gray-300 text-md mb-6">{companyName}</p>
//       <div className="bg-gray-50 rounded-lg p-4 mb-4">
//         <div className="flex justify-between text-gray-800">
//           <div className="text-center">
//             <span className="block text-sm text-gray-600">Stop Loss</span>
//             <span className="font-semibold">{stopLoss}</span>
//           </div>
//           <div className="text-center">
//             <span className="block text-sm text-gray-600">Entry</span>
//             <span className="font-semibold">{entry}</span>
//           </div>
//           <div className="text-center">
//             <span className="block text-sm text-gray-600">Target</span>
//             <span className="font-semibold">{target}</span>
//           </div>
//         </div>
//       </div>
//       <div className="mt-4 bg-gray-100 rounded-lg p-4">
//         <div className="flex justify-between">
//           <div className="text-center">
//             <span className="block text-sm text-gray-600">Exit Price</span>
//             <span className="font-semibold text-black">{exitPrice}</span>
//           </div>
//           <div className="text-center">
//             <span className="block text-sm text-gray-600">R/R Ratio</span>
//             <span className="font-semibold text-black">{rrRatio}</span>
//           </div>
//         </div>
//       </div>
//       <div className="mt-6 text-green-600 text-2xl font-bold text-center">{gain}</div>
//     </div>
//   );
// };

// // StockCardList component with infinite scrolling behavior
// const StockCardList: React.FC = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

//       if (direction === 'right') {
//         if (scrollLeft + clientWidth >= scrollWidth) {
//           // If it's at the end, scroll to the beginning
//           scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
//         } else {
//           // Scroll right by 300px
//           scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//         }
//       } else {
//         if (scrollLeft === 0) {
//           // If it's at the beginning, scroll to the end
//           scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
//         } else {
//           // Scroll left by 300px
//           scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//         }
//       }
//     }
//   };

//   return (
//     <section className="bg-gradient-to-r from-black to-blue-900 pt-10 pb-20 relative">
//       {/* Left Arrow */}
//       <button
//     onClick={() => scroll('left')}
//     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 border-2 border-green-500 text-black p-2 rounded-full hover:bg-gray-400 focus:outline-none shadow-lg z-10"
//   >
//     <span className="flex justify-center items-center">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={2}
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//       </svg>
//     </span>
//   </button>

//       {/* Cards Container */}
//       <div
//         className="flex space-x-4 overflow-x-auto scroll-snap-x-mandatory snap-mandatory px-4"
//         ref={scrollRef}
//         style={{ scrollBehavior: 'smooth' }}
//       >
//         {stockCardData.map((card, index) => (
//           <div key={index} className="snap-start">
//             <StockCard {...card} />
//           </div>
//         ))}
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={() => scroll('right')}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 border-2 border-green-500 text-black p-2 rounded-full hover:bg-gray-400 focus:outline-none shadow-lg"
//       >
//         <span className="flex justify-center items-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//           </svg>
//         </span>
//       </button>
//     </section>
//   );
// };

// export default StockCardList;