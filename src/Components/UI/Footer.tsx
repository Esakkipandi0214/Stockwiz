// components/Footer.tsx

import React, { useState } from "react";
import Link from "next/link";
import Facebook from "../../../public/facebook_hover.svg";
import LinkedIn from "../../../public/linkdin_hover.svg";
import Instagram from "../../../public/instagram_hover.svg";
import Youtube from "../../../public/youtube_hover.svg";
import Twitter from "../../../public/tweet_hover.svg";
import Image from "next/image";
 
const Footer: React.FC = () => {
  const [HoverEffect, setHoverEffect] = useState<boolean>(false);
  return (
    <>
     <footer className="footer bg-base-200 text-base-content bg-gradient-to-r from-black to-blue-950 grid grid-cols-1 p-4 sm:grid-cols-3 lg:pl-24 lg:pr-14 gap-5 mt-0">
  <nav className="flex-1 flex-col w-full mt-0">
    <Link
      href="/"
      aria-label="Back to homepage"
      className="flex items-center pt-14 pb-4 justify-center md:justify-start mt-0"
    >
      <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-transparent bg-clip-text font-bold text-5xl">Zentra</span>
      <span className="font-light text-4xl text-white ml-1">Wealth</span>
    </Link>
    <span className="mb-4 flex flex-col gap-2 justify-start md:justify-start md:items-start items-start bg-white/5 p-3 rounded-xl sm:w-2/3 w-full mx-4 sm:mx-0 text-left sm:text-left"> {/* Right align for mobile */}
      <p className="text-white">Compliance Info</p>
      <p className="text-white/40">
        Compliance Officer: <span className="text-white">Iyyappan</span>
      </p>
      <p className="text-white/40">
        Number: <span className="text-white">+91 8870644386
        </span>
      </p>
      <p className="text-white/40">
        Email:<span className="text-white">tethertrades10101@gmail.com</span>
      </p>
    </span>

    <nav className="flex space-x-4 mt-4 md:mt-0 md:pr-28 justify-center md:justify-start">
      <a href="#" aria-label="Facebook">
        <Image src={Facebook} width={60} height={70} alt="" />
      </a>
      <a href="#" aria-label="LinkedIn">
        <Image src={LinkedIn} width={60} height={70} alt="" />
      </a>
      <a href="#" aria-label="Instagram">
        <Image src={Instagram} width={60} height={70} alt="" />
      </a>
      <a href="#" aria-label="YouTube">
        <Image src={Youtube} width={60} height={70} alt="" />
      </a>
      <a href="#" aria-label="Twitter">
        <Image src={Twitter} width={60} height={70} alt="" />
      </a>
    </nav>
  </nav>

  <nav className="flex flex-col gap-10 justify-start sm:flex-row sm:gap-20 items-start sm:justify-start sm:items-start sm:my-20 text-left sm:text-left pr-4 sm:pr-0"> {/* Right align for mobile */}
    <span className="flex flex-col gap-4 sm:gap-6">
      <h6 className="footer-title mb-4 text-white font-bold text-lg">Quick Links</h6>
      <Link className="text-white mb-2 hover:text-white/50" href="/about">About us</Link>
      <Link className="text-white mb-2 hover:text-white/50" href="/contact">Contact</Link>
    </span>
    <span className="flex flex-col gap-4 sm:gap-6">
      <h6 className="footer-title mb-4 text-white font-bold text-lg">Company</h6>
      <Link className="text-white mb-2 hover:text-white/50 " href="/terms">Terms & Conditions</Link>
      <Link className="text-white mb-2 hover:text-white/50" href="/privacy">Privacy Policy</Link>
      <Link className="text-white hover:text-white/50" href='/cookie'>Cookie Policy</Link>
    </span>
  </nav>

  <nav className="flex flex-col mt-10 sm:mt-20 items-start sm:justify-start sm:items-start text-left sm:text-left pr-4 sm:pr-0"> {/* Right align for mobile */}
    <h6 className="footer-title mb-4 text-white font-bold text-lg">Contact</h6>
    <span className="flex flex-col gap-4">
      <p className="text-white/30">Call us:</p>
      <span className="flex items-center gap-2 justify-start">
        <Link href="#" aria-label="Call">
          {/* Phone icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#28F2FF" fillOpacity="0.1" />
            <path d="M16.835 14.1796L15.1366 13.9856C14.9369 13.9622 14.7344 13.9843 14.5445 14.0503C14.3546 14.1163 14.1821 14.2245 14.0399 14.3668L12.8096 15.5972C10.9113 14.6317 9.36842 13.0888 8.403 11.1906L9.64005 9.95353C9.92758 9.666 10.068 9.26479 10.0212 8.8569L9.82728 7.17184C9.78937 6.84564 9.63283 6.54478 9.38745 6.32653C9.14208 6.10828 8.82501 5.98789 8.49662 5.98828H7.33981C6.5842 5.98828 5.95565 6.61684 6.00246 7.37244C6.35685 13.0829 10.9239 17.6433 16.6277 17.9977C17.3833 18.0445 18.0119 17.4159 18.0119 16.6603V15.5035C18.0186 14.8282 17.5104 14.2598 16.835 14.1796Z"
            fill="#28F2FF"/>          
            </svg>
        </Link>
        <p className="text-white mt-1">+91 8870644386 , +91 8122511997</p>
      </span>

      <p className="text-white/30">Whatsapp Us:</p>
      <span className="flex items-center gap-2 justify-start">
        <Link href="https://api.whatsapp.com/send?phone=8870644386" aria-label="Whatsapp">
          {/* Whatsapp icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#29E337" fillOpacity="0.1" />
            <path d="M8.67711 16.5458L9.18391 16.8419C10.0386 17.3403 11.0106 17.602 12 17.6C13.1076 17.6 14.1903 17.2716 15.1112 16.6562C16.0321 16.0409 16.7499 15.1663 17.1737 14.143C17.5976 13.1198 17.7085 11.9938 17.4924 10.9075C17.2763 9.8212 16.743 8.82337 15.9598 8.0402C15.1766 7.25703 14.1788 6.72368 13.0925 6.5076C12.0062 6.29152 10.8802 6.40242 9.85698 6.82627C8.83371 7.25012 7.95911 7.96789 7.34378 8.8888C6.72844 9.80972 6.40001 10.8924 6.40001 12C6.39797 12.9897 6.6599 13.962 7.15881 14.8168L7.45421 15.3236L6.99711 17.0043L8.67711 16.5458ZM5.00281 19L5.94921 15.5224C5.32557 14.4534 4.99794 13.2376 5.00001 12C5.00001 8.1339 8.13391 5 12 5C15.8661 5 19 8.1339 19 12C19 15.8661 15.8661 19 12 19C10.763 19.002 9.54767 18.6746 8.47901 18.0515L5.00281 19ZM9.47371 8.7156C9.56751 8.7086 9.66201 8.7086 9.75581 8.7128C9.79361 8.7156 9.83141 8.7198 9.86921 8.724C9.98051 8.7366 10.103 8.8045 10.1443 8.8983C10.3529 9.3715 10.5559 9.8482 10.7519 10.3263C10.7953 10.4327 10.7694 10.5692 10.6868 10.7022C10.6448 10.7701 10.579 10.8653 10.5027 10.9626C10.4236 11.0641 10.2535 11.2503 10.2535 11.2503C10.2535 11.2503 10.1842 11.3329 10.2108 11.4358C10.2206 11.475 10.2528 11.5317 10.2822 11.5793L10.3235 11.6458C10.5027 11.9447 10.7435 12.2478 11.0375 12.5334C11.1215 12.6146 11.2034 12.6979 11.2916 12.7756C11.6192 13.0647 11.9902 13.3006 12.3906 13.4756L12.3941 13.477C12.4536 13.5029 12.4837 13.5169 12.5705 13.554C12.6139 13.5722 12.6587 13.5876 12.7042 13.6002C12.7512 13.6122 12.8007 13.6099 12.8465 13.5937C12.8922 13.5775 12.9321 13.5481 12.9611 13.5092C13.4679 12.8953 13.5141 12.8554 13.5183 12.8554V12.8568C13.5535 12.824 13.5953 12.799 13.641 12.7837C13.6866 12.7684 13.735 12.763 13.7829 12.7679C13.8249 12.7707 13.8676 12.7784 13.9068 12.7959C14.2785 12.966 14.8868 13.2313 14.8868 13.2313L15.2942 13.414C15.3628 13.4469 15.4251 13.5246 15.4272 13.5995C15.43 13.6464 15.4342 13.722 15.4181 13.8606C15.3957 14.0419 15.3411 14.2596 15.2865 14.3737C15.2491 14.4515 15.1995 14.5229 15.1395 14.5851C15.0689 14.6592 14.9915 14.7267 14.9085 14.7867C14.8511 14.8301 14.821 14.8497 14.821 14.8497C14.7339 14.9049 14.6445 14.9563 14.5529 15.0037C14.3727 15.0994 14.1736 15.1544 13.9698 15.1647C13.8403 15.1717 13.7108 15.1815 13.5806 15.1745C13.575 15.1745 13.183 15.1136 13.183 15.1136C12.1878 14.8518 11.2674 14.3614 10.495 13.6814C10.3368 13.5421 10.1898 13.3923 10.04 13.2432C9.41841 12.6237 8.94731 11.9552 8.66101 11.3238C8.5152 11.014 8.43648 10.677 8.43001 10.3347C8.42738 9.90962 8.56655 9.4958 8.82551 9.1587C8.87661 9.0929 8.92491 9.0243 9.00821 8.9452C9.09641 8.8612 9.15311 8.8164 9.21401 8.7856C9.29498 8.74502 9.38331 8.72121 9.47371 8.7156Z"
            fill="#29E337"/>          
            </svg>
        </Link>
        <p className="text-white mt-1">+91 8870644386
        </p>
      </span>
    </span>
  </nav>
</footer>

      <footer className="footer bg-base-200 text-base-content border-base-300 bg-gradient-to-r from-black to-violet-950 border-t px-10 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <aside className="flex items-center mb-4 md:mb-0 md:ml-[80px]">
            <p className="text-center md:text-left md:text-base text-xs text-white/50">
              Copyright ©2024 Zentra Wealth. All rights reserved.
            </p>
          </aside>
        </div>
      </footer>
    </>
  );
};
 
export default Footer;