import { useReducer, createContext, useMemo } from 'react';

export const MovieContext = createContext();

export const initialState = {
  loader: false,
  selectedMovie: {}
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'IS_LOADING':
      return {
        ...state,
        loader: payload
      };
    case 'SET_SELECTED_MOVIE':
      return {
        ...state,
        loader: payload
      };

    default:
      return state;
  }
};

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <MovieContext.Provider value={store}>{children}</MovieContext.Provider>
  );
};

export const MovieConsumer = MovieContext.Consumer;
