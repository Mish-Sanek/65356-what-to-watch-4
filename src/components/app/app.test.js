import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from '../../reducer.js';
import App from './app.jsx';

const films = [
  {
    id: 0,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    released: 2014,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    overview: {
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
      rating: `8.9`,
    },
    details: {
      director: `Wes Andreson`,
      starring: [
        `Bill Murray`,
        `Edward Norton`,
        `Jude Law`,
        `Willem Dafoe`,
        `Saoirse Ronan`,
        `Tony Revoloru`,
        `Tilda Swinton`,
        `Tom Wilkinson`,
        `Owen Wilkinson`,
        `Adrien Brody`,
        `Ralph Fiennes`,
        `Jeff Goldblum`
      ],
      runtime: `1h 39m`
    },
    reviews: [
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        reviewer: `Kate Muir`,
        date: `December 24, 2016`,
        rate: `8.9`
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        reviewer: `Bill Goodykoontz`,
        date: `November 18, 2015`,
        rate: `8.0`
      },
      {
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        reviewer: `Amanda Greever`,
        date: `November 18, 2015`,
        rate: `8.0`
      },
      {
        text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        reviewer: `Matthew Lickona`,
        date: `December 20, 2016`,
        rate: `7.2`
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        reviewer: `Paula Fleri-Soler`,
        date: `December 20, 2016`,
        rate: `7.6`
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        reviewer: `Paula Fleri-Soler`,
        date: `December 20, 2016`,
        rate: `7.0`
      }
    ]
  },
  {
    id: 1,
    poster: `img/bohemian-rhapsody.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Bohemian Rhapsody`,
    genre: `Drama`,
    released: 2018,
    preview: ``,
    url: ``,
  },
  {
    id: 2,
    poster: `img/macbeth.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Macbeth`,
    genre: `Drama`,
    released: 2015,
    preview: ``,
    url: ``
  },
  {
    id: 3,
    poster: `img/aviator.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Aviator`,
    genre: `Drama`,
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
    genre: `Documentary`,
    released: 2019,
    preview: ``,
    url: ``
  },
  {
    id: 6,
    poster: `img/revenant.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Revenant`,
    genre: `Crime`,
    released: 2016,
    preview: ``,
    url: ``
  },
  {
    id: 7,
    poster: `img/johnny-english.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Johnny English`,
    genre: `Comedy`,
    released: 2003,
    preview: ``,
    url: ``
  },
  {
    id: 8,
    poster: `img/shutter-island.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Shutter Island`,
    genre: `Thriller`,
    released: 2010,
    preview: ``,
    url: ``
  },
  {
    id: 9,
    poster: `img/pulp-fiction.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Pulp Fiction`,
    genre: `Crime`,
    released: 1994,
    preview: ``,
    url: ``
  },
  {
    id: 10,
    poster: `img/no-country-for-old-men.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `No Country for Old Men`,
    genre: `Thriller`,
    released: 2008,
    preview: ``,
    url: ``
  },
  {
    id: 11,
    poster: `img/snatch.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Snatch`,
    genre: `Comedy`,
    released: 2000,
    preview: ``,
    url: ``
  },
  {
    id: 12,
    poster: `img/moonrise-kingdom.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Moonrise Kingdom`,
    genre: `Romance`,
    released: 2012,
    preview: ``,
    url: ``
  },
  {
    id: 13,
    poster: `img/seven-years-in-tibet.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Seven Years in Tibet`,
    genre: `Drama`,
    released: 2012,
    preview: ``,
    url: ``
  },
  {
    id: 14,
    poster: `img/midnight-special.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Midnight Special`,
    genre: `Sci-FI`,
    released: 2016,
    preview: ``,
    url: ``
  },
  {
    id: 15,
    poster: `img/war-of-the-worlds.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `War of the Worlds`,
    genre: `Sci-FI`,
    released: 2016,
    preview: ``,
    url: ``
  },
  {
    id: 16,
    poster: `img/dardjeeling-limited.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Darjeeling Limited`,
    genre: `Comedy`,
    released: 2007,
    preview: ``,
    url: ``
  },
  {
    id: 17,
    poster: `img/orlando.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Orlando`,
    genre: `Comedy`,
    released: 2016,
    preview: ``,
    url: ``
  },
  {
    id: 18,
    poster: `img/mindhunter.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Mindhunter`,
    genre: `Crime`,
    released: 2017,
    preview: ``,
    url: ``
  },
  {
    id: 19,
    poster: `img/moonrise-kingdom.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `Moonrise Kingdom`,
    genre: `Romance`,
    released: 2012,
    preview: ``,
    url: ``
  },
];

const store = createStore(reducer, {
  films
});

it(`<App /> should be rendered`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <App
        films={films}
      />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
