import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecipeDetail } from './recipeDetail/RecipeDetail';
import { Recipes } from './recipes/Recipes';

export const Index = () => {
      return (
            <>
                  <Routes>
                        <Route path="/" index element={<Recipes />} />
                        <Route
                              path="/recipes/:id"
                              index
                              element={<RecipeDetail />}
                        />
                  </Routes>
            </>
      );
};
