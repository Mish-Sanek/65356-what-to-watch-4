import React from 'react';
import ReactDom from 'react-dom';
import {films} from './mocks/films.js';
import {App} from './components/app/app.jsx';

ReactDom.render(
    <App
      films={films}
    />,
    document.getElementById(`root`)
);
