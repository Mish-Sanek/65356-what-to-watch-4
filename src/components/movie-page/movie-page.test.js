import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page.jsx';

const film = {
  id: 0,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  background: `img/bg-the-grand-budapest-hotel.jpg`,
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  released: 2014,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`<MoviePage /> should be rendered cards`, () => {
  const tree = renderer
    .create(<MoviePage
      film={film}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
