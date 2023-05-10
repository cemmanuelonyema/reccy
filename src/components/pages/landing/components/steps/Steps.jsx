import React from 'react';
import styles from './Steps.module.scss';
import app from '../../../../../assets/img/app.png';

const stepsData = [
      {
            id: '01',
            title: 'Step 01',
            img: app,
            text:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magnam molestias i' +
                  'nventore amet deleniti dolorem. Odit maiores iste est cupiditate!',
      },
      {
            id: '02',
            title: 'Step 2',
            img: app,
            text:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magnam molestias i' +
                  'nventore amet deleniti dolorem. Odit maiores iste est cupiditate!',
      },
      {
            id: '03',
            title: 'Step 3',
            img: app,
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
                              {stepsData.map((data) => (
                                    <div
                                          className={styles.stepsLi}
                                          key={data.id}
                                    >
                                          <div className={styles.stepImgBox}>
                                                <img
                                                      src={data.img}
                                                      alt={`image ${data.id}`}
                                                />
                                          </div>
                                          <div>
                                                <span>{data.id}</span>
                                                <h3>{data.title}</h3>
                                                <p>{data.text}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Steps;
