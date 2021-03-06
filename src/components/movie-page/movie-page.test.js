import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page.jsx';

const film = [
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
];


it(`<MoviePage /> should be rendered`, () => {
  const tree = renderer
    .create(<MoviePage
      film={film}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
