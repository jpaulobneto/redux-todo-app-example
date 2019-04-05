import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../../rootReducer';

const thunk = store => next => action => (typeof action === 'function' ? action(store.dispatch) : next(action));

export const configureStore = () => {
  const middlewares = [thunk];

  return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
};
