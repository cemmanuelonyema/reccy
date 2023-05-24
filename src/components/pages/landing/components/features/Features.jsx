import React from 'react';
import styles from './Features.module.scss';

const featuresData = [
      {
            id: 1,
            title: 'Never cook again!',
            icon: 'icon',
            text: 'Our subscriptions cover 365 days per year, even including major holidays.',
      },
      {
            id: 2,
            title: 'Local and organic',
            icon: 'icon',
            text: 'Our cooks only use local, fresh, and organic products to prepare your meals.',
      },
      {
            id: 3,
            title: 'No waste',
            icon: 'icon',
            text: 'All our partners only use reusable containers to package all your meals.',
      },
      {
            id: 4,
            title: 'Pause anytime',
            icon: 'icon',
            text: 'Going on vacation? Just pause your subscription, and we refund unused days.',
      },
];

const Features = () => {
      return (
            <section className={styles.features}>
                  <div className={`${styles.features__container} container`}>
                        <div className={styles.textBox}>
                              <h2>Features</h2>
                              <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Exercitationem harum saepe
                                    corrupti similique inventore esse?
                              </p>
                        </div>

                        <ul className={styles.featuresUl}>
                              {featuresData.map((data) => (
                                    <li
                                          className={styles.feature}
                                          key={data.id}
                                    >
                                          <span className={styles.feature_icon}>
                                                {data.icon}
                                          </span>
                                          <h3 className={styles.feature_title}>
                                                {data.title}
                                          </h3>
                                          <p className={styles.feature_text}>
                                                {data.text}
                                          </p>
                                    </li>
                              ))}
                        </ul>
                  </div>
            </section>
      );
};

export default Features;
