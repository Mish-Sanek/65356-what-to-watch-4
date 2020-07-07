const initialState = {
  cardId: 0,
};

const ActionType =  {
  CHANGE_CARD_ID: `Change card id`
};

const ActionCreator = {
  changeCardId: () => {

  },
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const reducer = (state = initialState) => {
  extend(state, ActionCreator);
};

export {reducer, ActionType};
