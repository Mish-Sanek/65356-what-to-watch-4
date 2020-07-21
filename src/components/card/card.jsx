import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import Video from '../video/video.jsx';

class Card extends React.PureComponent {
  constructor(props) {
    super(props);
    this._cardId = this.cardId;
    this.state = {
      videoPlayState: false,
      cardId: 0
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
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
    const {name, poster, url, id, updateId, linkClickHandler} = this.props;
    const {videoPlayState} = this.state;

    return <article
      className="small-movie-card catalog__movies-card"
      onClick={() => {
        updateId(id);
      }}
      onMouseEnter={() => this.onMouseEnter(id)}
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
        <Link onClick={linkClickHandler} className="small-movie-card__link" to="/movie-page">{name}</Link>
      </h3>
    </article>;
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  linkClickHandler: PropTypes.func,
  updateId: PropTypes.func.isRequired,
};

export default Card;
