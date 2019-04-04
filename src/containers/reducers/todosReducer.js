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
