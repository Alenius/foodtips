import React, { useReducer, createContext } from 'react';

interface StateIfc {
  cuisine: string;
  tags: [string];
}

interface ActionIfc {
  type: string;
  payload: string;
}

const initState: StateIfc = {
  cuisine: '',
  tags: ['']
};

const FoodContext = createContext(initState);
const { Provider } = FoodContext;

interface Props {
  children: React.ReactNode;
}

const StateProvider: React.FC<Props> = ({ children }): React.ReactNode => {
  const reducer = (state: StateIfc, action: ActionIfc): StateIfc => {
    switch (action.type) {
      case 'setFilter':
        return { ...state, cuisine: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const value = { state, dispatch };

  return <Provider value={value}>{children}</Provider>;
};

export { FoodContext, StateProvider };
