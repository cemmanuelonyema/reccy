import React, { useReducer, createContext } from 'react';
import axios from 'axios';
import {
      GET_RECIPE,
      GET_SEARCH_RECIPE,
      SET_CURRENT_PAGE,
} from '../actionTypes';
import { recipeReducer } from './recipeReducer';
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
      const initialState = {
            recipes: [],
            recipe: {},
            loading: true,
            currentPage: 1,
            itemsPerPage: 12,
      };

      const [state, dispatch] = useReducer(recipeReducer, initialState);

      const baseUrl = 'https://forkify-api.herokuapp.com/api/v2/recipes';

      const getSearchRecipes = async (query) => {
            try {
                  const url = `${baseUrl}/?search=${query}`;
                  const res = await axios.get(url);
                  dispatch({
                        type: GET_SEARCH_RECIPE,
                        payload: res.data.data.recipes,
                  });
            } catch (err) {
                  console.log(err);
                  dispatch({
                        type: RECIPE_ERROR,
                        payload: err.message,
                  });
            }
      };

      const getRecipe = async (id) => {
            try {
                  const url = `${baseUrl}/${id}`;
                  const res = await axios.get(url);
                  dispatch({
                        type: GET_RECIPE,
                        payload: res.data.data.recipe,
                  });
            } catch (err) {
                  dispatch({
                        type: RECIPE_ERROR,
                        payload: err.message,
                  });
            }
      };
      const setCurrentPage = (pageNo) => {
            dispatch({
                  type: SET_CURRENT_PAGE,
                  payload: pageNo,
            });
      };

      return (
            <RecipeContext.Provider
                  value={{
                        recipes: state.recipes,
                        recipe: state.recipe,
                        loading: state.loading,
                        currentPage: state.currentPage,
                        itemsPerPage: state.itemsPerPage,
                        getSearchRecipes,
                        getRecipe,
                        setCurrentPage,
                  }}
            >
                  {children}
            </RecipeContext.Provider>
      );
};
