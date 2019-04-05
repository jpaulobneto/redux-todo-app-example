import { combineReducers } from 'redux';
import { RECEIVE_TODOS } from '../actionTypes';

const byId = (state = {}, action) => {
  const { payload = {} } = action;
  switch (action.type) {
    case RECEIVE_TODOS:
      return payload.response.reduce(
        (nextState, responseItem) => {
          nextState[responseItem.id] = responseItem;
          return nextState;
        },
        { ...state },
      );
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  const { payload = {} } = action;
  if (payload.filter !== 'all') {
    return state;
  }
  switch (action.type) {
    case RECEIVE_TODOS:
      return payload.response.map(todoItem => todoItem.id);
    default:
      return state;
  }
};

const activeIds = (state = [], action) => {
  const { payload = {} } = action;
  if (payload.filter !== 'active') {
    return state;
  }
  switch (action.type) {
    case RECEIVE_TODOS:
      return payload.response.map(todoItem => todoItem.id);
    default:
      return state;
  }
};

const completedIds = (state = [], action) => {
  const { payload = {} } = action;
  if (payload.filter !== 'completed') {
    return state;
  }
  switch (action.type) {
    case RECEIVE_TODOS:
      return payload.response.map(todoItem => todoItem.id);
    default:
      return state;
  }
};

const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds,
});

export const todos = combineReducers({
  byId,
  idsByFilter,
});

export const getVisibleTodos = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
};
