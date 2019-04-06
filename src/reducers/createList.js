import { combineReducers } from 'redux';
import {
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
} from '../actionTypes';

const createList = (filter) => {
  const handleToggle = (state, payload) => {
    // state is an array of ids
    const { result: toggledId, entities } = payload.response;
    const { completed } = entities.todos[toggledId];
    const shouldRemove = (
      (completed && filter === 'active') ||
      (!completed && filter === 'completed')
    );

    return shouldRemove
      ? state.filter(id => id !== toggledId)
      : state;
  };

  const ids = (state = [], action) => {
    const { payload = {} } = action;
    switch (action.type) {
      case FETCH_TODOS_SUCCESS:
        return filter === payload.filter ? payload.response.result : state;
      case ADD_TODO_SUCCESS:
        return filter !== 'completed' ? [...state, payload.response.result] : state;
      case TOGGLE_TODO_SUCCESS:
        return handleToggle(state, payload);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    const { payload = {} } = action;
    if (payload.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case FETCH_TODOS_REQUEST:
        return true;
      case FETCH_TODOS_FAILURE:
      case FETCH_TODOS_SUCCESS:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    const { payload = {} } = action;
    if (payload.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case FETCH_TODOS_FAILURE:
        return payload.message;
      case FETCH_TODOS_REQUEST:
      case FETCH_TODOS_SUCCESS:
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  });
};

export default createList;

export const getIds = state => state.ids;
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;
