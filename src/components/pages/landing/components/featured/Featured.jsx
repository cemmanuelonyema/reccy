import React from 'react';
import styles from './Featured.module.scss';
import {
      featured1,
      featured2,
      featured3,
      featured4,
      featured5,
} from '../../../../../assets';

const logos = [
      { src: featured1 },
      { src: featured2 },
      { src: featured3 },
      { src: featured4 },
      { src: featured5 },
];

const Featured = () => {
      return (
            <section className={styles.featured}>
                  <div className={`${styles.featured__container} container`}>
                        <h2 class="heading-featured-in">As featured in</h2>

                        <div class={styles.logos}>
                              {logos.map((logo, i) => (
                                    <div className={styles.imgBox}>
                                          <img
                                                key={i}
                                                src={logo.src}
                                                alt=" logo image"
                                                className={styles.logoImg}
                                          />
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Featured;
