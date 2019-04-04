import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../../containers/rootReducer';

export const configureStore = () => {
  const middlewares = [];

  return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
};
