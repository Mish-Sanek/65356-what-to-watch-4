import React from 'react';
import ReactDom from 'react-dom';
import {App} from './components/app/app.jsx';

const mainFilm = {
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014
};

const filmNames = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`
];

ReactDom.render(
    <App
      poster={mainFilm.poster}
      name={mainFilm.name}
      genre={mainFilm.genre}
      releaseDate={mainFilm.releaseDate}
      filmNames={filmNames} />,
    document.getElementById(`root`)
);
