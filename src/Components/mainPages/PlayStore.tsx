import React from 'react';
import PlayStoreImage from '../../../public/play-store.svg';
import AppStoreImage from '../../../public/app-store.svg';
import Link from 'next/link';
import Image from 'next/image';

const Testimonial: React.FC = () => {
  return (
    <section className="bg-black/95 pb-10 pt-1">
      <div className="z-20 mx-4 lg:mx-28 mt-11 py-2 bg-black rounded-[30px] border-2 border-green-500 text-center lg:text-left px-4 lg:px-10 text-white">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-6 h-full">
          <div className="flex flex-col gap-4 lg:gap-20 items-center lg:items-start p-4 lg:p-8 lg:justify-start">
            <div className="flex flex-col items-center lg:items-start w-full">
              <Link href="#" aria-label="Back to homepage" className="flex items-center pt-8 lg:pt-14 pb-4">
                <span className="font-bold text-3xl lg:text-4xl text-[#16FF00]">Zentra</span>
                <span className="font-light text-xl lg:text-3xl text-white ml-1">Wealth</span>
              </Link>
              <p className="text-base lg:text-lg w-full lg:w-[600px] text-white/50 font-normal text-center lg:text-left">
                Launching Diwali 2024. Pre Register Now To Grab Lifetime Access.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <Link href="#" aria-label="Play Store" className="flex items-center p-2">
                <Image src={PlayStoreImage.src} alt="Play Store" width={200} height={200} />
              </Link>
              <Link href="#" aria-label="App Store" className="flex items-center p-2">
                <Image src={AppStoreImage.src} alt="App Store" width={200} height={200} />
              </Link>
            </div>
          </div>
          {/* Optionally, add another div here for the second column on larger screens if needed */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
