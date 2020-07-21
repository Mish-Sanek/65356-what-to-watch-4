const initialState = {
  genre: `All genres`,
};

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  AUTHORIZATION: `AUTHORIZATION`,
  LOAD_FILM: `LOAD_FILM`
};

const ActionCreator = {
  changeFilter: (genre) => {
    return {
      type: ActionType.CHANGE_FILTER,
      payload: genre
    };
  },
  requireAuthorization: () => {
    return {
      type: ActionType.AUTHORIZATION,
    };
  },
  loadFilm: (films) => {
    return {
      type: ActionType.LOAD_FILM,
      payload: films
    };
  },
  getFilms: () => {
    return (dispatch, getState, api) => {
      api.get(`/films`).then(
          (res) => {
            console.log(res.data);
            dispatch(ActionCreator.loadFilm(res.data));
          }
      );
    };
  }
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
    case ActionType.LOAD_FILM:
      return extend(state, {
        films: action.payload
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
