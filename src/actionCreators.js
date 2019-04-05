import { v4 } from 'uuid';
import {
  ADD_TODO, RECEIVE_TODOS, TOGGLE_TODO, REQUEST_TODOS,
} from './actionTypes';
import * as api from './api';

const requestTodos = filter => ({
  type: REQUEST_TODOS,
  payload: { filter },
});

const receiveTodos = (filter, response) => ({
  type: RECEIVE_TODOS,
  payload: { filter, response },
});

export const fetchTodos = filter => (dispatch) => {
  dispatch(requestTodos(filter));
  return api.fetchTodos(filter).then(response => dispatch(receiveTodos(filter, response)));
};

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: v4(),
    text,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});
