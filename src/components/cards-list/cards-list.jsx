import React from 'react';
import PropTypes from "prop-types";
import Card from '../card/card.jsx';
import {connect} from "react-redux";

class CardsListPresenter extends React.PureComponent {
  render() {
    const {films} = this.props;
    const cards = films.map((card) => {
      return <Card
        name={card.name}
        key={card.id}
        id={card.id}
        poster={card.poster_image}
        url={card.video_link}
      />;
    });

    return <div className="catalog__movies-list">
      {cards}
    </div>;
  }
}

CardsListPresenter.propTypes = {
  films: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    films: state.films.filter((film) => state.currentFilter === `All genres` || film.genre === state.currentFilter)
  });
};

const CardsList = connect(mapStateToProps)(CardsListPresenter);

export default CardsList;
