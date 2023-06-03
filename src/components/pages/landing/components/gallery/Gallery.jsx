import React from 'react';
import styles from './Gallery.module.scss';
import { dish1 } from '../../../../../assets';

const imgSection1 = [dish1, dish1, dish1, dish1, dish1, dish1];
const imgSection2 = [dish1, dish1, dish1, dish1, dish1, dish1];

export const Gallery = () => {
      return (
            <section id="gallery">
                  <div className={`${styles.t__container} container`}>
                        <h2>Dish gallery</h2>
                        <div className={styles.gallery}>
                              <div className={styles.imgSection1}>
                                    {imgSection1.map((x, i) => (
                                          <img
                                                src={x}
                                                alt="Photo of a food in our gallery"
                                          />
                                    ))}
                              </div>
                              <div className={styles.imgSection2}>
                                    {imgSection2.map((x, i) => (
                                          <img
                                                src={x}
                                                alt="Photo of a food in our gallery"
                                          />
                                    ))}
                              </div>
                        </div>
                  </div>
            </section>
      );
};
