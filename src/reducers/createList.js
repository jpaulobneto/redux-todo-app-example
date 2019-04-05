import { combineReducers } from 'redux';
import { RECEIVE_TODOS, REQUEST_TODOS } from '../actionTypes';

const createList = (filter) => {
  const ids = (state = [], action) => {
    const { payload = {} } = action;
    if (payload.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case RECEIVE_TODOS:
        return payload.response.map(todoItem => todoItem.id);
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
      case REQUEST_TODOS:
        return true;
      case RECEIVE_TODOS:
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
  });
};

export default createList;

export const getIds = state => state.ids;
export const getIsFetching = state => state.isFetching;
