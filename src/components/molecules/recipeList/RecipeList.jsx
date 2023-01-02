import React from 'react';
import { RecipeItem } from '../recipeItem/RecipeItem';
import styles from  './RecipeList.module.scss';

export const RecipeList = () => {
      const datas = [1, 2, 3, 4, 5, 67, 8, 9, 0];

      return (
           <section className={styles.recipes}>
                <ul className= {`${styles.recipes__list} container`}>
                        {datas.map((x,i) => (
                              <RecipeItem key={i}  />
                        ))}
                  </ul>
            </section>
      );
};