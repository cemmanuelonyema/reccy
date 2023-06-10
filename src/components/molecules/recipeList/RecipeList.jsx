import React, { useContext } from 'react';
import { RecipeContext } from '../../../appState/recipe/RecipeProvider';
import { RecipeItem } from '../recipeItem/RecipeItem';
import styles from './RecipeList.module.scss';
import Loading from '../loading/Loading';
import EmptyState from '../emptyState/EmptyState';

export const RecipeList = () => {
      //context hook
      const { recipes, currentPage, itemsPerPage, loading } =
            useContext(RecipeContext);
      //variables
      const indexOfLastPage = currentPage * itemsPerPage;
      const indexOfFirstPage = indexOfLastPage - itemsPerPage;
      const currentItems = recipes.slice(indexOfFirstPage, indexOfLastPage);

      if (recipes !== null && recipes.length === 0) {
            return <EmptyState />;
      }

      if (loading) {
            return <Loading />;
      }

      return (
            <section className={styles.recipes_section}>
                  <div className={styles.results}>
                        {recipes.length !== 0 && (
                              <span className={styles.span}>
                                    <span className={styles.length}>
                                          {recipes.length}
                                    </span>
                                    Results Found
                              </span>
                        )}
                  </div>
                  <ul className={styles.recipes__list}>
                        {currentItems.map((recipe) => (
                              <RecipeItem key={recipe.id} recipe={recipe} />
                        ))}
                  </ul>
            </section>
      );
};
