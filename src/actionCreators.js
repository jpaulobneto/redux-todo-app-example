import { normalize } from 'normalizr';
import * as schema from './schema';
import {
  ADD_TODO_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  TOGGLE_TODO,
} from './actionTypes';
import * as api from './api';
import { getIsFetching } from './rootReducer';

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: FETCH_TODOS_REQUEST,
    payload: { filter },
  });

  /**
   * Error callback is better than .catch to avoid catch internal errors from the success callback
   */
  return api.fetchTodos(filter).then(
    response => dispatch({
      type: FETCH_TODOS_SUCCESS,
      payload: { filter, response: normalize(response, schema.arrayOfTodos) },
    }),
    error => dispatch({
      type: FETCH_TODOS_FAILURE,
      payload: { filter, message: error.message || 'Something went wrong.' },
    }),
  );
};

export const addTodo = text => dispatch => api.addTodo(text).then(response => dispatch({
  type: ADD_TODO_SUCCESS,
  payload: { response: normalize(response, schema.todo) },
}));

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});
