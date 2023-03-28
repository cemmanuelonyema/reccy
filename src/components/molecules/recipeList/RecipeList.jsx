import React, { useContext } from 'react';
import { RecipeContext } from '../../../appState/recipe/RecipeProvider';
import { RecipeItem } from '../recipeItem/RecipeItem';
import styles from './RecipeList.module.scss';

export const RecipeList = () => {
      //context hook
      const { recipes, currentPage, itemsPerPage } = useContext(RecipeContext);
      //variables
      const indexOfLastPage = currentPage * itemsPerPage;
      const indexOfFirstPage = indexOfLastPage - itemsPerPage;
      const currentItems = recipes.slice(indexOfFirstPage, indexOfLastPage);

      return (
            <section className={styles.recipes_section}>
                  <div className={styles.results}>
                        {recipes.length} Results found
                  </div>
                  <ul className={styles.recipes__list}>
                        {currentItems.map((recipe) => (
                              <RecipeItem key={recipe.id} recipe={recipe} />
                        ))}
                  </ul>
            </section>
      );
};
