import { v4 } from 'uuid';
import {
  ADD_TODO, FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, TOGGLE_TODO,
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
      payload: { filter, response },
    }),
    error => dispatch({
      type: FETCH_TODOS_FAILURE,
      payload: { filter, message: error.message || 'Something went wrong.' },
    }),
  );
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
