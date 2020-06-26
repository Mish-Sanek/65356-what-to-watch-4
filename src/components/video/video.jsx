import React from 'react';
import PropTypes from "prop-types";

class Video extends React.PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    if (this.props.isPlay) {
      this.videoRef.current.play();
    }
  }

  componentDidUpdate() {
    if (this.props.isPlay) {
      this.videoRef.current.play();
    } else {
      this.videoRef.current.load();
    }
  }

  render() {
    const {url, preview} = this.props;
    return (
      <video
        src={url}
        muted
        className="player__video"
        poster={preview}
        ref={this.videoRef}
      />
    );
  }
}

Video.propTypes = {
  isPlay: PropTypes.bool,
  preview: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Video;
