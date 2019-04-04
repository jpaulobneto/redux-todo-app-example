import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';
import { todo } from './todoReducer';

const byId = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_TODO:
    case TOGGLE_TODO:
      return {
        ...state,
        [payload.id]: todo(state[payload.id], action),
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_TODO:
      return [...state, payload.id];
    default:
      return state;
  }
};

export const todos = combineReducers({
  byId,
  allIds,
});

const getAllTodos = state => state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case 'all':
      return allTodos;
    case 'completed':
      return allTodos.filter(todoState => todoState.completed);
    case 'active':
      return allTodos.filter(todoState => !todoState.completed);
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};
