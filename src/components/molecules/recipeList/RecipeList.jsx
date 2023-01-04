import React, { useContext } from 'react';
import { RecipeContext } from '../../../appState/recipe/RecipeProvider';
import { RecipeItem } from '../recipeItem/RecipeItem';
import styles from './RecipeList.module.scss';

export const RecipeList = () => {
      //context hook
      const { recipes, currentPage, itemsPerPage } = useContext(RecipeContext);
      //variables
      const indexOfLastPage = currentPage * itemsPerPage;
      const indexOfFirstPage = indexOfLastPage - itemsPerPage;
      const currentItems = recipes.slice(indexOfFirstPage, indexOfLastPage);

      return (
            <ul className={`${styles.recipes__list}`}>
                  {currentItems.map((recipe, i) => (
                        // <RecipeItem key={recipe.id} recipe={recipe} />
                        <RecipeItem key={i} />
                  ))}
            </ul>
      );
};
