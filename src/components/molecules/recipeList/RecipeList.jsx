import React from 'react';
import { RecipeItem } from '../recipeItem/RecipeItem';
import styles from  './RecipeList.module.scss';

export const RecipeList = () => {
      const datas = [1, 2, 3, 4, 5, 67, 8, 9, 0];

      return (
                <ul className= {`${styles.recipes__list}`}>
                        {datas.map((x,i) => (
                              <RecipeItem key={i}  />
                        ))}
                  </ul>
      );
};