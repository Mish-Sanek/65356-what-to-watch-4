import React from 'react';
import ReactDom from 'react-dom';
import {App} from './components/app/app.jsx';

const mainFilm = {
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014
};

ReactDom.render(
    <App poster={mainFilm.poster} name={mainFilm.name} genre={mainFilm.genre} releaseDate={mainFilm.releaseDate} />,
    document.getElementById(`root`)
);
