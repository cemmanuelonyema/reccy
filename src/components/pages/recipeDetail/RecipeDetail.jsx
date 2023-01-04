import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../../../appState/recipe/RecipeProvider';
//style
import styles from './RecipeDetail.module.scss';

export const RecipeDetail = () => {
      //hooks
      const { getRecipe, recipe } = useContext(RecipeContext);
      const { id } = useParams();
      //useEffect
      useEffect(() => {
            getRecipe(id);
      }, [id]);

      return (
             <section className={styles.recipeDetail}>
                  <div
                        className={`${styles.recipeDetail__container} container`}
                  >
                        <figure class={styles.recipeDetail__fig}>
                              <img
                                    // src={recipe?.image_url}
                                    src="/public/2.jpg"
                                    alt={recipe?.title}
                                    className={styles.recipeDetail__img}
                              />
                              <h1 className={styles.recipeDetail__title}>
                                    <span>Pasta with tomato cream sauce</span>
                              </h1>
                        </figure>

                        <div class={styles.recipeDetail__details}>
                              <div class={styles.recipeDetail__info}>
                                    <span
                                          class={`${styles.recipeDetail__infoData} ${styles.recipeDetail__infoDataMinutes}`}
                                    >
                                          45
                                    </span>
                                    <span class={styles.recipeDetail__infoText}>
                                          minutes
                                    </span>
                              </div>
                              <div class={styles.recipeDetail__info}>
                                    <span
                                          class={`${styles.recipeDetail__infoData} ${styles.recipeDetail__infoDataPeople}`}
                                    >
                                          4
                                    </span>
                                    <span class={styles.recipeDetail__infoText}>
                                          servings
                                    </span>

                                    <div
                                          class={
                                                styles.recipeDetail__infoButtons
                                          }
                                    >
                                          <button class="btn--tiny btn--increase-servings"></button>
                                          <button class="btn--tiny btn--increase-servings"></button>
                                    </div>
                              </div>

                              <div class="recipe__user-generated">
                                    <span>icon</span>
                              </div>
                              <button class="btn--round">
                                    <span>icon</span>
                              </button>
                        </div>

                        <div class={styles.recipeDetail__ingredients}>
                              <h2 class="heading--2">Recipe ingredients</h2>
                              <ul class={styles.recipeDetail__ingredientList}>
                                    <li class={styles.recipeDetail__ingredient}>
                                          <div
                                                class={
                                                      styles.recipeDetail__quantity
                                                }
                                          >
                                                1000
                                          </div>
                                          <div
                                                class={
                                                      styles.recipeDetail__description
                                                }
                                          >
                                                <span class="recipeDetail__unit">
                                                      g
                                                </span>
                                                pasta
                                          </div>
                                    </li>

                                    <li class={styles.recipeDetail__ingredient}>
                                          <div
                                                class={
                                                      styles.recipeDetail__quantity
                                                }
                                          >
                                                0.5
                                          </div>
                                          <div
                                                class={
                                                      styles.recipeDetail__description
                                                }
                                          >
                                                <span class="recipe__unit">
                                                      cup
                                                </span>
                                                ricotta cheese
                                          </div>
                                    </li>
                              </ul>
                        </div>
                        <div class={styles.recipeDetail__directions}>
                              <h2 class="heading--2">How to cook it</h2>
                              <p class={styles.recipeDetail__directionsText}>
                                    This recipe was carefully designed and
                                    tested by
                                    <span class="recipeDetail__publisher">
                                          The Pioneer Woman
                                    </span>
                                    . Please check out directions at their
                                    website.
                              </p>
                              <a
                                    class="btn--small recipe__btn"
                                    href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
                                    target="_blank"
                              >
                                    <span>Directions</span>
                              </a>
                        </div>
                  </div>
            </section>
      );
};
