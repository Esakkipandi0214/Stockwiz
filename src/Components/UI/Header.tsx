import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Wattsapp from '../../../public/whatsapp.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleService = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full p-1 bg-[#001219] z-50">
      <div className="container flex justify-between h-[80px] mx-auto">
        <div className="flex items-center text-lg">
          <Link href="#" aria-label="Back to homepage" className="flex items-center p-2">
            <span className="font-bold text-3xl text-[#16FF00]">Zentra</span>
            <span className="font-light text-2xl text-white ml-1">Wealth</span>
          </Link>
        </div>
        <div className="items-center hidden lg:flex gap-7">
          <Link href="/" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Home
          </Link> 
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-controls="dropdown-menu"
              className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px] flex items-center"
            >
              Updates
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div id="dropdown-menu" className="z-10 absolute right-0 mt-2 w-44 bg-black divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Announcements
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Tutorial
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      News & Research
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative inline-block text-left">
            <button
              onClick={toggleService}
              aria-expanded={isServiceOpen}
              aria-controls="service-menu"
              className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px] flex items-center"
            >
              Services
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isServiceOpen && (
              <div id="service-menu" className="z-10 absolute right-0 mt-2 w-44 bg-black divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Zentra AI BOT
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Zentra Indian Stocks
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Zentra US Stocks
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Tether Trade
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Zentra Crypto
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link href="/About" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            About Us
          </Link>
          <Link href="/Contact" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Contact Us
          </Link>
        </div>
        <div className="items-center hidden gap-4 lg:flex">
          <button className="px-6 py-2 text-lg font-medium text-[#f8f9fa] hover:text-[#16FF00] hover:border-[#16FF00]/50 rounded-[25px] border-2 backdrop-blur-lg hover:bg-white/10 border-[#f8f9fa]">
            Sign up
          </button>
          <button className="px-6 py-2 text-lg font-medium text-[#f8f9fa] hover:text-[#16FF00] hover:border-[#16FF00]/50 rounded-[25px] border-2 backdrop-blur-lg hover:bg-white/10 border-[#f8f9fa]">
            Log In
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <Image src={Wattsapp} alt="WhatsApp" width={30} height={30} className="filter invert-[1] grayscale mr-4 transition-all duration-300" />
          <button onClick={toggleMenu} className="text-[#f8f9fa] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-80 backdrop-blur-md lg:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
              Home
            </Link>
            <button
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-controls="dropdown-menu-mobile"
              className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px] flex items-center"
            >
              Updates
            </button>
            {isDropdownOpen && (
              <div id="dropdown-menu-mobile" className="w-full bg-black divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Announcements
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Tutorial
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      News & Research
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            <button
              onClick={toggleService}
              aria-expanded={isServiceOpen}
              aria-controls="service-menu-mobile"
              className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px] flex items-center"
            >
              Services
            </button>
            {isServiceOpen && (
              <div id="service-menu-mobile" className="w-full bg-black divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Zentra AI BOT
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Zentra Indian Stocks
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Zentra US Stocks
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Tether Trade
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-lime-500 text-white hover:text-black">
                      Zentra Crypto
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            <Link href="/About" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
              About Us
            </Link>
            <Link href="/Contact" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
