import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from '../../reducer.js';
import GenresList from './genres-list.jsx';

const store = createStore(reducer, {
  currentFilter: `All genres`
});

it(`<GenresList /> should be rendered`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <GenresList/>
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
