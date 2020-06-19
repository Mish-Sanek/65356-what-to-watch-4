import React, {PureComponent} from 'react';

export default class Card extends PureComponent {
  constructor(props) {
    super(props);
    this._props = props;
  }

  render() {
    return <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={this._props.poster} alt={this._props.name} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{this._props.name}</a>
      </h3>
    </article>;
  }
}
