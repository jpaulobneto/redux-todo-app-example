import { RECEIVE_TODOS } from '../actionTypes';

const byId = (state = {}, action) => {
  const { payload = {} } = action;
  switch (action.type) {
    case RECEIVE_TODOS:
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
