import React, { useContext } from 'react';
import { RecipeContext } from '../../../appState/recipe/RecipeProvider';
import { RecipeItem } from '../recipeItem/RecipeItem';
import styles from './RecipeList.module.scss';

export const RecipeList = () => {
      //context hook
      const { recipes } = useContext(RecipeContext);

      return (
            <ul className={`${styles.recipes__list}`}>
                  {recipes.map((recipe, i) => (
                        <RecipeItem key={recipe.id} recipe={recipe} />
                  ))}
            </ul>
      );
};
