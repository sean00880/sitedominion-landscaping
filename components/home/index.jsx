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
import AboutMain from '../about/aboutmain2'


const index = () => {
  return (
    <main>
      <HeaderOne />
      <HeroSlider />
      <ServiceSection />
      <AboutMain />
      
      <ServiceSectionFour/>
      <WorkSection />
      <PricingSection />
      <PortfolioSection />
     
      <TestimonialSection />
      <BlogSection />
      <FooterOne />
    </main>
  );
};

export default index;