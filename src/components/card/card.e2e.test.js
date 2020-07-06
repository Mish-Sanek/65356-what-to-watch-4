import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../card/card.jsx';

const films = [
  {
    id: 0,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    released: 2014,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 1,
    poster: `img/bohemian-rhapsody.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Bohemian Rhapsody`,
    genre: `Drama, Musical`,
    released: 2018,
    preview: ``,
    url: ``
  },
  {
    id: 2,
    poster: `img/macbeth.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Macbeth`,
    genre: `Tragedy`,
    released: 2015,
    preview: ``,
    url: ``
  },
  {
    id: 3,
    poster: `img/aviator.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Aviator`,
    genre: `Drama, War`,
    released: 2015,
    preview: ``,
    url: ``
  },
  {
    id: 4,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `We need to talk about Kevin`,
    genre: `Drama`,
    released: 2011,
    preview: ``,
    url: ``
  },
  {
    id: 5,
    poster: `img/what-we-do-in-the-shadows.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `What We Do in the Shadows`,
    genre: `Pseudo-documentary`,
    released: 2019,
    preview: ``,
    url: ``
  },
  {
    id: 6,
    poster: `img/revenant.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Revenant`,
    genre: `Western, Adventure`,
    released: 2016,
    preview: ``,
    url: ``
  },
  {
    id: 7,
    poster: `img/johnny-english.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Johnny English`,
    genre: `Comedy, Adventure, Spy`,
    released: 2003,
    preview: ``,
    url: ``
  },
  {
    id: 8,
    poster: `img/shutter-island.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Shutter Island`,
    genre: `Thriller, Detective`,
    released: 2010,
    preview: ``,
    url: ``
  },
  {
    id: 9,
    poster: `img/pulp-fiction.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Pulp Fiction`,
    genre: `Comedy, Criminal`,
    released: 1994,
    preview: ``,
    url: ``
  },
  {
    id: 10,
    poster: `img/no-country-for-old-men.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `No Country for Old Men`,
    genre: `Thriller, Criminal`,
    released: 2008,
    preview: ``,
    url: ``
  },
  {
    id: 11,
    poster: `img/snatch.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Snatch`,
    genre: `Comedy, Heist`,
    released: 2000,
    preview: ``,
    url: ``
  },
  {
    id: 12,
    poster: `img/moonrise-kingdom.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Moonrise Kingdom`,
    genre: `Romantic, Comedy`,
    released: 2012,
    preview: ``,
    url: ``
  },
  {
    id: 13,
    poster: `img/seven-years-in-tibet.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Seven Years in Tibet`,
    genre: `Drama, War`,
    released: 2012,
    preview: ``,
    url: ``
  },
  {
    id: 14,
    poster: `img/midnight-special.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Midnight Special`,
    genre: `Science-fiction, Thriller`,
    released: 2016,
    preview: ``,
    url: ``
  },
  {
    id: 15,
    poster: `img/war-of-the-worlds.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `War of the Worlds`,
    genre: `Science-fiction, Thriller`,
    released: 2016,
    preview: ``,
    url: ``
  },
  {
    id: 16,
    poster: `img/dardjeeling-limited.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Darjeeling Limited`,
    genre: `Comedy , Comedy-drama`,
    released: 2007,
    preview: ``,
    url: ``
  },
  {
    id: 17,
    poster: `img/orlando.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Orlando`,
    genre: `Comedy , Comedy-drama`,
    released: 2016,
    preview: ``,
    url: ``
  },
  {
    id: 18,
    poster: `img/mindhunter.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Mindhunter`,
    genre: `Criminal`,
    released: 2017,
    preview: ``,
    url: ``
  },
  {
    id: 19,
    poster: `img/moonrise-kingdom.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Moonrise Kingdom`,
    genre: `Romantic, Comedy`,
    released: 2012,
    preview: ``,
    url: ``
  },
];


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should film card state change`, (done) => {
  const linkClickHandler = jest.fn();
  const hoverHandler = jest.fn();
  const updateId = jest.fn();

  const card = shallow(
      <Card
        id={films[0].id}
        url={films[0].url}
        key={films[0].name}
        poster={films[0].poster}
        background={films[0].background}
        name={films[0].name}
        updateId={updateId}
        linkClickHandler={linkClickHandler}
        hoverHandler={hoverHandler}
      />);

  card.simulate(`mouseenter`);
  setTimeout(() => {
    expect(card.state(`videoPlayState`)).toBe(true);
    done();
  }, 2000);
});
