import React, {PureComponent} from 'react';
import Card from '../card/card.jsx';
import PropTypes from "prop-types";

const films = [
  {
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    released: 2014
  },
  {
    poster: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`,
    genre: `Drama, Musical`,
    released: 2018
  },
  {
    poster: `img/macbeth.jpg`,
    name: `Macbeth`,
    genre: `Tragedy`,
    released: 2015
  },
  {
    poster: `img/aviator.jpg`,
    name: `Aviator`,
    genre: `Drama, War`,
    released: 2015
  },
  {
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    name: `We need to talk about Kevin`,
    genre: `Drama`,
    released: 2011
  },
  {
    poster: `img/what-we-do-in-the-shadows.jpg`,
    name: `What We Do in the Shadows`,
    genre: `Pseudo-documentary`,
    released: 2019
  },
  {
    poster: `img/revenant.jpg`,
    name: `Revenant`,
    genre: `Western, Adventure`,
    released: 2016
  },
  {
    poster: `img/johnny-english.jpg`,
    name: `Johnny English`,
    genre: `Comedy, Adventure, Spy`,
    released: 2003
  },
  {
    poster: `img/shutter-island.jpg`,
    name: `Shutter Island`,
    genre: `Thriller, Detective`,
    released: 2010
  },
  {
    poster: `img/pulp-fiction.jpg`,
    name: `Pulp Fiction`,
    genre: `Comedy, Criminal`,
    released: 1994
  },
  {
    poster: `img/no-country-for-old-men.jpg`,
    name: `No Country for Old Men`,
    genre: `Thriller, Criminal`,
    released: 2008
  },
  {
    poster: `img/snatch.jpg`,
    name: `Snatch`,
    genre: `Comedy, Heist`,
    released: 2000
  },
  {
    poster: `img/moonrise-kingdom.jpg`,
    name: `Moonrise Kingdom`,
    genre: `Romantic, Comedy`,
    released: 2012
  },
  {
    poster: `img/seven-years-in-tibet.jpg`,
    name: `Seven Years in Tibet`,
    genre: `Drama, War`,
    released: 2012
  },
  {
    poster: `img/midnight-special.jpg`,
    name: `Midnight Special`,
    genre: `Science-fiction, Thriller`,
    released: 2016
  },
  {
    poster: `img/war-of-the-worlds.jpg`,
    name: `War of the Worlds`,
    genre: `Science-fiction, Thriller`,
    released: 2016
  },
  {
    poster: `img/dardjeeling-limited.jpg`,
    name: `Darjeeling Limited`,
    genre: `Comedy , Comedy-drama`,
    released: 2007
  },
  {
    poster: `img/orlando.jpg`,
    name: `Orlando`,
    genre: `Comedy , Comedy-drama`,
    released: 2016
  },
  {
    poster: `img/mindhunter.jpg`,
    name: `Mindhunter`,
    genre: `Criminal`,
    released: 2017
  },
  {
    poster: `img/midnight-special.jpg`,
    name: `Midnight Special`,
    genre: `Science-fiction, Thriller`,
    released: 2016
  }
];


export default class CardsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="catalog__movies-list">
      {films.map((element, id) =>
        <Card key={id} poster={element.poster} name={element.name} ></Card>
      )}
    </div>;
  }
}

CardsList.propTypes = {
  poster: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
