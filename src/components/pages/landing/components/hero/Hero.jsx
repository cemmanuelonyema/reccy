import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';
import {
      cus1,
      cus2,
      cus3,
      cus4,
      cus5,
      cus6,
      heroDish,
} from '../../../../../assets';

const customers = [cus1, cus2, cus3, cus4, cus5, cus6];

const Hero = () => {
      return (
            <section className={styles.hero}>
                  <div className={`${styles.hero__container} container`}>
                        <div className="hero-text-box">
                              <h1 className="heading-primary">
                                    A healthy meal delivered to your door, every
                                    single day
                              </h1>
                              <p className="hero-description">
                                    The smart 365-days-per-year food
                                    subscription that will make you eat healthy
                                    again. Tailored to your personal tastes and
                                    nutritional needs.
                              </p>
                              <a
                                    href="#cta"
                                    className="btn btn--full margin-right-sm"
                              >
                                    Start eating well
                              </a>

                              <Link to="recipes" className="btn btn--outline">
                                    Search recipes&darr;
                              </Link>
                              <div className="delivered-meals">
                                    <div className={styles.imgs}>
                                          {customers.map((cus, i) => (
                                                <img
                                                      key={i}
                                                      src={cus}
                                                      alt="Customer photo"
                                                />
                                          ))}
                                    </div>
                                    <p className="delivered-text">
                                          <span>250,000+</span> meals delivered
                                          last year!
                                    </p>
                              </div>
                        </div>
                        <div className={styles.hero_imgBox}>
                              {/* <picture>
                                    <source
                                          srcset="img/hero.webp"
                                          type="image/webp"
                                    />
                                    <source
                                          srcset="img/hero-min.png"
                                          type="image/png"
                                    />

                                    <img
                                          src={heroDish}
                                          className="hero-img"
                                          alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                                    />
                              </picture> */}

                              <img src={heroDish} alt="hero dish" />
                        </div>
                  </div>
            </section>
      );
};

export default Hero;
