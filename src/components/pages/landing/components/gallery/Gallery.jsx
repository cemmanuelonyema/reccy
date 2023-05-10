import React from 'react';
import styles from './Gallery.module.scss';
import { dish1 } from '../../../../../assets';

const galleryimages = [
      { src: dish1 },
      { src: dish1 },
      { src: dish1 },
      { src: dish1 },
      { src: dish1 },
      { src: dish1 },
      { src: dish1 },
      { src: dish1 },
      { src: dish1 },
      { src: dish1 },
      { src: dish1 },
      { src: dish1 },
];

export const Gallery = () => {
      return (
            <section>
                  <div className={styles.gallery}>
                        {galleryimages.map((data, i) => (
                              <figure className={styles.gallery_item} key={i}>
                                    <img
                                          src={data.src}
                                          alt="Photo of a food in our gallery"
                                    />
                              </figure>
                        ))}
                  </div>
            </section>
      );
};
