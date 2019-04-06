import { FETCH_TODOS_SUCCESS, ADD_TODO_SUCCESS } from '../actionTypes';

const byId = (state = {}, action) => {
  const { payload = {} } = action;
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return payload.response.reduce(
        (nextState, responseItem) => {
          nextState[responseItem.id] = responseItem;
          return nextState;
        },
        { ...state },
      );
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        [payload.response.id]: payload.response,
      };
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];
