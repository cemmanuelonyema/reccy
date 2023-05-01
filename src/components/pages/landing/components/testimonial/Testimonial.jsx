import React from 'react';
import styles from './Testimonial.module.scss';

const testimonialData = [
      {
            id: 1,
            quote:
                  'Inexpensive, healthy and great-tasting                  meals, without even ha' +
                  'ving to order    manually! It feels truly magical ',
            author: ' Dave Bryson',
            img: '',
      },
      {
            id: 2,
            quote:
                  'The AI algorithm is crazy good, it chooses the right meals for me every time. It' +
                  's amazing not to worry bout                                          food anymor' +
                  'e!',
            author: 'Ben Hadley',
            img: '',
      },
      {
            id: 3,
            quote:
                  '  Omnifood is a life saver! I just                                      started ' +
                  'a company, so there s no time                                          for cooki' +
                  'ng. I couldnt live without                                          my daily mea' +
                  'ls now!',
            author: 'Steve Miller',
            img: '',
      },
      {
            id: 4,
            quote:
                  '   I got Omnifood for the whole family, ' +
                  ' and it frees up so much time! Plus, ' +
                  'everything is organic and vegan and without plastic' +
                  '',
            author: 'Hannah Smith',
            img: '',
      },
];

const Testimonial = () => {
      return (
            <section class="section-testimonials" id="testimonials">
                  <div class="testimonials-container">
                        <span class="subheading">Testimonials</span>
                        <h2 class="heading-secondary">
                              Once you try it, you can't go back
                        </h2>

                        <div class={styles.testimonials}>
                              {testimonialData.map((data) => (
                                    <figure class="testimonial">
                                          <img
                                                class={styles.testimonial_img}
                                                alt="Photo of customer"
                                                src={data.img}
                                          />
                                          <blockquote
                                                class={styles.testimonial_text}
                                          >
                                                {data.quote}
                                          </blockquote>
                                          <p class={styles.testimonial_name}>
                                                &mdash; {data.author}
                                          </p>
                                    </figure>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Testimonial;
