import React from 'react';
import styles from './Hero.module.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
      return (
            <section>
                  Hero
                  <Link to="/recipes"> Search Recipe</Link>
            </section>
      );
};

export default Hero;
