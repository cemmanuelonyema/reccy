import React from 'react';
import { Pagination } from '../../molecules/pagination/Pagination';
import { RecipeList } from '../../molecules/recipeList/RecipeList';
import { SearchForm } from '../../molecules/searchForm/SearchForm';
import { Footer } from '../../shared/footer/Footer';
import styles from './Recipes.module.scss';

export const Recipes = () => {
      return (
            <section className={styles.recipes}>
                  <div className={`${styles.recipes__container} container`}>
                        <SearchForm />
                        <RecipeList />
                        <Pagination />
                  </div>
                  <Footer />
            </section>
      );
};
