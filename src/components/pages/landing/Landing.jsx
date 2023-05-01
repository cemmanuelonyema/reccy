import React from 'react';
import styles from './Landing.module.scss';
import { Link } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Featured from './components/featured/Featured';
import Meals from './components/meals/Meals';
import Features from './components/features/Features';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Steps from './components/steps/Steps';
import Footer from './components/footer/Footer';
import TestimonyGallery from './components/TestimontGallery/TestimonyGallery';

const Landing = () => {
      return (
            <>
                  <Hero />
                  <Featured />
                  <Features />
                  <Steps />
                  <Meals />
                  <TestimonyGallery />

                  <Pricing />
                  <Contact />
                  <Footer />
            </>
      );
};

export default Landing;
