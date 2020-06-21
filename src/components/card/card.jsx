import React from 'react';
import PropTypes from "prop-types";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this._poster = this.props.poster;
    this._name = this.props.name;
    this._linkClickHandler = this.props.linkClickHandler;
    this.state = {
      activeCard: false,
    };
  }

  render() {
    return <article className="small-movie-card catalog__movies-card" onMouseOver={() => !this.state}>
      <div className="small-movie-card__image">
        <img src={this._poster} alt={this._name} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" onClick={this._linkClickHandler} href="movie-page.html">{this._name}</a>
      </h3>
    </article>;
  }
}

Card.propTypes = {
  poster: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  linkClickHandler: PropTypes.func,
};
