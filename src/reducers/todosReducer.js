import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
});

export const todos = combineReducers({
  byId,
  listByFilter,
});

/**
 * Because listByFilter is defined in this file, the getVisibleTodos selector can make assumptions
 * about it state shape and access the listByFilter directly. However, the implementation of
 * createList is in a separate file. So this is why it uses the fromList.getIds selector to
 * get ids from it. This lets you change the state stored by the reducers, without having to change
 * the components or your tests, if you use the selectors to get the reducers in your tests.
 */
export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};
