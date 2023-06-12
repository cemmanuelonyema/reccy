import {
      GET_RECIPE,
      GET_SEARCH_RECIPE,
      NEXT_PAGE,
      PREVIOUS_PAGE,
      SET_LOADING,
} from '../actionTypes';

export const recipeReducer = (state, action) => {
      switch (action.type) {
            case SET_LOADING:
                  return {
                        ...state,

                        loading: true,
                  };
            case GET_SEARCH_RECIPE:
                  return {
                        ...state,
                        recipes: action.payload,
                        loading: false,
                  };
            case GET_RECIPE:
                  return {
                        ...state,
                        recipe: action.payload,
                        loading: false,
                  };
            case PREVIOUS_PAGE:
                  return {
                        ...state,
                        currentPage: state.currentPage - 1,
                  };
            case NEXT_PAGE:
                  return {
                        ...state,
                        currentPage: state.currentPage + 1,
                  };
      }
};
