import React from 'react';
import FooterOne from '../../layout/footers/footer';
import Footer from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Header from '../../layout/headers/header';
import BrandSlider from '../elements/brand/brandslider';
import HeroSlider from '../elements/hero/heroslider';
import BlogSection from './blog-section';
import FactSection from './fact-section';
import FoundationSection from './foundation-section';
import PortfolioSection from './portfolio-section';
import PricingSection from './pricing-section';
import ServiceSection from './service-section';
import ServiceSectionFour from '../home-4/service-section-four';
import TestimonialSection from './testimonial-section';
import WorkSection from './work-section';


const index = () => {
  return (
    <main>
      <HeaderOne />
      <HeroSlider />
      <ServiceSection />
      <FoundationSection />
      
      <ServiceSectionFour/>
      <WorkSection />
      <PricingSection />
      <PortfolioSection />
     
      <TestimonialSection />
   
      <BrandSlider />
      <FooterOne />
    </main>
  );
};

export default index;