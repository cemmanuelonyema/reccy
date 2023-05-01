import React from 'react';
import styles from './TestimonyGallery.module.scss';
import Testimonial from '../testimonial/Testimonial';
import { Gallery } from '../gallery/Gallery';

const TestimonyGallery = () => {
      return (
            <section className={styles.tg}>
                  <div className={`${styles.tg__container} container`}>
                        <Testimonial />
                        <Gallery />
                  </div>
            </section>
      );
};

export default TestimonyGallery;
