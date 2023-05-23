import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { RecipeContext } from '../../../appState/recipe/RecipeProvider';
import { Icon } from '../../atoms/icon/Icon';
import { Footer } from '../../shared/footer/Footer';

//style
import styles from './RecipeDetail.module.scss';

const recipe = {
      ingredients: [
            {
                  quantity: 1,
                  unit: '',
                  description: 'tbsp. canola or olive oil',
            },
            {
                  quantity: 0.5,
                  unit: 'cup',
                  description: 'chopped sweet onion',
            },
            {
                  quantity: 3,
                  unit: 'cups',
                  description: 'diced fresh red yellow and green bell peppers',
            },
            {
                  quantity: 1,
                  unit: '',
                  description: 'tube refrigerated pizza dough',
            },
            {
                  quantity: 0.5,
                  unit: 'cup',
                  description: 'salsa',
            },
            {
                  quantity: 2,
                  unit: 'cups',
                  description: 'sargento chefstyle shredded pepper jack cheese',
            },
            {
                  quantity: null,
                  unit: '',
                  description: 'Chopped cilantro or dried oregano',
            },
      ],
      source_url:
            'http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/',
      image_url:
            'http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg',
      title: 'Spicy Chicken and Pepper Jack Pizza',
      servings: 4,
      cooking_time: 45,
};

export const RecipeDetail = () => {
      //hooks
      const { getRecipe } = useContext(RecipeContext);
      //   const { getRecipe, recipe } = useContext(RecipeContext);
      console.log(recipe);
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
                                    <span>{recipe?.title}</span>
                              </h1>
                        </figure>

                        <div class={styles.recipeDetail__details}>
                              <div class={styles.recipeDetail__info}>
                                    <Icon iconName="clock" />
                                    <span
                                          class={`${styles.recipeDetail__infoData} ${styles.recipeDetail__infoDataMinutes}`}
                                    >
                                          {recipe.cooking_time}
                                    </span>
                                    <span class={styles.recipeDetail__infoText}>
                                          minutes
                                    </span>
                              </div>
                              <div class={styles.recipeDetail__info}>
                                    <Icon iconName="users" />

                                    <span
                                          class={`${styles.recipeDetail__infoData} ${styles.recipeDetail__infoDataPeople}`}
                                    >
                                          {recipe.servings}
                                    </span>
                                    <span class={styles.recipeDetail__infoText}>
                                          servings
                                    </span>

                                    <div
                                          class={
                                                styles.recipeDetail__infoButtons
                                          }
                                    >
                                          <button class="btn--tiny btn--increase-servings">
                                                <Icon iconName="minus-circle" />
                                          </button>
                                          <button class="btn--tiny btn--increase-servings">
                                                <Icon iconName="plus-circle" />
                                          </button>
                                    </div>
                              </div>

                              <div class="recipe__user-generated">
                                    <button class="btn--round">
                                          <Icon iconName="user" />
                                    </button>
                              </div>
                              <button class="btn--round">
                                    <Icon iconName="bookmark-fill" />
                              </button>
                        </div>

                        <div class={styles.recipeDetail__ingredients}>
                              <h2 class="heading--2">Recipe ingredients</h2>
                              <ul class={styles.recipeDetail__ingredientList}>
                                    {/* <li class={styles.recipeDetail__ingredient}>
                                          <Icon iconName="check" />

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
                                          <Icon iconName="check" />

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
                                    </li> */}

                                    {recipe?.ingredients?.map((item) => (
                                          <li
                                                class={
                                                      styles.recipeDetail__ingredient
                                                }
                                          >
                                                <FaCheckCircle
                                                      size={24}
                                                      color="#55c57a"
                                                />
                                                {/* <div className={styles.ingredient_box}>
                                                      <span>
                                                            {item.quantity}
                                                      </span>
                                                      <span> {item.unit}</span>
                                                      <span>
                                                            {item.description}
                                                      </span>
                                                </div> */}

                                                <div
                                                      class={
                                                            styles.recipeDetail__quantity
                                                      }
                                                >
                                                      <span>
                                                            {item.quantity}
                                                      </span>
                                                      <span></span>
                                                </div>

                                                <div
                                                      class={
                                                            styles.recipeDetail__description
                                                      }
                                                >
                                                      <span class="recipe__unit">
                                                            {item.unit}
                                                      </span>
                                                      {item.description}
                                                </div>
                                          </li>
                                    ))}
                              </ul>
                        </div>
                        <div class={styles.recipeDetail__directions}>
                              <h2 class="heading--2">How to cook it</h2>
                              <p class={styles.recipeDetail__directionsText}>
                                    This recipe was carefully designed and
                                    tested by
                                    <span class="recipeDetail__publisher">
                                          {recipe?.publisher}
                                    </span>
                                    . Please check out directions at their
                                    website.
                              </p>
                              <a
                                    class="btn--small recipe__btn"
                                    href={recipe?.source_url}
                                    target="_blank"
                              >
                                    <span>Directions</span>
                                    <Icon iconName="arrow-right" />
                              </a>
                        </div>
                  </div>
                  <Footer />
            </section>
      );
};
