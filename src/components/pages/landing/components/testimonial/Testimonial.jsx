import React from 'react';
import styles from './Testimonial.module.scss';

const Testimonial = () => {
      return (
            <section class="section-testimonials" id="testimonials">
                  <div class="testimonials-container">
                        <span class="subheading">Testimonials</span>
                        <h2 class="heading-secondary">
                              Once you try it, you can't go back
                        </h2>

                        <div class="testimonials">
                              <figure class="testimonial">
                                    <img
                                          class="testimonial-img"
                                          alt="Photo of customer Dave Bryson"
                                          src="img/customers/dave.jpg"
                                    />
                                    <blockquote class="testimonial-text">
                                          Inexpensive, healthy and great-tasting
                                          meals, without even having to order
                                          manually! It feels truly magical.
                                    </blockquote>
                                    <p class="testimonial-name">
                                          &mdash; Dave Bryson
                                    </p>
                              </figure>

                              <figure class="testimonial">
                                    <img
                                          class="testimonial-img"
                                          alt="Photo of customer Ben Hadley"
                                          src="img/customers/ben.jpg"
                                    />
                                    <blockquote class="testimonial-text">
                                          The AI algorithm is crazy good, it
                                          chooses the right meals for me every
                                          time. It's amazing not to worry about
                                          food anymore!
                                    </blockquote>
                                    <p class="testimonial-name">
                                          &mdash; Ben Hadley
                                    </p>
                              </figure>

                              <figure class="testimonial">
                                    <img
                                          class="testimonial-img"
                                          alt="Photo of customer Steve Miller"
                                          src="img/customers/steve.jpg"
                                    />
                                    <blockquote class="testimonial-text">
                                          Omnifood is a life saver! I just
                                          started a company, so there's no time
                                          for cooking. I couldn't live without
                                          my daily meals now!
                                    </blockquote>
                                    <p class="testimonial-name">
                                          &mdash; Steve Miller
                                    </p>
                              </figure>

                              <figure class="testimonial">
                                    <img
                                          class="testimonial-img"
                                          alt="Photo of customer Hannah Smith"
                                          src="img/customers/hannah.jpg"
                                    />
                                    <blockquote class="testimonial-text">
                                          I got Omnifood for the whole family,
                                          and it frees up so much time! Plus,
                                          everything is organic and vegan and
                                          without plastic.
                                    </blockquote>
                                    <p class="testimonial-name">
                                          &mdash; Hannah Smith
                                    </p>
                              </figure>
                        </div>
                  </div>
            </section>
      );
};

export default Testimonial;
