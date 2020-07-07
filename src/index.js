import React from 'react';
import ReactDom from 'react-dom';
import {films} from './mocks/films.js';
import {createStore} from 'redux';
import {reducer} from './reducer.js';
import App from './components/app/app.jsx';

const store = createStore(reducer);

ReactDom.render(
    <App
      films={films}
      store={store}
    />,
    document.getElementById(`root`)
);
