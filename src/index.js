import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {films} from './mocks/films.js';
import {createStore} from 'redux';
import {reducer} from './reducer.js';
import App from './components/app/app.jsx';

const store = createStore(reducer, {
  films,
  currentFilter: `All genres`
});


ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
