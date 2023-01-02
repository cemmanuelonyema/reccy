import React from 'react';
import { RecipeList} from '../../molecules/recipeList/RecipeList';
import styles from './Recipes.module.scss';

export const Recipes = () => {
      return (
            <section className={styles.recipes}>
                <div className= {`${styles.recipes__container} container`}>
                <RecipeList/>
                </div>
            </section>
      );
};
