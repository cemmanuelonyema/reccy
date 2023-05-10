import React from 'react';
import styles from './Gallery.module.scss';
import { dish1 } from '../../../../../assets';

const imgSection1 = [dish1, dish1, dish1, dish1, dish1, dish1];
const imgSection2 = [dish1, dish1, dish1, dish1, dish1, dish1];

export const Gallery = () => {
      return (
            <section>
                  <div className={styles.gallery}>
                        {/* {galleryimages.map(({ section1 }, i) => (
                              <figure className={styles.gallery_item} key={i}>
                                    {section1.map((x, i) => (
                                          <img
                                                src={x}
                                                alt="Photo of a food in our gallery"
                                          />
                                    ))}
                              </figure>
                        ))} */}
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
            </section>
      );
};
