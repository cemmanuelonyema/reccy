//dependency import
import React from 'react';
import { Link } from 'react-router-dom';
//files import
import styles from './RecipeItem.module.scss';

export const RecipeItem = ({ recipe }) => {
      return (
            <li className={styles.recipe}>
                  <Link to={`/recipes/${recipe?.id}`}>
                        <div className={styles.recipe__imgBox}>
                              <img
                                    src={recipe?.image_url}
                                    alt="recipe image"
                                    className={styles.recipe__img}
                              />
                        </div>
                        <div className={styles.recipe__content}>
                              <span className={styles.recipe__title}>
                                    {recipe?.title}
                              </span>
                              <span className={styles.recipe__publisher}>
                                    Publisher: {recipe?.publisher}
                              </span>
                        </div>
                  </Link>
            </li>
      );
};
