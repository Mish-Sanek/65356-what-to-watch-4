import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../card/card.jsx';

export const films = [
  {
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    released: 2014,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }, /*
  {
    poster: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`,
    genre: `Drama, Musical`,
    released: 2018,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/macbeth.jpg`,
    name: `Macbeth`,
    genre: `Tragedy`,
    released: 2015,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/aviator.jpg`,
    name: `Aviator`,
    genre: `Drama, War`,
    released: 2015,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    name: `We need to talk about Kevin`,
    genre: `Drama`,
    released: 2011,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/what-we-do-in-the-shadows.jpg`,
    name: `What We Do in the Shadows`,
    genre: `Pseudo-documentary`,
    released: 2019,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/revenant.jpg`,
    name: `Revenant`,
    genre: `Western, Adventure`,
    released: 2016,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/johnny-english.jpg`,
    name: `Johnny English`,
    genre: `Comedy, Adventure, Spy`,
    released: 2003,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/shutter-island.jpg`,
    name: `Shutter Island`,
    genre: `Thriller, Detective`,
    released: 2010,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/pulp-fiction.jpg`,
    name: `Pulp Fiction`,
    genre: `Comedy, Criminal`,
    released: 1994,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/no-country-for-old-men.jpg`,
    name: `No Country for Old Men`,
    genre: `Thriller, Criminal`,
    released: 2008,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/snatch.jpg`,
    name: `Snatch`,
    genre: `Comedy, Heist`,
    released: 2000,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/moonrise-kingdom.jpg`,
    name: `Moonrise Kingdom`,
    genre: `Romantic, Comedy`,
    released: 2012,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/seven-years-in-tibet.jpg`,
    name: `Seven Years in Tibet`,
    genre: `Drama, War`,
    released: 2012,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/midnight-special.jpg`,
    name: `Midnight Special`,
    genre: `Science-fiction, Thriller`,
    released: 2016,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/war-of-the-worlds.jpg`,
    name: `War of the Worlds`,
    genre: `Science-fiction, Thriller`,
    released: 2016,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/dardjeeling-limited.jpg`,
    name: `Darjeeling Limited`,
    genre: `Comedy , Comedy-drama`,
    released: 2007,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/orlando.jpg`,
    name: `Orlando`,
    genre: `Comedy , Comedy-drama`,
    released: 2016,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    poster: `img/mindhunter.jpg`,
    name: `Mindhunter`,
    genre: `Criminal`,
    released: 2017,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }, */
];


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should film card state change`, (done) => {
  const linkClickHandler = jest.fn();
  const hoverHandler = jest.fn();

  const card = shallow(
      <Card
        url={films[0].url}
        key={films[0].name}
        poster={films[0].poster}
        name={films[0].name}
        linkClickHandler={linkClickHandler}
        hoverHandler={hoverHandler}
      />);

  card.simulate(`mouseenter`);
  setTimeout(() => {
    expect(card.state(`videoPlayState`)).toBe(true);
    done();
  }, 2000);
});
