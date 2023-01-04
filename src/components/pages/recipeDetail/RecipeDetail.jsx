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
                                    src={recipe?.image_url}
                                    alt={recipe?.title}
                                    className={styles.recipeDetail__img}
                              />
                              <h1 className={styles.recipeDetail__title}>
                                    <span>Pasta with tomato cream sauce</span>
                              </h1>
                        </figure>

                        {/* <div className={styles.recipeDetail__content}>
                              <div className={styles.recipeDetail__ingredients}>
                                    <h2 className={styles.ingredient__title}>
                                          Recipe ingredients
                                    </h2>
                                    <ul className={styles.ingredient__list}>
                                          <li
                                                className={
                                                      styles.ingredient__item
                                                }
                                          >
                                                <svg
                                                      className={
                                                            styles.ingredient__icon
                                                      }
                                                >
                                                      <use href="src/img/icons.svg#icon-check"></use>
                                                </svg>
                                                <div
                                                      className={
                                                            styles.ingredient__quantity
                                                      }
                                                >
                                                      1000
                                                </div>
                                                <div
                                                      className={
                                                            styles.ingredient__description
                                                      }
                                                >
                                                      <span
                                                            className={
                                                                  styles.ingredient__unit
                                                            }
                                                      >
                                                            g
                                                      </span>
                                                      pasta
                                                </div>
                                          </li>

                                          <li
                                                className={
                                                      styles.ingredient__item
                                                }
                                          >
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

                              <div className={styles.recipeDetail__direction}>
                                    <h3 className={styles.direction__tilte}>
                                          How to cook it
                                    </h3>
                                    <p className={styles.direction__text}>
                                          This recipe was carefully designed and
                                          tested by
                                          <span
                                                className={
                                                      styles.directionText__highlight
                                                }
                                          >
                                                {recipe?.publisher}.
                                          </span>
                                          Please check out directions at their
                                          website.
                                    </p>
                                    <a
                                          href={recipe?.source_url}
                                          target="_blank"
                                          rel="nofollow noopener noreferrer"
                                    >
                                          <span>Directions</span>
                                          <svg>
                                                <use href="src/img/icons.svg#icon-arrow-right"></use>
                                          </svg>
                                    </a>
                              </div>
                        </div> */}

                        <div class="recipe__details">
                              <div class="recipe__info">
                                    <svg class="recipe__info-icon">
                                          <use href="src/img/icons.svg#icon-clock"></use>
                                    </svg>
                                    <span class="recipe__info-data recipe__info-data--minutes">
                                          45
                                    </span>
                                    <span class="recipe__info-text">
                                          minutes
                                    </span>
                              </div>
                              <div class="recipe__info">
                                    <svg class="recipe__info-icon">
                                          <use href="src/img/icons.svg#icon-users"></use>
                                    </svg>
                                    <span class="recipe__info-data recipe__info-data--people">
                                          4
                                    </span>
                                    <span class="recipe__info-text">
                                          servings
                                    </span>

                                    <div class="recipe__info-buttons">
                                          <button class="btn--tiny btn--increase-servings">
                                                <svg>
                                                      <use href="src/img/icons.svg#icon-minus-circle"></use>
                                                </svg>
                                          </button>
                                          <button class="btn--tiny btn--increase-servings">
                                                <svg>
                                                      <use href="src/img/icons.svg#icon-plus-circle"></use>
                                                </svg>
                                          </button>
                                    </div>
                              </div>
                        </div>
                        <div class="recipe__user-generated">
                              <svg>
                                    <use href="src/img/icons.svg#icon-user"></use>
                              </svg>
                        </div>
                        <button class="btn--round">
                              <svg class="">
                                    <use href="src/img/icons.svg#icon-bookmark-fill"></use>
                              </svg>
                        </button>
                  <div class="recipe__ingredients">
                        <h2 class="heading--2">Recipe ingredients</h2>
                        <ul class="recipe__ingredient-list">
                              <li class="recipe__ingredient">
                                    <svg class="recipe__icon">
                                          <use href="src/img/icons.svg#icon-check"></use>
                                    </svg>
                                    <div class="recipe__quantity">1000</div>
                                    <div class="recipe__description">
                                          <span class="recipe__unit">g</span>
                                          pasta
                                    </div>
                              </li>

                              <li class="recipe__ingredient">
                                    <svg class="recipe__icon">
                                          <use href="src/img/icons.svg#icon-check"></use>
                                    </svg>
                                    <div class="recipe__quantity">0.5</div>
                                    <div class="recipe__description">
                                          <span class="recipe__unit">cup</span>
                                          ricotta cheese
                                    </div>
                              </li>
                        </ul>
                  </div>

                  <div class="recipe__directions">
                        <h2 class="heading--2">How to cook it</h2>
                        <p class="recipe__directions-text">
                              This recipe was carefully designed and tested by
                              <span class="recipe__publisher">
                                    The Pioneer Woman
                              </span>
                              . Please check out directions at their website.
                        </p>
                        <a
                              class="btn--small recipe__btn"
                              href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
                              target="_blank"
                        >
                              <span>Directions</span>
                              <svg class="search__icon">
                                    <use href="src/img/icons.svg#icon-arrow-right"></use>
                              </svg>
                        </a>
                  </div>
                  </div>

            </section>
      );
};
