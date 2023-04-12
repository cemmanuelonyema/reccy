import React from 'react';
import styles from './Landing.module.scss';
import { Link } from 'react-router-dom';

const Landing = () => {
      return (
            <div>
                  Landing
                  <nav>
                        <Link to="/recipes">search recipes</Link>
                  </nav>
            </div>
      );
};

export default Landing;
