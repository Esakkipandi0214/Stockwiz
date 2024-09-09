// components/HeroSection.tsx

import React from 'react';
import Hero from '../Components/mainPages/hero'
import Marquee from '@/Components/mainPages/marque';
import Marquee2 from '@/Components/mainPages/marque2';
import Testimonial from '@/Components/mainPages/Testimonial';
import DataDisplay from '@/Components/mainPages/DataContent';
import Testimonial2 from '@/Components/mainPages/Testimonial2';
import DataDisplay2 from '@/Components/mainPages/DataContent2';
import Performmance from '../Components/mainPages/Performance'
import TradeInvester from "../Components/mainPages/TradeInester"
// import Membership from "../Components/mainPages/Membership"
// import Pricing from '@/Components/mainPages/Pricing';
import Whystackwiz from '../Components/mainPages/WhyStackwiz'
// import MeetYourMetor from '../Components/mainPages/MeetYourMentor'
import  CustomerTestimonial from '../Components/mainPages/CustomerTestimonial'
import WitnessRetail from '../Components/mainPages/WitnessRetail'
import { TimelineDemo } from '@/Components/mainPages/Timeline';
// import StockCard from '../Components/mainPages/Past';
const HeroSection: React.FC = () => {
  return (
    <>
    <Hero/>
    <Marquee/>
    <Testimonial/>
    <DataDisplay/>
    <Testimonial2/>
    <DataDisplay2/>
    <TimelineDemo />  
    <Performmance/>
    <Marquee2/>
    <TradeInvester/>
    {/* <Membership/> */}
    {/* <Pricing/> */}
    <Whystackwiz/>
    {/* <MeetYourMetor/> */}
    <CustomerTestimonial/>
    <WitnessRetail/>
    {/* <StockCard/> */}
    </>
  );
};

export default HeroSection;
