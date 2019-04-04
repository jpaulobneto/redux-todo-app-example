import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';
import { todo } from './todoReducer';

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO:
      return state.map(currentTodo => todo(currentTodo, action));
    default:
      return state;
  }
};

export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state;
    case 'completed':
      return state.filter(todoState => todoState.completed);
    case 'active':
      return state.filter(todoState => !todoState.completed);
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};
