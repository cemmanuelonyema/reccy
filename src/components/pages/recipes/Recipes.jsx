import React from 'react';
import { Pagination } from '../../molecules/pagination/Pagination';
import { RecipeList } from '../../molecules/recipeList/RecipeList';
import { SearchForm } from '../../molecules/searchForm/SearchForm';
import { Footer } from '../../shared/footer/Footer';
import styles from './Recipes.module.scss';
import Header from '../../layout/header/Header';

export const Recipes = () => {
      return (
            <section className={styles.recipes}>
                  <Header />
                  <div className={`${styles.recipes__container} container`}>
                        <RecipeList />
                        <Pagination />
                  </div>
                  <Footer />
            </section>
      );
};
