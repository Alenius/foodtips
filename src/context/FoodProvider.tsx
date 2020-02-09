import React, { useReducer, createContext } from 'react';
import { Recipe } from 'interfaces';

interface StateIfc {
  cuisine: string[];
  tags: string[];
  selectedRecipes: Recipe[];
  loggedIn: boolean;
}

type UpdateCuisineAction = {
  type: 'UPDATE_CUISINE';
  payload: string[];
};

type UpdateTagsAction = {
  type: 'UPDATE_TAGS';
  payload: string[];
};

type UpdateSelectedRecipes = {
  type: 'UPDATE_SELECTED_RECIPES';
  payload: Recipe[];
};

type Actions = UpdateCuisineAction | UpdateTagsAction | UpdateSelectedRecipes;

interface ContextIfc {
  state: StateIfc;
  dispatch: (action: Actions) => void;
}

const initState: StateIfc = {
  cuisine: [],
  tags: [],
  selectedRecipes: [],
  loggedIn: false,
};

const FoodContext = createContext<ContextIfc>({
  state: initState,
  dispatch: () => null,
});

const FoodProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const reducer = (state: StateIfc, action: Actions): StateIfc => {
    switch (action.type) {
      case 'UPDATE_CUISINE':
        return { ...state, cuisine: action.payload };
      case 'UPDATE_TAGS':
        return { ...state, tags: action.payload };
      case 'UPDATE_SELECTED_RECIPES':
        return { ...state, selectedRecipes: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const { Provider } = FoodContext;

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { FoodContext, FoodProvider };
