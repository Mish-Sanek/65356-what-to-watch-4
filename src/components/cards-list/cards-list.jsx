import React from 'react';
import PropTypes from "prop-types";
import Card from '../card/card.jsx';

export const CardsList = (props) => {
  const {films, linkClickHandler} = props;
  const cards = films.map((card) => {
    return <Card
      key={card.name}
      poster={card.poster}
      name={card.name}
      linkClickHandler={linkClickHandler}
    />;
  });
  return <div className="catalog__movies-list">
    {cards}
  </div>;
};

CardsList.propTypes = {
  films: PropTypes.array,
  linkClickHandler: PropTypes.func,
};
