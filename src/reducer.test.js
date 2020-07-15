import {reducer, ActionType, initialState} from './reducer.js';

describe(`Reducer`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(
        {
          genre: `All genres`,
        }
    );
  });

  it(`shoud whatever`, () => {
    expect(
        reducer(initialState, {
          type: ActionType.CHANGE_FILTER,
        })
    ).toEqual({
      genre: `All genres`,
    });
  });

});
