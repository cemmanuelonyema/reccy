import React from 'react';
import { RecipeItem } from '../../molecules/recipeItem/RecipeItem';
import styles from './Recipes.module.scss';

export const Recipes = () => {
      const datas = [1, 2, 3, 4, 5, 67, 8, 9, 0];
      return (
            <div>
                  {datas.map((x, i) => (
                        <RecipeItem key={i} />
                  ))}
            </div>
      );
};
