import React, { useState } from 'react';
import Image from 'next/image';
import Mobiles1 from '../../../public/mobileres2.png';; // Replace with the correct path to your image

const MobileTabletCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Mobiles1, Mobiles1, Mobiles1]; // Array of images

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="md:hidden min-h-[100px] flex items-center justify-center text-center text-white">
      <div className="relative w-full flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full"
        >
          &#8249;
        </button>
        <div className="relative w-full flex justify-center items-center overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full flex justify-center items-center">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  width={400}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default MobileTabletCarousel;
