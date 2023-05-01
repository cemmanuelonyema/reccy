import React from 'react';
import styles from './Gallery.module.scss';
import img1 from '/img/customer-1.jpg';

const galleryimages = [
      { src: img1 },
      { src: img1 },
      { src: img1 },
      { src: img1 },
      { src: img1 },
      { src: img1 },
      { src: img1 },
      { src: img1 },
      { src: img1 },
      { src: img1 },
      { src: img1 },
      { src: img1 },
];

export const Gallery = () => {
      return (
            <section>
                  <div class={styles.gallery}>
                        {galleryimages.map(() => (
                              <figure class={styles.gallery_item}>
                                    <img
                                          src={img1}
                                          alt="Photo of a food in our gallery"
                                    />
                              </figure>
                        ))}
                  </div>
            </section>
      );
};
