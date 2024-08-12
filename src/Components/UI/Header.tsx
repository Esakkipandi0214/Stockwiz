// components/Header.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Wattsapp from '../../../public/whatsapp.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-1 bg-[#001219] relative ">
      <div className="container flex justify-between h-16 mx-auto">
      <div className="flex items-center text-lg">
  <Link href="#" aria-label="Back to homepage" className="flex items-center p-2">
    {/* Stylized text or logo */}
    <span className="font-bold text-3xl text-[#16FF00]">Z</span>
    <span className="font-light text-2xl text-white ml-1">ENTRA</span>
  </Link>
</div>
        <div className="items-center hidden lg:flex gap-7">
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Home
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Features
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Courses
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Community
          </Link>
          <button className="text-sm font-semibold bg-transparent border-2 border-[#F9B208] rounded-[30px] hover:bg-[#060e15f1] hover:text-[#F9B208] py-1 px-4">
            <p className='bg-[#F9B208] py-1 px-2 rounded-[25px] hover:bg-[#060e15f1]'>App Coming Soon</p>
          </button>
        </div>
        <div className="items-center hidden lg:flex">
          <Image src={Wattsapp} alt="WhatsApp" width={30} height={30} className="filter invert-[1] grayscale mr-5 transition-all duration-300" />
          <button className="px-6 py-2 text-lg font-medium text-[#f8f9fa] hover:text-[#16FF00] hover:border-[#16FF00]/50 rounded-[25px] border-2 backdrop-blur-lg hover:bg-white/10 border-[#f8f9fa]">
            Sign up
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <Image src={Wattsapp} alt="WhatsApp" width={30} height={30} className="filter invert-[1] grayscale mr-4 transition-all duration-300" />
          <button onClick={toggleMenu} className="text-[#f8f9fa] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden absolute left-0 top-16 w-full min-h-[700px] bg-black/80 z-50 flex flex-col items-start space-y-4 p-7 mt-2">
               <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Home
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Features
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Courses
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Community
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Pricing
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            About Us
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Contact Us
          </Link>
          <button className="px-6 py-2 ml-4 text-lg font-medium text-[#16FF00] rounded-[25px] border-2 backdrop-blur-lg bg-[#16FF00]/5 border-[#16FF00]/5">
            Sign up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
