import React from 'react';
import { RecipeList} from '../../molecules/recipeList/RecipeList';
import { SearchForm} from '../../molecules/searchForm/SearchForm';
import styles from './Recipes.module.scss';

export const Recipes = () => {
      return (
            <section className={styles.recipes}>
                <div className= {`${styles.recipes__container} container`}>
                <SearchForm/>
                <RecipeList/>
                </div>
            </section>
      );
};
