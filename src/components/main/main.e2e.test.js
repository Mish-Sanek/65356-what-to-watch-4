import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should film card title be pressed`, () => {
  const linkClickHandler = jest.fn();

  const main = shallow(
      <Main
        poster={mainFilm.poster}
        name={mainFilm.name}
        genre={mainFilm.genre}
        releaseDate={mainFilm.releaseDate}
        filmNames={filmNames}
        linkClickHandler={linkClickHandler}
      />
  );

  const cardLink = main.find(`.small-movie-card__link`).first();
  cardLink.simulate(`click`);
  expect(linkClickHandler.mock.calls.length).toBe(1);
});
