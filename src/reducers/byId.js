const byId = (state = {}, action) => {
  const { payload = {} } = action;
  if (payload.response) {
    return {
      ...state,
      ...payload.response.entities.todos,
    };
  }

  return state;
};

export default byId;

export const getTodo = (state, id) => state[id];
