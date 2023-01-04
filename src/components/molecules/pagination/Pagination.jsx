import React, { useContext } from 'react';
import { RecipeContext } from '../../../appState/recipe/RecipeProvider';
import styles from './Pagination.module.scss';

export const Pagination = () => {
      const {
            currentPage,
            recipes,
            itemsPerPage,
            setCurrentPage,
            nextPage,
            prevPage,
      } = useContext(RecipeContext);
      let pages = [];
      const totalPosts = recipes.length;
      const numOfPages = Math.ceil(totalPosts / itemsPerPage);
      console.log(currentPage);

      for (let i = 1; i <= numOfPages; i++) {
            pages.push(i);
      }

      const nextBtn = () => (
            <button className="btn--inline pagination__btn--next">
                  <span>Page ${currentPage + 1}</span>
                  <svg className="search__icon">
                        <use href="src/img/icons.svg#icon-arrow-right"></use>
                  </svg>
            </button>
      );
      const renderPagination =
            //on page 1 and there are other pages
            currentPage === 1 && numOfPages > 1 ? (
                  <button
                        className="btn--inline pagination__btn--next"
                        onClick={() => nextPage()}
                  >
                        <span>{`Page ${currentPage + 1}`}</span>
                  </button>
            ) : //last page
            currentPage === numOfPages && numOfPages > 1 ? (
                  <button
                        className="btn--inline pagination__btn--prev"
                        onClick={() => prevPage()}
                  >
                        <span>{`Page ${currentPage - 1}`}</span>
                  </button>
            ) : //other pages
            currentPage < numOfPages ? (
                  <div>
                        <button
                              className="btn--inline pagination__btn--prev"
                              onClick={() => prevPage()}
                        >
                              <span>{`Page ${currentPage - 1}`}</span>
                        </button>
                        <button
                              className="btn--inline pagination__btn--next"
                              onClick={() => nextPage()}
                        >
                              <span>{`Page ${currentPage + 1}`}</span>
                        </button>
                  </div>
            ) : (
                  //only one page
                  '  '
            );
      return (
            <div className={styles.pagination}>
                  {renderPagination}
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
