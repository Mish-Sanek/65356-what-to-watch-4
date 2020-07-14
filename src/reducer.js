const initialState = {
  genre: `All genres`,
};

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`
};

const ActionCreator = {
  changeFilter: (genre) => {
    return {
      type: ActionType.CHANGE_FILTER,
      payload: genre
    };
  },
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        currentFilter: action.payload
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
