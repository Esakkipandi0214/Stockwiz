// components/HeroSection.tsx

import React from 'react';
import Image from 'next/image';
import Profile from '../../public/admin.jpg'
import Hero from '../Components/mainPages/hero'
import Marquee from '@/Components/mainPages/marque';
import Testimonial from '@/Components/mainPages/Testimonial';
import DataDisplay from '@/Components/mainPages/DataContent';
import Testimonial2 from '@/Components/mainPages/Testimonial2';
import DataDisplay2 from '@/Components/mainPages/DataContent2';
import TopFeauture from '@/Components/mainPages/TopFeature'
import Performmance from '../Components/mainPages/Performance'

const HeroSection: React.FC = () => {
  return (
    <>
    <Hero/>
    <Marquee/>
    <Testimonial/>
    <DataDisplay/>
    <Testimonial2/>
    <DataDisplay2/>
    <TopFeauture/>
    <Performmance/>
    </>
  );
};

export default HeroSection;
