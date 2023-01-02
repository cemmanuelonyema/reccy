import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//style
import styles from './RecipeDetail.module.scss';

export const RecipeDetail = ({ recipe }) => {
      //hooks
      const { id } = useParams();
      //useEffect
      useEffect(() => {}, [id]);

      return (
            <section className={styles.recipeDetail}>
                  <div className= {`${styles.recipeDetail__container} container`}>
                              <h1  className={styles.recipeDetail__title}>{recipe?.title}</h1>
                              <div  className={styles.recipeDetail__imgBox}>
                                    <img  className={styles.recipeDetail__img}
                                          src={recipe?.image_url}
                                          alt="recipe img"
                                    />
                              </div>

                              <div className={styles.recipeDetail__content}>
                                    <div  className={styles.recipeDetail__ingredients}>
                                          <h2  className={styles.ingredient__title}>
                                                Recipe ingredients
                                          </h2>
                                          <ul className={styles.ingredient__list}>
                                                <li className={styles.ingredient__item}>
                                                      <svg className={styles.ingredient__icon}>
                                                            <use href="src/img/icons.svg#icon-check"></use>
                                                      </svg>
                                                      <div className={styles.ingredient__quantity}>
                                                            1000
                                                      </div>
                                                      <div className={styles.ingredient__description}>
                                                            <span className={styles.ingredient__unit}>
                                                                  g
                                                            </span>
                                                            pasta
                                                      </div>
                                                </li>

                                                <li className={styles.ingredient__item}>
                                                      <svg className="recipe__icon">
                                                            <use href="src/img/icons.svg#icon-check"></use>
                                                      </svg>
                                                      <div className="recipe__quantity">
                                                            0.5
                                                      </div>
                                                      <div className="recipe__description">
                                                            <span className="recipe__unit">
                                                                  cup
                                                            </span>
                                                            ricotta cheese
                                                      </div>
                                                </li>
                                          </ul>
                                    </div>

                                    <div  className={styles.recipeDetail__direction}>
                                          <h3 className={styles.direction__tilte}>
                                                How to cook it
                                          </h3>
                                          <p className={styles.direction__text}>
                                                This recipe was carefully
                                                designed and tested by
                                                <span className={styles.directionText__highlight}>
                                                      {recipe?.publisher}.
                                                </span>
                                                 Please check out directions at
                                                their website.
                                          </p>
                                          <a
                                                href={recipe?.source_url}
                                                target="_blank"
                                          >
                                                <span>Directions</span>
                                                <svg>
                                                      <use href="src/img/icons.svg#icon-arrow-right"></use>
                                                </svg>
                                          </a>
                                    </div>
                              </div>
                              </div>
            </section>
      );
};
