import React from 'react';
import styles from './Pricing.module.scss';
import { Card } from './PriceCard';

const pricesData = [
      {
            id: 1,
            title: 'lorem 1',
            img: 'img 1',
            price: '$ 457',
            items: [
                  'lorem data 1',
                  'lorem data 1',
                  'lorem data 1',
                  'lorem data 1',
            ],
      },
      {
            id: 2,
            title: 'lorem 2',
            img: 'img 2',
            price: '$ 457',
            items: [
                  'lorem data 2',
                  'lorem data 2',
                  'lorem data 2',
                  'lorem data 2',
            ],
      },
      {
            id: 3,
            title: 'lorem 3',
            img: 'img 3',
            price: '$ 457',
            items: [
                  'lorem data 3',
                  'lorem data 3',
                  'lorem data 3',
                  'lorem data 3',
            ],
      },
];

const Pricing = () => {
      return (
            <section className={styles.price}>
                  <div className={`${styles.price__container} container`}>
                        <div>
                              <h2>Pricing</h2>
                              <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Iure sapiente in tempore!
                                    Neque, eveniet optio!
                              </p>
                        </div>
                        <div className={styles.prices}>
                              {pricesData.map((item) => (
                                    <Card key={item.id} data={item} />
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Pricing;
