import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

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

it(`<App /> should render 20 film cards`, () => {
  const tree = renderer
    .create(<App
      poster={mainFilm.poster}
      name={mainFilm.name}
      genre={mainFilm.genre}
      releaseDate={mainFilm.releaseDate}
      filmNames={filmNames}
      linkClickHandler={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
