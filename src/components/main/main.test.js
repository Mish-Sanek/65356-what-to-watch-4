import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';

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

it(`<Main /> should render The Grand Budapest Hotel film card`, () => {
  const tree = renderer
    .create(<Main
      poster={mainFilm.poster}
      name={mainFilm.name}
      genre={mainFilm.genre}
      releaseDate={mainFilm.releaseDate}
      filmNames={filmNames}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
