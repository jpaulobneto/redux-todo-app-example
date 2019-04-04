import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../../rootReducer';

export const configureStore = () => {
  const middlewares = [promise];

  return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
};
