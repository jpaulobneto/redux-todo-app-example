import { FETCH_TODOS_SUCCESS } from '../actionTypes';

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
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];
