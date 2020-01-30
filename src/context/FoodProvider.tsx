import React, { useReducer, createContext } from 'react';
import cuisines from '../constants/cusines';

interface StateIfc {
  cuisine: string[];
  tags: string[];
}

type UpdateCuisineAction = {
  type: 'UPDATE_CUISINE';
  payload: string[];
};

type UpdateTagsAction = {
  type: 'UPDATE_TAGS';
  payload: string[];
};

type Actions = UpdateCuisineAction | UpdateTagsAction;

interface ContextIfc {
  state: StateIfc;
  dispatch: (action: Actions) => void;
}

const initState: StateIfc = {
  cuisine: [],
  tags: []
};

const FoodContext = createContext<ContextIfc>({
  state: initState,
  dispatch: () => null
});

const FoodProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const reducer = (state: StateIfc, action: Actions): StateIfc => {
    switch (action.type) {
      case 'UPDATE_CUISINE':
        return { ...state, cuisine: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const { Provider } = FoodContext;

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { FoodContext, FoodProvider };
