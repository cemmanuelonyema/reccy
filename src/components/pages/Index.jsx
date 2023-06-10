import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecipeDetail } from './recipeDetail/RecipeDetail';
import { Recipes } from './recipes/Recipes';
import Landing from './landing/Landing';

const AppRoutes = () => {
      return (
            <>
                  <Routes>
                        {/* <Route path="/" index element={<Landing />} /> */}
                        <Route path="/" element={<Recipes />} />
                        <Route path="/recipes/:id" element={<RecipeDetail />} />
                  </Routes>
            </>
      );
};

export default AppRoutes;
