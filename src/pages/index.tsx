// components/HeroSection.tsx

import React from 'react';
import Image from 'next/image';
import Profile from '../../public/admin.jpg'
import Hero from '../Components/mainPages/hero'
import Marquee from '@/Components/mainPages/marque';
import Testimonial from '@/Components/mainPages/Testimonial';

const HeroSection: React.FC = () => {
  return (
    <>
    <Hero/>
    <Marquee/>
    <Testimonial/>
    </>
  );
};

export default HeroSection;
