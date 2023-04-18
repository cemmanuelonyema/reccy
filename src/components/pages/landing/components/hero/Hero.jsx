import React from 'react';
import styles from './Hero.module.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
      return (
            <section class="section-hero">
                  <div class={styles.hero}>
                        <div class="hero-text-box">
                              <h1 class="heading-primary">
                                    A healthy meal delivered to your door, every
                                    single day
                              </h1>
                              <p class="hero-description">
                                    The smart 365-days-per-year food
                                    subscription that will make you eat healthy
                                    again. Tailored to your personal tastes and
                                    nutritional needs.
                              </p>
                              <a
                                    href="#cta"
                                    class="btn btn--full margin-right-sm"
                              >
                                    Start eating well
                              </a>

                              <Link to="recipes" class="btn btn--outline">
                                    Search recipes&darr;
                              </Link>
                              <div class="delivered-meals">
                                    <div class={styles.imgs}>
                                          <img
                                                src="/img/customer-1.jpg"
                                                alt="Customer photo"
                                          />
                                          <img
                                                src="/img/customer-2.jpg"
                                                alt="Customer photo"
                                          />
                                          <img
                                                src="/img/customer-3.jpg"
                                                alt="Customer photo"
                                          />
                                          <img
                                                src="/img/customer-4.jpg"
                                                alt="Customer photo"
                                          />
                                          <img
                                                src="/img/customer-5.jpg"
                                                alt="Customer photo"
                                          />
                                          <img
                                                src="/img/customer-6.jpg"
                                                alt="Customer photo"
                                          />
                                    </div>
                                    <p class="delivered-text">
                                          <span>250,000+</span> meals delivered
                                          last year!
                                    </p>
                              </div>
                        </div>
                        <div class="hero-img-box">
                              <picture>
                                    <source
                                          srcset="img/hero.webp"
                                          type="image/webp"
                                    />
                                    <source
                                          srcset="img/hero-min.png"
                                          type="image/png"
                                    />

                                    <img
                                          src="img/hero-min.png"
                                          class="hero-img"
                                          alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                                    />
                              </picture>
                        </div>
                  </div>
            </section>
      );
};

export default Hero;
