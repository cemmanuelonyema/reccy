import React, { useContext } from 'react';
import { RecipeContext } from '../../../appState/recipe/RecipeProvider';
import { Icon } from '../../atoms/icon/Icon';
import styles from './Pagination.module.scss';

export const Pagination = () => {
      const { currentPage, recipes, itemsPerPage, nextPage, prevPage } =
            useContext(RecipeContext);
      const totalPosts = recipes.length;
      const numOfPages = Math.ceil(totalPosts / itemsPerPage);

      const renderPagination =
            //on page 1 and there are other pages
            currentPage === 1 && numOfPages > 1 ? (
                  <button
                        className={styles.pagination__btn}
                        onClick={() => nextPage()}
                  >
                        <span className={styles.btnContent}>
                              {`Page ${currentPage + 1}`}
                              <Icon iconName="arrow-right" />
                        </span>
                  </button>
            ) : //last page
            currentPage === numOfPages && numOfPages > 1 ? (
                  <button
                        className={styles.pagination__btn}
                        onClick={() => prevPage()}
                  >
                        <span className={styles.btnContent}>
                              <Icon iconName="arrow-left" />
                              {`Page ${currentPage - 1}`}
                        </span>
                  </button>
            ) : //other pages
            currentPage < numOfPages ? (
                  <div className={styles.pagination__btns}>
                        <button
                              className={styles.pagination__btn}
                              onClick={() => prevPage()}
                        >
                              <span className={styles.btnContent}>
                                    <Icon iconName="arrow-left" />
                                    {`Page ${currentPage - 1}`}{' '}
                              </span>
                        </button>
                        <button
                              className={styles.pagination__btn}
                              onClick={() => nextPage()}
                        >
                              <span className={styles.btnContent}>
                                    {' '}
                                    {`Page ${currentPage + 1}`}{' '}
                                    <Icon iconName="arrow-right" />
                              </span>
                        </button>
                  </div>
            ) : (
                  //only one page- render nothing
                  '  '
            );
      return <div className={styles.pagination}>{renderPagination}</div>;
};
