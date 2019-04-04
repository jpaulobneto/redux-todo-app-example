import { v4 } from 'uuid';
import { ADD_TODO, RECEIVE_TODOS, TOGGLE_TODO } from './actionTypes';
import * as api from './api';

const receiveTodos = (filter, response) => ({
  type: RECEIVE_TODOS,
  payload: { filter, response },
});

export const fetchTodos = filter =>
  api.fetchTodos(filter).then(response => receiveTodos(filter, response));

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
