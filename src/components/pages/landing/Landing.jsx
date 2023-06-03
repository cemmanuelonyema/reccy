import React from 'react';
import Hero from './components/hero/Hero';
import Meals from './components/meals/Meals';
import Features from './components/features/Features';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Steps from './components/steps/Steps';
import Footer from './components/footer/Footer';
import Testimonial from './components/testimonial/Testimonial';
import { Gallery } from './components/gallery/Gallery';
import LandingNav from './components/nav/landingNav';

const Landing = () => {
      return (
            <>
                  <LandingNav />
                  <Hero />
                  <Features />
                  <Steps />
                  <Meals />
                  <Testimonial />
                  <Gallery />
                  <Pricing />
                  <Contact />
                  <Footer />
            </>
      );
};

export default Landing;
