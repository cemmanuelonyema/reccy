import React, { useContext } from 'react';
import { RecipeContext } from '../../../appState/recipe/RecipeProvider';
import styles from './Pagination.module.scss';

export const Pagination = () => {
      const { currentPage, recipes, itemsPerPage, setCurrentPage } =
            useContext(RecipeContext);
      let pages = [];
      const totalPosts = recipes.length;

      for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
            pages.push(i);
      }

      return (
            <div className={styles.pagination}>
                  {pages.map((page, index) => {
                        return (
                              <button
                                    key={index}
                                    className={styles.pagination__btn}
                                    onClick={() => setCurrentPage(page)}
                              >
                                    {page}
                              </button>
                        );
                  })}
            </div>
      );
};
