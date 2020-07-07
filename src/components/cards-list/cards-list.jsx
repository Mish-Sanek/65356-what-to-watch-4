import React from 'react';
import PropTypes from "prop-types";
import Card from '../card/card.jsx';

class CardsList extends React.PureComponent {
  render() {
    const {films, linkClickHandler, updateId} = this.props;
    const cards = films.map((card) => {
      return <Card
        key={card.id}
        id={card.id}
        poster={card.poster}
        name={card.name}
        url={card.url}
        updateId={updateId}
        linkClickHandler={linkClickHandler}
      />;
    });

    return <div className="catalog__movies-list">
      {cards}
    </div>;
  }
}

CardsList.propTypes = {
  films: PropTypes.array.isRequired,
  linkClickHandler: PropTypes.func,
  getId: PropTypes.func,
  updateId: PropTypes.func.isRequired,
};

export default CardsList;
