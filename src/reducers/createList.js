import { RECEIVE_TODOS } from '../actionTypes';

const createList = filter => (state = [], action) => {
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

export default createList;

export const getIds = state => state;
