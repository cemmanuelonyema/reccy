import React from 'react';
import styles from './Features.module.scss';

const featuresData = [
      {
            id: 1,
            title: 'Feature 1',
            icon: 'icon',
            text:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magnam molestias i' +
                  'nventore amet deleniti dolorem. Odit maiores iste est cupiditate!',
      },
      {
            id: 2,
            title: 'Feature 2',
            icon: 'icon',
            text:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magnam molestias i' +
                  'nventore amet deleniti dolorem. Odit maiores iste est cupiditate!',
      },
      {
            id: 3,
            title: 'Feature 3',
            icon: 'icon',
            text:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magnam molestias i' +
                  'nventore amet deleniti dolorem. Odit maiores iste est cupiditate!',
      },
      {
            id: 4,
            title: 'Feature 4',
            icon: 'icon',
            text:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magnam molestias i' +
                  'nventore amet deleniti dolorem. Odit maiores iste est cupiditate!',
      },
];

const Features = () => {
      return (
            <section>
                  <div className={`${styles.footer__container} container`}>
                        <div>
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
                                          className={styles.featuresLi}
                                          key={data.id}
                                    >
                                          <span>{data.icon}</span>
                                          <h3>{data.title}</h3>
                                          <p>{data.text}</p>
                                    </li>
                              ))}
                        </ul>
                  </div>
            </section>
      );
};

export default Features;
