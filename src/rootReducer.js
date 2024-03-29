import { combineReducers } from 'redux';
import * as fromTodos from './reducers/todosReducer';

const { todos } = fromTodos;
export const rootReducer = combineReducers({
  todos,
});

export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos, filter);
export const getIsFetching = (state, filter) => fromTodos.getIsFetching(state.todos, filter);
export const getErrorMessage = (state, filter) => fromTodos.getErrorMessage(state.todos, filter);
