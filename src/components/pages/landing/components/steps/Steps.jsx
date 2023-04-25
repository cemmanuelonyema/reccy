import React from 'react';
import styles from './Steps.module.scss';

const stepsDate = [
      {
            id: '01',
            title: 'Step 01',
            img: 'image 01',
            text:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magnam molestias i' +
                  'nventore amet deleniti dolorem. Odit maiores iste est cupiditate!',
      },
      {
            id: '02',
            title: 'Step 2',
            img: 'image 2',
            text:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magnam molestias i' +
                  'nventore amet deleniti dolorem. Odit maiores iste est cupiditate!',
      },
      {
            id: '03',
            title: 'Step 3',
            img: 'image 3',
            text:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magnam molestias i' +
                  'nventore amet deleniti dolorem. Odit maiores iste est cupiditate!',
      },
];

const Steps = () => {
      return (
            <section>
                  <div className={`${styles.footer__container} container`}>
                        <div>
                              <h2>Steps</h2>
                              <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptas iusto illo cumque
                                    corrupti dolorum beatae.
                              </p>
                        </div>

                        <div className={styles.stepsUl}>
                              {stepsDate.map((data) => (
                                    <div
                                          className={styles.stepsLi}
                                          key={data.id}
                                    >
                                          <div>
                                                <span>{data.id}</span>
                                                <h3>{data.title}</h3>
                                                <p>{data.text}</p>
                                          </div>
                                          <div>
                                                <img
                                                      src={data.img}
                                                      alt={`image ${data.id}`}
                                                />
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Steps;
