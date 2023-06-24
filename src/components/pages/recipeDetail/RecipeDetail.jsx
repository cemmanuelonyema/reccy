import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../../../appState/recipe/RecipeProvider';
import {
      MdPeople,
      FaBookmark,
      FaCheckCircle,
      FaClock,
      FiPlusCircle,
      FiMinusCircle,
      FaArrowRight,
} from '../../../assets/index';
import { Footer } from '../../shared/footer/Footer';

//style
import styles from './RecipeDetail.module.scss';
import { BtnLink } from '../../atoms/btn/BtnLink';

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
                              <h1 className={styles.recipeDetail__title}>
                                    <span>{recipe?.title}</span>
                              </h1>
                              <div className={styles.imgBox}>
                                    <img
                                          src={recipe?.image_url}
                                          alt={recipe?.title}
                                          className={styles.recipeDetail__img}
                                    />
                              </div>
                        </figure>

                        <div class={styles.recipeDetail__ingredients}>
                              <h2 class="heading--2">Recipe ingredients</h2>
                              <ul class={styles.recipeDetail__ingredientList}>
                                    {recipe?.ingredients?.map((item) => (
                                          <li
                                                class={
                                                      styles.recipeDetail__ingredient
                                                }
                                          >
                                                <FaCheckCircle
                                                      size={24}
                                                      color="#f38e82"
                                                />

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

                              <BtnLink href={recipe?.source_url}>
                                    <span>Directions</span>
                                    <FaArrowRight />
                              </BtnLink>
                        </div>
                  </div>
                  <Footer />
            </section>
      );
};

// <div class={styles.recipeDetail__details}>
//       <div className={styles.detail__info}>
//             <div class={styles.recipeDetail__info}>
//                   <FaClock size={24} />
//                   <span
//                         class={`${styles.recipeDetail__infoData} ${styles.recipeDetail__infoDataMinutes}`}
//                   >
//                         {recipe.cooking_time}
//                   </span>
//                   <span class={styles.recipeDetail__infoText}>minutes</span>
//             </div>
//             <div class={styles.recipeDetail__info}>
//                   <MdPeople size={24} />

//                   <span
//                         class={`${styles.recipeDetail__infoData} ${styles.recipeDetail__infoDataPeople}`}
//                   >
//                         {recipe.servings}
//                   </span>
//                   <span class={styles.recipeDetail__infoText}>servings</span>

//                   <div class={styles.recipeDetail__infoButtons}>
//                         <button class="btn--tiny btn--increase-servings">
//                               <FiMinusCircle size={24} />
//                         </button>
//                         <button class="btn--tiny btn--increase-servings">
//                               <FiPlusCircle size={24} />
//                         </button>
//                   </div>
//             </div>
//       </div>

//       {/* <div class="recipe__user-generated">
//                                     <button class="btn--round">
//                                           <Icon iconName="user" />
//                                     </button>
//                               </div>
//                                */}
//       <button class="btn--round">
//             <FaBookmark size={24} />
//       </button>
// </div>;
