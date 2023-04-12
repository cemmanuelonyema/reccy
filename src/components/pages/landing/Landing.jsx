import React from 'react';
import styles from './Landing.module.scss';
import { Link } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Featured from './components/featured/Featured';
import Meals from './components/meals/Meals';
import Testimonial from './components/testimonial/Testimonial';
import { Gallery } from './components/gallery/Gallery';
import Features from './components/features/Features';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Steps from './components/steps/Steps';

const Landing = () => {
      return (
            <>
                  <Hero />
                  <Featured />
                  <Features />
                  <Steps />
                  <Meals />
                  <Testimonial />
                  <Gallery />
                  <Pricing />
                  <Contact />
            </>
      );
};

export default Landing;
