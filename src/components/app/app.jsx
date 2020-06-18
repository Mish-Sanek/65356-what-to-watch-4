import React from 'react';
import {Main} from '../main/main.jsx';
import PropTypes from "prop-types";

export const App = (props) => {
  const {poster, name, genre, releaseDate, filmNames} = props;
  return <Main
    poster={poster}
    name={name}
    genre={genre}
    releaseDate={releaseDate}
    filmNames={filmNames}
    linkClickHandler={() => {}}
  />;
};

App.propTypes = {
  poster: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  filmNames: PropTypes.array.isRequired,
  linkClickHandler: PropTypes.func.isRequired,
};
