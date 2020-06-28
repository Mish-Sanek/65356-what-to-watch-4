import React from 'react';
import PropTypes from "prop-types";
import Video from '../video/video.jsx';

export default class Card extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      videoPlayState: false,
    };
  }

  onMouseEnter() {
    this.timeout = setTimeout(() => {
      this.setState({videoPlayState: true});
    }, 1000);
  }

  onMouseLeave() {
    clearTimeout(this.timeout);
    this.setState({videoPlayState: false});
  }

  render() {
    const {name, poster, url} = this.props;
    const {videoPlayState} = this.state;

    return <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => this.onMouseEnter()}
      onMouseLeave={() => this.onMouseLeave()}
    >
      <div className="small-movie-card__image">
        <Video
          ref={this.videoRef}
          preview={poster}
          url={url}
          isPlay={videoPlayState}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" onClick={this._linkClickHandler} href="movie-page.html">{name}</a>
      </h3>
    </article>;
  }
}

Card.propTypes = {
  poster: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  linkClickHandler: PropTypes.func,
};
