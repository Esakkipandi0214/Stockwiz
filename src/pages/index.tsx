// components/HeroSection.tsx

import React from 'react';
import Image from 'next/image';
import Profile from '../../public/admin.jpg'
import Hero from '../Components/mainPages/hero'
import Marquee from '@/Components/mainPages/marque';
import Marquee2 from '@/Components/mainPages/marque2';
import Testimonial from '@/Components/mainPages/Testimonial';
import DataDisplay from '@/Components/mainPages/DataContent';
import Testimonial2 from '@/Components/mainPages/Testimonial2';
import DataDisplay2 from '@/Components/mainPages/DataContent2';
import TopFeauture from '@/Components/mainPages/TopFeature'
import Performmance from '../Components/mainPages/Performance'
import TradeInvester from "../Components/mainPages/TradeInester"
import Membership from "../Components/mainPages/Membership"
import Pricing from '@/Components/mainPages/Pricing';
import Whystackwiz from '../Components/mainPages/WhyStackwiz'
import MeetYourMetor from '../Components/mainPages/MeetYourMentor'
import  CustomerTestimonial from '../Components/mainPages/CustomerTestimonial'
import WitnessRetail from '../Components/mainPages/WitnessRetail'
import PlayStore from '../Components/mainPages/PlayStore'

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
    <Marquee2/>
    <TradeInvester/>
    <Membership/>
    <Pricing/>
    <Whystackwiz/>
    <MeetYourMetor/>
    <CustomerTestimonial/>
    <WitnessRetail/>
   
    </>
  );
};

export default HeroSection;
